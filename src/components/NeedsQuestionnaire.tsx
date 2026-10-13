import { useEffect, useMemo, useState } from 'react'
import { fitSection } from '../data/profile'
import { surveySection } from '../data/survey'
import { SurveyForm } from './SurveyForm'

// 03：左边勾选「你目前缺什么」，右边实时生成一张需求单小票；
// 小票上的「填写详细需求表」展开下面的问卷（六个问题）。
// 全部状态都在本页内存里，不提交、不保存（与问卷的说明一致）。
export function NeedsQuestionnaire() {
  const [picked, setPicked] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  // 首屏的 WORK WITH US 与达人卡的 Contact 都指向 #survey，
  // 所以带这个 hash 进来时直接把问卷展开（否则跳到收起的空面板）。
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#survey') setOpen(true)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  // 小票编号只按当天日期 + 勾选条数生成，纯装饰，不做唯一性保证
  const code = useMemo(() => {
    const now = new Date()
    const mmdd = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
    return `NO. RV-${mmdd}-${String(picked.length).padStart(2, '0')}`
  }, [picked.length])

  const toggle = (need: string) =>
    setPicked((current) => (current.includes(need) ? current.filter((n) => n !== need) : [...current, need]))

  return (
    <div className="nq">
      <div className="nq-grid">
        <div className="nq-pick">
          <h4 className="nq-prompt">{fitSection.prompt}</h4>
          <p className="nq-pick-note">{fitSection.promptNote}</p>
          <ul className="nq-list">
            {fitSection.needs.map((need) => {
              const on = picked.includes(need)
              return (
                <li key={need}>
                  <button
                    className={`nq-item${on ? ' is-on' : ''}`}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(need)}
                  >
                    <span className="nq-box" aria-hidden="true" />
                    <span>{need}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <aside className="nq-receipt" aria-live="polite">
          <p className="nq-receipt-head">
            <span className="nq-receipt-label">{fitSection.receipt.label}</span>
            <span className="nq-receipt-code">{code}</span>
          </p>

          {picked.length === 0 ? (
            <p className="nq-receipt-empty">{fitSection.receipt.empty}</p>
          ) : (
            <ul className="nq-receipt-list">
              {picked.map((need, index) => (
                <li key={need}>
                  <span className="nq-receipt-num">{String(index + 1).padStart(2, '0')}</span>
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="nq-receipt-total">
            <span>{fitSection.receipt.totalLabel}</span>
            <strong>
              {picked.length} {fitSection.receipt.totalUnit}
            </strong>
          </p>

          <span className="barcode" aria-hidden="true" />

          <button className="btn nq-submit" type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? '收起详细需求表' : fitSection.receipt.more}
          </button>
          <a className="nq-jump" href={fitSection.receipt.jumpHref}>
            {fitSection.receipt.jump} →
          </a>
        </aside>
      </div>

      {/* 问卷面板：id 固定为 #survey（首屏 CTA / 达人卡 Contact 都指这里） */}
      <section className={`nq-form${open ? ' is-open' : ''}`} id="survey" aria-labelledby="survey-title">
        <header className="nq-form-head">
          <h3 className="nq-form-title" id="survey-title">
            {surveySection.title}
          </h3>
          <p className="nq-form-lede">{surveySection.lede}</p>
        </header>
        {open ? (
          <SurveyForm />
        ) : (
          <p className="nq-form-hint">
            点右边小票上的「{fitSection.receipt.more}」展开这六个问题；内容只在本页内存里，不提交、不保存。
          </p>
        )}
      </section>

      <div className="fit-foot">
        {fitSection.foot.map((block) => (
          <div key={block.label}>
            <span className="eyebrow-inline">{block.label}</span>
            <p>{block.body}</p>
          </div>
        ))}
      </div>

      <p className="sec-note">{fitSection.note}</p>
    </div>
  )
}
