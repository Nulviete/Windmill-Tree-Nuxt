<template>
  <article class="news-card" :class="[`news-card--${variant}`]">
    <img
      v-if="image"
      :src="image"
      :alt="title || 'Windmill Tree news image'"
      :loading="imageLoading"
      :decoding="imageDecoding"
      :fetchpriority="imageFetchpriority"
      :sizes="imageSizes || undefined"
      class="news-card-image"
    />

    <div class="news-card-copy">
      <time v-if="date" :datetime="date" class="news-card-date">
        {{ formatDate(date) }}
      </time>

      <component :is="headingTag" class="news-card-title">
        <NuxtLink
          v-if="showLink"
          :to="link"
          class="news-card-title-link"
        >
          {{ title || "Untitled update" }}
        </NuxtLink>
        <template v-else>
          {{ title || "Untitled update" }}
        </template>
      </component>

      <p v-if="excerpt && variant === 'preview'" class="news-card-excerpt">
        {{ excerpt }}
      </p>

      <div v-if="variant === 'full' && body.length" class="news-card-body">
        <p v-for="(paragraph, idx) in body" :key="`${title}-${idx}`">
          {{ paragraph }}
        </p>
      </div>

      <div v-if="variant === 'full' && relatedLinks.length" class="news-card-links">
        <p class="news-card-links-label">Related links</p>
        <a
          v-for="(item, idx) in relatedLinks"
          :key="`${title}-link-${idx}`"
          :href="item"
          target="_blank"
          rel="noreferrer"
          class="news-card-external-link"
        >
          {{ item }}
        </a>
      </div>

      <div v-if="variant === 'full' && interviewLinks.length" class="news-card-links">
        <p class="news-card-links-label">Interviews</p>
        <a
          v-for="(item, idx) in interviewLinks"
          :key="`${title}-interview-${idx}`"
          :href="item"
          target="_blank"
          rel="noreferrer"
          class="news-card-external-link"
        >
          {{ item }}
        </a>
      </div>

      <div v-if="variant === 'full' && signature.length" class="news-card-signature">
        <p v-for="(item, idx) in signature" :key="`${title}-signature-${idx}`">
          {{ item }}
        </p>
      </div>

      <NuxtLink v-if="showLink" :to="link" class="news-card-link">
        {{ linkLabel }}
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "preview",
  },
  headingTag: {
    type: String,
    default: "h3",
  },
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
  imageLoading: {
    type: String,
    default: "lazy",
  },
  imageDecoding: {
    type: String,
    default: "async",
  },
  imageFetchpriority: {
    type: String,
    default: "auto",
  },
  imageSizes: {
    type: String,
    default: "",
  },
  excerpt: {
    type: String,
    default: "",
  },
  body: {
    type: Array,
    default: () => [],
  },
  signature: {
    type: Array,
    default: () => [],
  },
  relatedLinks: {
    type: Array,
    default: () => [],
  },
  interviewLinks: {
    type: Array,
    default: () => [],
  },
  link: {
    type: [String, Object],
    default: "/latest-news",
  },
  linkLabel: {
    type: String,
    default: "Read more",
  },
  showLink: {
    type: Boolean,
    default: true,
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

.news-card--full {
  display: grid;
  grid-template-columns: minmax(280px, 500px) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
  padding: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 244, 238, 0.92));
}

.news-card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.news-card--full .news-card-image {
  aspect-ratio: 3 / 2;
  border-radius: 24px;
}

.news-card-copy {
  padding: 18px 18px 22px;
}

.news-card--full .news-card-copy {
  min-width: 0;
  padding: 0;
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

.news-card--full .news-card-title {
  margin: 0 0 12px;
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.1;
  -webkit-line-clamp: unset;
}

.news-card-title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.25s ease;
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

.news-card-body {
  max-width: 70ch;
  color: rgb(71, 70, 70);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.8;
}

.news-card-body p + p {
  margin-top: 16px;
}

.news-card-links {
  margin-top: 24px;
}

.news-card-links-label {
  margin-bottom: 10px;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(71, 70, 70);
}

.news-card-external-link {
  display: block;
  width: fit-content;
  margin-top: 8px;
  color: #1d4ed8;
  text-decoration: underline;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
}

.news-card-signature {
  margin-top: 24px;
  font-size: 18px;
  font-style: italic;
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

.news-card--full:hover,
.news-card--full:focus-within {
  transform: none;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 244, 238, 0.92));
}

.news-card:hover .news-card-image,
.news-card:focus-within .news-card-image {
  transform: scale(1.05);
}

.news-card--full:hover .news-card-image,
.news-card--full:focus-within .news-card-image {
  transform: none;
}

.news-card:hover .news-card-link,
.news-card:focus-within .news-card-link,
.news-card:hover .news-card-title-link,
.news-card:focus-within .news-card-title-link {
  color: #163aa7;
}

.news-card:hover .news-card-link,
.news-card:focus-within .news-card-link {
  text-underline-offset: 5px;
}

.news-card-link:focus-visible,
.news-card-title-link:focus-visible {
  outline: 3px solid rgba(29, 78, 216, 0.28);
  outline-offset: 4px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .news-card,
  .news-card-image,
  .news-card-link,
  .news-card-title-link {
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

  .news-card--full {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 18px;
  }

  .news-card--full .news-card-title {
    font-size: 25px;
  }

  .news-card-body {
    font-size: 16px;
    line-height: 1.7;
  }

  .news-card-signature {
    font-size: 16px;
  }
}
</style>
