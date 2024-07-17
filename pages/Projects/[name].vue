<template>
    <div class="text-center" v-if="dataLoaded">
        <div class="max-w-2xl mx-auto">
            <div class="font-bold text-4xl p-10">{{ project[0].name }}</div>
            <div class="year pb-5 text-gray-500"> {{ project[0].year }}</div>
            <div class="text-lg">{{ project[0].projectDescription }}</div>

            <div class="py-5">
              <Carousel :photos="project[0].photos" />
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

</style>