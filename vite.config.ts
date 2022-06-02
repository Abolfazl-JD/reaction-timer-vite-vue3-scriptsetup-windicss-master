import { fileURLToPath, URL } from "url"
import path from 'path'

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import WindiCSS from "vite-plugin-windicss"
import { VitePWA } from "vite-plugin-pwa"
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
      compositionOnly: true
    }),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/favicon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "REACTION TIMER",
        short_name: "reaction",
        description:
          "vue vite app with new scriptSetup with windicss using typescript",
        theme_color: "#059669",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),

    AutoImport({
      imports: [
        'vue-i18n',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
