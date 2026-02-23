import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const query = getQuery(event)

    const slug = query.name

    const { data } = await client.from('projects').select('*').eq('slug', slug)  
        
    return { data } 
})