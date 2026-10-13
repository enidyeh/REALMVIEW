// 语言切换的选项。
//
// ⚠️ 当前只是界面控件：切换会改变按钮上的语言名，但页面正文尚未翻译。
// 真正的多语言需要把 src/data/*.ts 的文案补齐成五种语言，下拉里已标注「正文翻译待项目方提供」。
//
// label 用**各语言自己的写法**（endonym），不用中文名：
// 中文 / English / Español / 日本語 / 한국어。code 是给版式用的两字母标记。

export type Language = {
  id: string
  label: string
  code: string
}

export const languages: Language[] = [
  { id: 'zh', label: '中文', code: 'ZH' },
  { id: 'en', label: 'English', code: 'EN' },
  { id: 'es', label: 'Español', code: 'ES' },
  { id: 'ja', label: '日本語', code: 'JA' },
  { id: 'ko', label: '한국어', code: 'KO' },
]

export const defaultLanguageId = 'zh'

export const languageNote = '演示控件 · 正文翻译待项目方提供'
