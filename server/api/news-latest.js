import { serverSupabaseClient } from "#supabase/server"
import { fetchNormalizedNews } from "../utils/news"

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  return fetchNormalizedNews(client, { limit: 4, prefix: "latest" })
})
