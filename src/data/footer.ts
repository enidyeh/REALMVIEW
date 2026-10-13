// 页脚内容。结构与文案由项目方提供，来自 inbridge.co。
//
// ⚠️ 这里的邮箱、电话、社交入口、横幅图片与版权署名都属于 inBridge，不是域见自己的信息。
// 页面上带「待替换」标记；正式上线前必须换成域见自己的联系方式与署名。
// 四张社交图片是 QR / 图标外链，未提供跳转地址，所以先按静态条目渲染。

export const footerFlag = '本页脚的联系方式与署名来自 inbridge.co · 上线前需替换'

export type FooterPhone = { id: string; number: string; city: string }
export type FooterSocial = { id: string; label: string; image: string }

export const footer = {
  headline: 'Bridging the Cultural & Creative divide between East and West.',
  ctaLead: 'Ready to find your brand’s approach to global markets?',
  ctaAction: 'Get in touch, and let’s craft your strategy!',
  strapline: 'Perspectives on branding, culture, and global growth.',
  email: 'hello@inbridge.co',
  phones: [
    { id: 'shanghai', number: '+86 191 1736 1103', city: 'Shanghai' },
    { id: 'london', number: '+44 7721 602 680', city: 'London' },
  ] satisfies FooterPhone[],
  socials: [
    {
      id: 'wechat',
      label: 'WeChat',
      image:
        'https://i-p.rmcdn.net/63d2603cabc7c00020c50f27/5765005/image-af22dd3f-a530-4d1a-a40b-93e45d594e86.png?w=147',
    },
    {
      id: 'official',
      label: 'Official Account',
      image:
        'https://i-p.rmcdn.net/63d2603cabc7c00020c50f27/5765005/image-42e249a8-0025-43f2-81fb-65ca99afbfdf.png?w=147',
    },
    {
      id: 'rednote',
      label: 'Rednote',
      image:
        'https://i-p.rmcdn.net/63d2603cabc7c00020c50f27/5765005/image-582fd8d8-bc7b-4e5f-9b3f-706390aac21e.png?w=147',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      image:
        'https://i-p.rmcdn.net/63d2603cabc7c00020c50f27/5765005/image-59e9bcb5-ff43-46e8-9ad8-f580e8b5d154.png?w=147',
    },
  ] satisfies FooterSocial[],
  copyright: '2026 © inBridge',
  legal: 'Privacy Policy · Terms',
  demoNote: '本页价格为参考区间、案例与表单均为演示内容，不构成正式报价或合作承诺。',
}
