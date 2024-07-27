// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [ { name: "google-site-verification", content: "hLKALut4Uu3-zTOQhlRhT-laE6sj4vtjNhZ5UrOyB3s" }]
    }
  },
  ssr: false,
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
  
})