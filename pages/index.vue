<template>
  <div class="homepage">
    <section class="hero-block w-full">
      <picture class="w-full">
        <source media="(min-width:900px)" :srcset="heroImg" />
        <img :src="heroImg" alt="Windmill Tree Foundation in the mountains" class="hero-image object-fit" />
      </picture>

      <div class="hero-overlay">
        <p class="hero-kicker">Windmill Tree Foundation</p>
        <h1 class="hero-title">
          Building inclusive learning, solidarity and international exchange in
          the Izery Mountains.
        </h1>
        <p class="hero-lead">
          We create non-formal education, youth exchanges, volunteering
          programmes and direct support for refugee and marginalized young
          people.
        </p>

        <div class="hero-actions">
          <NuxtLink to="/projects" class="hero-button hero-button-primary">
            Explore Projects
          </NuxtLink>
          <NuxtLink to="/latest-news" class="hero-button hero-button-secondary">
            Latest News
          </NuxtLink>
        </div>

        <p class="hero-quote">
          “…the worst is not that everything might <span>change</span> but that
          everything remains the <span>same</span>.”
        </p>
        <p class="hero-credit">
          Lina Kostenko, Ukrainian poet, journalist and former Soviet dissident
        </p>
      </div>
    </section>

    <section class="homepage-section homepage-news">
      <div class="section-heading">
        <div>
          <p class="section-kicker">What is happening now</p>
          <h2 class="section-title">Latest News</h2>
        </div>

        <div class="socials">
          <div class="socials-under bg-gray-800/80">
            <a
              href="https://www.facebook.com/FundacjaWindmillTree/photos_by"
              aria-label="Windmill Tree on Facebook"
            >
              <IconsFacebook
                height="35px"
                class="text-[var(--blue)] hover:text-blue-500 transition-colors duration-400"
              />
            </a>
            <a
              href="https://www.instagram.com/foundation_windmill_tree/"
              aria-label="Windmill Tree on Instagram"
            >
              <IconsInstagram
                height="35px"
                class="text-[var(--instagram)] hover:text-red-700 transition-colors duration-400"
              />
            </a>
            <a
              href="https://www.youtube.com/@foundationwindmilltree8203"
              aria-label="Windmill Tree on YouTube"
            >
              <IconsYoutube
                height="35px"
                class="text-[var(--red)] hover:text-red-500 transition-colors duration-400"
              />
            </a>
          </div>
        </div>
      </div>

      <div v-if="pending" class="homepage-status">
        <LoadingSpinner />
      </div>

      <div v-else-if="!latestNews.length" class="homepage-status">
        <p>No news available yet. Please check back soon.</p>
      </div>

      <div v-else class="news-grid">
        <article
          v-for="item in latestNews"
          :key="item.id"
          class="news-card"
        >
          <img
            v-if="item.new_img"
            :src="item.new_img"
            :alt="item.new_title || 'Windmill Tree news image'"
            class="news-card-image"
          />

          <div class="news-card-copy">
            <time
              v-if="item.created_at"
              :datetime="item.created_at"
              class="news-card-date"
            >
              {{ formatDate(item.created_at) }}
            </time>
            <h3 class="news-card-title">
              {{ item.new_title || "Untitled update" }}
            </h3>
            <p v-if="item.preview" class="news-card-excerpt">
              {{ item.preview }}
            </p>

            <NuxtLink to="/latest-news" class="news-card-link">
              Read more
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="news-footer">
        <NuxtLink to="/latest-news" class="section-link">
          Browse all updates
        </NuxtLink>
      </div>
    </section>

    <section class="homepage-section mission-grid">
      <div class="mission-copy">
        <p class="section-kicker">Why we exist</p>
        <h2 class="section-title">Our mission</h2>
        <p class="mission-lead">
          We focus on building a more inclusive and sustainable world through
          high quality non-formal education, youth work and international
          cooperation.
        </p>

        <div class="mission-points">
          <div
            v-for="point in missionPoints"
            :key="point.title"
            class="mission-point"
          >
            <h3>{{ point.title }}</h3>
            <p>{{ point.description }}</p>
          </div>
        </div>
      </div>

      <div class="mission-media">
        <img
          src="~/assets/our-mission/our-mission-1.png"
          alt="Participants during a Windmill Tree activity"
          class="mission-image mission-image-main"
        />
        <img
          src="~/assets/our-mission/our-mission-2.png"
          alt="Community moments from Windmill Tree programmes"
          class="mission-image mission-image-secondary"
        />
        <p class="mission-note">
          All photos come from activities and projects we have organised.
        </p>
      </div>
    </section>

    <section class="homepage-section activities-section">
      <div class="section-heading section-heading-stacked">
        <p class="section-kicker">How we work</p>
        <h2 class="section-title">Our activities</h2>
        <p class="section-intro">
          We combine local roots with international reach through practical,
          human-centered programmes.
        </p>
      </div>

      <div class="activities-grid">
        <article
          v-for="activity in activities"
          :key="activity.title"
          class="activity-card"
        >
          <h3>{{ activity.title }}</h3>
          <p>{{ activity.description }}</p>
        </article>
      </div>
    </section>

    <section class="homepage-section numbers-section">
      <div class="section-heading section-heading-stacked">
        <p class="section-kicker">A bit of numbers</p>
        <h2 class="section-title">Impact at a glance</h2>
      </div>

      <div class="numbers-grid">
        <article
          v-for="stat in stats"
          :key="stat.value"
          class="stat-card"
        >
          <img :src="stat.image" :alt="stat.alt" class="stat-image" />
          <div class="stat-value">{{ stat.value }}</div>
          <p class="stat-label">{{ stat.label }}</p>
        </article>
      </div>
    </section>

    <section class="homepage-section partners-section">
      <div class="section-heading section-heading-stacked">
        <p class="section-kicker">Trusted by partners</p>
        <h2 class="section-title">Our partners</h2>
      </div>

      <div class="partners-strip">
        <img
          src="~/assets/partners/partners-1.png"
          alt="Partner organisation logo"
          class="partner-logo"
        />
        <img
          src="~/assets/partners/partners-2.png"
          alt="Partner organisation logo"
          class="partner-logo"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";
import numbersOne from "~/assets/numbers/numbers-1.png";
import numbersTwo from "~/assets/numbers/numbers-2.png";
import numbersThree from "~/assets/numbers/numbers-3.png";

const config = useRuntimeConfig();
const heroImg = computed(() =>
  config.public.heroImg === "b"
    ? "/hero/hero_second_ver.webp"
    : "/hero/Windmill_Tree.webp"
);

const missionPoints = [
  {
    title: "Inclusion",
    description:
      "We create safer spaces for marginalized young people, refugee communities and mixed-ability groups.",
  },
  {
    title: "Youth work",
    description:
      "Our programmes use art, nature and non-formal education to strengthen confidence, connection and agency.",
  },
  {
    title: "International exchange",
    description:
      "We bring together participants, volunteers and partners from across Europe and beyond.",
  },
];

const activities = [
  {
    title: "Local projects and initiatives",
    description:
      "Art, eco and social initiatives in Jelenia Gora and the region, including solidarity projects, happenings, charity actions and inclusive mountain trips.",
  },
  {
    title: "International projects",
    description:
      "Trainings and youth exchanges focused on non-formal education, mental health, nature, inclusion and creative forms of expression.",
  },
  {
    title: "Support for Ukrainian children and youth",
    description:
      "Regular programmes in collective housing centres, outdoor activities, mountain trips, camps and art-therapy support.",
  },
  {
    title: "International volunteering",
    description:
      "Through the European Solidarity Corps we host and coordinate volunteers in schools, clubs and culture centres in rural areas.",
  },
];

const stats = [
  {
    value: "400+",
    label: "Participants from around the world joined our projects.",
    image: numbersOne,
    alt: "Participants statistic illustration",
  },
  {
    value: "20+",
    label: "Projects organised across local and international formats.",
    image: numbersTwo,
    alt: "Projects statistic illustration",
  },
  {
    value: "20+",
    label: "International partners helping us create lasting impact.",
    image: numbersThree,
    alt: "Partners statistic illustration",
  },
];

const { data, pending } = await useAsyncData("homepage-latest-news", () =>
  $fetch("/api/news", {
    headers: useRequestHeaders(["cookie"]),
  })
);

const normalizedNews = computed(() => {
  const items = data.value?.latest;

  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item, index) => {
    const body = Array.isArray(item?.new_body) ? item.new_body : [];

    return {
      id: item?.id ?? `latest-${index}`,
      new_title: item?.new_title ?? "",
      created_at: item?.created_at ?? "",
      new_img: item?.new_img ?? "",
      preview:
        body.find((paragraph) => typeof paragraph === "string" && paragraph.trim()) ?? "",
    };
  });
});

const latestNews = computed(() => normalizedNews.value.slice(0, 2));

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
.homepage {
  margin-top: -160px;
  background:
    radial-gradient(circle at top, rgba(236, 243, 158, 0.32), transparent 28%),
    linear-gradient(180deg, #f7f4ef 0%, #f5efe7 38%, #eef0e6 100%);
}

.homepage-section {
  padding: 0 40px 88px;
}

.hero-block {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.hero-block::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(11, 15, 12, 0.1) 0%, rgba(11, 15, 12, 0.78) 100%);
}

.hero-image {
  width: 100%;
  min-height: 860px;
  max-height: 100vh;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 48px;
  z-index: 1;
  max-width: 760px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 32px;
  color: white;
  backdrop-filter: blur(18px);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.46));
}

.hero-kicker,
.section-kicker {
  margin-bottom: 10px;
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.hero-title,
.section-title {
  font-weight: 700;
  line-height: 1.02;
}

.hero-title {
  min-height: auto;
  margin-bottom: 18px;
  font-size: clamp(42px, 6vw, 76px);
}

.hero-lead,
.section-intro,
.mission-lead {
  font-size: 20px;
  line-height: 1.7;
}

.hero-lead {
  max-width: 62ch;
  margin-bottom: 24px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 28px;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
}

.hero-button-primary {
  background: var(--bg-light-green);
  color: black;
}

.hero-button-secondary {
  border: 1px solid rgba(255, 255, 255, 0.42);
  color: white;
}

.hero-quote {
  margin-bottom: 8px;
  font-size: clamp(19px, 2.4vw, 30px);
  line-height: 1.35;
}

.hero-quote span {
  color: #d6f57a;
}

.hero-credit {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
}

.homepage-news {
  margin-top: 48px;
  position: relative;
  z-index: 2;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  margin-bottom: 28px;
}

.section-heading-stacked {
  display: block;
}

.section-title {
  font-size: clamp(34px, 4vw, 54px);
}

.section-intro {
  max-width: 62ch;
  margin-top: 14px;
  color: rgb(71, 70, 70);
}

.socials {
  display: flex;
  justify-content: flex-end;
}

.socials-under {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.news-card,
.mission-point,
.activity-card,
.stat-card {
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 18px 45px rgba(72, 55, 26, 0.08);
}

.news-card {
  overflow: hidden;
}

.news-card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.news-card-copy {
  padding: 22px 22px 26px;
}

.news-card-date {
  display: block;
  margin-bottom: 10px;
  color: rgb(71, 70, 70);
}

.news-card-title {
  margin-bottom: 14px;
  font-size: 31px;
  line-height: 1.1;
}

.news-card-excerpt {
  color: rgb(71, 70, 70);
  line-height: 1.75;
}

.news-card-link,
.section-link {
  display: inline-flex;
  margin-top: 18px;
  color: #1d4ed8;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.news-footer {
  margin-top: 18px;
  text-align: center;
}

.homepage-status {
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgb(71, 70, 70);
}

.mission-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 32px;
  align-items: start;
}

.mission-copy {
  padding-top: 20px;
}

.mission-points {
  display: grid;
  gap: 18px;
  margin-top: 28px;
}

.mission-point {
  padding: 20px 22px;
}

.mission-point h3,
.activity-card h3 {
  margin-bottom: 8px;
  font-size: 26px;
  line-height: 1.15;
}

.mission-point p,
.activity-card p,
.stat-label {
  color: rgb(71, 70, 70);
  line-height: 1.7;
}

.mission-media {
  position: relative;
  min-height: 720px;
}

.mission-image {
  width: 100%;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0 18px 45px rgba(72, 55, 26, 0.12);
}

.mission-image-main {
  min-height: 460px;
}

.mission-image-secondary {
  position: absolute;
  right: 0;
  bottom: 72px;
  width: 58%;
}

.mission-note {
  position: absolute;
  left: 0;
  bottom: 18px;
  max-width: 300px;
  font-size: 14px;
  color: rgb(71, 70, 70);
}

.activities-grid,
.numbers-grid {
  display: grid;
  gap: 22px;
}

.activities-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.activity-card {
  padding: 24px;
}

.numbers-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.stat-card {
  padding: 18px;
  text-align: center;
}

.stat-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 22px;
}

.stat-value {
  margin: 18px 0 8px;
  font-size: clamp(40px, 4vw, 60px);
  font-weight: 700;
  color: var(--bg-green);
}

.partners-strip {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  padding: 24px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(236, 243, 158, 0.58), rgba(255, 255, 255, 0.74));
}

.partner-logo {
  width: 100%;
  border-radius: 24px;
  background: white;
  padding: 16px;
}

@media (max-width: 900px) {
  .homepage {
    margin-top: -128px;
  }

  .homepage-section {
    padding: 0 16px 56px;
  }

  .hero-block {
    min-height: auto;
  }

  .hero-image {
    min-height: 720px;
  }

  .hero-overlay {
    left: 16px;
    right: 16px;
    bottom: 20px;
    padding: 20px;
  }

  .hero-lead,
  .section-intro,
  .mission-lead {
    font-size: 17px;
  }

  .section-heading {
    display: block;
  }

  .socials {
    justify-content: flex-start;
    margin-top: 18px;
  }

  .news-grid,
  .mission-grid,
  .activities-grid,
  .numbers-grid,
  .partners-strip {
    grid-template-columns: 1fr;
  }

  .news-card-title {
    font-size: 25px;
  }

  .mission-media {
    min-height: auto;
  }

  .mission-image-secondary,
  .mission-note {
    position: static;
    width: 100%;
    margin-top: 18px;
  }
}
</style>
