export function usePageSeo(input: {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
}) {
  const route = useRoute()
  const canonicalUrl = computed(
    () => `https://windmilltree.org${input.path ?? route.path}`
  )

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogType: input.type ?? "website",
    ogUrl: () => canonicalUrl.value,
    ogImage: input.image,
    twitterCard: input.image ? "summary_large_image" : "summary",
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: input.image,
  })

  useHead({
    link: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  })
}
