import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
  compatibilityDate: '2026-10-28',
  head: {
    title: 'S. Michael Cannon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Over engineered resume site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pages: false,
  modules: 
    // Simple usage
    ['nuxt-gtag', '@nuxt/image'], 
 gtag: {
      id: 'UA-73202553-1'
    }
})
