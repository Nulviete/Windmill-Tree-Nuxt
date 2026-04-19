import { serverSupabaseClient } from '#supabase/server'
import { normalizeNewsItem } from '~/utils/news'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('News')
    .select('id, new_title, created_at')
    .order('id', { ascending: false })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return (data ?? []).map((item, index) => {
    const normalized = normalizeNewsItem(item, index, 'news')

    return {
      loc: normalized.path,
      lastmod: normalized.created_at || undefined,
      changefreq: 'monthly',
    }
  })
})
