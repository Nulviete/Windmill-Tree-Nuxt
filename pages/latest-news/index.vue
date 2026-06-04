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
          class="latest-news-list-card"
          variant="preview"
          heading-tag="h2"
          :title="item.new_title"
          :date="item.created_at"
          :image="item.new_img"
          :excerpt="item.preview"
          :link="item.path"
          link-label="Open article"
          image-sizes="(max-width: 900px) 100vw, 40vw"
        />
      </RevealOnScroll>

      <nav
        v-if="totalItems > itemsPerPage"
        class="latest-news-pagination"
        aria-label="Latest news pagination"
      >
        <button
          type="button"
          class="latest-news-pagination-control"
          :disabled="page <= 1"
          @click="goToPage(page - 1)"
        >
          <span aria-hidden="true">‹</span>
          Previous
        </button>

        <div class="latest-news-pagination-pages">
          <template v-for="item in paginationItems" :key="item.key">
            <span
              v-if="item.type === 'ellipsis'"
              class="latest-news-pagination-ellipsis"
              aria-hidden="true"
            >
              …
            </span>

            <button
              v-else
              type="button"
              class="latest-news-pagination-page"
              :class="{ 'latest-news-pagination-page--active': item.value === page }"
              :aria-current="item.value === page ? 'page' : undefined"
              :aria-label="`Go to page ${item.value}`"
              @click="goToPage(item.value)"
            >
              {{ item.value }}
            </button>
          </template>
        </div>

        <button
          type="button"
          class="latest-news-pagination-control"
          :disabled="page >= totalPages"
          @click="goToPage(page + 1)"
        >
          Next
          <span aria-hidden="true">›</span>
        </button>

        <p class="latest-news-pagination-status">
          Page {{ page }} of {{ totalPages }}
        </p>
      </nav>
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
const paginationItems = computed(() => {
  const total = totalPages.value;
  const current = page.value;

  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => ({
      key: `page-${index + 1}`,
      type: "page",
      value: index + 1,
    }));
  }

  const pages = new Set([1, total, current, current - 1, current + 1]);
  const sortedPages = [...pages]
    .filter((item) => item >= 1 && item <= total)
    .sort((a, b) => a - b);

  return sortedPages.flatMap((item, index) => {
    const previous = sortedPages[index - 1];
    const pageItem = {
      key: `page-${item}`,
      type: "page",
      value: item,
    };

    if (index > 0 && item - previous > 1) {
      return [
        {
          key: `ellipsis-${previous}-${item}`,
          type: "ellipsis",
        },
        pageItem,
      ];
    }

    return [pageItem];
  });
});

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

const goToPage = (value) => {
  page.value = Math.min(Math.max(value, 1), totalPages.value);
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

:deep(.latest-news-list-card) {
  display: grid;
  grid-template-columns: minmax(260px, 420px) minmax(0, 1fr);
  gap: 28px;
  align-items: stretch;
  padding: 22px;
}

:deep(.latest-news-list-card .news-card-image-frame) {
  height: 100%;
  min-height: 250px;
  border-radius: 22px;
}

:deep(.latest-news-list-card .news-card-copy) {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  padding: 4px 8px 4px 0;
}

:deep(.latest-news-list-card .news-card-title) {
  font-size: clamp(25px, 2.4vw, 36px);
}

:deep(.latest-news-list-card .news-card-excerpt) {
  -webkit-line-clamp: 3;
}

:deep(.latest-news-list-card .news-card-link) {
  margin-top: 16px;
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
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: center;
  width: min(100%, 760px);
  margin: 18px auto 0;
  padding: 14px;
  border: 1px solid rgba(144, 169, 85, 0.24);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 14px 35px rgba(72, 55, 26, 0.08);
}

.latest-news-pagination-pages {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.latest-news-pagination-control,
.latest-news-pagination-page {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  border-radius: 999px;
  color: #172015;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.latest-news-pagination-control {
  gap: 8px;
  padding: 0 18px;
  border: 1px solid rgba(23, 32, 21, 0.12);
  background: rgba(236, 243, 158, 0.4);
  font-weight: 700;
}

.latest-news-pagination-control:disabled {
  cursor: not-allowed;
  opacity: 0.42;
}

.latest-news-pagination-control:not(:disabled):hover,
.latest-news-pagination-page:hover {
  background: rgba(144, 169, 85, 0.22);
}

.latest-news-pagination-page {
  width: 42px;
  border: 1px solid transparent;
  background: transparent;
  font-weight: 700;
}

.latest-news-pagination-page--active {
  background: var(--bg-green);
  color: white;
}

.latest-news-pagination-page--active:hover {
  background: var(--bg-green);
}

.latest-news-pagination-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  color: rgb(71, 70, 70);
}

.latest-news-pagination-status {
  grid-column: 1 / -1;
  margin: -4px 0 0;
  color: rgb(71, 70, 70);
  font-size: 13px;
  text-align: center;
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

  :deep(.latest-news-list-card) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0;
  }

  :deep(.latest-news-list-card .news-card-image-frame) {
    min-height: 0;
    border-radius: 0;
  }

  :deep(.latest-news-list-card .news-card-copy) {
    padding: 18px 18px 22px;
  }

  .latest-news-pagination {
    grid-template-columns: 1fr;
    width: 100%;
    border-radius: 24px;
  }

  .latest-news-pagination-pages {
    order: -1;
    flex-wrap: wrap;
  }

  .latest-news-pagination-control {
    width: 100%;
  }
}
</style>
