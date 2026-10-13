import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// 独立站点：固定端口，避免与其它本地项目（默认 5173）冲突。
//
// base：GitHub Pages 会把站点挂在 https://enidyeh.github.io/REALMVIEW/ 这个子路径下，
// 构建产物里的 /assets/... 绝对路径会 404，所以部署时用 `--mode pages` 把 base 改成 /REALMVIEW/。
// 本地 npm run dev / npm run build 仍然是 '/'，不受影响。
export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/REALMVIEW/' : '/',
  plugins: [react()],
  server: { port: 5273 },
  preview: { port: 5274 },
}))
