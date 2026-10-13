import { useEffect, useState } from 'react'

type RotatingValueProps = {
  items: string[]
  interval?: number
}

// 上下翻动轮换：一次只显示一条，到点向上推进一格。
export function RotatingValue({ items, interval = 3200 }: RotatingValueProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length < 2) return
    // 系统开了「减弱动效」就不自动翻，只静态显示第一项
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, interval)
    return () => window.clearInterval(timer)
  }, [items.length, interval])

  return (
    <span className="rota">
      <span className="rota-track" style={{ transform: `translateY(-${index * 1.6}em)` }}>
        {items.map((item, itemIndex) => (
          <span className="rota-item" key={item} aria-hidden={itemIndex !== index}>
            {item}
          </span>
        ))}
      </span>
    </span>
  )
}
