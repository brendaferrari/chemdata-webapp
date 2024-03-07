// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: { 
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: { 
    highlight: { 
      theme: { 
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  css: ['~/assets/styles/main.css'],
  colorMode: {
    classSuffix: ''
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
