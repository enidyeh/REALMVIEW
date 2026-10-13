import { useEffect, useState } from 'react'
import { pillars } from '../data/pillars'

// 卖点轮播：已按要求去掉左右按键与序号页签，改为自动轮播 + 一条进度条。
// 鼠标悬停或键盘聚焦时暂停，方便阅读。
export function PillarsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = pillars.length
  const pillar = pillars[index]

  useEffect(() => {
    if (paused || total < 2) return
    // 系统开了「减弱动效」就不自动播，停在第 01 条
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [paused, total])

  return (
    <div
      className="pl"
      role="group"
      aria-roledescription="轮播"
      aria-label="五个卖点"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="pl-stage" aria-live="polite">
        <article className="pl-slide" key={pillar.id}>
          <h4 className="pl-title">
            <span className="pl-title-num">{pillar.num}</span>
            {pillar.title}
          </h4>
          <p className="pl-body">{pillar.body}</p>
          <p className="pl-lead">{pillar.lead}</p>
          <p className="pl-note">{pillar.note}</p>
          <a className="pl-link" href={pillar.href} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </article>
      </div>

      {/* 进度条：灰底圆角条 + 一截黑色圆角条，随轮播左右移动 */}
      <div className="pl-progress">
        <span
          className="pl-progress-fill"
          style={{ width: `${((index + 1) / total) * 100}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
