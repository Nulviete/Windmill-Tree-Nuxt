type RawNewsItem = Record<string, any>

const normalizeStringList = (value: unknown) =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string" && item.trim())
    : []

export function slugifyNewsTitle(value: string) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function createNewsSlug(item: { id?: string | number; title?: string }) {
  const id = String(item?.id ?? "").trim()
  const titleSlug = slugifyNewsTitle(item?.title ?? "")

  if (!id) {
    return titleSlug || "news-item"
  }

  return titleSlug ? `${id}-${titleSlug}` : id
}

export function extractNewsIdFromSlug(value: string) {
  const slug = String(value ?? "").trim()

  if (!slug) {
    return ""
  }

  const [idPart] = slug.split("-")
  return idPart ?? ""
}

export function getNewsPath(item: { id?: string | number; title?: string }) {
  return `/latest-news/${createNewsSlug(item)}`
}

export function normalizeNewsItem(item: RawNewsItem, index = 0, prefix = "news") {
  const id = item?.id ?? `${prefix}-${index}`
  const body = normalizeStringList(item?.new_body)
  const title = item?.new_title ?? ""

  return {
    id,
    slug: createNewsSlug({ id, title }),
    path: getNewsPath({ id, title }),
    new_title: title,
    created_at: item?.created_at ?? "",
    new_img: item?.new_img ?? "",
    new_body: body,
    new_signature: normalizeStringList(item?.new_signature),
    new_links: normalizeStringList(item?.new_links),
    new_link_interview: normalizeStringList(item?.new_link_interview),
    preview: body.find((paragraph) => paragraph.trim()) ?? "",
  }
}
