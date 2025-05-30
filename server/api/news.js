import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)

    const { data: latestNews, error: error1 } = await client.from('News').select('*').order('id', { ascending: false }).limit(2)  

    const { data: allNews, error: error2 } = await client.from('News').select('*').order('id', { ascending: false })
        
     if (error1 || error2) {
    console.error('Supabase error:', error1 || error2)
    return createError({ statusCode: 500, statusMessage: 'Failed to load news' })
    }

    return { 
        latest: latestNews, 
        all: allNews } 
})