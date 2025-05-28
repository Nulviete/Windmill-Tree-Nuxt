import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const query = getQuery(event)

    const year = query.year

     if (!year) {
    // Můžeš vrátit chybu nebo všechny projekty (doporučuji chybu)
    throw createError({ statusCode: 400, statusMessage: 'Year query parameter is required' })
  }

    const { data, error } = await client.from('projects').select('*').eq('year', year) 

    if (error) throw createError({ statusCode: 500, statusMessage: error.message })
        
    return { data } 
})