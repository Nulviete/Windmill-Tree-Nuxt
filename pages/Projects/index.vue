<template>
    <div class="">
        <div class="filters flex flex-row justify-end items-center pt-5 container mx-auto cont">
             <UInput v-model="search" color="white" variant="outline" placeholder="Search..." icon="i-heroicons-magnifying-glass-20-solid" class="pr-3 search-input child" />
             <div class="flex flex-row items-center category child">
                <USelect size="sm" :options="categories" placeholder="Category" class="w-44" v-model="categorySel" />
                <IconsCancel v-if="categorySel !=''" @click="categorySel = ''" class="relative right-14 size-5 -mr-5" />
             </div>
             <div class="flex flex-row items-center year child">
                <USelect size="sm" :options="years" placeholder="Year" v-model="yearSel" class="w-32 pl-2" />
                <IconsCancel v-if="yearSel !=''" @click="yearSel = ''" class="relative right-14 size-5 -mr-5" />
             </div>
             
             
        </div>
        <div class="container mx-auto my-7">
           <div v-if="dataLoaded" class="flex flex-row justify-center items-center flex-wrap">
                <div v-for="project in filteredProjects" :key="project.id" class="p-3">
                    <ProjectCard :project="project" @click="navigateTo('/Projects/' +project.name)" />
                </div>
            </div>

            <p v-else>LOADING DATA</p> 
        </div>
        
    </div>
    
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([])
const dataLoaded = ref(false)

const search = ref('')
const years = ref([])
const categories = ref([])

const categorySel = ref('')
const yearSel = ref('')

const filteredProjects = ref([])



const selByYear = (rok, kategorie) => {
    if (rok === '' && kategorie === '') return projects.value
    else if (rok === '' && kategorie !== '') {
      return projects.value.filter((project) => project.category === kategorie)
    } else if (rok !== '' && kategorie === '') {
      return projects.value.filter((project) => project.year.toString() === rok)
    } else return projects.value.filter((project) => project.year.toString() === rok && project.category === kategorie)
  }

const searchProject = (input) => {
    return filteredProjects.value.filter((project) => project.name.toLowerCase().includes(input.toLowerCase()) )
}

const fetchData = async () => {
    const { data } = await $fetch('/api/projects', {
        headers: useRequestHeaders(['cookie']),
        key: 'data-from-server',
        transform: data => data.data
    })
    projects.value = data
    dataLoaded.value = true
}

onMounted(async () => {
    
    await fetchData()

     for (let i = 0; i < projects.value.length; i++) {
          if (!years.value.includes(projects.value[i].year)) {
            years.value.push(projects.value[i].year)
          }
          if (!categories.value.includes(projects.value[i].category)) {
            categories.value.push(projects.value[i].category)
          }
        }

    years.value.sort(function (a, b) {
        return b - a
    })
    console.log(years.value)
    
})

watchEffect(() => {
  filteredProjects.value = selByYear(yearSel.value, categorySel.value)
  if (search.value) {
    filteredProjects.value = searchProject(search.value)
  }
})







</script>

<style lang="scss" scoped>
.body {
    max-width: 1200px;
}

@media (max-width: 480px) {
  .cont {
    display: flex;
    flex-wrap: wrap;
  }
  .child {
    padding-bottom: 5px;
  }
  .child:first-child {
  width: 100%;
}
.child:not(:first-child) {
  flex: 1;
} 
}
</style>