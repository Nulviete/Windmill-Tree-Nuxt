// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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