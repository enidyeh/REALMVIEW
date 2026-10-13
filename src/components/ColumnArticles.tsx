import { useState } from 'react'
import { columns } from '../data/columns'
import { insightCards } from '../data/insights'

// 06 内容栏目：四个栏目变成可点选的标签，下面的文章区跟着切换；
// 左右两侧的圆形悬浮箭头用来翻页（当前每个栏目都是同样三篇占位文章，所以箭头是循环滚动）。
export function ColumnArticles() {
  const [activeNum, setActiveNum] = useState(columns[0].num)
  const [offset, setOffset] = useState(0)
  const total = insightCards.length

  const shift = (step: number) => setOffset((current) => (current + step + total) % total)
  // 按 offset 把三篇循环错位，点箭头时顺序动起来
  const shown = insightCards.map((_, index) => insightCards[(index + offset) % total])

  return (
    <div className="ca">
      <ul className="ca-tabs">
        {columns.map((column) => {
          const on = column.num === activeNum
          return (
            <li key={column.num}>
              <button
                className={`col-card${on ? ' is-active' : ''}`}
                type="button"
                aria-pressed={on}
                onClick={() => setActiveNum(column.num)}
              >
                <span className="col-card-en">
                  {column.num} / {column.en}
                </span>
                <span className="col-card-name">{column.name}</span>
                <span className="col-card-line">{column.line}</span>
                <span className="col-status">{column.status}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="ca-stage">
        <button className="ca-arrow is-prev" type="button" aria-label="上一篇" onClick={() => shift(-1)}>
          <span aria-hidden="true">←</span>
        </button>

        <ul className="ins-grid">
          {shown.map((card) => (
            <li key={card.id}>
              <a className="ins-card" href={card.href} target="_blank" rel="noopener noreferrer">
                <span className="ins-figure">
                  <img src={card.image} alt="" loading="lazy" />
                  <span className="ins-caption">
                    <span className="ins-zh-title">{card.zhTitle}</span>
                    <span className="ins-zh-sub">{card.zhSub}</span>
                  </span>
                </span>
                <span className="ins-body">
                  <span className="ins-en-title">{card.enTitle}</span>
                  <span className="ins-en-desc">{card.enDesc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button className="ca-arrow is-next" type="button" aria-label="下一篇" onClick={() => shift(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
