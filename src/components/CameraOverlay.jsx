import { useEffect, useRef } from 'react'

export default function CameraOverlay({ videoRef, gesture, gestureLabel, confidence }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    function draw() {
      animId = requestAnimationFrame(draw)
      const video = videoRef.current
      if (!video || video.readyState < 2) {
        ctx.fillStyle = '#0a0a14'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#334'
        ctx.font = '11px system-ui'
        ctx.textAlign = 'center'
        ctx.fillText('等待摄像头...', canvas.width / 2, canvas.height / 2)
        return
      }
      ctx.save()
      ctx.translate(canvas.width, 0)
      ctx.scale(-1, 1)
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      ctx.restore()
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [videoRef])

  return (
    <div className="camera-overlay">
      <canvas ref={canvasRef} width={200} height={150} className="camera-canvas" />
      <div className={`gesture-badge ${gesture !== 'None' ? 'active' : ''}`}>
        {gestureLabel}
        {confidence > 0 && (
          <span className="confidence">{(confidence * 100).toFixed(0)}%</span>
        )}
      </div>
    </div>
  )
}
