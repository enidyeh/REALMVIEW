// TALENTS｜达人阵容。
//
// ⚠️ 整体参考 Friends In Reality（beacons.ai 的达人页）：
// 简介文案、分类与计数、触达数字、8 位达人的头像 / 社交链接 / 数据 / 媒体包链接都来自该站。
// 页面上带「上线前需替换」标记。达人都是真实账号，未经授权不得用于对外商业页面。
// 搜索、筛选、排序在参考站是真功能，这里只做静态展示（未接入）。

export const talentsSection = {
  en: 'TALENT ROSTER',
  title: '我们代表谁。',
  lede: '创作者阵容，以及他们正在发生的真实数据。',
}

// 原文结尾是截断的 "talent representa…"，这里补全为 representation
export const talentsIntro =
  'We are a trailblazing management firm that empowers the next generation of talent to reach new heights in the ever-evolving creator economy and digital space. Established with a visionary spirit in 2023, we stand at the forefront of talent representation.'

export type TalentCategory = { id: string; label: string; count: string }

export const talentCategories: TalentCategory[] = [
  { id: 'all', label: 'All', count: '51' },
  { id: 'lifestyle', label: 'Lifestyle', count: '35' },
  { id: 'fashion', label: 'Fashion & Styling', count: '12' },
  { id: 'beauty', label: 'Beauty & Skincare', count: '5' },
  { id: 'art', label: 'Art & Design', count: '3' },
]

export const talentMore = 'Show 16 more'
export const talentMoreNote = '其余 16 个分类标签待项目方提供。'

// 分页：每页 4 位（桌面一行），左右圆形箭头翻页，中间显示第几页 / 共几页。
// 2026-10-10 按项目方要求把原来的「MORE」按钮换成翻页控件（当前 8 位 = 2 页）。
export const talentPager = {
  prev: '上一页',
  next: '下一页',
  note: '本页 8 位达人分 2 页，更多名单待项目方提供。',
}

export const talentStats = {
  count: '51 creators',
  reach: '123.6M reach',
  // 三个数字是分平台的触达量（参考图里的图标提示了平台）
  figures: [
    { id: 'tiktok', platform: 'TikTok', value: '91.7M' },
    { id: 'instagram', platform: 'Instagram', value: '18.1M' },
    { id: 'youtube', platform: 'YouTube', value: '13.8M' },
  ],
}

// 2026-10-10 按项目方要求：Filters / Sort 两个按钮、以及搜索框上方的「AI SEARCH」小字都已从页面删除。
// 搜索框现在**可以真正输入并按键名过滤**（姓名 / 平台），占位符沿用这里的 placeholder。
export const talentTools = {
  search: 'AI SEARCH',
  placeholder: 'Search',
  filters: 'Filters',
  sort: 'Sort',
}

export type TalentLink = { id: string; label: string; value: string; href: string }

export type Talent = {
  id: string
  name: string
  photo: string
  links: TalentLink[]
  engagement: string
  gender: string
  age: string
  mediaKit: string
  // 分类筛选用的归属；参考站名单里没有提供，所以当前都为空
  category?: string
}

const KIT = 'https://beacons.ai/management/9561e4c5-41d6-495e-a085-170d3f2d2d2b/mediakit/'

export const talents: Talent[] = [
  {
    id: 'aaron-liebregts',
    name: 'Aaron Liebregts',
    photo:
      'https://cdn.beacons.ai/user_content/QQCuuX4gmJdkHNlRRked36HT1fW2/referenced_images/e169e623-95eb-4fb9-b657-15c64456be23__hsgZY31XEpYDfvW7InhZGCraHyp2/aaron.liebregts_mediakit_header_profile_picture__47252f1e-8b36-401e-a16b-2f344bbde61d.jpg?t=1718752995749',
    links: [
      { id: 'tiktok', label: 'TikTok', value: '2.7M', href: 'https://www.tiktok.com/@itaintokbro' },
      { id: 'instagram', label: 'Instagram', value: '336k', href: 'https://www.instagram.com/itaintokbro' },
    ],
    engagement: '29.9%',
    gender: '81.5% female',
    age: '18-24 yo',
    mediaKit: `${KIT}itaintokbro`,
  },
  {
    id: 'aimee-jai-hall',
    name: 'Aimee Jai Hall',
    photo:
      'https://cdn.beacons.ai/user_content/LZCX18GNrodHobZ8WSPuwhyY4uT2/aimee_jai_hall_mediakit_header_profile_picture.png?q=1733375025.552064',
    links: [
      { id: 'tiktok', label: 'TikTok', value: '1.7M', href: 'https://www.tiktok.com/@aimeejaihall' },
      { id: 'instagram', label: 'Instagram', value: '990k', href: 'https://www.instagram.com/aimeejaihall' },
    ],
    engagement: '12.7%',
    gender: '50.1% male',
    age: '18-24 yo',
    mediaKit: `${KIT}aimee_jai_hall`,
  },
  {
    id: 'arsalan-ahmad',
    name: 'Arsalan Ahmad',
    photo:
      'https://cdn.beacons.ai/agency_content/9561e4c5-41d6-495e-a085-170d3f2d2d2b/_arsalanahmad_mediakit_header_profile_picture.png?q=1764911444.4595945',
    links: [
      { id: 'tiktok', label: 'TikTok', value: '159k', href: 'https://www.tiktok.com/@_arsalanahmad' },
      { id: 'instagram', label: 'Instagram', value: '17k', href: 'https://www.instagram.com/_arsalanahmad' },
    ],
    engagement: '7.4%',
    gender: '61.1% female',
    age: '18-24 yo',
    mediaKit: `${KIT}_arsalanahmad`,
  },
  {
    id: 'atony-choy',
    name: 'Atony Choy',
    photo:
      'https://cdn.beacons.ai/agency_content/9561e4c5-41d6-495e-a085-170d3f2d2d2b/nurse_choy_mediakit_header_profile_picture.png?q=1754696254.5989964',
    links: [
      { id: 'tiktok', label: 'TikTok', value: '21k', href: 'https://www.tiktok.com/@atonychoy' },
      { id: 'instagram', label: 'Instagram', value: '8k', href: 'https://www.instagram.com/nurse_choy' },
    ],
    engagement: '11.2%',
    gender: '54.4% male',
    age: '18-24 yo',
    mediaKit: `${KIT}nurse_choy`,
  },
  {
    id: 'ben-mitrow',
    name: 'Ben Mitrow',
    photo:
      'https://cdn.beacons.ai/agency_content/9561e4c5-41d6-495e-a085-170d3f2d2d2b/mentality.mit_mediakit_header_profile_picture.png?q=1772644779.947472',
    links: [
      { id: 'instagram', label: 'Instagram', value: '31k', href: 'https://www.instagram.com/mentality.mit' },
      { id: 'tiktok', label: 'TikTok', value: '12k', href: 'https://www.tiktok.com/@benmitrow' },
    ],
    engagement: '5.9%',
    gender: '52.3% female',
    age: '18-24 yo',
    mediaKit: `${KIT}mentality.mit`,
  },
  {
    id: 'brad-ledford',
    name: 'Brad Ledford',
    photo:
      'https://cdn.beacons.ai/user_content/YSGo9m7OCtWkThEAvoJpyyA6KT03/_bradledford__mediakit_header_profile_picture.png?q=1728606678.7182982',
    links: [
      {
        id: 'instagram',
        label: 'Instagram',
        value: '192k',
        href: 'https://www.instagram.com/_bradledford_',
      },
    ],
    engagement: '7.0%',
    gender: '53.8% female',
    age: '18-24 yo',
    mediaKit: `${KIT}_bradledford_`,
  },
  {
    id: 'brian-beckmann',
    name: 'Brian Beckmann',
    photo:
      'https://cdn.beacons.ai/agency_content/9561e4c5-41d6-495e-a085-170d3f2d2d2b/beckslife6_mediakit_header_profile_picture.png?q=1770245233.5319126',
    links: [
      { id: 'tiktok', label: 'TikTok', value: '32k', href: 'https://www.tiktok.com/@bribec6' },
      { id: 'instagram', label: 'Instagram', value: '31k', href: 'https://www.instagram.com/beckslife6' },
    ],
    engagement: '5.7%',
    gender: '59.7% male',
    age: '18-24 yo',
    mediaKit: `${KIT}beckslife6`,
  },
  {
    id: 'brooke-monk',
    name: 'Brooke Monk',
    photo:
      'https://cdn.beacons.ai/user_content/WK1x1iqgGzbjD8b69dhE4PPiU3r2/brooke.monk_mediakit_header_profile_picture.png?q=1718752312.4071534',
    links: [
      { id: 'tiktok', label: 'TikTok', value: '49M', href: 'https://www.tiktok.com/@brookemonk_' },
      {
        id: 'youtube',
        label: 'YouTube',
        value: '12M',
        href: 'https://www.youtube.com/channel/UC73sF-7Ihcs1HpnXEEXZ2ew',
      },
      { id: 'instagram', label: 'Instagram', value: '8.3M', href: 'https://www.instagram.com/brookemonk' },
    ],
    engagement: '8.3%',
    gender: '75.0% female',
    age: '18-24 yo',
    mediaKit: `${KIT}brookmonk`,
  },
]

// 说明文案：只声明能成立的事——分类可以点选，但 8 位未标注分类；搜索与 Filters/Sort 未接入。
// TOP AGE 按项目方要求统一写成 18-24 yo（已不是参考站的原始数字，对外前需换成真实数据）。
export const talentsNote =
  '8 位达人的简介、头像、粉丝数与互动率来自参考站（Friends In Reality / beacons.ai），属演示内容；分类按钮可点选，但本页 8 位尚未标注分类；搜索、Filters、Sort 未接入。'
