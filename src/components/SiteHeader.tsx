import { useEffect, useRef, useState } from 'react'
import { brand } from '../data/profile'
import { navGroups } from '../data/nav'
import { defaultLanguageId, languageNote, languages } from '../data/languages'

// 顶部只放四个板块标题，点开才是该板块下的中文栏目；最右是一个小语言切换。
export function SiteHeader() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [languageId, setLanguageId] = useState(defaultLanguageId)
  const navRef = useRef<HTMLElement | null>(null)

  const currentLanguage = languages.find((item) => item.id === languageId) ?? languages[0]

  // 点面板外部或按 Esc 关闭；同一时间只开一个。
  useEffect(() => {
    if (!openId) return

    function handlePointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpenId(null)
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenId(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openId])

  return (
    <header className="rv-header">
      <div className="shell">
        <div className="rv-header-bar">
          <a className="rv-brand" href="#top" aria-label="域见 REALMVIEW，回到页首">
            <svg className="rv-mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="9.5" />
              <ellipse cx="12" cy="12" rx="9.5" ry="3.6" />
              <ellipse cx="12" cy="12" rx="4.2" ry="9.5" />
              <path d="M2.5 12h19" />
              <path d="M5.6 6.1 18.4 17.9" />
            </svg>
            <span className="rv-brand-zh">{brand.zh}</span>
            <span className="rv-brand-en">{brand.en}</span>
          </a>

          <nav className="rv-nav" aria-label="页面板块" ref={navRef}>
            {navGroups.map((group) => {
              const open = openId === group.id
              return (
                <div className={`rv-nav-item${open ? ' is-open' : ''}`} key={group.id}>
                  <button
                    className="rv-nav-trigger"
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    aria-controls={`${group.id}-menu`}
                    onClick={() => setOpenId(open ? null : group.id)}
                  >
                    {group.en}
                    <span className="rv-nav-caret" aria-hidden="true" />
                  </button>

                  {open && (
                    <div className="rv-nav-menu" id={`${group.id}-menu`}>
                      <a
                        className="rv-nav-menu-head"
                        href={`#${group.id}`}
                        onClick={() => setOpenId(null)}
                      >
                        <span className="rv-nav-menu-zh">{group.zh}</span>
                        <span className="eyebrow-inline">{group.en}</span>
                      </a>
                      <ul className="rv-nav-menu-list">
                        {group.items.map((item) => (
                          <li key={item.id}>
                            <a
                              className="rv-nav-menu-link"
                              href={`#${item.id}`}
                              onClick={() => setOpenId(null)}
                            >
                              <span className="rv-nav-menu-num">{item.num}</span>
                              <span>{item.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}

            {/* 语言切换：演示控件，正文尚未翻译 */}
            <div className="rv-nav-item rv-nav-lang">
              <button
                className="rv-nav-trigger rv-lang-trigger"
                type="button"
                aria-expanded={openId === 'lang'}
                aria-haspopup="true"
                aria-controls="lang-menu"
                aria-label={`语言：${currentLanguage.label}`}
                lang={currentLanguage.id}
                onClick={() => setOpenId(openId === 'lang' ? null : 'lang')}
              >
                {currentLanguage.label}
                <span className="rv-nav-caret" aria-hidden="true" />
              </button>

              {openId === 'lang' && (
                <div className="rv-nav-menu rv-lang-menu" id="lang-menu">
                  <p className="rv-lang-head">
                    <span className="rv-nav-menu-zh">语言</span>
                    <span className="eyebrow-inline">LANGUAGE</span>
                  </p>
                  <ul className="rv-nav-menu-list">
                    {languages.map((item) => (
                      <li key={item.id}>
                        <button
                          className="rv-lang-option"
                          type="button"
                          aria-current={item.id === languageId}
                          onClick={() => {
                            setLanguageId(item.id)
                            setOpenId(null)
                          }}
                        >
                          <span lang={item.id}>{item.label}</span>
                          <span className="rv-nav-menu-num">{item.code}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <p className="rv-lang-note">{languageNote}</p>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
