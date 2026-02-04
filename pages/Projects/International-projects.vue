<template>
    <div v-if="projects.length" class="px-10 mb-24">
        <div class="head-title pb-10">International projects</div>

        <!-- Menu -->
        <div class="menu flex flex-row">
                <button @click="yearSel=2021" class="menu-button menu-button-1 hidden" :class="{ menuButtonActive: yearSel === 2021 }">2021</button>
                <button @click="yearSel=2022" class="menu-button menu-button-2" :class="{ menuButtonActive: yearSel === 2022 }">2022</button>
                <button @click="yearSel=2023" class="menu-button menu-button-3 hidden" :class="{ menuButtonActive: yearSel === 2023 }">2023</button>
                <button @click="yearSel=2024" class="menu-button menu-button-4" :class="{ menuButtonActive: yearSel === 2024 }">2024</button>
                <button @click="yearSel=2025" class="menu-button menu-button-5" :class="{ menuButtonActive: yearSel === 2025 }">2025</button>
        </div>

        <div class="flex flex-row gap-4 flex-wrap">
            <div v-for="project in projects" :key="project.id" class="">
                <ProjectCard :project="project" @click="navigateTo('/Projects/' +project.name)" />
            </div>
        </div>
        


    </div>
    <div v-else><LoadingSpinner /></div>
</template>

<script setup>
import { ref } from 'vue'
import LoadingSpinner from '~/components/Icons/LoadingSpinner.vue'

const yearSel = ref(2025)
const projects = ref([])
const dataLoaded = ref(false)

const fetchData = async () => {
    const { data } = await $fetch(`/api/projects?year=${yearSel.value}`, {
        headers: useRequestHeaders(['cookie']),
        key: 'data-from-server',
        transform: data => data.data
    })
    projects.value = data
    dataLoaded.value = true
}

onMounted(async () => {
    await fetchData()
})

watchEffect(async () => {
  if (yearSel.value) {
    await fetchData()
  }
})

</script>

<style lang="scss" scoped>

</style>