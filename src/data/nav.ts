// 导航结构：五个英文板块，中文栏目挂在板块下。
// 板块顺序 = 页面顺序。栏目的 id 保留原有深链（#who / #services / #models / #work / #talents / #columns / #about）。

export type NavItem = { id: string; num: string; label: string }

export type NavGroup = { id: string; en: string; zh: string; items: NavItem[] }

export const projectsGroup: NavGroup = {
  id: 'group-projects',
  en: 'PROJECTS',
  zh: '项目',
  items: [{ id: 'work', num: '01', label: '能力与作品' }],
}

export const talentsGroup: NavGroup = {
  id: 'group-talents',
  en: 'TALENTS',
  zh: '达人',
  items: [{ id: 'talents', num: '02', label: '达人阵容' }],
}

export const servicesGroup: NavGroup = {
  id: 'group-services',
  en: 'SERVICES',
  zh: '服务',
  items: [
    { id: 'who', num: '03', label: '当务之急与需求单' },
    { id: 'services', num: '04', label: '为你推荐的服务' },
    { id: 'models', num: '05', label: '合作方式' },
  ],
}

export const insightsGroup: NavGroup = {
  id: 'group-insights',
  en: 'INSIGHTS',
  zh: '洞察',
  items: [{ id: 'columns', num: '06', label: '内容栏目' }],
}

// ABOUT 板块：原来装的是合作问卷，问卷已按项目方要求移到 03 的需求单下面，
// 这里改为「关于域见」，内容待项目方提供。
export const aboutGroup: NavGroup = {
  id: 'group-about',
  en: 'ABOUT',
  zh: '关于',
  items: [{ id: 'about', num: '07', label: '关于域见' }],
}

export const navGroups: NavGroup[] = [
  projectsGroup,
  talentsGroup,
  servicesGroup,
  insightsGroup,
  aboutGroup,
]

// 从板块里取栏目（编号与名称只在 nav.ts 定义一次，页面上不重复写）
export function navItem(group: NavGroup, id: string): NavItem {
  const found = group.items.find((item) => item.id === id)
  if (!found) throw new Error(`nav item not found: ${id}`)
  return found
}
