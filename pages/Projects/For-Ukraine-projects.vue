<template>
<div v-bind="attrs" class="-mt-40">
    <div class="header flex flex-col justify-center h-[70vh] max-900:h-[34vh]">
        <div class="header-1">4 Ukraine</div>
    </div>

    <div class="px-4 md:pl-10 py-10 max-md:px-4">
        <div
        class="text-black text-[40px] pb-4">Projects we have organized</div>
        <!-- Menu -->
            <div class="menu flex flex-row">
                    <button @click="menuSel=2022" class="menu-button menu-button-1" :class="{ menuButtonActive: menuSel === 2022 }">2022-2023</button>
                    <button @click="menuSel=2024" class="menu-button menu-button-2" :class="{ menuButtonActive: menuSel === 2024 }">2024</button>
                    <button @click="menuSel=2025" class="menu-button menu-button-3" :class="{ menuButtonActive: menuSel === 2025 }">2025</button>
            </div>

        <!-- 2025 -->
        <div v-if="menuSel==2025">

            <div class="flex flex-row items-center flex-wrap">
                <div class="proj-title project-title-2025">KLUB ODWAŻNYCH I SPRYTNYCH</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015; </div>
                <div>01.04.2025 - 31.03.2026</div>
            </div>

            <div class="project-copy project-copy--intro md:pr-10">
                <h2>Wsparcie psychospołeczne dla dzieci z Ukrainy w Szklarskiej Porębie</h2>
                <p>
                    W okresie od 1 kwietnia 2025 r. do 31 marca 2026 r. w Szklarskiej Porębie realizowaliśmy projekt „KLUB ODWAŻNYCH I SPRYTNYCH (KOS) – program psychospołecznego wsparcia dla dzieci w Szklarskiej Porębie”.
                </p>
                <p>
                    <strong>Cel:</strong> zapewnienie specjalistycznego wsparcia emocjonalnego, społecznego i adaptacyjnego dzieciom uchodźczym z Ukrainy, które mieszkają w OZZ Mała Bawaria i uczęszczają do Szkoły Podstawowej nr 1 im. Tadeusza Kościuszki w Szklarskiej Porębie.
                </p>
            </div>

            <div class="project-stats md:pr-10">
                <div>
                    <span>40</span>
                    <p>dzieci w wieku 8-14 lat</p>
                </div>
                <div>
                    <span>90</span>
                    <p>prawie 90 godzin TUS</p>
                </div>
                <div>
                    <span>5-6</span>
                    <p>osobowe grupy zajęciowe</p>
                </div>
            </div>

            <div class="project-copy project-copy--columns md:pr-10">
                <p>
                    Projekt objął 40 dzieci w wieku 8-14 lat. Były to przede wszystkim dzieci uczące się w oddziałach przygotowawczych, a także uczniowie ukraińscy uczęszczający już do klas polskich, którzy nadal potrzebowali wsparcia w adaptacji szkolnej, budowaniu relacji z rówieśnikami, komunikacji oraz funkcjonowaniu w grupie.
                </p>
                <p>
                    Szklarska Poręba, jako przygraniczne miasteczko górskie, przyjęła znaczną liczbę osób uchodźczych w stosunku do liczby mieszkańców. Jednocześnie na terenie miasta brakowało stałego wsparcia psychospołecznego prowadzonego w języku ukraińskim. Projekt KOS odpowiadał więc na bardzo konkretne potrzeby dzieci, szkoły i lokalnej społeczności.
                </p>
                <p>
                    Dzięki ścisłej współpracy ze Szkołą Podstawową nr 1 działania mogły być prowadzone bezpośrednio w środowisku, w którym dzieci funkcjonują na co dzień. Pozwoliło to objąć wsparciem dzieci, które najbardziej go potrzebowały, w tym uczniów mających trudności z koncentracją, kontrolą emocji, współpracą, rozumieniem norm społecznych oraz odnalezieniem się w polskim systemie szkolnym.
                </p>
            </div>

            <hr class="-ml-4 md:-ml-10">

            <div class="flex flex-row items-center flex-wrap">
                <div class="proj-title" style="background-color: rgba(129, 177, 255, 0.7);">Trening Umiejętności Społecznych</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015; </div>
                <div>SP1 i OZZ Mała Bawaria</div>
            </div>

            <div class="project-copy md:pr-10">
                <p>
                    Głównymi działaniami projektu były Trening Umiejętności Społecznych, grupy wsparcia prowadzone przez psycholożkę z Ukrainy oraz indywidualne konsultacje psychologiczne w języku ukraińskim.
                </p>
                <p>
                    Zajęcia odbywały się głównie na terenie SP1, a w okresie letnim również w OZZ Mała Bawaria. Łącznie zrealizowano prawie 90 godzin TUS.
                </p>
                <p>
                    Podczas zajęć dzieci pracowały w małych, 5-6-osobowych grupach. Spotkania prowadzone były w języku ukraińskim, co dawało uczestnikom poczucie bezpieczeństwa i pozwalało swobodniej mówić o swoich trudnościach, emocjach i potrzebach.
                </p>
                <p>
                    Zajęcia koncentrowały się na rozwijaniu podstawowych umiejętności społecznych i emocjonalnych. Dzieci ćwiczyły komunikację, współpracę, rozwiązywanie konfliktów, przestrzeganie zasad, rozumienie norm społecznych oraz budowanie relacji z rówieśnikami. Szczególnie dużo uwagi poświęcono współpracy - najpierw w prostych zadaniach w parach, potem w małych zespołach, a następnie w aktywnościach wymagających działania całej grupy.
                </p>
                <p>
                    W pracy wykorzystywano metody edukacji pozaformalnej, pedagogiki zabawy i pedagogiki cyrku. Dzieci brały udział w ćwiczeniach integracyjnych, rozmowach w kręgu, scenkach, grach zespołowych, zadaniach ruchowych, aktywnościach z piłeczkami, kartami obrazkowymi i innymi materiałami dydaktycznymi. Taka forma była dla uczestników bardzo dostępna - pozwalała uczyć się poprzez działanie, zabawę i doświadczenie.
                </p>

                <div class="project-gallery">
                    <button
                        v-if="currentGalleryIndex > 0"
                        class="project-gallery-button project-gallery-button--prev"
                        type="button"
                        aria-label="Previous photos"
                        @click="prevGallerySlide"
                    >
                        &#10094;
                    </button>

                    <div class="project-gallery-viewport">
                        <div class="project-gallery-track" :style="galleryTrackStyle">
                            <div
                                v-for="photo in galleryPhotos"
                                :key="photo.src"
                                class="project-gallery-slide"
                            >
                                <img
                                    :src="photo.src"
                                    :alt="photo.alt"
                                    loading="lazy"
                                    decoding="async"
                                    @click="openFullscreen(photo)"
                                >
                            </div>
                        </div>
                    </div>

                    <button
                        v-if="currentGalleryIndex < maxGalleryIndex"
                        class="project-gallery-button project-gallery-button--next"
                        type="button"
                        aria-label="Next photos"
                        @click="nextGallerySlide"
                    >
                        &#10095;
                    </button>
                </div>
            </div>

            <hr class="hr-right pc-ver">
            <hr class="-ml-4 mob-ver">

            <div class="flex flex-row items-center flex-wrap mt-[100px] max-md:mt-[60px]">
                <div class="proj-title" style="background-color: rgba(0, 128, 36, 0.57); color: white;">Wsparcie psychologiczne</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015; </div>
                <div>język ukraiński</div>
            </div>

            <div class="project-copy project-copy--columns md:pr-10">
                <p>
                    Grupy wsparcia prowadzone przez psycholożkę z Ukrainy oraz indywidualne konsultacje psychologiczne w języku ukraińskim odbywały się na terenie SP1.
                </p>
                <p>
                    Celem konsultacji było zapewnienie dzieciom indywidualnego wsparcia emocjonalnego w języku ojczystym. Dzieci mogły rozmawiać o trudnościach szkolnych, relacjach z rówieśnikami i dorosłymi, tęsknocie za bliskimi, barierze językowej, stresie, lęku przed egzaminami, doświadczeniach wykluczenia, przykrych komentarzach, problemach z wyrażaniem emocji i stawianiem granic.
                </p>
                <p>
                    W trakcie konsultacji wykorzystywano elementy psychoedukacji, rozmowę, pracę z rysunkiem, metaforą, kartami asocjacyjnymi oraz ćwiczenia wspierające autorefleksję. Dzieci pracowały nad rozpoznawaniem własnych emocji i potrzeb, komunikowaniem niezadowolenia, radzeniem sobie ze stresem, wzmacnianiem poczucia własnej wartości oraz bardziej konstruktywnym reagowaniem w trudnych sytuacjach.
                </p>
                <p>
                    Indywidualne konsultacje uzupełniały TUS i grupy wsparcia. Pozwalały pogłębić tematy, które pojawiały się podczas pracy grupowej, oraz lepiej odpowiedzieć na potrzeby dzieci wymagających spokojniejszej, bardziej indywidualnej przestrzeni. Dotyczyło to szczególnie dzieci przeżywających silne napięcie emocjonalne, wycofujących się z kontaktów rówieśniczych, mających trudności w relacjach rodzinnych lub doświadczających problemów w szkole.
                </p>
            </div>

            <hr class="-ml-4 md:-ml-10">

            <div class="flex flex-row items-center flex-wrap">
                <div class="proj-title" style="background-color: rgba(255, 3, 2, 0.3);">Półkolonie i integracja</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015; </div>
                <div>wakacje 2025</div>
            </div>

            <div class="project-copy project-copy--outro md:pr-10">
                <p>
                    Dodatkowo w ramach projektu zrealizowano działanie kompensacyjne - dwa turnusy półkolonii dla dzieci w Szklarskiej Porębie w okresie wakacyjnym 2025 r. Wzięły w nich udział zarówno dzieci ukraińskie, jak i polskie dzieci z lokalnej społeczności. Zajęcia miały charakter integracyjny, edukacyjny i twórczy. Dzieci poznawały elementy kultury polskiej i ukraińskiej, uczestniczyły w aktywnościach ruchowych, grach terenowych, zadaniach zespołowych i działaniach artystycznych.
                </p>
                <p>
                    Projekt pokazał, jak ważne jest tworzenie dzieciom bezpiecznej przestrzeni do rozmowy, współpracy, zabawy i budowania relacji. Podczas zajęć było dużo pracy w grupie, kreatywnego myślenia i zadań wymagających pomysłowości. Dzieci malowały, tworzyły, odgrywały scenki, rozwiązywały nietypowe wyzwania i uczyły się, że razem można więcej.
                </p>
                <p>
                    Pośrednimi odbiorcami projektu byli również polscy uczniowie, nauczyciele SP1 oraz lokalna społeczność. Poprawa komunikacji, zmniejszenie napięć i większa gotowość dzieci do współpracy przełożyły się na lepszą integrację oraz bardziej wspierającą atmosferę w środowisku szkolnym.
                </p>
                <p>
                    Serdecznie dziękujemy Szkole Podstawowej nr 1 im. Tadeusza Kościuszki w Szklarskiej Porębie za współpracę, otwartość i wsparcie w realizacji działań.
                </p>
                <p class="project-funder">
                    Projekt realizowany był w ramach Fundacji Edukacja dla Demokracji i programu „Wspieramy Ukrainę”, finansowanego ze środków Polsko-Amerykańskiej Fundacji Wolności.
                </p>
            </div>

            <div class="project-logos md:pr-10" aria-label="Project partners and funders">
                <img src="~/assets/projects/for-ukraine/2025/logos/fundacja-edukacja-dla-demokracji.jpg" alt="Fundacja Edukacja dla Demokracji" loading="lazy" decoding="async">
                <img src="~/assets/projects/for-ukraine/2025/logos/polsko-amerykanska-fundacja-wolnosci.png" alt="Polsko-Amerykańska Fundacja Wolności" loading="lazy" decoding="async">
                <img src="~/assets/projects/for-ukraine/2025/logos/wspieramy-ukraine.png" alt="Wspieramy Ukrainę" loading="lazy" decoding="async">
            </div>

            <hr class="hr-right pc-ver">
            <hr class="-ml-4 mob-ver">
        </div>

        <!-- 2024 -->
        <div v-if="menuSel==2024">

            <div class="flex flex-row items-center">
                <div class="proj-title">Kaleidoscopes</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015;&#x2015; </div>
                <div >2024</div>
            </div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-550:flex-col">
                <img src="~/assets/projects/for-ukraine/1.webp" alt="" class="" loading="lazy" decoding="async">
                <div>Intercultural, intergenerational treasures hunt games.
                <br><br>
                 # Co-finansed by International Organization for Migration / United States of America
                <br><br>
                In the project participated in total 90 Ukrainian refugee children; Total amount of funding - PLN 11,238.55
                </div>
            </div>

            <hr class="-ml-4 md:-ml-10">

            <div class="flex flex-row items-center">
                <div class="proj-title" style="background-color: rgba(255, 3, 2, 0.3);">“Art of Inclusion - Equality VS Equity”</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015;&#x2015; </div>
                <div >23.05.2024 - 29.05.2024</div>
            </div>

            <div class="flex flex-row items-center">
                <div class="proj-title" style="background-color: rgba(129, 177, 255, 0.7);">“Speak UP! Every voice matters”</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015;&#x2015; </div>
                <div >23.02.2024 - 03.03.2024</div>
            </div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-550:flex-col">
                <div>International trainings attended by, among others, educators, youth workers from Ukraine (aim: exchange of experience of tools for working with young people, mental health support, etc. ) as well as young people who had the opportunity to develop mental resilience through participation in various valuable outdoor activities, artistic activities, etc.
                </div>
                <img src="~/assets/projects/for-ukraine/2.webp" alt="" class="max-w-24" loading="lazy" decoding="async">
            </div>

            <hr class="hr-right pc-ver">
            <hr class="-ml-4 mob-ver">
        </div> 


        <!-- 2022 - 23 -->
        <div v-if="menuSel==2022">

            <div class="flex flex-row items-center flex-wrap">
                <div class="proj-title" style="background-color: rgba(0, 128, 36, 0.57); color: white;">Support group for adults and children from Ukraine</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015; </div>
                <div >2022 - 2023</div>
            </div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-md:flex-col">
                <img src="~/assets/projects/for-ukraine/3.webp" alt="" loading="lazy" decoding="async">
                <div>A series of workshops on Addiction and Family Violence for Ukrainian women and their children, cooperation with the Municipal Commission for the Solution of Alcohol Problems (Leśna).
                <br><br>
                Regular meetings and activities of the Support Group for adults and children from Ukraine in the Municipal Center for Culture, Activity and Community Promotion Station (Świeradów Zdrój).
                </div>
            </div>

            <hr class="-ml-4 md:-ml-10">

            <div class="flex flex-row items-center">
                <div class="proj-title" style="background-color: #0866FF; color: white;">Airbnb.org's Rapid Response Tool Program</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015;&#x2015; </div>
                <div >2022</div>
            </div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-md:flex-col">
                <div>Implementation of Airbnb.org's Rapid Response Tool Program. We provided free temporary accommodations for about 400 people in our Lower Silesia region, as well as in various cities in Poland.
                </div>
                <img src="~/assets/projects/for-ukraine/4.webp" alt="" loading="lazy" decoding="async">
            </div>

            <hr class="hr-right pc-ver">
            <hr class="-ml-4 mob-ver">


            <div class="flex flex-row items-center mt-[100px] max-md:mt-[60px]" style="">
                <div class="proj-title" style="background-color: #840052; color: white;">We have the power</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015;&#x2015; </div>
                <div >summer 2022</div>
            </div>

            <div>Summer Izery mountains workshops for mothers and children from Ukraine. <br> # Co-finansed by Norwegian Funds, Microgrants Lower Silesian Voivodship Office in Wroclaw</div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-md:flex-col">
                <div>The summer camp program included various art therapy activities for the children, such as music, theater, pottery, drum playing, as well as trips to the mountains, archery classes, etc. <br><br> For mothers, there were meetings with psychologists, as well as classes in ceramics, singing, massage, sewing and making natural cosmetics.
                </div>
                <img src="~/assets/projects/for-ukraine/5.webp" alt="" loading="lazy" decoding="async">
            </div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-md:flex-col-reverse">
                <img src="~/assets/projects/for-ukraine/6.webp" alt="" loading="lazy" decoding="async">
                <div>Under the project, we organized summer camps for in a total of 40 women and 70 children with refugee experience. <br> Total amount of funding: PLN 166,000
                </div>
            </div>

            <hr class="-ml-4 md:-ml-10">


        </div>
    </div>

    <Teleport to="body">
        <div
            v-if="fullscreenPhoto"
            class="project-fullscreen"
            @click="closeFullscreenOnBackground"
        >
            <button
                class="project-fullscreen-close"
                type="button"
                aria-label="Close fullscreen gallery"
                @click.stop="closeFullscreen"
            >
                &times;
            </button>

            <button
                v-if="currentFullscreenIndex > 0"
                class="project-fullscreen-button project-fullscreen-button--prev"
                type="button"
                aria-label="Previous photo"
                @click.stop="prevFullscreenSlide"
            >
                &#10094;
            </button>

            <img
                :src="fullscreenPhoto.src"
                :alt="fullscreenPhoto.alt"
                class="project-fullscreen-image"
            >

            <button
                v-if="currentFullscreenIndex < galleryPhotos.length - 1"
                class="project-fullscreen-button project-fullscreen-button--next"
                type="button"
                aria-label="Next photo"
                @click.stop="nextFullscreenSlide"
            >
                &#10095;
            </button>
        </div>
    </Teleport>
</div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import bodyOutlineWorkshopPhoto from '~/assets/projects/for-ukraine/2025/photos/body-outline-workshop.webp?url'
import childrenWithDrawingsPhoto from '~/assets/projects/for-ukraine/2025/photos/children-with-drawings.webp?url'
import collaborativePortraitActivityPhoto from '~/assets/projects/for-ukraine/2025/photos/collaborative-portrait-activity.webp?url'
import drawingCirclePhoto from '~/assets/projects/for-ukraine/2025/photos/drawing-circle.webp?url'
import groupWithDrawingsPhoto from '~/assets/projects/for-ukraine/2025/photos/group-with-drawings.webp?url'
import peerDrawingActivityPhoto from '~/assets/projects/for-ukraine/2025/photos/peer-drawing-activity.webp?url'
import psychSupport1Photo from '~/assets/projects/for-ukraine/2025/photos/psych-support-1.webp?url'
import psychSupport2Photo from '~/assets/projects/for-ukraine/2025/photos/psych-support-2.webp?url'
import psychSupport3Photo from '~/assets/projects/for-ukraine/2025/photos/psych-support-3.webp?url'
import teamPhoto from '~/assets/projects/for-ukraine/2025/photos/team-photo.webp?url'
import tusWorkshop1Photo from '~/assets/projects/for-ukraine/2025/photos/tus-workshop-1.webp?url'
import tusWorkshop2Photo from '~/assets/projects/for-ukraine/2025/photos/tus-workshop-2.webp?url'
import tusWorkshop3Photo from '~/assets/projects/for-ukraine/2025/photos/tus-workshop-3.webp?url'

const menuSel = ref(2025)
const attrs = useAttrs()
const currentGalleryIndex = ref(0)
const galleryItemsPerView = ref(3)
const fullscreenPhoto = ref(null)
const currentFullscreenIndex = ref(0)

const galleryPhotos = [
  {
    src: tusWorkshop1Photo,
    alt: 'Zajęcia TUS w ramach projektu KOS',
  },
  {
    src: tusWorkshop2Photo,
    alt: 'Praca grupowa dzieci podczas zajęć TUS',
  },
  {
    src: tusWorkshop3Photo,
    alt: 'Ćwiczenia integracyjne dla dzieci z Ukrainy',
  },
  {
    src: psychSupport1Photo,
    alt: 'Wsparcie psychospołeczne dla dzieci z Ukrainy',
  },
  {
    src: psychSupport2Photo,
    alt: 'Zajęcia wspierające emocje i relacje dzieci',
  },
  {
    src: psychSupport3Photo,
    alt: 'Konsultacje i działania wspierające w projekcie KOS',
  },
  {
    src: teamPhoto,
    alt: 'Zespół projektu KOS',
  },
  {
    src: bodyOutlineWorkshopPhoto,
    alt: 'Dzieci tworzące kontury postaci podczas warsztatów',
  },
  {
    src: drawingCirclePhoto,
    alt: 'Dzieci prezentujące prace plastyczne w kręgu',
  },
  {
    src: groupWithDrawingsPhoto,
    alt: 'Grupa dzieci z gotowymi pracami plastycznymi',
  },
  {
    src: peerDrawingActivityPhoto,
    alt: 'Wspólna praca dzieci nad rysunkami',
  },
  {
    src: childrenWithDrawingsPhoto,
    alt: 'Dzieci pokazujące własne rysunki',
  },
  {
    src: collaborativePortraitActivityPhoto,
    alt: 'Dzieci podczas wspólnego ćwiczenia plastycznego',
  },
]

const maxGalleryIndex = computed(() =>
  Math.max(0, Math.ceil(galleryPhotos.length / galleryItemsPerView.value) - 1)
)

const galleryTrackStyle = computed(() => ({
  transform: `translateX(-${currentGalleryIndex.value * 100}%)`,
}))

const updateGalleryItemsPerView = () => {
  galleryItemsPerView.value = window.innerWidth <= 900 ? 1 : 3
  currentGalleryIndex.value = Math.min(currentGalleryIndex.value, maxGalleryIndex.value)
}

const nextGallerySlide = () => {
  if (currentGalleryIndex.value < maxGalleryIndex.value) {
    currentGalleryIndex.value++
  }
}

const prevGallerySlide = () => {
  if (currentGalleryIndex.value > 0) {
    currentGalleryIndex.value--
  }
}

const openFullscreen = (photo) => {
  fullscreenPhoto.value = photo
  currentFullscreenIndex.value = galleryPhotos.indexOf(photo)
}

const closeFullscreen = () => {
  fullscreenPhoto.value = null
  currentFullscreenIndex.value = 0
}

const nextFullscreenSlide = () => {
  if (currentFullscreenIndex.value < galleryPhotos.length - 1) {
    currentFullscreenIndex.value++
    fullscreenPhoto.value = galleryPhotos[currentFullscreenIndex.value]
  }
}

const prevFullscreenSlide = () => {
  if (currentFullscreenIndex.value > 0) {
    currentFullscreenIndex.value--
    fullscreenPhoto.value = galleryPhotos[currentFullscreenIndex.value]
  }
}

const closeFullscreenOnBackground = (event) => {
  if (event.target === event.currentTarget) {
    closeFullscreen()
  }
}

const handleGalleryKeydown = (event) => {
  if (!fullscreenPhoto.value) return

  if (event.key === 'ArrowRight') nextFullscreenSlide()
  else if (event.key === 'ArrowLeft') prevFullscreenSlide()
  else if (event.key === 'Escape') closeFullscreen()
}

onMounted(() => {
  updateGalleryItemsPerView()
  window.addEventListener('resize', updateGalleryItemsPerView)
  window.addEventListener('keydown', handleGalleryKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateGalleryItemsPerView)
  window.removeEventListener('keydown', handleGalleryKeydown)
})

usePageSeo({
  title: "For Ukraine Projects | Windmill Tree Foundation",
  description:
    "Learn about Windmill Tree Foundation support projects for Ukrainian children, youth, women, and refugee communities.",
});

</script>

<style lang="scss" scoped>
* {
    color: black;
    font-size: 1.5rem;
}
.header {
    background-image: url('~/assets/projects/for-ukraine/header-img.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.header-1 {
    font-size: 7.9375rem;
    text-align: center;
    color: white;
    font-weight: bold;
}
.dash {
    letter-spacing: -2px;
    font-size: 0.75rem;
    margin: 0px 10px;
}
hr {
    width: 80vh;
    max-width: 50%;
    border-top: 1px solid #000000;
    margin-bottom: 100px;
}
.hr-right {
    position: absolute;
    left: 50%;
    width: 50vw;
}

.proj-title {
    background-color: #ECF39E;
    border-radius: 50vh;
    padding: 2px 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-shrink: 0;
}
.project-title-2025 {
    background-color: rgba(236, 243, 158, 0.95);
    max-width: 100%;
}
.project-copy {
    display: grid;
    gap: 18px;
    padding-top: 28px;
    padding-bottom: 52px;
    max-width: 1180px;
}
.project-copy h2 {
    font-size: 2.5rem;
    line-height: 1.12;
    font-weight: 700;
}
.project-copy p,
.project-copy strong {
    font-size: 1.375rem;
    line-height: 1.45;
}
.project-copy--intro {
    padding-bottom: 34px;
}
.project-copy--columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
}
.project-copy--outro {
    max-width: 1040px;
}
.project-gallery {
    position: relative;
    margin-top: 18px;
}
.project-gallery-viewport {
    overflow: hidden;
}
.project-gallery-track {
    display: flex;
    transition: transform 300ms ease;
}
.project-gallery-slide {
    min-width: calc(100% / 3);
    padding-right: 14px;
}
.project-gallery-slide:last-child {
    padding-right: 0;
}
.project-gallery img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 18px;
    object-fit: cover;
    cursor: zoom-in;
}
.project-gallery-button {
    position: absolute;
    top: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);
    transform: translateY(-50%);
    font-size: 1.75rem;
    line-height: 1;
}
.project-gallery-button--prev {
    left: -10px;
}
.project-gallery-button--next {
    right: 4px;
}
.project-fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.92);
}
.project-fullscreen-image {
    width: auto;
    max-width: min(100%, 1200px);
    max-height: calc(100vh - 48px);
    object-fit: contain;
}
.project-fullscreen-close,
.project-fullscreen-button {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #ffffff;
}
.project-fullscreen-close {
    top: 18px;
    right: 18px;
    width: 48px;
    height: 48px;
    font-size: 2.5rem;
    line-height: 1;
}
.project-fullscreen-button {
    top: 50%;
    width: 46px;
    height: 46px;
    background-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-50%);
    font-size: 1.75rem;
}
.project-fullscreen-button--prev {
    left: 18px;
}
.project-fullscreen-button--next {
    right: 18px;
}
.project-funder {
    padding: 18px 20px;
    border-radius: 18px;
    background-color: rgba(236, 243, 158, 0.55);
}
.project-logos {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: center;
    gap: 100px;
    width: 100%;
    max-width: 1180px;
    margin: 0 0 72px;
    padding: 18px 0px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 18px;
    background-color: #ffffff;
}
.project-logos img {
    width: 100%;
    max-width: 100%;
    height: 132px;
    object-fit: contain;
}
.project-logos img:first-child {
    height: 170px;
}
.project-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    max-width: 980px;
    padding-bottom: 56px;
}
.project-stats div {
    padding: 18px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 18px;
}
.project-stats span {
    display: block;
    margin-bottom: 6px;
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
}
.project-stats p {
    font-size: 1.125rem;
    line-height: 1.25;
}
img {
    object-fit: contain;
    max-width: 50%;
}

@media (min-width: 1368px) {
.header {
    height: 76vh;
    background-position: center 42%;
}
}

@media (max-width: 900px) { 
* {
    font-size: 0.75rem;
}
.header {
    height: 34vh;
}
.header-1 {
    font-size: 1.875rem;
}

hr {
    width: 100vw;
    max-width: none; 
    border: none;
    border-top: 1px solid #000;
    margin-bottom: 60px;
    box-sizing: border-box;
}
.project-copy {
    gap: 12px;
    padding-top: 18px;
    padding-bottom: 36px;
}
.project-copy h2 {
    font-size: 1.625rem;
}
.project-copy p,
.project-copy strong {
    font-size: 0.875rem;
}
.project-copy--columns,
.project-stats {
    grid-template-columns: 1fr;
}
.project-gallery-slide {
    min-width: 100%;
    padding-right: 0;
}
.project-gallery img {
    border-radius: 14px;
}
.project-gallery-button {
    width: 38px;
    height: 38px;
    font-size: 1.5rem;
}
.project-gallery-button--prev {
    left: 8px;
}
.project-gallery-button--next {
    right: 8px;
}
.project-fullscreen {
    padding: 16px;
}
.project-fullscreen-image {
    max-height: calc(100vh - 32px);
}
.project-fullscreen-close {
    top: 10px;
    right: 10px;
    width: 42px;
    height: 42px;
    font-size: 2.125rem;
}
.project-fullscreen-button {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
}
.project-fullscreen-button--prev {
    left: 10px;
}
.project-fullscreen-button--next {
    right: 10px;
}
.project-logos {
    gap: 16px;
    grid-template-columns: 1fr;
    margin-bottom: 48px;
    padding: 16px;
}
.project-logos img {
    height: 110px;
}
.project-logos img:first-child {
    height: 140px;
}
.project-stats {
    gap: 10px;
    padding-bottom: 40px;
}
.project-stats div {
    padding: 14px;
    border-radius: 14px;
}
.project-stats span {
    font-size: 2rem;
}
.project-stats p {
    font-size: 0.8125rem;
}

}
@media (max-width: 550px) { 

img {
    max-width: 100%;
}
.project-logos {
    align-items: center;
}

}

</style>
