import { useEffect, useRef, useState, useCallback } from 'react'
import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision'

// 手势 → 效果映射
const GESTURE_EFFECTS = {
  Open_Palm:    { target: 'ringScale',   value: 1.8 },
  Closed_Fist:  { target: 'ringScale',   value: 0.4 },
  Thumb_Up:     { target: 'brightness',  value: 2.0 },
  Thumb_Down:   { target: 'brightness',  value: 0.5 },
  Victory:      { target: 'speed',       value: 3.0 },
  ILoveYou:     { target: 'sparkle',     value: 1.0 },
  Pointing_Up:  { target: 'focus',       value: 1.0 },
}

// 手势中文显示名
const GESTURE_LABELS = {
  Open_Palm:    '✋ 张开',
  Closed_Fist:  '✊ 握拳',
  Thumb_Up:     '👍 赞',
  Thumb_Down:   '👎 踩',
  Victory:      '✌️ 胜利',
  ILoveYou:     '🤟 爱你',
  Pointing_Up:  '☝️ 指上',
  None:         '...',
}

export default function useGesture() {
  const videoRef = useRef(null)
  const recognizerRef = useRef(null)
  const streamRef = useRef(null)
  const animFrameRef = useRef(null)
  const gestureHistory = useRef([])
  const mountedRef = useRef(true)

  const [gesture, setGesture] = useState('None')
  const [gestureLabel, setGestureLabel] = useState('...')
  const [confidence, setConfidence] = useState(0)
  const [phase, setPhase] = useState('loading')
  const [error, setError] = useState(null)

  // 效果信号
  const [targetScale, setTargetScale] = useState(1.0)
  const [targetBrightness, setTargetBrightness] = useState(1.0)
  const [targetSpeed, setTargetSpeed] = useState(1.0)
  const [targetSparkle, setTargetSparkle] = useState(0)
  const [targetFocus, setTargetFocus] = useState(0)

  // 拇指拖拽亮度
  const [thumbBrightness, setThumbBrightness] = useState(1.0)
  const [thumbActive, setThumbActive] = useState(false)

  // 摇手混沌散射
  const [targetChaos, setTargetChaos] = useState(0)
  const [waveActive, setWaveActive] = useState(false)

  // Phase 1: 加载模型
  useEffect(() => {
    mountedRef.current = true
    async function loadModel() {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm'
        )
        recognizerRef.current = await GestureRecognizer.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/latest/gesture_recognizer.task',
          },
          runningMode: 'VIDEO',
          numHands: 1,
        })
        if (mountedRef.current) setPhase('ready')
      } catch (err) {
        console.error('Model load error:', err)
        if (mountedRef.current) {
          setError(err.message || '模型加载失败')
          setPhase('error')
        }
      }
    }
    loadModel()
    return () => { mountedRef.current = false }
  }, [])

  // Phase 2: 开启摄像头
  const startCamera = useCallback(async () => {
    try {
      setPhase('loading')
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480, facingMode: 'user' },
      })
      streamRef.current = stream
      const video = document.createElement('video')
      video.srcObject = stream
      video.playsInline = true
      video.muted = true
      await video.play()
      videoRef.current = video
      if (!mountedRef.current) return
      setPhase('active')
      startRecognitionLoop(video)
    } catch (err) {
      console.error('Camera error:', err)
      if (mountedRef.current) {
        setError(err.message || '摄像头启动失败')
        setPhase('error')
      }
    }
  }, [])

  function startRecognitionLoop(video) {
    let lastTick = 0
    const thumbHistory = []  // 拇指 x 位置滑动窗口
    const wristHistory = []  // 手腕 x 位置滑动窗口

    function applyEffect(effectName) {
      const effect = GESTURE_EFFECTS[effectName]
      if (!effect) {
        setTargetScale(1.0)
        setTargetBrightness(1.0)
        setTargetSpeed(1.0)
        setTargetSparkle(0)
        setTargetFocus(0)
        return
      }
      switch (effect.target) {
        case 'ringScale':
          setTargetScale(effect.value)
          setTargetBrightness(1.0)
          setTargetSpeed(1.0)
          setTargetSparkle(0)
          setTargetFocus(0)
          break
        case 'brightness':
          setTargetBrightness(effect.value)
          setTargetScale(1.0)
          setTargetSpeed(1.0)
          setTargetSparkle(0)
          setTargetFocus(0)
          break
        case 'speed':
          setTargetSpeed(effect.value)
          setTargetScale(1.0)
          setTargetBrightness(1.0)
          setTargetSparkle(0)
          setTargetFocus(0)
          break
        case 'sparkle':
          setTargetSparkle(effect.value)
          setTargetScale(1.0)
          setTargetBrightness(1.0)
          setTargetSpeed(1.0)
          setTargetFocus(0)
          break
        case 'focus':
          setTargetFocus(effect.value)
          setTargetScale(1.0)
          setTargetBrightness(1.0)
          setTargetSpeed(1.0)
          setTargetSparkle(0)
          break
      }
    }

    function loop(now) {
      if (!mountedRef.current) return
      animFrameRef.current = requestAnimationFrame(loop)
      if (now - lastTick < 60) return
      lastTick = now
      if (!recognizerRef.current || video.readyState < 2) return

      try {
        const results = recognizerRef.current.recognizeForVideo(video, performance.now())

        // ── 拇指拖拽亮度追踪 ──
        if (results.landmarks && results.landmarks.length > 0) {
          const lm = results.landmarks[0]
          // 拇指尖 (4) 的 x 坐标，归一化到图像宽度
          const thumbTipX = lm[4].x
          // 前置摄像头镜像：用户左 = 画面右（x高），用户右 = 画面左（x低）
          // 用户左移 → 变暗（低亮度），用户右移 → 变亮（高亮度）
          // 即 x 越高 → 亮度越低 → 映射反转：1 - x
          const raw = 1.0 - thumbTipX
          // 映射到 0.35 ~ 2.2 范围
          const bright = 0.35 + raw * 1.85

          thumbHistory.push(bright)
          if (thumbHistory.length > 8) thumbHistory.shift()
          const avgBright = thumbHistory.reduce((a, b) => a + b, 0) / thumbHistory.length

          setThumbBrightness(avgBright)
          setThumbActive(true)

          // ── 摇手检测：手腕 x 位置振荡 ──
          const wristX = lm[0].x
          wristHistory.push(wristX)
          if (wristHistory.length > 25) wristHistory.shift()

          // 统计方向变换次数
          let dirChanges = 0
          let lastDir = 0
          for (let i = 1; i < wristHistory.length; i++) {
            const d = wristHistory[i] - wristHistory[i - 1]
            if (Math.abs(d) < 0.006) continue  // 忽略微小抖动
            const dir = d > 0 ? 1 : -1
            if (lastDir !== 0 && dir !== lastDir) dirChanges++
            lastDir = dir
          }

          // 振幅检查
          const wristMin = Math.min(...wristHistory)
          const wristMax = Math.max(...wristHistory)
          const amplitude = wristMax - wristMin

          const isWaving = dirChanges >= 3 && amplitude > 0.04
          setWaveActive(isWaving)
          setTargetChaos(isWaving ? 1.0 : 0)
        } else {
          thumbHistory.length = 0
          setThumbActive(false)
          wristHistory.length = 0
          setWaveActive(false)
          setTargetChaos(0)
        }

        // ── 手势分类 ──
        if (results.gestures.length > 0 && results.gestures[0].length > 0) {
          const g = results.gestures[0][0]
          gestureHistory.current.push({ cat: g.categoryName, score: g.score })
        } else {
          gestureHistory.current.push({ cat: 'None', score: 0 })
        }

        if (gestureHistory.current.length > 5) gestureHistory.current.shift()

        const votes = {}
        gestureHistory.current.forEach(h => { votes[h.cat] = (votes[h.cat] || 0) + 1 })
        const entries = Object.entries(votes).sort((a, b) => b[1] - a[1])
        const winner = entries[0]
        const winnerName = winner[0]
        const voteCount = winner[1]
        const totalFrames = gestureHistory.current.length

        if (voteCount >= 2 && winnerName !== 'None') {
          setGesture(winnerName)
          setGestureLabel(GESTURE_LABELS[winnerName] || winnerName)
          setConfidence(voteCount / totalFrames)
          applyEffect(winnerName)
        } else {
          setGesture('None')
          setGestureLabel('...')
          setConfidence(0)
          applyEffect('None')
        }
      } catch {
        // ignore
      }
    }

    animFrameRef.current = requestAnimationFrame(loop)
  }

  // 清理
  useEffect(() => {
    return () => {
      mountedRef.current = false
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
    }
  }, [])

  return {
    gesture, gestureLabel, confidence, phase, error,
    targetScale, targetBrightness, targetSpeed, targetSparkle, targetFocus,
    thumbBrightness, thumbActive,
    targetChaos, waveActive,
    videoRef, startCamera,
  }
}
