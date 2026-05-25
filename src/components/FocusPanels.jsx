import { useEffect, useState } from 'react'

const BRANCHES = [
  {
    id: 'core',
    angle: -60,
    icon: '☀️',
    title: '能量核心',
    desc: '500 粒子脉冲，呼吸式明暗交替，模拟恒星内核的核聚变节律。',
  },
  {
    id: 'surface',
    angle: -20,
    icon: '🌍',
    title: '球面粒子',
    desc: '2800 粒子构成星球主体，极地偏白、赤道偏青，jitter 抖动模拟粗糙地表。',
  },
  {
    id: 'rings',
    angle: 20,
    icon: '💫',
    title: '三环轨道',
    desc: '金·青·紫三环独立旋转，倾斜角各异。手势缩放时外层环缩半速防止出屏。',
  },
  {
    id: 'gesture',
    angle: 60,
    icon: '✋',
    title: '手势交互',
    desc: '8 种手势实时识别：握拳压缩、张开扩张、拇指调亮度、V字加速、爱你闪光。',
  },
]

export default function FocusPanels({ visible }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShow(true), 400)
      return () => clearTimeout(t)
    } else {
      setShow(false)
    }
  }, [visible])

  if (!visible && !show) return null

  return (
    <div className={`focus-overlay ${show ? 'visible' : ''}`}>
      {BRANCHES.map((b, i) => (
        <div
          key={b.id}
          className="focus-branch"
          style={{
            '--angle': `${b.angle}deg`,
            '--delay': `${0.15 + i * 0.1}s`,
            opacity: show ? 1 : 0,
          }}
        >
          <div className="branch-line" />
          <div className="branch-card">
            <span className="branch-icon">{b.icon}</span>
            <h3 className="branch-title">{b.title}</h3>
            <p className="branch-desc">{b.desc}</p>
          </div>
        </div>
      ))}

      {/* 创作者署名 */}
      <div
        className="focus-credit"
        style={{ opacity: show ? 1 : 0, transitionDelay: '0.7s' }}
      >
        Created by <span className="credit-name">恋</span>
      </div>
    </div>
  )
}
