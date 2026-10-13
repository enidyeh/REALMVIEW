// 卖点轮播（PILLARS）。五条内容由项目方提供。
//
// ⚠️ 以下文案与「Read More」外链均来自 inbridge.co/services/，不是域见自己的表述。
// 上线前需要改写成域见自己的说法，或确认已获得对方许可；页面上的 PILLARS 区块带「待改写」标记。

export type Pillar = {
  id: string
  num: string
  title: string
  body: string
  lead: string
  note: string
  href: string
}

export const pillarsSource = 'https://inbridge.co/services/'

export const pillars: Pillar[] = [
  {
    id: 'research',
    num: '01',
    title: 'Research & Discovery',
    body: 'We reveal the truths your brand stands on — customer needs, category tensions, and cultural signals shaping demand. This creates strategic clarity: where to play, how to differentiate, and what to avoid.',
    lead: 'We don’t just gather data. We identify the patterns that unlock advantage.',
    note: 'InBridge combines East–West insight to decode markets and culture, see opportunities others consistently miss.',
    href: pillarsSource,
  },
  {
    id: 'strategy',
    num: '02',
    title: 'Strategy & Positioning',
    body: 'We define how your brand wins — sharp positioning, clear direction, and a vision that aligns leaders and teams. We help you move from scattered insights to a focused strategic choice that guides product, marketing, and growth.',
    lead: 'We don’t just analyze problems. We identify the strategic paths that create momentum.',
    note: 'InBridge builds management alignment, turning complexity into a simple, shared direction for global expansion.',
    href: pillarsSource,
  },
  {
    id: 'creative',
    num: '03',
    title: 'Creative & Roadmap',
    body: 'We turn strategy into a scalable brand system — narrative, visual direction, and market execution principles that ensure every touchpoint speaks one brand language across borders.',
    lead: 'We don’t write slogans. We turn underserved needs into breakthrough opportunities.',
    note: 'InBridge unifies business, product, and marketing into a single brand vision designed to scale globally.',
    href: pillarsSource,
  },
  {
    id: 'design',
    num: '04',
    title: 'Design & Execution',
    body: 'We build the assets, guidelines, and experience systems that activate the strategy — identity, architecture, packaging, digital presence, and creative execution that drive recognition and consistency worldwide.',
    lead: 'We don’t hand over decks. We build systems that accelerate decision-making and execution.',
    note: 'InBridge connects long-term vision with daily action, ensuring your brand moves forward clearly and confidently.',
    href: pillarsSource,
  },
  {
    id: 'advisory',
    num: '05',
    title: 'Advisory & Stewardship',
    body: 'We stay close as long-term partners — supervising creative execution, marketing decisions, and cross-border consistency so your brand shows up exactly as intended across all markets.',
    lead: 'We don’t disappear after delivery. We protect and grow what we build together.',
    note: 'InBridge ensures your brand stays aligned, distinctive, and culturally relevant as you scale globally.',
    href: pillarsSource,
  },
]
