<template>
  <section class="latest-news-detail">
    <div v-if="pending" class="latest-news-detail-status">
      <LoadingSpinner />
    </div>

    <div v-else-if="error" class="latest-news-detail-status">
      <p>We could not load this article right now.</p>
    </div>

    <div v-else-if="!article" class="latest-news-detail-status">
      <p>This article could not be found.</p>
      <NuxtLink to="/latest-news" class="latest-news-detail-back">
        Back to latest news
      </NuxtLink>
    </div>

    <div v-else class="latest-news-detail-content">
      <NuxtLink to="/latest-news" class="latest-news-detail-back">
        Back to latest news
      </NuxtLink>

      <NewsCard
        variant="full"
        heading-tag="h1"
        :title="article.new_title"
        :date="article.created_at"
        :image="article.new_img"
        :body="article.new_body"
        :signature="article.new_signature"
        :related-links="article.new_links"
        :interview-links="article.new_link_interview"
        :show-link="false"
      />
    </div>
  </section>
</template>

<script setup>
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";
import { normalizeNewsItem } from "~/utils/news";

const route = useRoute();

const { data, pending, error } = await useAsyncData(
  `news-detail-${String(route.params.slug)}`,
  () =>
    $fetch("/api/news", {
      headers: useRequestHeaders(["cookie"]),
    }),
  {
    default: () => ({ all: [] }),
  }
);

const articles = computed(() => {
  const items = data.value?.all;

  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item, index) => normalizeNewsItem(item, index, "news"));
});

const article = computed(() =>
  articles.value.find((item) => item.slug === String(route.params.slug))
);

if (!pending.value && !error.value && !article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
  });
}

useSeoMeta({
  title: () =>
    article.value?.new_title
      ? `${article.value.new_title} | Windmill Tree`
      : "Latest News | Windmill Tree",
  description: () =>
    article.value?.preview ||
    "Stories, reflections and fresh updates from the Windmill Tree community.",
  ogTitle: () =>
    article.value?.new_title
      ? `${article.value.new_title} | Windmill Tree`
      : "Latest News | Windmill Tree",
  ogDescription: () =>
    article.value?.preview ||
    "Stories, reflections and fresh updates from the Windmill Tree community.",
  ogImage: () => article.value?.new_img || undefined,
});
</script>

<style lang="scss" scoped>
.latest-news-detail {
  padding: 130px 40px 72px;
}

.latest-news-detail-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.latest-news-detail-status {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  font-size: 20px;
  color: rgb(71, 70, 70);
}

.latest-news-detail-back {
  width: fit-content;
  color: #1d4ed8;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 900px) {
  .latest-news-detail {
    padding: 90px 16px 56px;
  }
}
</style>
