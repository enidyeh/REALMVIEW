import { useState } from 'react'
import {
  talentCategories,
  talentMore,
  talentMoreNote,
  talentPager,
  talentStats,
  talentTools,
  talents,
  talentsNote,
} from '../data/talents'

// 每页 4 位 → 桌面正好一行（≤1000px 时网格是 2 列，就是两行）
const PER_PAGE = 4

// 达人阵容。2026-10-10 按项目方要求改：
//   - Filters / Sort 两个按钮去掉；搜索框可以真正输入，按关键字过滤（姓名 / 平台）
//   - 底部的 MORE 换成左右圆形箭头 + 中间的页码（当前 8 位 = 2 页）
// 8 位达人来自参考站名单、没有 category 字段，所以分类按钮除 All 外仍是空结果——如实显示。
export function TalentsRoster() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [moreOpen, setMoreOpen] = useState(false)

  const keyword = query.trim().toLowerCase()
  const filtered = talents.filter((talent) => {
    if (activeCategory !== 'all' && talent.category !== activeCategory) return false
    if (!keyword) return true
    const haystack = [talent.name, talent.id, talent.age, talent.engagement, ...talent.links.map((link) => `${link.label} ${link.value}`)]
      .join(' ')
      .toLowerCase()
    return haystack.includes(keyword)
  })

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  // 页码不额外用 effect 归位，直接夹住，避免多渲染一轮
  const current = Math.min(page, pageCount)
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE)

  return (
    <div className="tl">
      <div className="tl-stats">
        <div className="tl-stats-main">
          <p className="tl-stats-summary">
            <span>{talentStats.count}</span>
            <span className="tl-stats-sep">•</span>
            <span>{talentStats.reach}</span>
          </p>
          <ul className="tl-figures">
            {talentStats.figures.map((figure) => (
              <li key={figure.id}>
                <span className="tl-figure-platform">{figure.platform}</span>
                <span className="tl-figure-value">{figure.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="tl-tools">
        <div className="tl-categories">
          <ul className="tl-category-list">
            {talentCategories.map((category) => {
              const active = category.id === activeCategory
              return (
                <li key={category.id}>
                  <button
                    className={`tl-category${active ? ' is-active' : ''}`}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setPage(1)
                    }}
                  >
                    <span>{category.label}</span>
                    <span className="tl-category-count">{category.count}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <button
            className="tl-more"
            type="button"
            aria-expanded={moreOpen}
            onClick={() => setMoreOpen((open) => !open)}
          >
            {talentMore}
          </button>
          {moreOpen && <p className="tl-more-note">{talentMoreNote}</p>}
        </div>

        {/* 搜索：输入即过滤，回车或点右边的放大镜都会提交同一个查询 */}
        <form className="tl-search" role="search" onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            value={query}
            placeholder={talentTools.placeholder}
            aria-label="按关键字搜索达人（姓名 / 平台）"
            onChange={(event) => {
              setQuery(event.target.value)
              setPage(1)
            }}
          />
          <button className="tl-search-btn" type="submit" aria-label="搜索">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <circle cx="7" cy="7" r="4.6" />
              <path d="M10.5 10.5 14.2 14.2" />
            </svg>
          </button>
        </form>
      </div>

      {visible.length > 0 ? (
        <ul className="tl-grid">
          {visible.map((talent) => (
            <li className="tl-card" key={talent.id}>
              <div className="tl-photo">
                <img src={talent.photo} alt="" loading="lazy" />
              </div>
              <h4 className="tl-name">{talent.name}</h4>

              <ul className="tl-links">
                {talent.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <span className="tl-link-label">{link.label}</span>
                      <span className="tl-link-value">{link.value}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <dl className="tl-facts">
                <div>
                  <dt>Engagement</dt>
                  <dd>{talent.engagement}</dd>
                </div>
                <div>
                  <dt>Top gender</dt>
                  <dd>{talent.gender}</dd>
                </div>
                <div>
                  <dt>Top age</dt>
                  <dd>{talent.age}</dd>
                </div>
              </dl>

              <div className="tl-actions">
                <a className="tl-action" href={talent.mediaKit} target="_blank" rel="noopener noreferrer">
                  View Media Kit
                </a>
                <a className="tl-action tl-action-plain" href="#survey">
                  Contact
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="tl-empty">
          {keyword
            ? `没有匹配「${query.trim()}」的达人。换个关键字，或选「All」看全部。`
            : '该分类下暂无已展示的达人。本页 8 位来自参考站名单、尚未标注分类；选「All」查看全部。'}
        </p>
      )}

      {filtered.length > PER_PAGE && (
        <div className="tl-pager">
          <button
            className="tl-pager-arrow"
            type="button"
            aria-label={talentPager.prev}
            disabled={current <= 1}
            onClick={() => setPage(current - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <p className="tl-pager-count">
            <span>{String(current).padStart(2, '0')}</span>
            <span className="tl-pager-sep">/</span>
            <span>{String(pageCount).padStart(2, '0')}</span>
          </p>
          <button
            className="tl-pager-arrow"
            type="button"
            aria-label={talentPager.next}
            disabled={current >= pageCount}
            onClick={() => setPage(current + 1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}

      <p className="sec-note">{talentsNote}</p>
    </div>
  )
}
