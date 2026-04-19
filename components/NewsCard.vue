<template>
  <article class="news-card">
    <img
      v-if="image"
      :src="image"
      :alt="title || 'Windmill Tree news image'"
      class="news-card-image"
    />

    <div class="news-card-copy">
      <time
        v-if="date"
        :datetime="date"
        class="news-card-date"
      >
        {{ formatDate(date) }}
      </time>

      <h3 class="news-card-title">
        {{ title || "Untitled update" }}
      </h3>

      <p v-if="excerpt" class="news-card-excerpt">
        {{ excerpt }}
      </p>

      <NuxtLink :to="link" class="news-card-link">
        {{ linkLabel }}
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  excerpt: {
    type: String,
    default: "",
  },
  link: {
    type: [String, Object],
    default: "/latest-news",
  },
  linkLabel: {
    type: String,
    default: "Read more",
  },
})

function formatDate(dateStr) {
  if (!dateStr) {
    return ""
  }

  const date = new Date(dateStr)

  if (Number.isNaN(date.getTime())) {
    return dateStr
  }

  return date.toLocaleDateString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}
</script>

<style scoped>
.news-card {
  height: 100%;
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 18px 45px rgba(72, 55, 26, 0.08);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    background-color 0.35s ease;
}

.news-card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.news-card-copy {
  padding: 18px 18px 22px;
}

.news-card-date {
  display: block;
  margin-bottom: 8px;
  color: rgb(71, 70, 70);
  font-size: 14px;
}

.news-card-title {
  margin-bottom: 12px;
  color: rgb(0, 0, 0);
  font-size: clamp(22px, 1.8vw, 30px);
  line-height: 1.15;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-card-excerpt {
  color: rgb(71, 70, 70);
  font-size: 15px;
  line-height: 1.6;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.news-card-link {
  display: inline-flex;
  margin-top: 18px;
  color: #1d4ed8;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition:
    color 0.25s ease,
    text-underline-offset 0.25s ease;
}

.news-card:hover,
.news-card:focus-within {
  transform: translateY(-6px);
  box-shadow: 0 24px 55px rgba(72, 55, 26, 0.16);
  background: rgba(255, 255, 255, 0.96);
}

.news-card:hover .news-card-image,
.news-card:focus-within .news-card-image {
  transform: scale(1.05);
}

.news-card:hover .news-card-link,
.news-card:focus-within .news-card-link {
  color: #163aa7;
  text-underline-offset: 5px;
}

.news-card-link:focus-visible {
  outline: 3px solid rgba(29, 78, 216, 0.28);
  outline-offset: 4px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .news-card,
  .news-card-image,
  .news-card-link {
    transition: none;
  }

  .news-card:hover,
  .news-card:focus-within,
  .news-card:hover .news-card-image,
  .news-card:focus-within .news-card-image {
    transform: none;
  }
}

@media (max-width: 900px) {
  .news-card-title {
    font-size: 25px;
  }
}
</style>
