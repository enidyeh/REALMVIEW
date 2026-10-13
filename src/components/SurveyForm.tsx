import { useState } from 'react'
import { surveyDemoNote, surveyQuestions } from '../data/survey'

type Answers = Record<string, string | string[]>

function createAnswers(): Answers {
  const initial: Answers = {}
  for (const question of surveyQuestions) {
    initial[question.id] = question.kind === 'choice' && question.multiple ? [] : ''
  }
  return initial
}

function displayValue(answers: Answers, id: string): string {
  const value = answers[id]
  if (Array.isArray(value)) return value.length > 0 ? value.join(' / ') : '未填写'
  return value.trim() ? value.trim() : '未填写'
}

export function SurveyForm() {
  // 全部状态只在本机内存：不写入 localStorage、不提交、不发网络请求。
  const [answers, setAnswers] = useState<Answers>(createAnswers)
  const [summary, setSummary] = useState<Answers | null>(null)

  function setText(id: string, value: string) {
    setAnswers((previous) => ({ ...previous, [id]: value }))
  }

  function toggleOption(id: string, option: string) {
    setAnswers((previous) => {
      const current = previous[id]
      const list = Array.isArray(current) ? current : []
      const next = list.includes(option)
        ? list.filter((item) => item !== option)
        : [...list, option]
      return { ...previous, [id]: next }
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSummary({ ...answers })
  }

  function handleReset() {
    setAnswers(createAnswers())
    setSummary(null)
  }

  return (
    <div>
      <p className="demo-banner" role="note">
        <span>演示表单 · 不提交 / 不保存 / 不发送</span>
        <span>{surveyDemoNote}</span>
      </p>

      <form className="field-set" onSubmit={handleSubmit} noValidate>
        {surveyQuestions.map((question) => {
          const labelId = `${question.id}-label`
          return (
            <div className="field" key={question.id}>
              <p className="field-label" id={labelId}>
                <span>{question.num}</span>
                {question.label}
              </p>
              {question.hint && <p className="field-hint">{question.hint}</p>}

              {question.kind === 'text' && (
                <input
                  id={question.id}
                  type="text"
                  aria-labelledby={labelId}
                  value={answers[question.id] as string}
                  onChange={(event) => setText(question.id, event.target.value)}
                />
              )}

              {question.kind === 'textarea' && (
                <textarea
                  id={question.id}
                  aria-labelledby={labelId}
                  value={answers[question.id] as string}
                  onChange={(event) => setText(question.id, event.target.value)}
                />
              )}

              {question.kind === 'choice' && (
                <div className="choice-row" role="group" aria-labelledby={labelId}>
                  {question.options.map((option) => {
                    const checked = question.multiple
                      ? ((answers[question.id] as string[]) ?? []).includes(option)
                      : answers[question.id] === option
                    return (
                      <label className="choice" key={option}>
                        <input
                          type={question.multiple ? 'checkbox' : 'radio'}
                          name={question.id}
                          checked={checked}
                          onChange={() =>
                            question.multiple
                              ? toggleOption(question.id, option)
                              : setText(question.id, option)
                          }
                        />
                        <span>{option}</span>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}

        <div className="survey-actions">
          <button className="btn btn-primary" type="submit">
            在本地生成摘要
          </button>
          <button className="btn" type="button" onClick={handleReset}>
            清空
          </button>
        </div>
      </form>

      {summary && (
        <div className="survey-summary" aria-live="polite">
          <span className="eyebrow-inline">本地摘要 / LOCAL ONLY</span>
          <span className="barcode" aria-hidden="true" />
          <dl>
            {surveyQuestions.map((question) => (
              <div key={question.id}>
                <dt>
                  {question.num} {question.label}
                </dt>
                <dd>{displayValue(summary, question.id)}</dd>
              </div>
            ))}
          </dl>
          <p className="field-hint">
            这份摘要只存在于当前页面内存中，没有提交、没有保存、没有发送；刷新后消失。
          </p>
        </div>
      )}
    </div>
  )
}
