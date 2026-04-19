import { normalizeNewsItem, extractNewsIdFromSlug } from "~/utils/news"

const NEWS_SELECT =
  "id, new_title, created_at, new_img, new_body, new_signature, new_links, new_link_interview"

function buildNewsQuery(client, options = {}) {
  const { limit, withCount = false } = options
  let query = client
    .from("News")
    .select(NEWS_SELECT, withCount ? { count: "exact" } : undefined)
    .order("id", { ascending: false })

  if (typeof limit === "number") {
    query = query.limit(limit)
  }

  return query
}

export async function fetchNormalizedNews(client, options = {}) {
  const { limit, prefix = "news" } = options
  const { data, error } = await buildNewsQuery(client, { limit })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return (data ?? []).map((item, index) => normalizeNewsItem(item, index, prefix))
}

export async function fetchPaginatedNews(client, options = {}) {
  const prefix = options.prefix ?? "news"
  const requestedPage = Math.max(1, Number.parseInt(String(options.page ?? "1"), 10) || 1)
  const perPage = Math.max(1, Number.parseInt(String(options.perPage ?? "5"), 10) || 5)

  const fetchPage = async (page) => {
    const from = (page - 1) * perPage
    const to = from + perPage - 1

    return buildNewsQuery(client, { withCount: true }).range(from, to)
  }

  let { data, error, count } = await fetchPage(requestedPage)

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  const totalItems = count ?? 0
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage))
  const currentPage = Math.min(requestedPage, totalPages)

  if (currentPage !== requestedPage && totalItems > 0) {
    const fallback = await fetchPage(currentPage)
    data = fallback.data
    error = fallback.error

    if (error) {
      throw createError({ statusCode: 500, statusMessage: error.message })
    }
  }

  return {
    items: (data ?? []).map((item, index) => normalizeNewsItem(item, index, prefix)),
    totalItems,
    page: currentPage,
    perPage,
    totalPages,
  }
}

export async function fetchNewsDetailPayload(client, slug) {
  const items = await fetchNormalizedNews(client, { prefix: "news" })
  const normalizedSlug = String(slug ?? "")
  const idFromSlug = extractNewsIdFromSlug(normalizedSlug)

  const article =
    items.find((item) => item.slug === normalizedSlug) ??
    items.find((item) => String(item.id) === idFromSlug) ??
    null

  if (!article) {
    throw createError({ statusCode: 404, statusMessage: "Article not found" })
  }

  const currentIndex = items.findIndex((item) => item.slug === article.slug)
  const previousArticle = currentIndex > 0 ? items[currentIndex - 1] : null
  const nextArticle =
    currentIndex >= 0 && currentIndex < items.length - 1 ? items[currentIndex + 1] : null
  const relatedArticles = items.filter((item) => item.slug !== article.slug).slice(0, 3)

  return {
    article,
    previousArticle,
    nextArticle,
    relatedArticles,
  }
}
