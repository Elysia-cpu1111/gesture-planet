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

    function applyEffect(effectName) {
      const effect = GESTURE_EFFECTS[effectName]
      if (!effect) {
        // 无手势时平滑回归默认值
        setTargetScale(1.0)
        setTargetBrightness(1.0)
        setTargetSpeed(1.0)
        setTargetSparkle(0)
        setTargetFocus(0)
        return
      }
      // 只更新对应的效果值，其他回归默认
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
    videoRef, startCamera,
  }
}
