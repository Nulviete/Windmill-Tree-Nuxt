import { serverSupabaseClient } from "#supabase/server"
import { fetchNewsDetailPayload } from "../../utils/news"

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  return fetchNewsDetailPayload(client, event.context.params?.slug)
})
