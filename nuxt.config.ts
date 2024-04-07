// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/supabase'
  ],
  css: [
    '~/assets/css/main.scss'
  ]
 
  
})