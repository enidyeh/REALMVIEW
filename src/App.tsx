import type { ReactNode } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { PillarsCarousel } from './components/PillarsCarousel'
import { GlobeNodes } from './components/GlobeNodes'
import { TalentsRoster } from './components/TalentsRoster'
import { NeedsQuestionnaire } from './components/NeedsQuestionnaire'
import { ColumnArticles } from './components/ColumnArticles'
// 提示：RotatingValue 与 SurveyForm 已不在 App 里直接用
//（前者停用、后者搬到 NeedsQuestionnaire 里），文件都保留。
import { fitSection, hero, heroActions, heroCta } from './data/profile'
import { deliverables, services, servicesSection } from './data/services'
import { models, modelsSection } from './data/models'
import { columnsNote, columnsSection, creatorsCommunity, mediaCarriers } from './data/columns'
import { works, workSection } from './data/work'
import { footer, footerFlag } from './data/footer'
import { talentsIntro, talentsSection } from './data/talents'
import {
  aboutGroup,
  insightsGroup,
  navItem,
  projectsGroup,
  servicesGroup,
  talentsGroup,
  type NavGroup,
  type NavItem,
} from './data/nav'

// 板块：英文大区块。2026-10-09 起标题行只有「英文板块名 + 中文标题」两段，
// 原来右侧的「栏目名列表」与各栏目自己的眉题/列导都已按项目方要求删除。
function Group({ group, head, children }: { group: NavGroup; head: string; children: ReactNode }) {
  return (
    <section className="grp" id={group.id} aria-labelledby={`${group.id}-title`}>
      <div className="shell">
        <header className="grp-head">
          <h2 className="grp-title" id={`${group.id}-title`}>
            {group.en}
          </h2>
          <p className="grp-head-zh">{head}</p>
        </header>
      </div>
      {children}
    </section>
  )
}

// 栏目标题：现在只有 h3（没有眉题、没有列导）
function SecTitle({ item, children }: { item: NavItem; children: ReactNode }) {
  return (
    <h3 className="sec-title sec-title-plain" id={`${item.id}-title`}>
      {children}
    </h3>
  )
}

function App() {
  return (
    <div className="rv-app">
      <SiteHeader />

      <main>
        {/* 首屏 */}
        <section className="rv-hero" id="top" aria-labelledby="hero-title">
          {/* 纯装饰：细线球体 + 连接线，呼应「跨域」 */}
          <svg className="rv-hero-backdrop" viewBox="0 0 640 640" aria-hidden="true" focusable="false">
            <g className="rv-globe">
              <circle cx="320" cy="320" r="300" />
              <ellipse cx="320" cy="320" rx="300" ry="98" />
              <ellipse cx="320" cy="320" rx="98" ry="300" />
              <ellipse cx="320" cy="320" rx="212" ry="300" />
              <ellipse cx="320" cy="320" rx="300" ry="214" />
              <path d="M20 320h600" />
              <path d="M66 158 574 482" />
              <path d="M66 482 574 158" />
            </g>
            {/* 球体自转；七个城市信标按顺序放射（见 components/GlobeNodes.tsx） */}
            <GlobeNodes />
          </svg>
          <div className="shell">
            <h1 className="rv-hero-title" id="hero-title">
              {hero.titleLine}
              <br />
              <em>{hero.titleAccent}</em>
            </h1>
            <p className="rv-hero-lede">{hero.lede}</p>
            <div className="rv-hero-actions">
              {heroActions.map((action) => (
                <a className="btn btn-primary" href={action.href} key={action.id}>
                  {action.label}
                </a>
              ))}
            </div>

            {/* 行动按钮：取代了原来的 [BASE] / [SERVICES] 规格条 */}
            <div className="rv-hero-cta">
              <a className="btn" href={heroCta.href}>
                {heroCta.label}
              </a>
            </div>
          </div>
        </section>

        {/* ══ PROJECTS ══ */}
        <Group group={projectsGroup} head={workSection.title}>
          {/* 01 能力与作品：标题已上移到板块行，这里直接是案例卡 */}
          <section className="sec" id="work" aria-label={navItem(projectsGroup, 'work').label}>
            <div className="shell">
              <div className="work-grid">
                {works.map((item) => (
                  <article className={`work-card${item.placeholder ? ' is-placeholder' : ''}`} key={item.id}>
                    <div className="work-thumb">
                      {item.placeholder ? '案例待项目方提供' : '现场照片待项目方提供'}
                    </div>
                    <div className="work-body">
                      <h4 className="work-title">{item.title}</h4>
                      <p className="work-sub">{item.sub}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Group>

        {/* ══ TALENTS ══ */}
        <Group group={talentsGroup} head={talentsSection.title}>
          {/* 02 达人阵容：标题已上移到板块行 */}
          <section className="sec" id="talents" aria-label={navItem(talentsGroup, 'talents').label}>
            <div className="shell">
              <div className="tl-intro">
                <p className="tl-intro-body">{talentsIntro}</p>
              </div>

              <TalentsRoster />
            </div>
          </section>
        </Group>

        {/* ══ SERVICES ══ */}
        <Group group={servicesGroup} head={fitSection.title}>
          {/* 03 当务之急 + 需求单 + 问卷（标题已上移到板块行） */}
          <section className="sec" id="who" aria-label={navItem(servicesGroup, 'who').label}>
            <div className="shell">
              <NeedsQuestionnaire />
            </div>
          </section>

          {/* 04 为你推荐的服务 */}
          <section className="sec" id="services" aria-labelledby="services-title">
            <div className="shell">
              <SecTitle item={navItem(servicesGroup, 'services')}>{servicesSection.title}</SecTitle>

              <div className="svc-grid">
                {services.map((service) => (
                  <article className="svc" key={service.num}>
                    <div className="svc-top">
                      <span className="svc-en">
                        {service.num} / {service.en}
                      </span>
                      <h4 className="svc-name">{service.name}</h4>
                    </div>
                    <p className="svc-price">
                      <span className="svc-price-value">{service.price}</span>
                      <span className="svc-price-unit">{service.unit}</span>
                    </p>
                    <ul className="svc-list">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="deliver">
                <span className="eyebrow-inline">{deliverables.label}</span>
                <ul className="deliver-list">
                  {deliverables.items.map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="sec-note">
                <strong>报价说明 · </strong>
                {servicesSection.priceNote}
              </p>
            </div>
          </section>

          {/* 05 合作方式 */}
          <section className="sec" id="models" aria-labelledby="models-title">
            <div className="shell">
              <SecTitle item={navItem(servicesGroup, 'models')}>{modelsSection.title}</SecTitle>

              <div className="model-grid">
                {models.map((model) => (
                  <article className={`model${model.featured ? ' is-featured' : ''}`} key={model.id}>
                    <div className="model-head">
                      <h4 className="model-name">
                        <span className="model-num">{model.num}</span>
                        {model.name}
                      </h4>
                      <span className="eyebrow-inline">{model.en}</span>
                    </div>

                    <dl className="model-rows">
                      <div>
                        <dt>收入模式</dt>
                        <dd>{model.income}</dd>
                      </div>
                    </dl>

                    <p className="model-body">{model.body}</p>

                    <p className="model-fit">
                      <span className="eyebrow-inline">适合</span>
                      {model.fit}
                    </p>

                    {model.featured && <span className="model-badge">现阶段主推</span>}
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Group>

        {/* ══ INSIGHTS ══ */}
        <Group group={insightsGroup} head={columnsSection.title}>
          {/* 06 内容栏目：四个栏目可点选，下方文章区带左右圆形箭头翻页 */}
          <section className="sec" id="columns" aria-label={navItem(insightsGroup, 'columns').label}>
            <div className="shell">
              <ColumnArticles />

              <div className="media-strip">
                <span className="eyebrow-inline">{mediaCarriers.label}</span>
                {mediaCarriers.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="deliver is-plain">
                <span className="eyebrow-inline">
                  {creatorsCommunity.label} / {creatorsCommunity.status}
                </span>
                <div>
                  <p>
                    <strong>{creatorsCommunity.name}</strong> · {creatorsCommunity.en}
                  </p>
                  <p>{creatorsCommunity.body}</p>
                </div>
              </div>

              <p className="sec-note">{columnsNote}</p>
            </div>
          </section>
        </Group>

        {/* ══ ABOUT ══ */}
        {/* 合作问卷已按项目方要求移到 03 需求单下面（id 仍是 #survey）；这里会做成关于域见的信息 */}
        <Group group={aboutGroup} head="关于域见">
          <section className="sec" id="about" aria-label={navItem(aboutGroup, 'about').label}>
            <div className="shell">
              <div className="deliver is-plain">
                <span className="eyebrow-inline">内容待项目方提供</span>
                <div>
                  <p>
                    <strong>关于域见</strong> · 品牌介绍、团队、合作与联系方式
                  </p>
                  <p>
                    这一栏会放关于域见自己的信息。在项目方给出内容之前，此处保留位置，不预填虚构的公司介绍、
                    成立时间、团队人数或客户名单。页脚的联系方式同样待替换。
                  </p>
                </div>
              </div>

              <p className="sec-note">
                合作问卷现在的位置：SERVICES → 「{fitSection.prompt}」右侧需求单上的「
                {fitSection.receipt.more}」。
              </p>

              {/* 卖点轮播：2026-10-10 按项目方要求从 PROJECTS 整体挪到 ABOUT 内。
                  它以前有标题与按键，现在只剩自动轮播 + 进度条。 */}
              <div className="pl-block">
                <PillarsCarousel />
              </div>
            </div>
          </section>
        </Group>
      </main>

      <footer className="rv-footer">
        <div className="shell">
          <div className="rv-footer-top">
            <p className="rv-footer-brand">域见 REALMVIEW</p>
            <span className="barcode" aria-hidden="true" />
          </div>

          <p className="rv-footer-flag">{footerFlag}</p>

          <p className="rv-footer-headline">{footer.headline}</p>

          <div className="rv-footer-mid">
            <div className="rv-footer-cta">
              <p>{footer.ctaLead}</p>
              <p className="rv-footer-cta-action">{footer.ctaAction}</p>
              <a className="rv-footer-email" href={`mailto:${footer.email}`}>
                {footer.email}
              </a>
            </div>

            <ul className="rv-footer-phones">
              {footer.phones.map((phone) => (
                <li key={phone.id}>
                  <span className="rv-footer-phone-number">{phone.number}</span>
                  <span className="rv-footer-phone-city">{phone.city}</span>
                </li>
              ))}
            </ul>

            <ul className="rv-footer-socials">
              {footer.socials.map((social) => (
                <li className="rv-footer-social" key={social.id}>
                  <img src={social.image} alt="" loading="lazy" />
                  <span>{social.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="rv-footer-strapline">{footer.strapline}</p>

          <div className="rv-footer-bottom">
            <p className="rv-footer-note">{footer.demoNote}</p>
            <p className="rv-footer-note rv-footer-legal">
              <span>{footer.copyright}</span>
              <span>{footer.legal}</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
