import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('projects')
    .select('slug')

  if (error) throw createError({ statusCode: 500, statusMessage: error.message })

  return (data ?? [])
    .filter((project) => project?.slug)
    .map((project) => ({
      loc: `/projects/${project.slug}`,
      changefreq: 'monthly',
    }))
})
