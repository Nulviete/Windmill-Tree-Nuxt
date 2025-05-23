import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const query = getQuery(event)

    const year = query.year

    const { data } = await client.from('projects').select('*').eq('year', year) 
        
    return { data } 
})