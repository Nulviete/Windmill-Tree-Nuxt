import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const query  = getQuery(event)

    const name = query.name

    const client = await serverSupabaseClient(event)

    return name
})