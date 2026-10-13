// INSIGHTS 的三篇图文文章入口。
//
// ⚠️ 图片是直接引用 inbridge.co 的 CDN 外链，中英文文案与链接也都来自对方站点。
// 页面上带「上线前需替换」标记；正式上线要换成域见自己的文章与图片（或确认已获许可）。

export type InsightCard = {
  id: string
  image: string
  zhTitle: string
  zhSub: string
  enTitle: string
  enDesc: string
  href: string
}

export const insightsFlag = '图片与文案来源 inbridge.co · 上线前需替换'

export const insightCards: InsightCard[] = [
  {
    id: 'premium',
    image:
      'https://i-p.rmcdn.net/63d2603cabc7c00020c50f27/5765005/image-aa62473d-ed35-452d-b2c0-cc09f9ba453d.jpg?w=800',
    zhTitle: '溢价，始于感知，久于价值',
    zhSub: '中国品牌全球化，如何摆脱「廉价宿命」，实现「品牌溢价」？',
    enTitle: 'Premium Is All Perception — Price Comes Later',
    enDesc: 'A practical guide for Chinese companies trying to escape the commodity trap.',
    href: 'https://inbridge.co/insight2/',
  },
  {
    id: 'profit-system',
    image:
      'https://i-p.rmcdn.net/63d2603cabc7c00020c50f27/5765005/image-a478b16e-6cd9-4199-8e22-cdf03c14a0c8.jpg?w=800',
    zhTitle: '品牌，不是外在装饰，而是驱动增长的利润系统。',
    zhSub: '如何用商业逻辑做品牌，驱动价值、效率与长期增长？',
    enTitle: 'Branding Is Not Decoration — It’s a Profit System',
    enDesc:
      'How branding functions as a business system that strengthens value, efficiency, and long-term growth.',
    href: 'https://inbridge.co/insight1/',
  },
  {
    id: 'cycling',
    image:
      'https://i-p.rmcdn.net/63d2603cabc7c00020c50f27/5765005/image-08956179-fd14-411e-8f6c-636dc29f9344.jpg?w=800',
    zhTitle: '全球骑行服市场，中国品牌新机遇',
    zhSub: '从本土到全球：中国骑行服品牌的崛起、挑战与破局之道。',
    enTitle: 'Cycling Apparel: Opportunity for Chinese Brands',
    enDesc: 'The rise, challenges, and approaches for Chinese cycling apparel brands abroad.',
    href: 'https://inbridge.co/insights/',
  },
]
