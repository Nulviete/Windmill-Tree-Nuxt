<template>
    <div class="text-center" v-if="dataLoaded">
        <div class="body max-w-2xl mx-auto px-20 pt-32 -mt-24 mb-0" style="background-color: #b7d189; min-height: 100vh; height: auto;">
            <div class="font-bold text-4xl p-10" :class="{ hidden: fullscreenMode}">{{ project[0].name }}</div>
            <div class="year pb-5 text-gray-500" :class="{ hidden: fullscreenMode}"> {{ project[0].year }}</div>
            <div class="text-lg" :class="{ hidden: fullscreenMode}">{{ project[0].projectDescription }}</div>

                <div class="gallery" :class="{ galleryfull: fullscreenMode }" >
                <Carousel class="max-h-3" :photos="project[0].photos"  />
                </div>
         
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
    })
    project.value = data
    dataLoaded.value = true
}



onMounted(async () => {
    await fetchData()
})

</script>

<style lang="scss" scoped>
.gallery {
    min-height: 440px;
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

@media (max-width: 625px) {
.body {
    padding-left: 0px;
    padding-right: 0px;
}
}

</style>