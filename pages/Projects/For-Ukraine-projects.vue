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
                    <img src="~/assets/projects/for-ukraine/2025/tus 1.jpg" alt="Zajęcia TUS w ramach projektu KOS" loading="lazy" decoding="async">
                    <img src="~/assets/projects/for-ukraine/2025/tus 2.jpg" alt="Praca grupowa dzieci podczas zajęć TUS" loading="lazy" decoding="async">
                    <img src="~/assets/projects/for-ukraine/2025/tus 3.jpg" alt="Ćwiczenia integracyjne dla dzieci z Ukrainy" loading="lazy" decoding="async">
                    <img src="~/assets/projects/for-ukraine/2025/psych 1.jpg" alt="Wsparcie psychospołeczne dla dzieci z Ukrainy" loading="lazy" decoding="async">
                    <img src="~/assets/projects/for-ukraine/2025/psych 2.jpg" alt="Zajęcia wspierające emocje i relacje dzieci" loading="lazy" decoding="async">
                    <img src="~/assets/projects/for-ukraine/2025/psych 3.jpg" alt="Konsultacje i działania wspierające w projekcie KOS" loading="lazy" decoding="async">
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
                <img src="~/assets/projects/for-ukraine/2025/logo_1.jpg" alt="Fundacja Edukacja dla Demokracji" loading="lazy" decoding="async">
                <img src="~/assets/projects/for-ukraine/2025/logo_2.png" alt="Polsko-Amerykańska Fundacja Wolności" loading="lazy" decoding="async">
                <img src="~/assets/projects/for-ukraine/2025/logo_3.png" alt="Wspieramy Ukrainę" loading="lazy" decoding="async">
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
</div>
</template>

<script setup>
import { ref } from 'vue'

const menuSel = ref(2025)
const attrs = useAttrs()

usePageSeo({
  title: "For Ukraine Projects | Windmill Tree Foundation",
  description:
    "Learn about Windmill Tree Foundation support projects for Ukrainian children, youth, women, and refugee communities.",
});

</script>

<style lang="scss" scoped>
* {
    color: black;
    font-size: 24px;
}
.header {
    background-image: url('~/assets/projects/for-ukraine/header-img.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.header-1 {
    font-size: 127px;
    text-align: center;
    color: white;
    font-weight: bold;
}
.dash {
    letter-spacing: -2px;
    font-size: 12px;
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
    font-size: 40px;
    line-height: 1.12;
    font-weight: 700;
}
.project-copy p,
.project-copy strong {
    font-size: 22px;
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
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 18px;
}
.project-gallery img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 18px;
    object-fit: cover;
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
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
}
.project-stats p {
    font-size: 18px;
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
    font-size: 12px;
}
.header {
    height: 34vh;
}
.header-1 {
    font-size: 30px;
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
    font-size: 26px;
}
.project-copy p,
.project-copy strong {
    font-size: 14px;
}
.project-copy--columns,
.project-stats {
    grid-template-columns: 1fr;
}
.project-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
}
.project-gallery img {
    border-radius: 14px;
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
    font-size: 32px;
}
.project-stats p {
    font-size: 13px;
}

}
@media (max-width: 550px) { 

img {
    max-width: 100%;
}
.project-gallery {
    grid-template-columns: 1fr;
}
.project-logos {
    align-items: center;
}

}

</style>
