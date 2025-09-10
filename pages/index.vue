<template>
    <div class="-mt-40">
        <!-- Hero img -->
        <div class="hero-block">
            <picture>
                <source media="(min-width:900px)" srcset="~/assets/hero/Windmill_Tree.png" />
                <img src="~/assets/hero/Windmill_Tree-mob.png" alt="heroimg" />
            </picture>

            <h3>
                …the worst is not that everything might
                <span class="hero-text-hl">change </span><br />
                but that everything remains the <span class="hero-text-hl">same!</span><br />
                <span class="kostenko">-Lina Kostenko </span><span class="kostenko-des"
                    style="font-size: 20px; font-weight: normal">(a Ukrainian poet, journalist, writer, publisher, and
                    former Soviet
                    dissident)</span>
            </h3>
        </div>

        <!-- Socials -->

        <!-- Latest news -->

        <div class="foundation-sec bg-[var(--bg-brown)]">
            <div class="Foundation-description w-full mx-auto flex items-center justify-center gap-4 h-[35px]">
                <div class="lines">
                    <div class="line"></div>
                    <div class="dashed-line"></div>
                </div>
                <div class="Foundation-description-mid" style="">LATEST NEWS</div>
                <div class="socials">
                    <div class="socials-under">
                        <a href="https://www.facebook.com/FundacjaWindmillTree/photos_by">
                            <div class="icon">
                                <IconsFacebook height="35px" class="text-[var(--black)]" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/foundation_windmill_tree/">
                            <div class="icon">
                                <IconsInstagram height="35px" class="text-[var(--black)]" />
                            </div>
                            <i class="fa-brands fa-instagram fa-4x cursor-pointer" />
                        </a>
                        <a href="https://www.youtube.com/@foundationwindmilltree8203">
                            <div class="icon">
                                <IconsYoutube height="35px" class="text-[var(--black)]" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="news.length != 0" class="latest-news-list">
                <div class="new pt-16 pb-8 pl-20 max-md:px-4">
                    <div class="new-image">
                        <img :src="news[0].new_img" alt="" />
                    </div>
                    <div class="new-info">
                        <div class="new-name text-3xl">{{ news[0].new_title }}</div>
                        <div class="new-date text-2xl">
                            {{ news[0].created_at.substr(8, 2) }}.{{
                                news[0].created_at.substr(5, 2)
                            }}.{{ news[0].created_at.substr(0, 4) }}
                        </div>
                        <div v-for="phrase in news[0].new_body" :key="phrase">
                            <div class="new-des">{{ phrase }}</div>
                            <br />
                        </div>
                        <div v-for="signature in news[0].new_signature" :key="signature">
                            <div class="new-des">{{ signature }}</div>
                            <br />
                        </div>
                    </div>
                </div>
                <hr class="first-new-line" />

                <div class="new pt-16 pb-8 pl-20 max-md:px-4">
                    <div class="new-image">
                        <img :src="news[1].new_img" alt="" />
                    </div>
                    <div class="new-info">
                        <div class="new-name text-3xl">{{ news[1].new_title }}</div>
                        <div class="new-date text-2xl">
                            {{ news[1].created_at.substr(8, 2) }}.{{
                                news[0].created_at.substr(5, 2)
                            }}.{{ news[1].created_at.substr(0, 4) }}
                        </div>
                        <div v-for="phrase in news[1].new_body" :key="phrase">
                            <div class="new-des">{{ phrase }}</div>
                            <br />
                        </div>
                        <div v-for="signature in news[1].new_signature" :key="signature">
                            <div class="new-des">{{ signature }}</div>
                            <br />
                        </div>
                    </div>
                </div>
                <hr class="second-new-line" />

                <NuxtLink to="/LatestNews">
                    <div class="news-more text-3xl">More</div>
                </NuxtLink>
            </div>
        </div>

        <!-- Our mission section -->
        <div class="our-mission-block text-2xl">
            <div class="our-mission-left" style="position: relative">
                <img class="pc-ver" src="~/assets/our-mission/our-mission-1.png" alt="" srcset="" />
                <p class="pc-ver">
                    Located in the breathtaking Izery Mountains region, our diverse team
                    is a bland of individuals from Poland, Ukraine, Germany and Czech
                    Republic.
                </p>
            </div>
            <div class="our-mission-right">
                <h1 style="" class="text-[var(--bg-green)] text-3xl">Our mission</h1>
                <img class="mob-ver" src="~/assets/our-mission/our-mission-1-mob-x.png" alt="" srcset="" />
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
                <img class="pc-ver" src="~/assets/our-mission/our-mission-2.png" alt="" srcset="" />
                <div class="pc-ver" style="font-size: 14px; text-align: left">
                    *all the photos you see are from activities and projects we have
                    organised
                </div>
            </div>
        </div>

        <!-- Our activities section -->
        <div class="our-activities-block flex flex-row pc-ver">
            <div class="our-activities-left">
                <div class="our-activities-title bg-[var(--bg-light-green)] text-black text-4xl">
                    OUR ACTIVITIES
                </div>
                <div class="our-activities-pictures">
                    <img class="img-up" src="~/assets/our-activities/our-activities-img-up.png" alt="" srcset="" />
                    <img class="img-mid-l" src="~/assets/our-activities/our-activities-img-mid-l.png" alt=""
                        srcset="" />
                    <img class="img-mid-r" src="~/assets/our-activities/our-activities-img-mid-r.png" alt=""
                        srcset="" />
                    <img class="img-bot-l" src="~/assets/our-activities/our-activities-img-bot-l.png" alt=""
                        srcset="" />
                    <img class="img-bot-r" src="~/assets/our-activities/our-activities-img-bot-r.png" alt=""
                        srcset="" />
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

        <!-- A bit of numbers section -->

        <!-- PC version -->

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

        <!-- Phone version -->
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

        <div class="our-partners">
            <div class="our-partners-title">Our Partners</div>
            <div class="pc-ver">
                <div class="partners-logos bg-[var(--bg-light-green)]">
                    <img src="~/assets/partners/partners-1.png" alt="" srcset="" style="padding-right: 50px" />
                    <img src="~/assets/partners/partners-2.png" alt="" srcset="" />
                </div>
            </div>

            <div class="mob-ver">
                <div class="partners-logos">
                    <img src="~/assets/partners/partners-1-mob.png" alt="" style="align-self: flex-start" />
                    <img src="~/assets/partners/partners-2-mob.png" alt="" style="align-self: flex-end" />
                </div>
            </div>
        </div>

        <div></div>
    </div>
</template>

<script setup>
const news = ref([]);

onMounted(async () => {
    const { latest } = await $fetch("api/news", {
        headers: useRequestHeaders(["cookie"]),
        key: "data-from-server",
        transform: (latest) => latest.data,
    });
    news.value = latest;
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

.hero-title {
    min-height: 400px;
}

.hero-img h3 {
    font-size: 40px;
}

.hr {
    display: block;
    height: 1px;
    width: 1000px;
}

.new-image {
    max-width: 371px;
}

@media (max-width: 900px) {
    .new {
        display: flex;
        flex-direction: column;
        padding: 0 16px;
    }

    .new-name {
        font-size: 14px;
        padding-top: 10px;
    }

    .new-date {
        font-size: 12px;
    }

    .new-des {
        font-size: 12px;
        padding-right: 0;
    }

    .new-image {
        max-width: 444px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: auto;
    }

    .new-image img {
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        width: 100%;
    }

    .new-info {
        width: 100%;
        padding-top: 10px;
    }
}
</style>
