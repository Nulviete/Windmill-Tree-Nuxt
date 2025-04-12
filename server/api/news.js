import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const { data } = await client.from('News').select('*').order('id', { ascending: false }).limit(2)  
        
    return { data } 
})