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

      <nav
        v-if="previousArticle || nextArticle"
        class="latest-news-detail-nav"
        aria-label="Article navigation"
      >
        <NuxtLink
          v-if="previousArticle"
          :to="previousArticle.path"
          class="latest-news-detail-nav-link"
        >
          <span class="latest-news-detail-nav-label">Previous article</span>
          <span class="latest-news-detail-nav-title">
            {{ previousArticle.new_title }}
          </span>
        </NuxtLink>

        <div v-else class="latest-news-detail-nav-spacer" aria-hidden="true" />

        <NuxtLink
          v-if="nextArticle"
          :to="nextArticle.path"
          class="latest-news-detail-nav-link latest-news-detail-nav-link--next"
        >
          <span class="latest-news-detail-nav-label">Next article</span>
          <span class="latest-news-detail-nav-title">
            {{ nextArticle.new_title }}
          </span>
        </NuxtLink>
      </nav>

      <section
        v-if="relatedArticles.length"
        class="latest-news-more"
        aria-labelledby="latest-news-more-title"
      >
        <div class="latest-news-more-header">
          <p class="latest-news-more-kicker">Keep reading</p>
          <h2 id="latest-news-more-title" class="latest-news-more-title">
            More updates
          </h2>
        </div>

        <div class="latest-news-more-grid">
          <NewsCard
            v-for="item in relatedArticles"
            :key="item.id"
            :title="item.new_title"
            :date="item.created_at"
            :image="item.new_img"
            :excerpt="item.preview"
            :link="item.path"
          />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";
import { normalizeNewsItem } from "~/utils/news";

const route = useRoute();
const canonicalUrl = computed(
  () => `https://windmilltree.org${route.path}`
);
const articleDescription = computed(
  () =>
    article.value?.preview ||
    "Stories, reflections and fresh updates from the Windmill Tree community."
);

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

const currentIndex = computed(() =>
  articles.value.findIndex((item) => item.slug === String(route.params.slug))
);

const previousArticle = computed(() => {
  if (currentIndex.value <= 0) {
    return null;
  }

  return articles.value[currentIndex.value - 1] ?? null;
});

const nextArticle = computed(() => {
  if (currentIndex.value < 0 || currentIndex.value >= articles.value.length - 1) {
    return null;
  }

  return articles.value[currentIndex.value + 1] ?? null;
});

const relatedArticles = computed(() =>
  articles.value
    .filter((item) => item.slug !== String(route.params.slug))
    .slice(0, 3)
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
  description: () => articleDescription.value,
  ogTitle: () =>
    article.value?.new_title
      ? `${article.value.new_title} | Windmill Tree`
      : "Latest News | Windmill Tree",
  ogDescription: () => articleDescription.value,
  ogType: "article",
  ogUrl: () => canonicalUrl.value,
  ogImage: () => article.value?.new_img || undefined,
  articlePublishedTime: () => article.value?.created_at || undefined,
  twitterCard: () => (article.value?.new_img ? "summary_large_image" : "summary"),
  twitterTitle: () =>
    article.value?.new_title
      ? `${article.value.new_title} | Windmill Tree`
      : "Latest News | Windmill Tree",
  twitterDescription: () => articleDescription.value,
  twitterImage: () => article.value?.new_img || undefined,
});

useHead({
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
    },
  ],
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

.latest-news-detail-nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.latest-news-detail-nav-link,
.latest-news-detail-nav-spacer {
  min-height: 112px;
  padding: 20px 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 14px 32px rgba(72, 55, 26, 0.08);
}

.latest-news-detail-nav-link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    color 0.25s ease;
}

.latest-news-detail-nav-link:hover,
.latest-news-detail-nav-link:focus-visible {
  transform: translateY(-3px);
  box-shadow: 0 18px 36px rgba(72, 55, 26, 0.12);
  color: #163aa7;
}

.latest-news-detail-nav-link--next {
  text-align: right;
}

.latest-news-detail-nav-label {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgb(71, 70, 70);
}

.latest-news-detail-nav-title {
  font-size: clamp(20px, 2vw, 25px);
  line-height: 1.25;
}

.latest-news-more {
  padding-top: 8px;
}

.latest-news-more-header {
  margin-bottom: 20px;
}

.latest-news-more-kicker {
  margin-bottom: 6px;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bg-green);
}

.latest-news-more-title {
  font-size: clamp(28px, 3.2vw, 40px);
  line-height: 1.1;
}

.latest-news-more-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 900px) {
  .latest-news-detail {
    padding: 90px 16px 56px;
  }

  .latest-news-detail-nav {
    grid-template-columns: 1fr;
  }

  .latest-news-detail-nav-link--next {
    text-align: left;
  }

  .latest-news-more-grid {
    grid-template-columns: 1fr;
  }
}
</style>
