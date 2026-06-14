<template>
  <div class="-mt-40">
    <div class="hero-block">
      <picture>
        <source media="(max-width:899px)" :srcset="heroImg.mobile" />
        <source media="(min-width:900px)" :srcset="heroImg.desktop" />
        <img
          :src="heroImg.desktop"
          alt="Windmill Tree Foundation community walking together outdoors"
          fetchpriority="high"
          loading="eager"
          decoding="async"
          class="w-full object-cover min-768:min-h-[854px] max-768:min-h-[650px] max-h-[100vh]"
        />
      </picture>

      <h3
        class="hero-txt bg-gradient-to-t from-black/80 via-black/30 to-transparent leading-[4rem] text-4xl max-1030:text-3xl max-1030:leading-[3.5rem] max-768:text-lg max-463:leading-10 max-1030:py-4"
      >
        …the worst is not that everything might
        <span class="hero-text-hl">change </span><br />
        but that everything remains the <span class="hero-text-hl">same!</span
        ><br />
        <span class="kostenko">-Lina Kostenko </span
        ><span class="kostenko-des text-xl"
          >(a Ukrainian poet, journalist, writer, publisher, and former Soviet
          dissident)</span
        >
      </h3>
    </div>

    <div class="foundation-sec bg-[var(--bg-brown)]">
      <RevealOnScroll :distance="30">
        <section class="homepage-news text-gray-200">
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
            <RevealOnScroll
              v-for="(item, index) in latestNews"
              :key="item.id"
              :delay="index * 90"
              :distance="22"
            >
              <NewsCard
                class="homepage-news-card"
                :title="item.new_title"
                :date="item.created_at"
                :image="item.new_img"
                :excerpt="item.preview"
                :link="item.path"
                image-sizes="(max-width: 900px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            </RevealOnScroll>
          </div>

          <div class="news-footer">
            <NuxtLink to="/latest-news" class="section-link">
              Browse all updates
            </NuxtLink>
          </div>
        </section>
      </RevealOnScroll>
    </div>

    <div class="homepage-framed-section">
      <div class="homepage-framed-section__inner">
        <RevealOnScroll :delay="60" :threshold="0.01">
          <div class="our-mission-block text-2xl gap-12">
        <div class="our-mission-left pc-ver" style="position: relative">
          <img
            class=""
            src="~/assets/our-mission/our-mission-1.png"
            alt="Windmill Tree team members outdoors in the Izery Mountains region"
            loading="lazy"
            decoding="async"
          />
          <p class="">
            Located in the breathtaking Izery Mountains region, our diverse team
            is a bland of individuals from Poland, Ukraine, Germany and Czech
            Republic.
          </p>
        </div>
        <div class="our-mission-right">
          <h1
            style=""
            class="text-[var(--bg-green)] text-3xl pb-10 max-900:py-6 max-900:bg-white"
          >
            Our mission
          </h1>
          <img
            class="mob-ver object-cover min-h-[955px]"
            src="~/assets/our-mission/our-mission-1-mob-x.png"
            alt="Windmill Tree team members outdoors in the Izery Mountains region"
            loading="lazy"
            decoding="async"
          />
          <div class="om-first" style="">
            We focus on building a more inclusive and sustainable world by
            delivering innovative high quality non-formal education, supporting
            marginalized and refugee youth, and enhancing the quality of youth
            work, international exchange and volunteering programs.
          </div>
          <div class="mob-ver om-second">
            Located in the breathtaking Izery Mountains region, our diverse team
            is a bland of individuals from Poland, Ukraine, Germany and Czech
            Republic.
          </div>
          <img
            class="pc-ver"
            src="~/assets/our-mission/our-mission-2.png"
            alt="Participants taking part in a Windmill Tree activity"
            loading="lazy"
            decoding="async"
          />
          <div class="pc-ver" style="font-size: 14px; text-align: left">
            *all the photos you see are from activities and projects we have
            organised
          </div>
        </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>

    <div class="homepage-framed-section pc-ver">
      <div class="homepage-framed-section__inner">
        <RevealOnScroll :delay="90" :threshold="0.01">
          <div class="our-activities-block flex flex-row gap-12">
        <div class="our-activities-left">
          <div
            class="our-activities-title bg-[var(--bg-light-green)] text-black text-4xl"
          >
            OUR ACTIVITIES
          </div>
          <div class="our-activities-pictures">
            <img
              class="img-up"
              src="~/assets/our-activities/our-activities-img-up.png"
              alt="Participants collaborating during a Windmill Tree activity"
              loading="lazy"
              decoding="async"
            />
            <img
              class="img-mid-l"
              src="~/assets/our-activities/our-activities-img-mid-l.png"
              alt="Group moment from a Windmill Tree program"
              loading="lazy"
              decoding="async"
            />
            <img
              class="img-mid-r"
              src="~/assets/our-activities/our-activities-img-mid-r.png"
              alt="Creative activity organized by Windmill Tree"
              loading="lazy"
              decoding="async"
            />
            <img
              class="img-bot-l"
              src="~/assets/our-activities/our-activities-img-bot-l.png"
              alt="Outdoor inclusion activity with Windmill Tree participants"
              loading="lazy"
              decoding="async"
            />
            <img
              class="img-bot-r"
              src="~/assets/our-activities/our-activities-img-bot-r.png"
              alt="International group activity supported by Windmill Tree"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div class="our-activities-right">
          <div class="our-activities-r-title">Local Projects & Initiatives</div>
          <ul>
            <li>
              Art, eco and social initiatives of youth in Jelenia Góra and region
              (Solidarity projects, happenings, charity actions ) Inclusive,
              mixed-ability mountain trips
            </li>
          </ul>

          <div class="our-activities-r-title">International projects</div>
          <ul>
            <li>Accreditation in Erasmus+ Youth Sector</li>
            <li>
              Around 100 participants from Europe, Africa, South America annually;
            </li>
            <li>
              Trainings and Youth exchanges; Topics: Non-formal education, Youth
              work,
            </li>
            <li>Mental health, Nature, Inclusion, Creative art forms</li>
          </ul>

          <div class="our-activities-r-title">
            Educational and Mental health support for Ukrainian refugee children
            and youth
          </div>
          <ul>
            <li>
              Outdoor activities, including mountain trips, summer camps, and art
              therapy sessions.
            </li>
            <li>
              Regular programs for children living in collective housing centers
              in rural areas (around 100 children)
            </li>
          </ul>

          <div class="our-activities-r-title">
            International volunteering program
          </div>
          <ul>
            <li>European Solidarity Corps Program</li>
            <li>
              Hosting and coordinating international volunteers in the Sudety
              region (local sport clubs, schools, culture centers in rural areas)
            </li>
          </ul>
        </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>

    <RevealOnScroll :delay="90">
      <div class="our-activities-mob mob-ver">
        <div class="our-activities-title">OUR ACTIVITIES</div>

        <div class="our-activities-subtitle our-activities-subtitle-1">
          Local activities & initiatives
        </div>
        <ul>
          <li>
            Art, eco and social initiatives of youth in Jelenia Góra and region
            (Solidarity projects, happenings, charity actions );
          </li>
          <li>Inclusive, mixed-ability mountain trips</li>
        </ul>

        <div class="our-activities-subtitle our-activities-subtitle-2">
          Educational and Mental health support for Ukrainian refugee children and
          youth
        </div>
        <ul>
          <li>
            Regular programs for children living in collective housing centers in
            rural areas (around 100 children)
          </li>
          <li>
            Outdoor activities, including mountain trips, summer camps, and art
            therapy sessions.
          </li>
        </ul>
        <div class="our-activities-subtitle our-activities-subtitle-3">
          International projects
        </div>
        <ul>
          <li>
            Accreditation in Erasmus+ Youth Sector Around 100 participants from
            Europe, Africa, South America annually;
          </li>
          <li>
            Trainings and Youth exchanges; Topics: Non-formal education, Youth
            work, Mental health, Nature, Inclusion, Creative art forms
          </li>
        </ul>
        <div class="our-activities-subtitle our-activities-subtitle-4">
          International volunteering program
        </div>
        <ul>
          <li>European Solidarity Corps Program</li>
          <li>
            Hosting and coordinating international volunteers in the Sudety region
            (local sport clubs, schools, culture centers in rural areas)
          </li>
        </ul>
      </div>
    </RevealOnScroll>

    <div class="homepage-framed-section">
      <div class="homepage-framed-section__inner">
        <RevealOnScroll :delay="120" :threshold="0.01">
          <div ref="numbersSection" class="numbers-section">
        <div class="numbers-title">A Bit Of Numbers...</div>
        <div class="numbers-images pc-ver">
          <div class="numbers-image">
            <img
              src="~/assets/numbers/numbers-1.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="number">{{ animatedNumbers[0] }}+</div>
            <div class="number-text">
              Participants from all around the world took part in our projects
            </div>
          </div>

          <div class="numbers-image">
            <img
              src="~/assets/numbers/numbers-2.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="number">{{ animatedNumbers[1] }}+</div>
            <div class="number-text number-text--short">Projects organised</div>
          </div>

          <div class="numbers-image">
            <img
              src="~/assets/numbers/numbers-3.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="number">{{ animatedNumbers[2] }}+</div>
            <div class="number-text number-text--short">
              International partners
            </div>
          </div>
        </div>

        <div class="numbers-images-mob mob-ver">
          <div class="numbers-image">
            <img
              src="~/assets/numbers/numbers-1-mob.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="number">{{ animatedNumbers[0] }}+</div>
            <div class="number-text" style="height: 55px">
              Participants from all around the world took part in our projects
            </div>
          </div>

          <div class="numbers-image">
            <img
              src="~/assets/numbers/numbers-2-mob.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="number">{{ animatedNumbers[1] }}+</div>
            <div class="number-text number-text--short" style="height: 55px">
              Projects organised
            </div>
          </div>

          <div class="numbers-image">
            <img
              src="~/assets/numbers/numbers-3-mob.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="number">{{ animatedNumbers[2] }}+</div>
            <div class="number-text number-text--short" style="height: 55px">
              International partners
            </div>
          </div>
        </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>

    <div class="our-partners">
      <RevealOnScroll :delay="150">
        <div class="our-partners-title">Our Partners</div>
      </RevealOnScroll>

        <div class="pc-ver">
          <div class="partners-logos bg-[var(--bg-light-green)]">
            <RevealOnScroll
              class="partner-logo-reveal"
              direction="left"
              :distance="320"
              :delay="120"
            >
              <img
                src="~/assets/partners/partners-1.png"
                alt="Partner logos supporting Windmill Tree Foundation"
                loading="lazy"
                decoding="async"
              />
            </RevealOnScroll>
            <RevealOnScroll
              class="partner-logo-reveal"
              direction="right"
              :distance="320"
              :delay="120"
            >
              <img
                src="~/assets/partners/partners-2.png"
                alt="Additional partner logos supporting Windmill Tree Foundation"
                loading="lazy"
                decoding="async"
              />
            </RevealOnScroll>
          </div>
        </div>

        <div class="mob-ver">
          <div class="partners-logos">
            <RevealOnScroll
              class="partner-logo-reveal partner-logo-reveal--start"
              direction="left"
              :distance="220"
              :delay="100"
            >
              <img
                src="~/assets/partners/partners-1-mob.png"
                alt="Partner logos supporting Windmill Tree Foundation"
                loading="lazy"
                decoding="async"
              />
            </RevealOnScroll>
            <RevealOnScroll
              class="partner-logo-reveal partner-logo-reveal--end"
              direction="right"
              :distance="220"
              :delay="100"
            >
              <img
                src="~/assets/partners/partners-2-mob.png"
                alt="Additional partner logos supporting Windmill Tree Foundation"
                loading="lazy"
                decoding="async"
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>

    <div></div>
  </div>
</template>

<script setup>
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";

const config = useRuntimeConfig();
const heroImg = computed(() => {
  return config.public.heroImg === "b"
    ? {
        desktop: "/hero/hero_second_ver.webp",
        mobile: "/hero/hero_second_ver_mob.webp",
      }
    : {
        desktop: "/hero/Windmill_Tree.webp",
        mobile: "/hero/Windmill_Tree-mob.webp",
      };
});

const { data, pending } = await useAsyncData("homepage-latest-news", () =>
  $fetch("/api/news-latest", {
    headers: useRequestHeaders(["cookie"]),
  })
);

const latestNews = computed(() =>
  Array.isArray(data.value) ? data.value.slice(0, 4) : []
);

const numbersSection = ref(null);
const numberTargets = [400, 20, 20];
const animatedNumbers = ref(numberTargets.map(() => 0));
const hasAnimatedNumbers = ref(false);
let numbersObserver;
let numbersAnimationFrame;

const animateHomepageNumbers = () => {
  if (hasAnimatedNumbers.value) return;

  hasAnimatedNumbers.value = true;
  const duration = 1400;
  const startTime = performance.now();

  const tick = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    animatedNumbers.value = numberTargets.map((target) =>
      Math.round(target * easedProgress)
    );

    if (progress < 1) {
      numbersAnimationFrame = requestAnimationFrame(tick);
    }
  };

  numbersAnimationFrame = requestAnimationFrame(tick);
};

onMounted(() => {
  if (!numbersSection.value) return;

  numbersObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;

      animateHomepageNumbers();
      numbersObserver?.disconnect();
    },
    { threshold: 0.35 }
  );

  numbersObserver.observe(numbersSection.value);
});

onUnmounted(() => {
  numbersObserver?.disconnect();

  if (numbersAnimationFrame) {
    cancelAnimationFrame(numbersAnimationFrame);
  }
});

usePageSeo({
  title: "Windmill Tree Foundation | Youth, Inclusion and International Projects",
  description:
    "Windmill Tree Foundation supports youth, inclusion, refugee communities, international exchange, volunteering, and creative education projects in Poland and beyond.",
  image: "/hero/hero_second_ver.webp",
});
</script>

<style lang="scss" scoped>
.hero-block {
  padding: 0;
  margin: 0;
  position: relative;
  top: -95px;
  margin-bottom: -95px;
}

.homepage-news {
  padding: 48px 40px 69px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  margin-bottom: 28px;
}

.section-title {
  font-size: clamp(34px, 4vw, 54px);
}

.socials {
  display: flex;
  justify-content: flex-end;
  align-self: flex-start;
  margin-top: -10px;
}

.socials-under {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.63);
  border-radius: 999px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.section-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  padding: 10px 18px;
  border-radius: 999px;
  background: #ce910d;
  color: #111;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(17, 17, 17, 0.16);
  transition:
    background-color 0.4s ease,
    color 0.4s ease,
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.section-link:hover,
.section-link:focus-visible {
  background: #111;
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(17, 17, 17, 0.24);
}

.section-link:focus-visible {
  outline: 3px solid rgba(29, 78, 216, 0.28);
  outline-offset: 4px;
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

.homepage-framed-section {
  box-sizing: border-box;
  width: min(calc(100% - 96px), 1360px);
  margin-right: auto;
  margin-left: auto;
  background-color: var(--bg-page);
}

.homepage-framed-section__inner {
  box-sizing: border-box;
  width: 100%;
}

.our-mission-block,
.our-activities-block,
.numbers-section {
  box-sizing: border-box;
  width: 100%;
  padding-right: clamp(24px, 5vw, 80px);
  padding-left: 0;
}

.our-activities-block {
  align-items: flex-start;
  gap: clamp(24px, 3vw, 48px);
}

.our-activities-left,
.our-activities-right {
  min-width: 0;
}

.our-activities-left {
  flex: 1 1 0;
  width: auto;
}

.our-activities-title {
  box-sizing: border-box;
  min-width: 0;
}

.our-activities-pictures {
  min-height: 1080px;
}

.our-activities-pictures img {
  max-width: 100%;
  height: auto;
}

.img-up {
  left: 42%;
}

.img-mid-r {
  right: 0;
}

.img-bot-l {
  top: 610px;
  left: 0;
}

.img-bot-r {
  top: 790px;
  right: 0;
}

.our-activities-right {
  flex: 0 0 clamp(360px, 32vw, 480px);
  padding-right: 0;
}

.numbers-section {
  padding-left: clamp(24px, 5vw, 80px);
}

.numbers-images {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 3vw, 40px);
  padding-right: 0;
  padding-left: 0;
}

.numbers-image {
  margin: 0;
  overflow: hidden;
  border-radius: 22px;
  aspect-ratio: 16 / 9;
}

.numbers-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.number {
  top: 38%;
  font-size: clamp(3.5rem, 6.5vw, 6.25rem);
  line-height: 0.9;
}

.number-text {
  bottom: clamp(8px, 1.2vw, 16px);
  box-sizing: border-box;
  padding: 0 clamp(16px, 2vw, 28px);
  font-size: clamp(0.95rem, 1.35vw, 1.25rem);
  line-height: 1.22;
}

.number-text--short {
  bottom: clamp(14px, 2.2vw, 28px);
}

@media (max-width: 1180px) and (min-width: 901px) {
  .homepage-framed-section {
    width: min(calc(100% - 48px), 1360px);
  }

  .our-activities-block {
    padding-right: 24px;
  }

  .our-activities-right {
    flex-basis: clamp(320px, 34vw, 380px);
  }

  .our-activities-r-title {
    font-size: clamp(1.75rem, 2.8vw, 2.1rem);
  }

  .our-activities-right ul {
    padding-left: 32px;
  }

  .our-activities-right ul li {
    font-size: clamp(1.2rem, 2vw, 1.4rem);
  }

  .our-activities-pictures {
    min-height: 1040px;
  }

  .img-up {
    left: 38%;
  }

  .img-mid-l {
    width: min(58%, 282px);
  }

  .img-mid-r {
    top: 360px;
    width: min(40%, 193px);
  }

  .img-bot-l {
    width: min(44%, 213px);
  }

  .img-bot-r {
    top: 760px;
    width: min(58%, 281px);
  }

  .numbers-section {
    padding-right: 24px;
    padding-left: 24px;
  }

  .numbers-title {
    font-size: clamp(2.25rem, 4vw, 3rem);
  }
}

@media (max-width: 900px) {
  .homepage-framed-section {
    width: 100%;
  }

  .homepage-framed-section__inner {
    width: 100%;
  }

  .our-mission-block,
  .our-activities-block,
  .numbers-section {
    padding-right: 0;
    padding-left: 0;
  }

  .numbers-section {
    padding-top: 18px;
    padding-bottom: 24px;
  }

  .numbers-images.pc-ver {
    display: none;
  }

  .numbers-images-mob.mob-ver {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 0 16px;
  }

  .numbers-image {
    width: min(100%, 430px);
    margin: 0;
    overflow: hidden;
    border-radius: 5vh;
    aspect-ratio: 14 / 9;
    box-shadow: 0 14px 34px rgba(16, 34, 25, 0.16);
  }

  .numbers-image::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.08) 34%, rgba(0, 0, 0, 0.62) 100%),
      linear-gradient(90deg, rgba(0, 0, 0, 0.12), transparent 42%, rgba(0, 0, 0, 0.12));
    pointer-events: none;
  }

  .numbers-image img {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    object-fit: cover;
  }

  .number {
    z-index: 2;
    top: 45%;
    font-size: clamp(3.4rem, 15vw, 4.7rem);
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.42);
  }

  .number-text {
    z-index: 2;
    bottom: 16px;
    left: 50%;
    width: min(100% - 28px, 360px);
    height: auto !important;
    padding: 0;
    transform: translateX(-50%);
    font-size: clamp(0.9rem, 3.8vw, 1.05rem) !important;
    font-weight: 650;
    line-height: 1.22;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
  }
}

.hero-title {
  min-height: 400px;
}

.hero-img h3 {
  font-size: 40px;
}

.hero-txt {
  backdrop-filter: blur(15px);
  padding: 5px 20px;
  border-radius: 20px;
}

.hr {
  display: block;
  height: 1px;
  width: 1000px;
}

.kostenko-des {
  font-weight: normal;
}

@media (max-width: 900px) {
  .section-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
  }

  .hero-block {
    top: -72px;
    margin-bottom: -72px;
  }

  .hero-block img {
    min-height: 620px;
    object-position: 62% center;
  }

  .hero-txt {
    left: 16px;
    right: 16px;
    bottom: 18px;
    width: auto;
    max-width: none;
    padding: 18px 18px 16px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.72));
    font-size: 1.35rem;
    line-height: 1.45;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
  }

  .kostenko {
    display: inline-block;
    margin-top: 10px;
    font-size: 1.05rem;
  }

  .kostenko-des {
    display: block;
    margin-top: 6px;
    font-size: 0.9rem;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.78);
  }

  .homepage-news {
    padding: 26px 16px 20px;
  }

  .socials {
    justify-content: flex-end;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .socials-under {
    gap: 8px;
    padding: 5px 10px;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  :deep(.homepage-news-card) {
    border-radius: 14px;
  }

  .news-footer {
    margin-top: 12px;
    margin-bottom: 0;
  }

  .foundation-sec {
    margin-bottom: 0;
  }

  .our-mission-block {
    margin-top: 0;
    padding-top: 0;
  }

  .hero-text-hl {
    white-space: nowrap;
  }
}

@media (max-width: 1280px) {
  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .hero-block img {
    min-height: 560px;
  }

  .hero-txt {
    padding: 16px 15px 14px;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .kostenko {
    font-size: 0.95rem;
  }

  .kostenko-des {
    font-size: 0.82rem;
  }
}
</style>
