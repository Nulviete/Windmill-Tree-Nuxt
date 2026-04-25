<template>
  <section v-bind="$attrs" class="latest-news-page">
    <RevealOnScroll :distance="24">
      <header class="latest-news-header">
      <p class="latest-news-kicker">Foundation updates</p>
      <h1 class="latest-news-title">LATEST NEWS</h1>
      <p class="latest-news-intro">
        Stories, reflections and fresh updates from the Windmill Tree
        community.
      </p>
      </header>
    </RevealOnScroll>

    <div v-if="pending" class="latest-news-status">
      <LoadingSpinner />
    </div>

    <div v-else-if="error" class="latest-news-status">
      <p>We could not load the latest news right now.</p>
    </div>

    <div v-else-if="!news.length" class="latest-news-status">
      <p>No news available yet. Please check back soon.</p>
    </div>

    <div v-else class="latest-news-content">
      <RevealOnScroll
        v-for="item in news"
        :key="item.id"
        :delay="getRevealDelay(item)"
        :distance="22"
      >
        <NewsCard
          variant="full"
          heading-tag="h2"
          :title="item.new_title"
          :date="item.created_at"
          :image="item.new_img"
          :body="item.new_body"
          :signature="item.new_signature"
          :related-links="item.new_links"
          :interview-links="item.new_link_interview"
          :link="item.path"
          link-label="Open article"
          image-sizes="(max-width: 900px) 100vw, 40vw"
        />
      </RevealOnScroll>

      <UPagination
        v-if="totalItems > itemsPerPage"
        v-model="page"
        :total="totalItems"
        :items-per-page="itemsPerPage"
        :sibling-count="1"
        show-last
        show-first
        class="latest-news-pagination"
      />
    </div>
  </section>
</template>

<script setup>
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";

defineOptions({
  inheritAttrs: false,
});

const route = useRoute();
const router = useRouter();
const itemsPerPage = 5;

const normalizePage = (value) => {
  const parsed = Number.parseInt(String(value ?? "1"), 10);
  return Number.isNaN(parsed) || parsed < 1 ? 1 : parsed;
};

const page = ref(normalizePage(route.query.page));

const { data, pending, error } = await useAsyncData(
  "all-news",
  () =>
    $fetch("/api/news", {
      headers: useRequestHeaders(["cookie"]),
      query: {
        page: page.value,
        perPage: itemsPerPage,
      },
    }),
  {
    default: () => ({
      items: [],
      totalItems: 0,
      page: 1,
      perPage: itemsPerPage,
      totalPages: 1,
    }),
    watch: [page],
  }
);

const news = computed(() =>
  Array.isArray(data.value?.items) ? data.value.items : []
);
const totalItems = computed(() => Number(data.value?.totalItems ?? 0));
const totalPages = computed(() => Number(data.value?.totalPages ?? 1) || 1);

usePageSeo({
  title: "Latest News | Windmill Tree Foundation",
  description:
    "Read the latest updates, stories, reflections, and community news from Windmill Tree Foundation.",
  path: "/latest-news",
});

const getRevealDelay = (item) => {
  const index = news.value.findIndex((newsItem) => newsItem.id === item.id);
  return Math.max(index, 0) * 70;
};

watch(
  () => route.query.page,
  (value) => {
    const nextPage = normalizePage(value);

    if (nextPage !== page.value) {
      page.value = nextPage;
    }
  }
);

watch(
  () => data.value?.page,
  (value) => {
    const nextPage = normalizePage(value);

    if (nextPage !== page.value) {
      page.value = nextPage;
    }
  }
);

watch(page, async (value) => {
  const normalized = Math.min(Math.max(value, 1), totalPages.value);

  if (normalized !== value) {
    page.value = normalized;
    return;
  }

  const nextQuery = { ...route.query };

  if (normalized === 1) {
    delete nextQuery.page;
  } else {
    nextQuery.page = String(normalized);
  }

  if (JSON.stringify(nextQuery) === JSON.stringify(route.query)) {
    return;
  }

  await router.replace({ query: nextQuery });
});

watch(
  totalPages,
  (value) => {
    if (page.value > value) {
      page.value = value;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.latest-news-page {
  padding: 0 40px 72px;
}

.latest-news-header {
  max-width: 760px;
  margin: 130px auto 40px;
  text-align: center;
}

.latest-news-kicker {
  margin-bottom: 8px;
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--bg-green);
}

.latest-news-title {
  margin-bottom: 12px;
  font-size: clamp(34px, 5vw, 54px);
  line-height: 1;
  font-weight: 700;
}

.latest-news-intro {
  max-width: 620px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.6;
  color: rgb(71, 70, 70);
}

.latest-news-content {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.latest-news-status {
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: rgb(71, 70, 70);
}

.latest-news-pagination {
  justify-content: center;
  margin-top: 12px;
}

@media (max-width: 900px) {
  .latest-news-page {
    padding: 0 16px 56px;
  }

  .latest-news-header {
    margin-top: 90px;
    margin-bottom: 28px;
  }

  .latest-news-intro {
    font-size: 17px;
  }
}
</style>
