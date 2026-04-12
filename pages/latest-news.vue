<template>
  <section v-bind="$attrs" class="latest-news-page">
    <header class="latest-news-header">
      <p class="latest-news-kicker">Foundation updates</p>
      <h1 class="latest-news-title">LATEST NEWS</h1>
      <p class="latest-news-intro">
        Stories, reflections and fresh updates from the Windmill Tree
        community.
      </p>
    </header>

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
      <article
        v-for="item in paginatedNews"
        :key="item.id"
        class="latest-news-item"
      >
        <img
          v-if="item.new_img"
          :src="item.new_img"
          :alt="item.new_title || 'Windmill Tree news image'"
          class="latest-news-image"
        />

        <div class="latest-news-copy">
          <h2 class="new-head latest-news-item-title">
            {{ item.new_title || "Untitled update" }}
          </h2>

          <time
            v-if="item.created_at"
            :datetime="item.created_at"
            class="new-date latest-news-date"
          >
            {{ formatDate(item.created_at) }}
          </time>

          <div
            v-if="item.new_body.length"
            class="new-des latest-news-body"
          >
            <p
              v-for="(paragraph, idx) in item.new_body"
              :key="`${item.id}-body-${idx}`"
            >
              {{ paragraph }}
            </p>
          </div>

          <div
            v-if="item.new_links.length"
            class="latest-news-links"
          >
            <p class="latest-news-links-label">Related links</p>
            <a
              v-for="(link, idx) in item.new_links"
              :key="`${item.id}-link-${idx}`"
              :href="link"
              target="_blank"
              rel="noreferrer"
              class="latest-news-link"
            >
              {{ link }}
            </a>
          </div>

          <div
            v-if="item.new_link_interview.length"
            class="latest-news-links"
          >
            <p class="latest-news-links-label">Interviews</p>
            <a
              v-for="(link, idx) in item.new_link_interview"
              :key="`${item.id}-interview-${idx}`"
              :href="link"
              target="_blank"
              rel="noreferrer"
              class="latest-news-link"
            >
              {{ link }}
            </a>
          </div>

          <div v-if="item.new_signature.length" class="latest-news-signature">
            <p
              v-for="(sig, idx) in item.new_signature"
              :key="`${item.id}-signature-${idx}`"
            >
              {{ sig }}
            </p>
          </div>
        </div>
      </article>

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
    }),
  {
    default: () => ({ all: [] }),
  }
);

const news = computed(() => {
  const items = data.value?.all;

  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item, index) => ({
    id: item?.id ?? `news-${index}`,
    new_title: item?.new_title ?? "",
    created_at: item?.created_at ?? "",
    new_img: item?.new_img ?? "",
    new_body: Array.isArray(item?.new_body) ? item.new_body : [],
    new_signature: Array.isArray(item?.new_signature) ? item.new_signature : [],
    new_links: Array.isArray(item?.new_links) ? item.new_links : [],
    new_link_interview: Array.isArray(item?.new_link_interview)
      ? item.new_link_interview
      : [],
  }));
});

const totalItems = computed(() => news.value.length);
const totalPages = computed(() =>
  Math.max(1, Math.ceil(totalItems.value / itemsPerPage))
);

const paginatedNews = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  return news.value.slice(start, start + itemsPerPage);
});

watch(
  () => route.query.page,
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

function formatDate(dateStr) {
  if (!dateStr) {
    return "";
  }

  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    return dateStr;
  }

  return date.toLocaleDateString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
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

.latest-news-item {
  display: grid;
  grid-template-columns: minmax(280px, 500px) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
  padding: 28px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 244, 238, 0.92));
  box-shadow: 0 18px 45px rgba(72, 55, 26, 0.08);
}

.latest-news-image {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 24px;
}

.latest-news-copy {
  min-width: 0;
}

.latest-news-item-title {
  margin: 0 0 12px;
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.1;
}

.latest-news-date {
  display: block;
  margin-bottom: 18px;
  text-align: left;
  font-size: 18px;
}

.latest-news-body {
  max-width: 70ch;
  padding-top: 0;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.8;
}

.latest-news-body p + p {
  margin-top: 16px;
}

.latest-news-links {
  margin-top: 24px;
}

.latest-news-links-label {
  margin-bottom: 10px;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(71, 70, 70);
}

.latest-news-link {
  display: block;
  width: fit-content;
  margin-top: 8px;
  color: #1d4ed8;
  text-decoration: underline;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
}

.latest-news-signature {
  margin-top: 24px;
  font-size: 18px;
  font-style: italic;
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

  .latest-news-item {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 18px;
  }

  .latest-news-date {
    font-size: 16px;
  }

  .latest-news-body {
    font-size: 16px;
    line-height: 1.7;
    padding-right: 0;
  }

  .latest-news-signature {
    font-size: 16px;
  }
}
</style>
