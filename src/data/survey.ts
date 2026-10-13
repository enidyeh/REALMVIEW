// 「06 合作问卷」。题目由项目方提供，逐字使用，未增删题目。
// 表单为本地演示：不提交、不保存、不发网络请求，刷新即清空。

export const surveySection = {
  en: 'START HERE',
  title: '六个问题，先判断这件事能不能做。',
  lede: '填写只是为了让我们在第一次沟通前就有判断。以下内容不会被提交或保存。',
}

export const surveyDemoNote =
  '本页表单为演示：内容只在当前页面内存中，不提交、不保存、不发网络请求，刷新后清空；正式提交方式待项目方确认。'

type BaseQuestion = { id: string; num: string; label: string; hint?: string }

export type SurveyQuestion =
  | (BaseQuestion & { kind: 'text' | 'textarea' })
  | (BaseQuestion & { kind: 'choice'; options: string[]; multiple?: boolean })

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 'q1',
    num: '01',
    label: '你这件事准备投入多少钱？',
    hint: '写一个区间也可以，例如「10 万以内」。',
    kind: 'text',
  },
  {
    id: 'q2',
    num: '02',
    label: '你现在有什么现成资源？产品 / 供应链 / 客户 / 渠道？',
    hint: '可多选。',
    kind: 'choice',
    multiple: true,
    options: ['产品 / 货源', '供应链', '客户', '渠道'],
  },
  {
    id: 'q3',
    num: '03',
    label: '你希望我是服务方，还是合伙人？',
    kind: 'choice',
    options: ['服务方', '合伙人', '还没决定'],
  },
  {
    id: 'q4',
    num: '04',
    label: '如果我是服务方，你的预算是多少？',
    hint: '不做服务方可以留空。',
    kind: 'text',
  },
  {
    id: 'q5',
    num: '05',
    label: '如果我是合伙人，你能给我什么权益？股权 / 利润 / 决策权？',
    hint: '可多选。不做合伙人可以留空。',
    kind: 'choice',
    multiple: true,
    options: ['股权', '利润', '决策权'],
  },
  {
    id: 'q6',
    num: '06',
    label: '你能在两周内推进哪些具体动作？',
    hint: '越具体越好，例如「上线落地页」「谈定第一家渠道」。',
    kind: 'textarea',
  },
]
