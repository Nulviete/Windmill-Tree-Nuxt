import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('projects')
    .select('name')  // nebo 'id', podle toho co máš v URL

  if (error) throw createError({ statusCode: 500, statusMessage: error.message })

  return data.map(project => `/Projects/${project.name}`)
})
