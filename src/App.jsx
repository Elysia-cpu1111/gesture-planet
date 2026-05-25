import { useState, useEffect } from 'react'
import Scene3D from './components/Scene3D'
import CameraOverlay from './components/CameraOverlay'
import FocusPanels from './components/FocusPanels'
import useGesture from './hooks/useGesture'

// ─── 模式配置：4 主题 ───
const MODES = [
  {
    id: 'default',
    name: '深空',
    icon: '🌌',
    colors: { core: '#1a2a44', ringA: '#ffcc77', ringB: '#66eecc', ringC: '#cc99ff', glow: '#4488cc' },
  },
  {
    id: 'fire',
    name: '烈焰',
    icon: '🔥',
    colors: { core: '#2a1a0a', ringA: '#ff8844', ringB: '#ff4422', ringC: '#ffaa00', glow: '#ff6644' },
  },
  {
    id: 'aurora',
    name: '极光',
    icon: '🌿',
    colors: { core: '#0a1a14', ringA: '#44ffaa', ringB: '#22cc88', ringC: '#8844ff', glow: '#44ffcc' },
  },
  {
    id: 'void',
    name: '虚空',
    icon: '🕳️',
    colors: { core: '#0a0a14', ringA: '#8866cc', ringB: '#664488', ringC: '#332255', glow: '#5533aa' },
  },
]

export default function App() {
  const {
    gesture, gestureLabel, confidence, phase, error,
    targetScale, targetBrightness, targetSpeed, targetSparkle, targetFocus,
    thumbBrightness, thumbActive,
    videoRef, startCamera,
  } = useGesture()

  // 平滑信号
  const [ringScale, setRingScale] = useState(1.0)
  const [planetScale, setPlanetScale] = useState(1.0)
  const [brightness, setBrightness] = useState(1.0)
  const [speedValue, setSpeedValue] = useState(1.0)
  const [sparkle, setSparkle] = useState(0)
  const [focusVal, setFocusVal] = useState(0)

  // 拇指拖拽亮度优先
  const activeBrightness = thumbActive ? thumbBrightness : targetBrightness

  // 模式
  const [modeIndex, setModeIndex] = useState(0)
  const [showModePanel, setShowModePanel] = useState(false)
  const [quality, setQuality] = useState('high') // 'high' | 'eco'

  // 平滑循环
  useEffect(() => {
    const targets = {}
    let animId

    function updateTargets() {
      targets.ring = targetScale
      targets.bright = thumbActive ? thumbBrightness : targetBrightness
      targets.speed = targetSpeed
      targets.spark = targetSparkle
      targets.focus = targetFocus
    }
    updateTargets()

    function smooth() {
      animId = requestAnimationFrame(smooth)
      const lerp = (a, b, t) => a + (b - a) * t

      // 每次帧从最新 target 读
      updateTargets()

      // ringScale
      setRingScale(prev => {
        const diff = targets.ring - prev
        return Math.abs(diff) < 0.001 ? targets.ring : prev + diff * 0.15
      })
      // planetScale 联动
      const pTarget = 1.0 + (targetScale - 1.0) * 0.357
      setPlanetScale(prev => {
        const diff = pTarget - prev
        return Math.abs(diff) < 0.001 ? pTarget : prev + diff * 0.15
      })
      // brightness
      setBrightness(prev => {
        const diff = targets.bright - prev
        return Math.abs(diff) < 0.003 ? targets.bright : lerp(prev, targets.bright, 0.12)
      })
      // speed
      setSpeedValue(prev => {
        const diff = targets.speed - prev
        return Math.abs(diff) < 0.003 ? targets.speed : lerp(prev, targets.speed, 0.12)
      })
      // sparkle
      setSparkle(prev => {
        const diff = targets.spark - prev
        return Math.abs(diff) < 0.005 ? targets.spark : lerp(prev, targets.spark, 0.2)
      })
      // focus
      setFocusVal(prev => {
        const diff = targets.focus - prev
        return Math.abs(diff) < 0.003 ? targets.focus : lerp(prev, targets.focus, 0.12)
      })
    }

    animId = requestAnimationFrame(smooth)
    return () => cancelAnimationFrame(animId)
  }, [targetScale, targetBrightness, targetSpeed, targetSparkle, targetFocus, thumbBrightness, thumbActive])

  const currentMode = MODES[modeIndex]

  // 手势效果描述
  const effectLabels = {
    Open_Palm: '扩张轨道',
    Closed_Fist: '压缩轨道',
    Thumb_Up: '增亮',
    Thumb_Down: '变暗',
    Victory: '加速旋转',
    ILoveYou: '核心闪光',
    Pointing_Up: '聚焦',
    None: '',
  }

  return (
    <div className="app">
      <Scene3D
        ringScale={ringScale}
        planetScale={planetScale}
        brightness={brightness}
        speed={speedValue}
        sparkle={sparkle}
        mode={currentMode.id}
        quality={quality}
        focus={focusVal}
      />

      <FocusPanels visible={focusVal > 0.5} />

      {/* ── 顶部 HUD ── */}
      <div className="hud-top">
        <h1 className="title">手势星球</h1>
        <div className="mode-row">
          <button
            className="mode-btn"
            onClick={() => setShowModePanel(!showModePanel)}
          >
            {currentMode.icon} {currentMode.name}
          </button>
          <button
            className="eco-btn"
            onClick={() => setQuality(q => q === 'high' ? 'eco' : 'high')}
            title={quality === 'high' ? '切换节能模式' : '切换高性能模式'}
          >
            {quality === 'high' ? '⚡' : '🍃'}
          </button>
        </div>
      </div>

      {/* ── 模式面板 ── */}
      {showModePanel && (
        <div className="mode-panel">
          {MODES.map((m, i) => (
            <button
              key={m.id}
              className={`mode-chip ${i === modeIndex ? 'active' : ''}`}
              onClick={() => { setModeIndex(i); setShowModePanel(false) }}
            >
              {m.icon} {m.name}
            </button>
          ))}
        </div>
      )}

      {/* ── 加载 & 启动 ── */}
      {phase === 'loading' && (
        <div className="loading-screen">
          <div className="spinner" />
          <p>正在加载手势识别模型...</p>
        </div>
      )}

      {phase === 'ready' && (
        <div className="loading-screen">
          <button className="start-camera-btn" onClick={startCamera}>
            <span className="btn-icon">📷</span>
            开启摄像头
          </button>
          <p className="btn-hint">点击按钮后，浏览器会询问摄像头权限</p>
        </div>
      )}

      {phase === 'error' && (
        <div className="error-banner">
          <p className="error-title">初始化失败</p>
          <p className="error-msg">{error}</p>
          <p className="error-hint">
            请确保已允许摄像头权限。使用 Chrome/Edge 请点击地址栏左侧的锁图标手动开启。
          </p>
          <button className="start-camera-btn retry" onClick={startCamera}>重试</button>
        </div>
      )}

      {phase === 'active' && (
        <CameraOverlay
          videoRef={videoRef}
          gesture={gesture}
          gestureLabel={gestureLabel}
          confidence={confidence}
        />
      )}

      {/* ── 底部 HUD（重新设计） ── */}
      <div className="hud-bottom">
        {/* 当前手势反馈 */}
        {(gesture !== 'None' || thumbActive) && (
          <div className="gesture-feedback">
            <span className="gf-icon">
              {thumbActive ? '👍' :
               gesture === 'Open_Palm' ? '✋' :
               gesture === 'Closed_Fist' ? '✊' :
               gesture === 'Thumb_Up' ? '👍' :
               gesture === 'Thumb_Down' ? '👎' :
               gesture === 'Victory' ? '✌️' :
               gesture === 'ILoveYou' ? '🤟' :
               gesture === 'Pointing_Up' ? '☝️' : '👋'}
            </span>
            <span className="gf-effect">
              {thumbActive ? `亮度 ${(thumbBrightness * 100).toFixed(0)}%` :
               effectLabels[gesture] || gesture}
            </span>
          </div>
        )}

        {/* 缩放指示器 */}
        <div className="indicators-row">
          <div className="indicator">
            <span className="ind-dot ring-dot" />
            <div className="ind-track">
              <div
                className="ind-fill ring-fill-2"
                style={{ width: `${((ringScale - 0.4) / (1.8 - 0.4)) * 100}%` }}
              />
            </div>
            <span className="ind-label">轨道</span>
          </div>
          <div className="indicator">
            <span className="ind-dot planet-dot" />
            <div className="ind-track">
              <div
                className="ind-fill planet-fill-2"
                style={{ width: `${((planetScale - 0.75) / (1.3 - 0.75)) * 100}%` }}
              />
            </div>
            <span className="ind-label">球体</span>
          </div>
          <div className="indicator">
            <span className="ind-dot bright-dot" />
            <div className="ind-track">
              <div
                className="ind-fill bright-fill"
                style={{ width: `${((brightness - 0.5) / (2.0 - 0.5)) * 100}%` }}
              />
            </div>
            <span className="ind-label">亮度</span>
          </div>
        </div>
      </div>
    </div>
  )
}
