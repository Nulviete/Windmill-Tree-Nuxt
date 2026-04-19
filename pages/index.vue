<template>
  <div class="-mt-40">
    <div class="hero-block">
      <picture>
        <source media="(min-width:900px)" :srcset="heroImg" />
        <img
          :src="heroImg"
          alt="heroimg"
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
                :title="item.new_title"
                :date="item.created_at"
                :image="item.new_img"
                :excerpt="item.preview"
                link="/latest-news"
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

    <RevealOnScroll :delay="60">
      <div class="our-mission-block text-2xl gap-12">
        <div class="our-mission-left pc-ver" style="position: relative">
          <img
            class=""
            src="~/assets/our-mission/our-mission-1.png"
            alt=""
            srcset=""
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
            alt=""
            srcset=""
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
            alt=""
            srcset=""
          />
          <div class="pc-ver" style="font-size: 14px; text-align: left">
            *all the photos you see are from activities and projects we have
            organised
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <RevealOnScroll :delay="90">
      <div class="our-activities-block flex flex-row pc-ver gap-12">
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
              alt=""
              srcset=""
            />
            <img
              class="img-mid-l"
              src="~/assets/our-activities/our-activities-img-mid-l.png"
              alt=""
              srcset=""
            />
            <img
              class="img-mid-r"
              src="~/assets/our-activities/our-activities-img-mid-r.png"
              alt=""
              srcset=""
            />
            <img
              class="img-bot-l"
              src="~/assets/our-activities/our-activities-img-bot-l.png"
              alt=""
              srcset=""
            />
            <img
              class="img-bot-r"
              src="~/assets/our-activities/our-activities-img-bot-r.png"
              alt=""
              srcset=""
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

    <RevealOnScroll :delay="120">
      <div class="numbers-title">A Bit Of Numbers...</div>
      <div class="numbers-images pc-ver">
        <div class="numbers-image">
          <img src="~/assets/numbers/numbers-1.png" alt="" srcset="" />
          <div class="number">400+</div>
          <div class="number-text">
            Participants from all around the world took part in our projects
          </div>
        </div>

        <div class="numbers-image">
          <img src="~/assets/numbers/numbers-2.png" alt="" srcset="" />
          <div class="number">20+</div>
          <div class="number-text" style="height: 70px">Projects organised</div>
        </div>

        <div class="numbers-image">
          <img src="~/assets/numbers/numbers-3.png" alt="" srcset="" />
          <div class="number">20+</div>
          <div class="number-text" style="height: 70px">
            International partners
          </div>
        </div>
      </div>

      <div class="numbers-images-mob mob-ver">
        <div class="numbers-image">
          <img src="~/assets/numbers/numbers-1-mob.png" alt="" srcset="" />
          <div class="number">400+</div>
          <div class="number-text" style="height: 55px">
            Participants from all around the world took part in our projects
          </div>
        </div>

        <div class="numbers-image">
          <img src="~/assets/numbers/numbers-2-mob.png" alt="" srcset="" />
          <div class="number">20+</div>
          <div class="number-text" style="height: 55px; font-size: 20px">
            Projects organised
          </div>
        </div>

        <div class="numbers-image">
          <img src="~/assets/numbers/numbers-3-mob.png" alt="" srcset="" />
          <div class="number">20+</div>
          <div class="number-text" style="height: 55px; font-size: 20px">
            International partners
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <RevealOnScroll :delay="150">
      <div class="our-partners">
        <div class="our-partners-title">Our Partners</div>
        <div class="pc-ver">
          <div class="partners-logos bg-[var(--bg-light-green)]">
            <img
              src="~/assets/partners/partners-1.png"
              alt=""
              srcset=""
              style="padding-right: 50px"
            />
            <img src="~/assets/partners/partners-2.png" alt="" srcset="" />
          </div>
        </div>

        <div class="mob-ver">
          <div class="partners-logos">
            <img
              src="~/assets/partners/partners-1-mob.png"
              alt=""
              style="align-self: flex-start"
            />
            <img
              src="~/assets/partners/partners-2-mob.png"
              alt=""
              style="align-self: flex-end"
            />
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <div></div>
  </div>
</template>

<script setup>
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";

const config = useRuntimeConfig();
const heroImg = computed(() => {
  return config.public.heroImg === "b"
    ? "/hero/hero_second_ver.webp"
    : "/hero/Windmill_Tree.webp";
});

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

const latestNews = computed(() => normalizedNews.value.slice(0, 4));
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
    display: block;
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
    justify-content: flex-start;
    margin-top: 8px;
  }
  .socials-under {
    gap: 12px;
  }

  .news-grid {
    grid-template-columns: 1fr;
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
