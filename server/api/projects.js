import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const { data } = await client.from('projects').select('*').order('createdAt', { ascending: false })  
        
    return { data } 
})