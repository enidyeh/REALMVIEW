// 「04 为你推荐的服务」。价格区间由项目方提供，属于参考价 / 演示报价。
// 2026-10-09：标题由「三条服务线，按小时、按项目、按月。」改为「为你推荐的服务」
// （按上方的需求单推荐），列导与「我们怎么决定接不接」一块已按项目方要求删除。

export const servicesSection = {
  en: 'WHAT WE DO',
  title: '为你推荐的服务',
  priceNote:
    '以上价格为项目方提供的参考区间，页面上属于演示报价；正式报价以实际沟通为准，有效期与折扣规则待确认。',
}

export type Service = {
  num: string
  name: string
  en: string
  price: string
  unit: string
  items: string[]
}

export const services: Service[] = [
  {
    num: '01',
    name: '企业咨询',
    en: 'CONSULTING',
    price: '¥500 – 2,000',
    unit: '/ 小时',
    items: ['活动策划咨询', '小红书内容营销咨询', 'AI 工作流咨询', '跨境营销咨询'],
  },
  {
    num: '02',
    name: '活动策划',
    en: 'EVENTS & SCENE',
    price: '¥6,000 – 50,000',
    unit: '/ 项目',
    items: ['品牌快闪', '市集', '线下活动', '社群活动'],
  },
  {
    num: '03',
    name: '内容代运营',
    en: 'CONTENT RETAINER',
    price: '¥3,000 – 10,000',
    unit: '/ 月',
    items: ['小红书账号代运营', '内容营销', 'AI 辅助内容生产'],
  },
]

export const deliverables = {
  label: '交付什么',
  items: [
    { name: '品牌判断与启动方案', note: '先把方向和第一个动作定下来' },
    { name: '品牌运营方案', note: '含达人推广与具体品牌动作' },
  ],
}

// ⚠️ servicePrinciple（「我们怎么决定接不接」）已按项目方要求从页面上删除，
// 这行数据保留但已不再使用，改回去时直接从下方取用即可。
export const servicePrinciple = {
  label: '我们怎么决定接不接',
  body: '域见按项目判断是否接下来做：产出明不明白、周期压不压得住。消耗大、产出低的事，我们会直接说不接。',
}
