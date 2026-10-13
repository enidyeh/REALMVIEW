// 「04 内容栏目」。四个栏目由项目方命名；目前均无已发布内容。
// 页面上不预填虚构的文章标题、作者或数据。

export const columnsSection = {
  en: 'WHAT WE PUBLISH',
  // 这行中文标题显示在 INSIGHTS 板块标题的同一行右侧；列导已按项目方要求删除
  title: '我们发现了什么',
}

export type Column = { num: string; name: string; en: string; line: string; status: string }

export const columns: Column[] = [
  { num: '01', name: '域见人物', en: 'INTERVIEW', line: '跨域创造者的故事。', status: '内容制作中' },
  { num: '02', name: '域见品牌', en: 'CASE', line: '中国品牌出海 / 入海案例。', status: '内容制作中' },
  { num: '03', name: '域见万象', en: 'TRENDS', line: '全球青年文化趋势。', status: '内容制作中' },
  { num: '04', name: '域见策略', en: 'STRATEGY', line: '营销 / 出海实操方法论。', status: '内容制作中' },
]

export const mediaCarriers = {
  label: '内容载体',
  items: ['纪录片', '视频播客', '杂志 · 每月一个主题'],
}

export const creatorsCommunity = {
  label: '创作者',
  name: 'ENID 创作者社群',
  en: 'CREATORS COMMUNITY',
  status: '筹备中',
  body: '创作者的聚集与孵化入口，与域见共用同一套合作体系；规模够大、需求稳定后再独立成业务线。',
}

export const columnsNote: string =
  '四个栏目目前都没有已发布内容，页面上不预填虚构文章标题、作者或数据；上线前由项目方提供首篇内容。'
