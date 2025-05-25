// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Windmill Tree Foundation',
      meta: [ {  }],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context" : "https://windmilltree.org",
          "@type" : "WebSite",
          "name" : "WindmillTree Foundation",
          "url" : "https://windmilltree.org/"
        })
      }]
    }
  },

  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/supabase',
    "@nuxt/ui"
  ],

  css: [
    '~/assets/css/main.scss'
  ],

  supabase: {
    redirect: false
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-12",
})