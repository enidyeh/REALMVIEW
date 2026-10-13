// 「05 合作方式」。2026-10-09 按项目方要求换成三种合作方式（原来的「服务方 / 合伙人」
// 两种 + 三种打包方式已替换；品牌启动包 / 联合创始人 / 免费全案那一组已删除）。
// 文案由项目方提供，逐字使用。

export const modelsSection = {
  en: 'HOW WE WORK TOGETHER',
  // 显示在 SERVICES 板块标题行右侧的是 03 的标题；这一行是 05 自己的标题
  title: '我们提供灵活的合作方式',
}

export type Model = {
  id: string
  num: string
  name: string
  en: string
  /** 现阶段主推 */
  featured?: boolean
  income: string
  body: string
  fit: string
}

export const models: Model[] = [
  {
    id: 'service-provider',
    num: '01',
    name: '服务方',
    en: 'Service Provider',
    featured: true,
    income: '项目费、月度服务费、专项顾问费',
    body: '域见负责策略、营销、品牌启动或执行，客户支付费用。双方不需要共享股权，也不必承担彼此的创业风险。',
    fit: '有明确需求、有预算、希望解决具体增长问题的品牌。',
  },
  {
    id: 'growth-partner',
    num: '02',
    name: '增长合作伙伴',
    en: 'Growth Partner',
    income: '基础服务费 + 绩效奖金 / 收益分成',
    body: '域见不只是交付一份方案，而是持续参与客户的增长过程。双方可以根据结果共享部分收益，但不一定涉及股权。',
    fit: '已有产品、供应链或销售基础，且创始人愿意投入资金和执行资源的品牌。',
  },
  {
    id: 'equity-partner',
    num: '03',
    name: '股权合作伙伴',
    en: 'Equity Partner / Venture Studio',
    income: '股权、分红及约定的其他报酬',
    body: '域见选择性地深度参与少数有潜力的品牌，投入策略、团队、渠道或其他资源，换取股权或其他长期经济权益。',
    fit: '有明确市场机会、创始人能力强、商业模型可验证，且域见愿意长期投入的项目。',
  },
]
