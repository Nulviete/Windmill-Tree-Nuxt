<template>
    <div class="px-10">
        <div class="head-title pb-10">Volunteering projects</div>

        <!-- Menu -->
        <div class="menu flex flex-row">
                <button @click="menuSel=1" class="menu-button menu-button-1" :class="{ menuButtonActive: menuSel === 1 }">1st edition</button>
                <button @click="menuSel=2" class="menu-button menu-button-2" :class="{ menuButtonActive: menuSel === 2 }">2nd edition</button>
                <button @click="menuSel=3" class="menu-button menu-button-3" :class="{ menuButtonActive: menuSel === 3 }">3rd edition</button>
        </div>

        <!-- 1st edition -->
        <div v-if="menuSel==1">
            <div class="date">01/12/2022 - 30/11/2024</div>

            <div class="proj-name proj-name-1">1. Volunteering at Foundation Windmill tree</div>

            <div class="proj-name-sub">1.1 Long-term volunteering at Foundation Windmill tree</div>

            <!-- PC version -->
            <div class="flex flex-row gap-10 mb-24 pc-ver">
                <!-- prvni sloupec -->
                <div class="flex flex-col items-start justify-between" style="">
                    <div class="proj-p">In our first year we hosted 4 long-term international volunteers:</div>
                    <div class="proj-volunteers">Dani from Italy,<br> Rodrigo from Spain,<br> Milana from Ukraine.</div>
                    <img class="mt-36" src="~/assets/projects/volunteering-projects/1.png" style="max-width: 100%; object-fit: contain;" alt="">
                </div>

                <!-- pravy sloupec -->
                <div class="flex flex-col items-end justify-between" style="">
                    <img src="~/assets/projects/volunteering-projects/2.png" class="" alt="" style="max-width: 50%; min-width: 368px;">
                    <div class="proj-p-2">These young changemakers were actively involved in a wide range of activities, including helping at Leśna Świetlica, leading activities for Ukrainian children with refugee backgrounds, and contributing to our international projects.  <br><br>Their involvement not only enhanced our projects but also provided vital support in the daily operations of Windmill Tree.</div>
                </div>
            </div>

             <!-- phone version -->
            <div class="mob-ver">
                <img src="~/assets/projects/volunteering-projects/2.png" class="" alt="" style="">
                <div class="proj-p">In our first year we hosted 4 long-term international volunteers:</div>
                <div class="proj-volunteers">Dani from Italy,<br> Rodrigo from Spain,<br> Milana from Ukraine.</div>
                <div class="proj-p-2">These young changemakers were actively involved in a wide range of activities, including helping at Leśna Świetlica, leading activities for Ukrainian children with refugee backgrounds, and contributing to our international projects.  <br><br>Their involvement not only enhanced our projects but also provided vital support in the daily operations of Windmill Tree.</div>
            </div>

           

            <!-- short term volunteers section -->
            <div class="proj-name-sub" style="border: 1px solid #9747FF">1.2 Short-term volunteering at Foundation Windmill tree</div>

            <!-- PC ver -->
            <div class="flex flex-row gap-12 pb-24 pc-ver">
                <div style="font-size: 26px; padding-right: 100px;">During the summer, our team joined 2 short-term volunteers, Alvaro and Yassim from Spain. They brought international dimension to our summer activities for children. <br><br>Their presence not only enhanced the quality of the activities but also fostered cross-cultural understanding and created unforgettable memories for everyone involved.</div>
                <img src="~/assets/projects/volunteering-projects/3.png" class="" alt="" style="max-width: 50%; min-width: 368px; height: auto; object-fit: contain;">
            </div>

            <!-- phone ver -->
             <div class="mob-ver flex flex-col">
                <img src="~/assets/projects/volunteering-projects/3.png" class="" alt="" style="">
                <div style="" class="proj-p-2">During the summer, our team joined 2 short-term volunteers, Alvaro and Yassim from Spain. They brought international dimension to our summer activities for children. <br><br>Their presence not only enhanced the quality of the activities but also fostered cross-cultural understanding and created unforgettable memories for everyone involved.</div>
             </div>


            <!-- 2. Volunteering at organisations/institutions coordinated by Foundation Windmill tree -->
            <div class="proj-name proj-name-1" style="background-color: rgba(5,198,60,0.8) ;">2. Volunteering at organisations/institutions coordinated by Foundation Windmill tree</div>

            <div class="proj-name-sub">2.1 Cultural Center in Lubawka</div>

            <!-- PC version -->
            <div class="flex flex-row gap-12 mb-24 pc-ver">
            <!-- prvni sloupec -->
            <div class="flex flex-row gap-10" style="">
                <img src="~/assets/projects/volunteering-projects/4.png" class="" alt="" style="max-width: 50%; object-fit: contain;">

            <!-- pravy sloupec -->
            <div class="flex flex-col items-end justify-between">
                <div class="text-2xl">The center welcomed three international volunteers:  </div>
                <div class="proj-volunteers mb-20">Justine from France<br> Yana from Ukraine<br> Alexander from Luxembourg</div>
                <div class="text-2xl">They helped with daily activities like macramé workshops, dance classes, and other creative programs. Their energy and ideas added an international touch to the center, making the activities more exciting and inspiring for everyone.</div>
            </div>

            </div>

            
            <div class="flex flex-col items-end justify-between" style="">
            </div>
        </div>

        <!-- mob version -->
         <div class="mob-ver">
            <img src="~/assets/projects/volunteering-projects/4.png" class="" alt="" style="">
            <div class="proj-p">The center welcomed three international volunteers:  </div>
                <div class="proj-volunteers mb-20">Justine from France<br> Yana from Ukraine<br> Alexander from Luxembourg</div>
                <div class="proj-p-2">They helped with daily activities like macramé workshops, dance classes, and other creative programs. Their energy and ideas added an international touch to the center, making the activities more exciting and inspiring for everyone.</div>
         </div>

        <!-- 2.2 Atelier Wolimierz -->
        <div class="proj-name-sub">2.2 Atelier Wolimierz</div>

        <!-- PC version -->
        <div class="flex flex-row gap-10 mb-24 pc-ver">
            <div class="text-2xl">05.06.2023-04.08.2023 10 volunteers from different countries such as France (3), Germany (2), Netherlands, Spain, Kosovo, Belgium, and Italy were hosted in Atelier Wolimierz. <br><br> During their 2 months stay, the volunteers had the chance to experience life in the countryside while helping local community with a variety of activities such as gardening, cooking, and building/construction etc. Their main task included preparing for 2 cultural festivals where they cooked and served food for big groups of people, prepared the facilities and stages for the events, as well as supported and assisted international guest artists.</div>
            <img src="~/assets/projects/volunteering-projects/5.png" class="" alt="" style="max-width: 50%; object-fit: contain;">
        </div>

        <!-- phone version -->
         <div class="flex flex-col mob-ver">
            <img src="~/assets/projects/volunteering-projects/5.png" class="" alt="" style="">
            <div class="proj-p-2">
                05.06.2023-04.08.2023 10 volunteers from different countries such as France (3), Germany (2), Netherlands, Spain, Kosovo, Belgium, and Italy were hosted in Atelier Wolimierz. <br><br> During their 2 months stay, the volunteers had the chance to experience life in the countryside while helping local community with a variety of activities such as gardening, cooking, and building/construction etc. Their main task included preparing for 2 cultural festivals where they cooked and served food for big groups of people, prepared the facilities and stages for the events, as well as supported and assisted international guest artists.
            </div>
         </div>

        </div>






        <!-- 2nd edition -->
        <div v-if="menuSel==2">

            <div class="date">01/12/2022 - 30/11/2024</div>

            <div class="proj-name proj-name-1" style="background-color: #FF7BF8;">1. Volunteering at Foundation Windmill tree</div>

            <div class="proj-name-sub" style="border: 1px solid #840052;">1.1 Long-term volunteering at Foundation Windmill tree</div>

            <!-- PC-ver -->
            <div class="flex flex-row mb-24 pc-ver">
                <!-- prvni sloupec -->
                <div class="flex flex-col items-start">
                    <div class="proj-p">In our second year we as well hosted 4 long-term international volunteers:</div>
                    <div class="proj-volunteers" style="background-color: rgba(255,122,117, 0.34);">Oryna from Ukraine <br> Uxia from Spain <br> Kateryna from Ukraine <br> Caoimhe from Ireland</div>
                </div>

                <!-- pravy sloupec -->
                <div class="flex flex-col items-end justify-between">
                    <img src="~/assets/projects/volunteering-projects/6.png" class="" alt="" style="max-width: 70%; object-fit: contain; margin-top: -15px;">
                </div>
            </div>

            <!-- phone ver -->
             <div class="flex flex-col mob-ver">
                <img src="~/assets/projects/volunteering-projects/6.png" class="" alt="" style="">
                <div class="proj-p">In our second year we as well hosted 4 long-term international volunteers:</div>
                <div class="proj-volunteers" style="background-color: rgba(255,122,117, 0.34);">Oryna from Ukraine <br> Uxia from Spain <br> Kateryna from Ukraine <br> Caoimhe from Ireland</div>
                <div class="proj-p-2"></div>
             </div>

            <div class="proj-name-sub" style="border: 1px solid #9747FF;">1.2 Group volunteering Izerbejdzan</div>

            <!-- PC ver -->
            <div class="text-2xl mb-24 pc-ver">
                <img src="~/assets/projects/volunteering-projects/7.png" class="ml-5 mb-5" alt="" style="max-width: 30%; object-fit: contain; float: right;">
                Volunteers in Pobiedna prepared for the Punk Eco Festival by building eco-friendly infrastructure like fences, platforms, and bathhouse walls using recycled materials while learning skills such as tool use, waste sorting, and furniture building. <br><br>They also created festival flags, posters, and maps, set up tents, stages, and a kitchen, and supported various festival operations. In their free time, they enjoyed mountain hikes, concerts, and cultural trips to nearby towns. <br><br>
                The festival itself was a whirlwind of music, fun, and teamwork, followed by cleanup and a well-deserved rest, leaving volunteers with unforgettable memories and valuable experiences.
            </div>

            <!-- mob ver -->
             <div class="mob-ver flex flex-col">
                <img src="~/assets/projects/volunteering-projects/7.png" class="" alt="" style="">
                <div class="proj-p-2">
                    Volunteers in Pobiedna prepared for the Punk Eco Festival by building eco-friendly infrastructure like fences, platforms, and bathhouse walls using recycled materials while learning skills such as tool use, waste sorting, and furniture building. <br><br>They also created festival flags, posters, and maps, set up tents, stages, and a kitchen, and supported various festival operations. In their free time, they enjoyed mountain hikes, concerts, and cultural trips to nearby towns. <br><br>
                The festival itself was a whirlwind of music, fun, and teamwork, followed by cleanup and a well-deserved rest, leaving volunteers with unforgettable memories and valuable experiences.
                </div>
             </div>
        </div>

        



    </div>
    
    
</template>

<script setup>
import { ref } from 'vue'

const menuSel = ref(1)

</script>

<style lang="scss" scoped>

.menu-button {
    padding: 2px 10px;
    border-radius: 50vh;
    margin: 20px 12px;
    margin-bottom: 48px;
    font-size: 24px;
}
.menu-button:hover {
    cursor: pointer;
}
.menu-button-1 {
    background-color: #EFFF3B;
}
.menu-button-2 {
    background-color: #EEC9C9;
}
.menu-button-3 {
    background-color: rgba(151, 71, 255, 0.4);
}
.menu-button-4 {
    background-color: rgba(250, 191, 65, 0.979);
}
.menuButtonActive {
    background-color: #6C7600;
    color: white;
}

.head-title {
    font-size: 40px;
}
.date {
    font-size: 36px;
    padding-bottom: 36px;
}
.proj-name {
    border-top-left-radius: 25vh;
    border-bottom-left-radius: 25vh;
    padding-left: 12px;
    margin-right: -40px;
    margin-bottom: 20px;
    font-size: 26px;
}
.proj-name-1 {
    background-color: rgba(8,102,255, 0.4);
}
.proj-name-sub {
    display: inline-block;
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 80px;
    padding-right: 40px;
    padding-left: 42px;
    margin-left: -42px;
  
    border: 1px solid #0866FF;
    border-top-right-radius: 25vh;
    border-bottom-right-radius: 25vh;
}
.proj-p {
    font-size: 26px;
} 
.proj-p-2 {
    font-size: 24px;
    padding-left: 100px;
}  
.proj-volunteers {
    display: inline-block;
    font-size: 26px;
    background-color: rgba(236,243,158,0.8);
    border-radius: 30px;
    padding: 5px 40px 5px 20px;
    margin-top: 30px;
}
.proj-1-img {
    margin-top: 140px;
}

@media (max-width: 900px) { 

.proj-volunteers {
    padding-top: 0px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
}
.proj-p-2 {
    padding: 0;
    margin-top: 5px;
    margin-bottom: 55px;
}
.head-title {
    text-align: center;
}


// fonts
.menu-button {
    font-size: 14px;
}
.head-title {
    font-size: 20px;
}

.proj-name, .proj-name-sub, .proj-p, .proj-p-2, .date {
    font-size: 12px;
}
.proj-volunteers {
    font-size: 13px;
}

// paddings, margins
.proj-name-sub {
    margin-top: 0px;
    margin-bottom: 20px;
}
.date {
    padding-bottom: 25px;
}
.menu-button {
    margin-top: 0px;
    margin-bottom: 30px;
}
.mob-ver img {
    margin-bottom: 15px;
}





}


</style>