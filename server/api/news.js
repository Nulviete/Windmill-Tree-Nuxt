import { serverSupabaseClient } from "#supabase/server"
import { fetchPaginatedNews } from "../utils/news"

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const query = getQuery(event)

  return fetchPaginatedNews(client, {
    prefix: "news",
    page: query.page,
    perPage: query.perPage,
  })
})
