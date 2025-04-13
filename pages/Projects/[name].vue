<template>
    <div v-if="dataLoaded" class="pb-24">
        <!-- <div class="">
            <div class="font-bold text-4xl p-10" :class="{ hidden: fullscreenMode}">{{ project[0].name }}</div>
            <div class="year pb-5 text-gray-500" :class="{ hidden: fullscreenMode}"> {{ project[0].year }}</div>
            <div class="text-lg" :class="{ hidden: fullscreenMode}">{{ project[0].projectDescription }}</div>

                <div class="gallery" :class="{ galleryfull: fullscreenMode }" >
                <Carousel class="max-h-3" :photos="project[0].photos"  />
                </div>
         
        </div>    -->

        <div class="header text-white -mt-[160px] pl-12 pt-[160px] " :style=" { 
            backgroundImage: `url(${project.bg_img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover' 
            }">
            <div class="header-1 pb-12"> International projects </div>
            <div class="text-center pb-24">
                <div class="proj-cat "> {{ project.category }}</div>
                <div class="proj-nam pb-14"> "{{ project.name }}"</div>
                <div class="vid mx-auto">
                    video
                </div>
            </div>
        </div>

        <div class="proj-info pl-12 mt-12 py-6">
            <div> {{ project.place }}</div>
            <div>{{ project.date }}</div>
            <div>Number of participant: {{ project.number_of_participants }}</div>
        </div>

        <div class="flex justify-end pb-36">
            <div class="proj-participants py-6 text-white pl-4 pr-6 -mt-4">
            Participants: {{ project.participants_countries }}
            </div>
        </div>
        

        <div class="proj-des px-12">
            {{ project.description }}
        </div>
        


    </div> 
    <div v-else>DATA LOADING</div> 
</template>


<script setup>
import { ref } from 'vue'
import Carousel from "~/components/Carousel";


const route = useRoute()

const projectName = ref(route.params.name)

const project = ref({})
const dataLoaded = ref(false)

const fullscreenMode = useFullscreen()

const fetchData = async () => {
    const { data } = await $fetch(`/api/project?name=${projectName.value}`, {
        query: { projectName },
        headers: useRequestHeaders(['cookie']),
        key: 'data-from-server',
        transform: data => data.data
    })
    project.value = data[0]
    dataLoaded.value = true
}



onMounted(async () => {
    await fetchData()
})

</script>

<style lang="scss" scoped>
.gallery {
    max-height: 100vh;
    padding-top: 2.5vh;
    position: relative;
}
.galleryfull {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100vh;
    margin: auto;
    background: black;
    max-width: 1200px;
}
.hidden {
    display: none;
}

.header {
    background-image: url();
}
.header-1 {
    font-size: 24px;
}
.proj-cat {
    font-size: 24px;
}
.proj-nam {
    font-size: 32px;
}
.vid {
    width: 908px;
    height: 402px;
    background-color: rgb(211, 202, 202);
    border-radius: 30px;
}

.proj-info {
    background-color: #ECF39E;
    font-size: 32px;
    font-weight: 600;
    width: 60%;
    min-width: max-content;
    display: inline-block;
    white-space: nowrap;
    padding-right: 30px;
}
.proj-participants {
    font-size: 24px;
    background-color: #C99FFF;
    padding-left: 10px;
}
.proj-des {
    font-size: 32px;
}


@media (max-width: 625px) {
.body {
    padding-left: 0px;
    padding-right: 0px;
}
}

</style>