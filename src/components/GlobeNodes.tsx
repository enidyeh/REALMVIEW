import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { heroNodes } from '../data/profile'

// 球心（viewBox 0 0 640 640）
const HUB = 320
// 每 2.4 秒放射出一个城市：圆点飞出去 → 端点落地 → 城市名出现
const STEP_MS = 2400
// 七个全亮后停一会，再整体淡出重来
const HOLD_MS = 5200
// 进页面后第一个点来得快一点，别让人对着空球等
const FIRST_MS = 900

// 首屏球体上的城市信标：按 heroNodes 的顺序一个个出现（会累积，不擦掉前面的）。
// 系统开了「减弱动效」就直接把七个全点亮，不飞、不循环。
export function GlobeNodes() {
  const total = heroNodes.length
  // 系统开了「减弱动效」就一开始把七个全点亮，之后不再有定时器
  const [lit, setLit] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? total : 0,
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const delay = lit === 0 ? FIRST_MS : lit >= total ? HOLD_MS : STEP_MS
    const timer = window.setTimeout(() => {
      setLit((current) => (current >= total ? 0 : current + 1))
    }, delay)
    return () => window.clearTimeout(timer)
  }, [lit, total])

  return (
    <g className="rv-nodes">
      {heroNodes.map((node, index) => (
        <g
          className={`rv-node${index < lit ? ' is-lit' : ''}`}
          key={node.id}
          // 飞行的小圆点在球心，靠这两个偏移量飞到自己的城市（SVG 里 px 就是用户单位）
          style={
            {
              '--dx': `${node.x - HUB}px`,
              '--dy': `${node.y - HUB}px`,
            } as CSSProperties
          }
        >
          <path className="rv-node-line" d={`M${HUB} ${HUB} ${node.x} ${node.y}`} />
          <circle className="rv-node-dot" cx={HUB} cy={HUB} r="3.5" />
          <circle className="rv-node-point" cx={node.x} cy={node.y} r="5" />
          <text className="rv-node-label" x={node.x} y={node.y + 20} textAnchor="middle">
            {node.label}
          </text>
        </g>
      ))}
    </g>
  )
}
