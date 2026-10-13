// 「01 能力与作品」。
//
// 2026-10-09 按项目方要求精简：卡片只保留**大标题 + 一行小标题**，
// 原来的行业标签（meta）、说明段（desc）与「口径待确认」类标记（flag）都已删除。
// ⚠️ 删掉的只是页面上的提示，事实没有变：第一条的「月流水 ¥5 万级」与第二条的
//    品牌/客户信息仍然**未经核实、未获授权**，对外发布前必须核实（见 README 清单）。

export const workSection = {
  en: 'CAPABILITY & WORK',
  // 这行中文标题现在显示在 PROJECTS 板块标题的同一行右侧
  title: '能力写清楚，案例才有用。',
}

export type WorkItem = {
  id: string
  title: string
  sub: string
  placeholder?: boolean
}

export const works: WorkItem[] = [
  {
    id: 'event-case',
    title: '活动策划｜月流水 ¥5 万级项目',
    sub: '由域见执行的活动策划项目，月流水达到 5 万级。',
  },
  {
    id: 'aimcn',
    title: 'AIMCN｜香薰 / 宠物 / 器物',
    sub: '以香薰、宠物、器物为主要方向的 0→1 品牌线索。',
  },
  {
    id: 'slot-1',
    title: '案例待项目方提供',
    sub: '名称 / 行业 / 周期与结果数据尚未提供。',
    placeholder: true,
  },
  {
    id: 'slot-2',
    title: '案例待项目方提供',
    sub: '名称 / 行业 / 周期与结果数据尚未提供。',
    placeholder: true,
  },
]
