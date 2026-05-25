import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ============================================================
// 视觉层级约定（renderOrder，数字越大越靠前渲染）
//   0: 星空   1-3: 三环   4: 光晕球
//   5: 遮挡球   6: 大气壳   7: 流动层   8: 球面   9: 核心
// ============================================================

const PLANET_R = 1.5

// ─── 创建粒子环 ───
function createRing({ count, innerR, outerR, colorInner, colorOuter, tilt, opacity, sizeMin, sizeMax, renderOrder }) {
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const col = new Float32Array(count * 3)
  const siz = new Float32Array(count)
  const inner = new THREE.Color(colorInner)
  const outer = new THREE.Color(colorOuter)

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const t = Math.random()
    const radius = innerR + Math.sqrt(t) * (outerR - innerR)
    const ySpread = 0.15 + t * 0.6
    const y = (Math.random() - 0.5) * ySpread * 2
    pos[i * 3] = Math.cos(angle) * radius
    pos[i * 3 + 1] = y
    pos[i * 3 + 2] = Math.sin(angle) * radius
    const c = inner.clone().lerp(outer, t)
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    siz[i] = Math.random() * (sizeMax - sizeMin) + sizeMin + (1 - t) * sizeMin
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
  geo.setAttribute('size', new THREE.BufferAttribute(siz, 1))

  const mat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1.0 }, uTint: { value: new THREE.Color('#ffffff') } },
    vertexShader: /* glsl */ `
      attribute float size; varying vec3 vColor;
      uniform float uScale; uniform vec3 uTint;
      void main() {
        vColor = color * uTint;
        vec3 pos = position; pos.xz *= uScale;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (400.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.0, d) * OPACITY;
        gl_FragColor = vec4(vColor, alpha);
      }
    `.replace('OPACITY', opacity.toString()),
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
  })
  const group = new THREE.Group()
  const points = new THREE.Points(geo, mat)
  points.renderOrder = renderOrder
  group.add(points)
  group.rotation.x = tilt
  points.rotation.z = Math.random() * Math.PI * 2
  return { group, points, mat }
}

// ─── 球面粒子层 ───
function createSphereParticles({ count, radius, jitterRate, jitterAmount, colorFn, renderOrder, uniforms, fragShader }) {
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const col = new Float32Array(count * 3)
  const siz = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const jitter = Math.random() < jitterRate ? (Math.random() - 0.5) * jitterAmount : 0
    const r = radius + jitter
    pos[i * 3] = Math.sin(phi) * Math.cos(theta) * r
    pos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r
    pos[i * 3 + 2] = Math.cos(phi) * r
    const [cr, cg, cb, cs] = colorFn(i, theta, phi, r)
    col[i * 3] = cr; col[i * 3 + 1] = cg; col[i * 3 + 2] = cb
    siz[i] = cs
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
  geo.setAttribute('size', new THREE.BufferAttribute(siz, 1))

  const mat = new THREE.ShaderMaterial({
    uniforms: { ...(uniforms || {}), uTint: { value: new THREE.Color('#ffffff') } },
    vertexShader: /* glsl */ `
      attribute float size; varying vec3 vColor;
      uniform float uPulse; uniform vec3 uTint;
      void main() {
        vColor = color * uTint;
        vec3 pos = position * uPulse;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (320.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: fragShader || /* glsl */ `
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.1, d) * 0.8;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
  })
  const points = new THREE.Points(geo, mat)
  points.renderOrder = renderOrder
  return { points, mat }
}

// ─── 模式颜色预设 ───
const MODE_TINTS = {
  default: { tint: '#ffffff', bg: '#06060f', fog: '#06060f', glow: '#4488cc', ambient: '#1a2a44' },
  fire:    { tint: '#ffccaa', bg: '#0f0806', fog: '#0f0806', glow: '#ff6644', ambient: '#2a1a0a' },
  aurora:  { tint: '#ccffdd', bg: '#060f0a', fog: '#060f0a', glow: '#44ffcc', ambient: '#0a1a14' },
  void:    { tint: '#bbaadd', bg: '#0a0814', fog: '#0a0814', glow: '#5533aa', ambient: '#0a0a14' },
}

export default function Scene3D({ ringScale, planetScale, brightness, speed, sparkle, mode, quality, focus }) {
  const containerRef = useRef(null)
  const cleanupRef = useRef(null)
  const ringScaleRef = useRef(ringScale)
  const planetScaleRef = useRef(planetScale)
  const brightnessRef = useRef(brightness ?? 1.0)
  const speedRef = useRef(speed ?? 1.0)
  const sparkleRef = useRef(sparkle ?? 0)
  const modeRef = useRef(mode ?? 'default')
  const qualityRef = useRef(quality ?? 'high')
  const focusRef = useRef(focus ?? 0)

  useEffect(() => { ringScaleRef.current = ringScale }, [ringScale])
  useEffect(() => { planetScaleRef.current = planetScale }, [planetScale])
  useEffect(() => { brightnessRef.current = brightness ?? 1.0 }, [brightness])
  useEffect(() => { speedRef.current = speed ?? 1.0 }, [speed])
  useEffect(() => { sparkleRef.current = sparkle ?? 0 }, [sparkle])
  useEffect(() => { modeRef.current = mode ?? 'default' }, [mode])
  useEffect(() => { qualityRef.current = quality ?? 'high' }, [quality])
  useEffect(() => { focusRef.current = focus ?? 0 }, [focus])

  useEffect(() => {
    const container = containerRef.current
    let disposed = false

    const qm = quality === 'eco' ? 0.55 : 1.0
    const qCount = (n) => Math.round(n * qm)

    // ═══ 场景 ═══
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x06060f)
    scene.fog = new THREE.FogExp2(0x06060f, 0.00015)

    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 50)
    camera.position.set(0, 1.0, 7.5)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // ═══ 光照 ═══
    const ambient = new THREE.AmbientLight(0x1a2a44, 1.8)
    scene.add(ambient)
    const keyLight = new THREE.DirectionalLight(0xffeedd, 3.5)
    keyLight.position.set(6, 4, 6)
    scene.add(keyLight)
    const fillLight = new THREE.DirectionalLight(0x335577, 1.2)
    fillLight.position.set(-4, -1, -4)
    scene.add(fillLight)

    // ═══ Layer 0: 星空 ═══
    const STARS = qCount(1800)
    const starsGeo = new THREE.BufferGeometry()
    const starsPos = new Float32Array(STARS * 3)
    for (let i = 0; i < STARS; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 12 + Math.random() * 8
      starsPos[i * 3] = Math.sin(phi) * Math.cos(theta) * r
      starsPos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r
      starsPos[i * 3 + 2] = Math.cos(phi) * r
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3))
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.04, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending })
    const stars = new THREE.Points(starsGeo, starsMat)
    stars.renderOrder = 0
    scene.add(stars)

    // ═══ Layer 1-3: 三环 ═══
    const ringA = createRing({ count: qCount(2500), innerR: 1.8, outerR: 2.8, colorInner: '#ffcc77', colorOuter: '#cc7733', tilt: 0.25, opacity: 0.8, sizeMin: 0.014, sizeMax: 0.07, renderOrder: 3 })
    const ringB = createRing({ count: qCount(2000), innerR: 3.1, outerR: 3.7, colorInner: '#66eecc', colorOuter: '#2288bb', tilt: 0.55, opacity: 0.65, sizeMin: 0.012, sizeMax: 0.055, renderOrder: 2 })
    const ringC = createRing({ count: qCount(1800), innerR: 3.6, outerR: 4.8, colorInner: '#cc99ff', colorOuter: '#5533aa', tilt: 0.78, opacity: 0.6, sizeMin: 0.01, sizeMax: 0.05, renderOrder: 1 })
    scene.add(ringA.group)
    scene.add(ringB.group)
    scene.add(ringC.group)

    // ═══ Layer 4: 光晕球 ═══
    const glowGeo = new THREE.SphereGeometry(1.58, 64, 48)
    const glowMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color('#4488cc') } },
      vertexShader: /* glsl */ `
        varying vec3 vNormal; varying vec3 vViewDir;
        void main() {
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vNormal; varying vec3 vViewDir; uniform vec3 uColor;
        void main() {
          float fresnel = 1.0 - abs(dot(vNormal, vViewDir));
          float glow = pow(fresnel, 3.5) * 0.4;
          gl_FragColor = vec4(uColor, glow);
        }
      `,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    })
    const glowMesh = new THREE.Mesh(glowGeo, glowMat)
    glowMesh.renderOrder = 4
    scene.add(glowMesh)

    // ═══ Layer 5: 遮挡球 ═══
    const occlusionGeo = new THREE.SphereGeometry(PLANET_R - 0.02, 64, 48)
    const occlusionMat = new THREE.MeshBasicMaterial({ color: 0x06060f })
    const occlusionSphere = new THREE.Mesh(occlusionGeo, occlusionMat)
    occlusionSphere.renderOrder = 5
    scene.add(occlusionSphere)

    // ═══ Layer 6: 大气壳 ═══
    const halo = createSphereParticles({
      count: qCount(1500), radius: PLANET_R, jitterRate: 1.0, jitterAmount: 0.55,
      colorFn: () => { const t = Math.random(); return [0.12 + t * 0.15, 0.3 + t * 0.1, 0.7 + t * 0.25, Math.random() * 0.08 + 0.02 + t * 0.03] },
      renderOrder: 6,
      uniforms: { uWave: { value: 0.0 }, uPulse: { value: 1.0 } },
      fragShader: /* glsl */ `
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.08, d) * 0.45; gl_FragColor = vec4(vColor, alpha); }
      `,
    })
    halo.mat.vertexShader = /* glsl */ `
      attribute float size; varying vec3 vColor;
      uniform float uWave; uniform float uPulse; uniform vec3 uTint;
      void main() {
        vColor = color * uTint; vec3 pos = position;
        float wave = 1.0 + sin(length(pos) * 5.0 + uWave) * 0.03; pos *= wave;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (320.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `
    scene.add(halo.points)

    // ═══ Layer 7: 流动层 ═══
    const flow = createSphereParticles({
      count: qCount(1200), radius: PLANET_R, jitterRate: 1.0, jitterAmount: 0.2,
      colorFn: () => [0.15 + Math.random() * 0.35, 0.35 + Math.random() * 0.45, 0.6 + Math.random() * 0.4, Math.random() * 0.035 + 0.008],
      renderOrder: 7,
      uniforms: { uPulse: { value: 1.0 } },
      fragShader: /* glsl */ `
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.2, d) * 0.5; gl_FragColor = vec4(vColor, alpha); }
      `,
    })
    scene.add(flow.points)

    // ═══ Layer 8: 球面 ═══
    const surface = createSphereParticles({
      count: qCount(2800), radius: PLANET_R, jitterRate: 0.3, jitterAmount: 0.15,
      colorFn: (i, theta, phi) => {
        const latFactor = Math.abs(Math.cos(phi))
        return [0.2 + latFactor * 0.4, 0.4 + latFactor * 0.35, 0.55 + latFactor * 0.4, Math.random() * 0.04 + 0.01 + (Math.random() < 0.08 ? 0.06 : 0)]
      },
      renderOrder: 8,
      uniforms: { uPulse: { value: 1.0 } },
      fragShader: /* glsl */ `
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.15, d) * 0.85; gl_FragColor = vec4(vColor, alpha); }
      `,
    })
    scene.add(surface.points)

    // ═══ Layer 9: 核心 ═══
    const CORE_COUNT = qCount(500)
    const coreGeo = new THREE.BufferGeometry()
    const cPos = new Float32Array(CORE_COUNT * 3)
    const cCol = new Float32Array(CORE_COUNT * 3)
    const cSiz = new Float32Array(CORE_COUNT)
    for (let i = 0; i < CORE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const t = Math.random()
      const r = 0.15 + Math.sqrt(t) * 0.5
      cPos[i * 3] = Math.sin(phi) * Math.cos(theta) * r
      cPos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r
      cPos[i * 3 + 2] = Math.cos(phi) * r
      const bright = 1 - t
      cCol[i * 3] = 0.8 + bright * 0.2; cCol[i * 3 + 1] = 0.7 + bright * 0.3; cCol[i * 3 + 2] = 0.5 + bright * 0.5
      cSiz[i] = Math.random() * 0.06 + 0.02 + bright * 0.08
    }
    coreGeo.setAttribute('position', new THREE.BufferAttribute(cPos, 3))
    coreGeo.setAttribute('color', new THREE.BufferAttribute(cCol, 3))
    coreGeo.setAttribute('size', new THREE.BufferAttribute(cSiz, 1))
    const coreMat = new THREE.ShaderMaterial({
      uniforms: { uPulse: { value: 1.0 }, uTint: { value: new THREE.Color('#ffffff') } },
      vertexShader: /* glsl */ `
        attribute float size; varying vec3 vColor;
        uniform float uPulse; uniform vec3 uTint;
        void main() { vColor = color * uTint; vec3 pos = position * uPulse; vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0); gl_PointSize = size * (350.0 / -mvPosition.z); gl_Position = projectionMatrix * mvPosition; }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.0, d) * 0.6; gl_FragColor = vec4(vColor, alpha); }
      `,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
    })
    const corePoints = new THREE.Points(coreGeo, coreMat)
    corePoints.renderOrder = 9
    scene.add(corePoints)

    // ═══ 爱心粒子爆发系统 ═══
    const HEART_COUNT = 400
    const heartGeo = new THREE.BufferGeometry()
    const hPos = new Float32Array(HEART_COUNT * 3)
    const hCol = new Float32Array(HEART_COUNT * 3)
    const hSiz = new Float32Array(HEART_COUNT)

    for (let i = 0; i < HEART_COUNT; i++) {
      const t = (i / HEART_COUNT) * Math.PI * 2
      // 心形参数方程
      const hx = 16 * Math.pow(Math.sin(t), 3)
      const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
      const scale = 0.18 + Math.random() * 0.08
      // 方向向量（从中心指向心形边缘）
      const dir = Math.sqrt(hx * hx + hy * hy) || 1
      const nx = hx / dir * scale * (0.7 + Math.random() * 0.6)
      const ny = hy / dir * scale * (0.7 + Math.random() * 0.6)
      // Z轴也给点深度
      const nz = (Math.random() - 0.5) * scale * 0.5
      hPos[i * 3] = nx
      hPos[i * 3 + 1] = ny
      hPos[i * 3 + 2] = nz
      // 粉红→亮红渐变
      hCol[i * 3] = 0.85 + Math.random() * 0.15
      hCol[i * 3 + 1] = 0.08 + Math.random() * 0.15
      hCol[i * 3 + 2] = 0.15 + Math.random() * 0.25
      hSiz[i] = 0.05 + Math.random() * 0.12
    }

    heartGeo.setAttribute('position', new THREE.BufferAttribute(hPos, 3))
    heartGeo.setAttribute('color', new THREE.BufferAttribute(hCol, 3))
    heartGeo.setAttribute('size', new THREE.BufferAttribute(hSiz, 1))

    const heartMat = new THREE.ShaderMaterial({
      uniforms: {
        uSparkle: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader: /* glsl */ `
        attribute float size;
        varying vec3 vColor;
        uniform float uSparkle;
        uniform float uTime;
        void main() {
          vColor = color;
          // 粒子从中心爆发
          float burst = uSparkle * (0.6 + 0.4 * sin(uTime * 10.0 + position.x * 30.0));
          vec3 pos = position * burst * 3.0;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (400.0 / -mvPosition.z) * (0.3 + uSparkle * 1.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, d) * 0.9;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, vertexColors: true,
    })

    const heartPoints = new THREE.Points(heartGeo, heartMat)
    heartPoints.renderOrder = 10
    scene.add(heartPoints)

    // ═══ 引用收集 ═══
    const allTintMats = [ringA.mat, ringB.mat, ringC.mat, surface.mat, flow.mat, halo.mat, coreMat]

    const refs = {
      scene, camera, renderer, ambient,
      surface, flow, halo, corePoints, coreMat,
      glowMesh, glowMat, occlusionSphere,
      ringA, ringB, ringC, stars, starsMat,
      allTintMats,
      heartPoints, heartMat,
    }
    cleanupRef.current = refs

    // ═══ 渲染循环 ═══
    function animate() {
      if (disposed) return
      requestAnimationFrame(animate)
      const ref = cleanupRef.current
      if (!ref) return

      const time = performance.now() * 0.001
      const ringTarget = ringScaleRef.current
      const planetTarget = planetScaleRef.current
      const brightTarget = brightnessRef.current
      const speedMul = speedRef.current
      const spark = sparkleRef.current
      const currentMode = modeRef.current

      // 模式切换
      const modeCfg = MODE_TINTS[currentMode] || MODE_TINTS['default']
      const tintColor = new THREE.Color(modeCfg.tint)
      const bgColor = new THREE.Color(modeCfg.bg)
      if (!ref.scene.background.getHex || ref.scene.background.getHex() !== bgColor.getHex()) {
        ref.scene.background = bgColor
        ref.scene.fog = new THREE.FogExp2(modeCfg.fog, 0.00015)
        ref.ambient.color.set(modeCfg.ambient)
        ref.glowMat.uniforms.uColor.value.set(modeCfg.glow)
        ref.occlusionSphere.material.color.set(bgColor)
        ref.allTintMats.forEach(m => { if (m.uniforms.uTint) m.uniforms.uTint.value = tintColor })
      }

      // 核心脉冲（常驻呼吸）
      ref.coreMat.uniforms.uPulse.value = 1.0 + Math.sin(time * 1.5) * 0.06 + Math.sin(time * 5.0) * 0.02
      // 曝光
      ref.renderer.toneMappingExposure = 1.2 * brightTarget

      // 三环缩放
      ref.ringA.mat.uniforms.uScale.value = ringTarget
      ref.ringB.mat.uniforms.uScale.value = ringTarget
      ref.ringC.mat.uniforms.uScale.value = 1.0 + (ringTarget - 1.0) * 0.5

      // 三环自转
      ref.ringA.points.rotation.z += 0.0006 * speedMul
      ref.ringB.points.rotation.z -= 0.0012 * speedMul
      ref.ringC.points.rotation.z += 0.0025 * speedMul

      // 星球缩放
      ref.surface.points.scale.setScalar(planetTarget)
      ref.flow.points.scale.setScalar(planetTarget)
      ref.corePoints.scale.setScalar(planetTarget)
      ref.halo.points.scale.setScalar(planetTarget)
      ref.occlusionSphere.scale.setScalar(planetTarget)

      // 爱心爆发
      ref.heartMat.uniforms.uSparkle.value = spark
      ref.heartMat.uniforms.uTime.value = time
      ref.halo.mat.uniforms.uWave.value = time * 2.2

      // 差速旋转
      ref.surface.points.rotation.y += 0.0015 * speedMul
      ref.flow.points.rotation.y -= 0.0022 * speedMul
      ref.halo.points.rotation.y += 0.0012 * speedMul
      ref.glowMesh.rotation.y += 0.0008 * speedMul
      ref.stars.rotation.y += 0.00015 * speedMul
      ref.stars.rotation.x += 0.00008 * speedMul

      // 相机呼吸 + 聚焦推进
      const focusZ = 7.5 - focusRef.current * 3.0  // focus=1 → z=4.5, focus=0 → z=7.5
      ref.camera.position.x = Math.sin(time * 0.25) * 0.6 * (1 - focusRef.current * 0.7)
      ref.camera.position.y = 1.0 + Math.cos(time * 0.35) * 0.25 * (1 - focusRef.current * 0.7)
      ref.camera.position.z += (focusZ - ref.camera.position.z) * 0.1
      ref.camera.lookAt(0, 0, 0)

      ref.renderer.render(ref.scene, ref.camera)
    }
    animate()

    function onResize() {
      if (disposed || !cleanupRef.current) return
      const { camera, renderer } = cleanupRef.current
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      disposed = true
      window.removeEventListener('resize', onResize)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      renderer.dispose()
      scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) { if (obj.material.map) obj.material.map.dispose(); obj.material.dispose() }
      })
      cleanupRef.current = null
    }
  }, [quality])

  return <div ref={containerRef} className="scene-container" />
}
