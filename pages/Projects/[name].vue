<template>
  <div v-if="dataLoaded && project" class="pb-24">
    <RevealOnScroll :distance="28">
      <div
        class="header text-white -mt-[160px]"
        :style="headerStyle"
      >
        <div class="header-overlay">
          <div class="header-inner">
            <div class="header-copy-column">
              <div class="header-copy">
                <p class="header-kicker">Windmill Tree project</p>
                <div class="header-badges">
                  <span v-if="project.category" class="header-badge">
                    {{ project.category }}
                  </span>
                  <span v-if="project.place" class="header-badge header-badge--soft">
                    {{ project.place }}
                  </span>
                </div>
                <h1 class="proj-nam">{{ project.name }}</h1>
                <p v-if="projectSummary" class="project-summary">
                  {{ projectSummary }}
                </p>
              </div>
            </div>

            <div
              class="vid mx-auto overflow-hidden shadow-[0_60px_140px_rgba(0,0,0,0.65),0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/30 rounded-3xl"
            >
              <img
                v-if="project.group_photo"
                :src="project.group_photo"
                alt=""
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <RevealOnScroll :distance="24" :delay="70">
      <div class="project-overview">
        <div class="project-meta-card">
          <div v-for="item in metaItems" :key="item.label" class="project-meta-item">
            <span class="project-meta-label">{{ item.label }}</span>
            <span class="project-meta-value">{{ item.value }}</span>
          </div>
        </div>

        <div class="proj-des pt-6 pb-10">
          {{ project.description }}
        </div>
      </div>
    </RevealOnScroll>

    <RevealOnScroll v-if="projectVideoEmbedUrl" :distance="24" :delay="95">
      <section class="project-section interview-video-section">
        <div class="project-section-inner">
          <div class="interview-video-wrap">
            <iframe
              :src="projectVideoEmbedUrl"
              title="Project video"
              class="interview-video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <!-- gallery slideshow -->
    <RevealOnScroll v-if="hasGalleryPhotos" :distance="24" :delay="110">
      <section class="project-section gallery-section">
        <div class="project-section-inner">
          <div class="project-section-heading project-section-heading--dark">
            <p class="project-section-kicker">Project moments</p>
            <h2>Gallery</h2>
          </div>
          <div class="relative w-full">
            <!-- Slider -->
            <div class="overflow-hidden w-full rounded-xl">
              <div
                v-if="hasGalleryPhotos"
                ref="slider"
                class="flex transition-transform duration-300"
                :style="{
                  transform: `translateX(-${
                    currentIndex * (100 / (project.photos.length / photosPerSlide))
                  }%)`,
                  width: `${
                    Math.ceil((project.photos?.length || 0) / photosPerSlide) * 100
                  }%`,
                }"
              >
                <div
                  v-for="(photo, index) in project.photos"
                  :key="index"
                  class="w-full md:w-1/4 px-1 cursor-pointer"
                  @click="openFullscreen(photo)"
                >
                  <img :src="photo" class="object-cover w-full h-64 rounded-lg" />
                </div>
              </div>
            </div>

            <!-- Arrows -->
            <button
              class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              @click="prevSlide"
              v-if="currentIndex > 0"
            >
              ◀
            </button>
            <button
              class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              @click="nextSlide"
              v-if="currentIndex < maxIndex"
            >
              ▶
            </button>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <Teleport to="body">
      <div
        v-if="fullscreenPhoto"
        class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
        @click="closeFullscreenOnBackground"
      >
        <button
          class="absolute top-4 right-4 text-white text-4xl font-bold z-[10000]"
          @click.stop="closeFullscreen"
        >
          &times;
        </button>
        <button
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          @click.stop="prevFullscreenSlide"
          v-if="currentFullscreenIndex > 0"
        >
          ◀
        </button>
        <img
          :src="fullscreenPhoto"
          class="max-w-full max-h-full"
        />
        <button
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          @click.stop="nextFullscreenSlide"
          v-if="currentFullscreenIndex < project.photos.length - 1"
        >
          ▶
        </button>
      </div>
    </Teleport>

    <RevealOnScroll v-if="hasVideoLinks" :distance="20" :delay="140">
      <section class="project-section video-links-section">
        <div class="project-section-inner">
          <div class="project-section-heading">
            <p class="project-section-kicker">Watch more</p>
            <h2>Video links</h2>
          </div>

          <div class="video-links-list">
            <div v-if="hasFacebookVideos">
              <div
                v-for="(video, index) in project.fb_videos"
                :key="index"
                class="video-link-row"
              >
                <IconsFacebook class="video-link-icon video-link-icon--facebook" />
                <a
                  :href="video"
                  target="_blank"
                  rel="noreferrer"
                  class="video-link"
                  >{{ video }}</a
                >
              </div>
            </div>

            <div v-if="hasYouTubeVideos">
              <div
                v-for="(video, index) in project.yt_videos"
                :key="index"
                class="video-link-row"
              >
                <IconsYoutube class="video-link-icon video-link-icon--youtube" />
                <a
                  :href="video"
                  target="_blank"
                  rel="noreferrer"
                  class="video-link"
                  >{{ video }}</a
                >
              </div>
            </div>

          </div>
        </div>
      </section>
    </RevealOnScroll>
  </div>
  <div v-else class="">
    <LoadingSpinner />
  </div>
</template>


<script setup>
import { _backgroundImage, _backgroundPosition } from "#tailwind-config/theme";
import { ref, computed, onMounted, onUnmounted, watchEffect } from "vue";
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";

const route = useRoute();
const projectName = ref(route.params.name);
const canonicalUrl = computed(() => `https://windmilltree.org${route.path}`);

const { data, pending, error } = await useAsyncData(
  () => `project-${String(route.params.name)}`,
  () =>
    $fetch("/api/project", {
      query: { name: String(route.params.name) },
      headers: useRequestHeaders(["cookie"]),
    }),
  {
    watch: [() => route.params.name],
    default: () => ({ data: [] }),
  }
);

const project = computed(() => data.value?.data?.[0] ?? null);
const dataLoaded = computed(() => !pending.value && !!project.value);
const projectSummary = computed(() => {
  const description = String(project.value?.description ?? "").trim();

  if (!description) {
    return "";
  }

  return description.length > 220
    ? `${description.slice(0, 217).trim()}...`
    : description;
});
const metaItems = computed(() =>
  [
    {
      label: "Location",
      value: project.value?.place,
    },
    {
      label: "Date",
      value: project.value?.date,
    },
    {
      label: "Participants",
      value: project.value?.number_of_participants
        ? String(project.value.number_of_participants)
        : "",
    },
    {
      label: "Countries",
      value: project.value?.participants_countries,
    },
  ].filter((item) => String(item.value ?? "").trim())
);

const hasGalleryPhotos = computed(() => {
  return Array.isArray(project.value?.photos) && project.value.photos.length > 0;
});

const hasFacebookVideos = computed(() => {
  return Array.isArray(project.value?.fb_videos) && project.value.fb_videos.length > 0;
});

const hasYouTubeVideos = computed(() => {
  return Array.isArray(project.value?.yt_videos) && project.value.yt_videos.length > 0;
});

const hasVideoLinks = computed(() => {
  return hasFacebookVideos.value || hasYouTubeVideos.value;
});

const projectVideoEmbedUrl = computed(() => {
  return getYouTubeEmbedUrl(project.value?.video_link);
});

function getYouTubeEmbedUrl(videoUrl) {
  const value = String(videoUrl ?? "").trim();

  if (!value) {
    return "";
  }

  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\./, "");
    let videoId = "";

    if (hostname === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] || "";
    } else if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (url.pathname.startsWith("/embed/")) {
        videoId = url.pathname.split("/").filter(Boolean)[1] || "";
      } else if (url.pathname.startsWith("/shorts/")) {
        videoId = url.pathname.split("/").filter(Boolean)[1] || "";
      } else {
        videoId = url.searchParams.get("v") || "";
      }
    }

    if (!/^[\w-]{11}$/.test(videoId)) {
      return "";
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

const bgUrl = computed(() => {
  const key = project.value?.bg_img;
  return key ? `/projects/international/ip_bg_${key}.webp` : "https://i.imgur.com/FlJnzka.png";
})

const headerStyle = computed(() => ({
  backgroundImage: `url(${bgUrl.value})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

const fullscreenMode = useFullscreen();

const fullscreenPhoto = ref(null);
const currentFullscreenIndex = ref(0);
const currentIndex = ref(0);

const photosPerSlide = ref(4);

const slider = ref(null);

const updatePhotosPerSlide = () => {
  photosPerSlide.value = window.innerWidth <= 768 ? 1 : 4;
};

const maxIndex = computed(() => {
  return Math.ceil(
    (project.value?.photos?.length || 0) / photosPerSlide.value - 1
  );
});

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++;
};
const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

const openFullscreen = (photo) => {
  fullscreenPhoto.value = photo;
  currentFullscreenIndex.value = project.value.photos.indexOf(photo);
};
const closeFullscreen = () => {
  fullscreenPhoto.value = null;
  currentFullscreenIndex.value = 0;
};
const nextFullscreenSlide = () => {
  if (currentFullscreenIndex.value < project.value.photos.length - 1) {
    currentFullscreenIndex.value++;
    fullscreenPhoto.value = project.value.photos[currentFullscreenIndex.value];
  }
};
const prevFullscreenSlide = () => {
  if (currentFullscreenIndex.value > 0) {
    currentFullscreenIndex.value--;
    fullscreenPhoto.value = project.value.photos[currentFullscreenIndex.value];
  }
};

const closeFullscreenOnBackground = (event) => {
  if (event.target === event.currentTarget) {
    closeFullscreen();
  }
};

const handleKeyDown = (event) => {
  if (fullscreenPhoto.value) {
    if (event.key === "ArrowRight") nextFullscreenSlide();
    else if (event.key === "ArrowLeft") prevFullscreenSlide();
    else if (event.key === "Escape") closeFullscreen();
  }
};

const touchStartX = ref(0);

const handleTouchStart = (event) => {
  touchStartX.value = event.changedTouches[0].clientX;
};

const handleTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchStartX.value - touchEndX;

  if (Math.abs(deltaX) > 50) {
    // Swipe Left
    if (deltaX > 0) nextSlide();
    // Swipe Right
    else prevSlide();
  }
};

onMounted(async () => {
  updatePhotosPerSlide();

  window.addEventListener("resize", updatePhotosPerSlide);
  window.addEventListener("keydown", handleKeyDown);

  if (slider.value) {
    slider.value.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    slider.value.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", updatePhotosPerSlide);
  window.removeEventListener("keydown", handleKeyDown);
});

if (error.value?.statusCode === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
  });
}

if (!pending.value && !project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
  });
}

const projectTitle = computed(() =>
  project.value?.name
    ? `${project.value.name} | Windmill Tree`
    : "Project | Windmill Tree"
);

const projectDescription = computed(() => {
  const description = String(project.value?.description ?? "").trim();
  if (description) {
    return description.slice(0, 160);
  }

  return "Explore Windmill Tree projects, activities, and international initiatives.";
});

useSeoMeta({
  title: () => projectTitle.value,
  description: () => projectDescription.value,
  ogTitle: () => projectTitle.value,
  ogDescription: () => projectDescription.value,
  ogType: "article",
  ogUrl: () => canonicalUrl.value,
  ogImage: () => project.value?.group_photo || project.value?.main_photo || undefined,
  twitterCard: () =>
    project.value?.group_photo || project.value?.main_photo
      ? "summary_large_image"
      : "summary",
  twitterTitle: () => projectTitle.value,
  twitterDescription: () => projectDescription.value,
  twitterImage: () => project.value?.group_photo || project.value?.main_photo || undefined,
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
// .gallery {
//     max-height: 100vh;
//     padding-top: 2.5vh;
//     position: relative;
// }
// .galleryfull {
//     position: absolute;
//     left: 0;
//     top: 0;
//     right: 0;
//     height: 100vh;
//     margin: auto;
//     background: black;
//     max-width: 1200px;
// }
// .hidden {
//     display: none;
// }

.header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header-overlay {
  padding: 160px 48px 88px;
  background:
    linear-gradient(180deg, rgba(8, 12, 18, 0.24), rgba(8, 12, 18, 0.72)),
    linear-gradient(90deg, rgba(8, 12, 18, 0.5), rgba(8, 12, 18, 0.14));
}

.header-inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 32px;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
}

.header-copy-column {
  align-self: center;
}

.header-copy {
  max-width: 620px;
}

.header-kicker {
  margin-bottom: 14px;
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(236, 243, 158, 0.92);
}

.header-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.header-badge {
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  font-size: 14px;
}

.header-badge--soft {
  background: rgba(255, 255, 255, 0.1);
}

.proj-nam {
  font-size: clamp(36px, 5vw, 68px);
  line-height: 0.98;
  font-weight: 700;
  text-wrap: balance;
}

.project-summary {
  max-width: 58ch;
  margin-top: 16px;
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.84);
}

.vid {
  width: 100%;
  max-width: 520px;
  min-height: 320px;
  margin-top: 18px;
  background-color: rgba(211, 202, 202, 0.3);
  border-radius: 30px;
}

.project-overview {
  max-width: 1240px;
  margin: 0 auto;
  padding: 34px 48px 0;
}

.project-meta-card {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: -48px;
  margin-bottom: 36px;
  padding: 22px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 24px 60px rgba(22, 32, 19, 0.12);
  backdrop-filter: blur(14px);
}

.project-meta-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.project-meta-label {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(31, 28, 23, 0.56);
}

.project-meta-value {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
  color: #1f1c17;
}

.proj-des {
  max-width: 920px;
  margin-right: auto;
  margin-left: auto;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.85;
  color: #1f1c17;
}

.project-section {
  padding: 40px 48px;
}

.project-section-inner {
  max-width: 920px;
  margin: 0 auto;
}

.project-section-heading {
  margin-bottom: 18px;
  color: #1f1c17;
}

.project-section-heading--dark {
  color: white;
}

.project-section-kicker {
  margin-bottom: 6px;
  color: rgba(31, 28, 23, 0.56);
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.project-section-heading--dark .project-section-kicker {
  color: rgba(236, 243, 158, 0.88);
}

.project-section-heading h2 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1;
  font-weight: 700;
}

.interview-video-section {
  padding-top: 18px;
  padding-bottom: 34px;
}

.interview-video-wrap {
  overflow: hidden;
  border-radius: 28px;
  background: #111;
  box-shadow: 0 24px 70px rgba(22, 32, 19, 0.18);
}

.interview-video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
}

.gallery-section {
  padding-top: 34px;
  padding-bottom: 40px;
  background: rgb(20, 83, 45);
}

.video-links-section {
  padding-top: 46px;
  padding-bottom: 0;
}

.video-links-list {
  display: grid;
  gap: 0;
}

.video-link-row {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 0px 0;
}

.video-link-icon {
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
}

.video-link-icon--facebook {
  color: #2563eb;
}

.video-link-icon--youtube {
  color: #dc2626;
}

.video-link {
  min-width: 0;
  color: #1d4ed8;
  font-size: 17px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition:
    color 0.25s ease,
    text-underline-offset 0.25s ease;
}

.video-link:hover,
.video-link:focus-visible {
  color: #163aa7;
  text-underline-offset: 5px;
}

.video-link:focus-visible {
  outline: 3px solid rgba(29, 78, 216, 0.22);
  outline-offset: 4px;
  border-radius: 8px;
}

.video-links-empty {
  color: rgba(31, 28, 23, 0.68);
  font-size: 17px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .header-overlay {
    padding: 118px 16px 48px;
  }

  .header-inner {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .vid {
    min-height: auto;
    margin-top: 0;
  }

  .project-summary {
    font-size: 15px;
  }

  .project-overview {
    padding: 18px 16px 0;
  }

  .project-meta-card {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-top: -26px;
    margin-bottom: 22px;
    padding: 16px;
  }

  .project-meta-value {
    font-size: 14px;
  }

  .proj-des {
    font-size: 14px;
    line-height: 1.75;
  }

  .project-section {
    padding-right: 16px;
    padding-left: 16px;
  }

  .project-section-heading {
    margin-bottom: 14px;
  }

  .interview-video-section {
    padding-top: 10px;
    padding-bottom: 24px;
  }

  .interview-video-wrap {
    border-radius: 18px;
  }

  .gallery-section {
    padding-top: 24px;
    padding-bottom: 30px;
  }

  .video-links-section {
    padding-top: 34px;
    padding-bottom: 0;
  }

  .video-link-row {
    gap: 10px;
    padding: 4px 0;
  }

  .video-link-icon {
    width: 22px;
    height: 22px;
  }

  .video-link,
  .video-links-empty {
    font-size: 13px;
  }
}
</style>
