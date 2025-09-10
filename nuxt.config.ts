/// <reference types="@nuxtjs/sitemap" />

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Windmill Tree Foundation',
      meta: [],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "WindmillTree Foundation",
            url: "https://windmilltree.org/"
          })
        }
      ]
    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    storageKey: 'color-mode'
  },

  ssr: false,

  devtools: { enabled: true },

  css: ['~/assets/css/main.scss'],

  modules: [
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/supabase',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  site: {
    url: "https://windmilltree.org",
    name: "Windmill Tree Foundation",
  },

  sitemap: {
    sources: [
      '/api/projects-for-sitemap'
    ]
  },
  
  supabase: {
    redirect: false
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  compatibilityDate: '2025-01-12'
})