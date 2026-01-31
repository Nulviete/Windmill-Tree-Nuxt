import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const { data } = await client.from('team').select('*').order('id', { ascending: true })  
        
    return { data } 
})