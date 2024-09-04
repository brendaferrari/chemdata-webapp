// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiServer: process.env.apiServer,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  content: {
    highlight: {
      langs: ["python"],
      theme: {
        default: "min-light",
        dark: "min-dark",
      },
    },
  },
  css: ["~/assets/styles/main.css"],
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
