<template>
<div v-bind="attrs" class="-mt-40">
    <div class="header flex flex-col justify-center">
        <div class="header-1">4 Ukraine</div>
    </div>

    <div class="md:pl-10 py-10 max-md:px-4">
        <div
        class="text-black text-[40px] pb-4">Projects we have organized</div>
        <!-- Menu -->
            <div class="menu flex flex-row">
                    <button @click="menuSel=2022" class="menu-button menu-button-1" :class="{ menuButtonActive: menuSel === 2022 }">2022-2023</button>
                    <button @click="menuSel=2024" class="menu-button menu-button-2" :class="{ menuButtonActive: menuSel === 2024 }">2024</button>
                    <button @click="menuSel=2025" class="menu-button menu-button-3" :class="{ menuButtonActive: menuSel === 2025 }">2025</button>
            </div>

        <!-- 2022 -->
        <div v-if="menuSel==2024">

            <div class="flex flex-row items-center">
                <div class="proj-title">Kaleidoscopes</div>
                <div class="dash pc-ver"> &#x2015;&#x2015;&#x2015; </div>
                <div class="dash mob-ver"> &#x2015;&#x2015; </div>
                <div >2024</div>
            </div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-md:flex-col">
                <img src="~/assets/projects/for-ukraine/1.png" alt="" class="">
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

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-md:flex-col">
                <div>International trainings attended by, among others, educators, youth workers from Ukraine (aim: exchange of experience of tools for working with young people, mental health support, etc. ) as well as young people who had the opportunity to develop mental resilience through participation in various valuable outdoor activities, artistic activities, etc.
                </div>
                <img src="~/assets/projects/for-ukraine/2.png" alt="">
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
                <img src="~/assets/projects/for-ukraine/3.png" alt="">
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
                <img src="~/assets/projects/for-ukraine/4.png" alt="">
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
                <img src="~/assets/projects/for-ukraine/5.png" alt="">
            </div>

            <div class="flex flex-row gap-10 py-10 md:pr-10 items-center max-md:flex-col-reverse">
                <img src="~/assets/projects/for-ukraine/6.png" alt="">
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

const menuSel = ref(2024)
const attrs = useAttrs()

</script>

<style lang="scss" scoped>
* {
    color: black;
    font-size: 24px;
}
.header {
    background-image: url('~/assets/projects/for-ukraine/header-img.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 90vh;
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
img {
    object-fit: contain;
    max-width: 50%;
}


@media (max-width: 900px) { 
* {
    font-size: 12px;
}
.header-1 {
    font-size: 30px;
}
img {
    max-width: 100%;
}
hr {
    width: 100vw;
    max-width: none; 
    border: none;
    border-top: 1px solid #000;
    margin-bottom: 60px;
    box-sizing: border-box;
}

}

</style>