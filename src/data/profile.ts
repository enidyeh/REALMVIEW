// 首屏与「01 适合谁」内容。
// 来源：项目方提供的品牌与服务笔记。门槛数值与例外情况仍待项目方确认。

export const brand = {
  en: 'REALMVIEW',
  zh: '域见',
}

export const hero = {
  titleLine: '为品牌搭一座',
  titleAccent: '通向青年文化的桥。',
  lede: '域见服务已经有产品、货源和真实销售痕迹的 0→1 品牌。我们不讲空泛的品牌故事，只做三件事：把内容做出来、把场景搭起来、把交易跑通。',
}

// 首屏规格条：[BASE] 与 [SERVICES] 两项的值上下翻动轮换
// （仅 [BASE] / [SERVICES] 两项，其余单元格已删除）
// cities 与 heroNodes 的七个城市保持一致（含洛杉矶），只是轮播顺序自己一套。
// 首屏底部的行动按钮：2026-10-09 取代了原来的 [BASE] / [SERVICES] 两格规格条。
// 用描边按钮（不是实心黑），和上方那五个实心入口按钮区分开。
export const heroCta = { label: 'WORK WITH US', href: '#survey' }

// ⚠️ 以下 heroTicker 目前**没有页面在用**（规格条被 heroCta 取代了），
// 连同 components/RotatingValue.tsx 与 site.css 里的 .spec-strip / .rota* 一起保留，
// 方便随时把规格条装回去（本项目没有 git，删了不可回滚）。
export const heroTicker = {
  cities: ['SINGAPORE', 'HONGKONG', 'SHANGHAI', 'SEOUL', 'TOKYO', 'LOS ANGELES', 'NEW YORK'],
  services: ['品牌营销策略', '品牌视觉设计', '达人营销合作', '落地业务战略'],
}

// 首屏球体上依次亮起的七个城市信标。
// 坐标是 viewBox 0 0 640 640 里的位置（球心 320,320）。**数组顺序 = 放射出现的顺序**
// （新加坡 → 香港 → 上海 → 首尔 → 东京 → 洛杉矶 → 纽约）。
//
// 排布（相对球心的方位，2026-10-09 按项目方草图 + 两轮微调）：
//   首尔在球心上方偏左、上海在左边、香港更左且更低、新加坡在左下方靠近外圈、
//   东京在首尔右下方（离球心更近）、纽约在最右、洛杉矶在下方偏右。

// ⚠️ 可用范围（实测值，改坐标前先看这三条）：
//   1. y 不能小于约 105 —— hero 上边缘在约 -7，再往上会被裁掉或被粘顶栏盖住
//      （首尔原本 y=60 就"消失"过）。
//   2. y 不能大于约 560、x 不能小于约 40 —— 会被 hero 下边缘 / 左边缘裁掉。
//   3. x 也不能太大：城市名的右边缘不能超出视口。各宽度实测的可见 local x 上限
//      取最差一档（1920px 宽）是 519，减去标签半宽（NEW YORK 28.6、LOS ANGELES 约 39）
//      → 纽约最多约 490、洛杉矶最多约 480，短标签可以更靠右。改完要跑一次自检。
export const heroNodes = [
  { id: 'singapore', label: 'SINGAPORE', x: 150, y: 520 },
  { id: 'hongkong', label: 'HONGKONG', x: 72, y: 415 },
  { id: 'shanghai', label: 'SHANGHAI', x: 108, y: 300 },
  { id: 'seoul', label: 'SEOUL', x: 196, y: 140 },
  { id: 'tokyo', label: 'TOKYO', x: 240, y: 232 },
  { id: 'losangeles', label: 'LOS ANGELES', x: 330, y: 455 },
  { id: 'newyork', label: 'NEW YORK', x: 435, y: 405 },
]

// 首屏五个入口按钮：顺序固定，全部用主按钮的黑色样式
export const heroActions = [
  { id: 'work', label: '看项目合作', href: '#work' },
  { id: 'talents', label: '达人合作', href: '#talents' },
  { id: 'services', label: '可选服务', href: '#services' },
  { id: 'insights', label: '品牌灵感', href: '#columns' },
  { id: 'about', label: '关于我们', href: '#group-about' },
]

// 03 栏目的内容。2026-10-09 按项目方要求改版：
// 原来「八条门槛（编号 + 大标题 + 正文）」改成**一份选择问卷 + 一张需求单小票**。
// 标题 '我们的服务为你而生。' 显示在 SERVICES 板块标题行的右侧（原「我们只服务已经站在
// 起跑线上的品牌。」已按项目方要求换掉）；问卷上方的小标题是「您目前的当务之急」。
export const fitSection = {
  en: 'WHO WE WORK WITH',
  title: '我们的服务为你而生。',
  prompt: '您目前的当务之急',
  promptNote: '勾选你现在缺的部分，右侧会生成一张需求单；信息只在本页内存里，不提交、不保存。',
  // 每一条只有一行（不再有编号 + 大标题 + 正文三层）
  needs: [
    '没有产品 / 货源',
    '没有启动资金',
    '没有供应链',
    '没有真实销售渠道',
    '没有明确创始人投入',
    '没有已有内容账号',
    '没有过往销售数据',
    '没有可验证的用户需求',
  ],
  receipt: {
    label: '需求单',
    empty: '还没有勾选。左边点一下，这里就会逐条落下来。',
    totalLabel: '合计',
    totalUnit: '项待解决',
    code: 'NO. RV-0000',
    more: '填写详细需求表',
    jump: '先看下面为你推荐的服务',
    jumpHref: '#services',
  },
  foot: [
    {
      label: '满足越多越适合',
      body: '八条不是必须全中。中的越多，我们能压缩的时间越短，报价也越实在。',
    },
    {
      label: '只有想法的情况',
      body: '如果现在只有想法、还没有产品，通常不在域见的服务范围内；更建议先把产品做出来。',
    },
  ],
  note: '筛选标准由项目方提供；具体门槛数值与例外情况待确认。',
}
