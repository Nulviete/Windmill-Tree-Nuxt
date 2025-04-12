<template>
    <div>
        <!-- <div class="filters flex flex-row justify-end items-center pt-5 container mx-auto cont">
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

        </div> -->
        <div class="pc-ver">
          <div class="page-title">Projects</div>

          <div class="flex justify-center gap-6">
            <NuxtLink to="/Projects/Local-projects" class="">
              <img src="~/assets/projects/local-pc.png" alt="">
            </NuxtLink>
            <NuxtLink to="/Projects/International-projects" class="">
              <img src="~/assets/projects/international-pc.png" alt="">
            </NuxtLink>
            
          </div>

          <div class="flex justify-center gap-6">
            <NuxtLink to="/Projects/For-Ukraine-projects" class="">
              <img src="~/assets/projects/4ukraine-pc.png" alt="">
            </NuxtLink>
            
            <NuxtLink to="/Projects/Volunteering-projects" class="">
                <img src="~/assets/projects/esc-pc.png" alt="">
            </NuxtLink>

            <NuxtLink to="/Projects/From-partners-projects" class="">
              <img src="~/assets/projects/from-partners-pc.png" alt="" style="">
            </NuxtLink>
            
            
          </div>
        </div>

        <div class="mob-ver">
          <div class="page-title">Projects</div>

          <div class="flex flex-col p-6 gap-6">
            <div class="fill">
              <img src="~/assets/projects/international-mob.png" alt="">
              <p style="background-color: #81B1FF; color: white;">International</p>
            </div>
            <div class="fill">
              <img src="~/assets/projects/local-mob.png" alt="">
              <p style="background-color: #90A955; color: white;">Local</p>
            </div>
            <div class="fill">
              <img src="~/assets/projects/esc-mob.png" alt="">
              <p style="background-color: #FF7A75; color: white;">European Solidarity Corps</p>
            </div>
            <div class="fill">
              <img src="~/assets/projects/from-partners-mob.png" alt="">
              <p style="background-color: #CC3396; color: white;">From Partners</p>
            </div>
            <div class="fill">
              <img src="~/assets/projects/4ukraine-mob.png" alt="">
              <p style="background-color: #B0BF00; color: white;">For Ukraine</p>
            </div>
          </div>

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
a {
  padding: 0;
  margin: 0;
}

.page-title {
  font-size: 64px;
  text-align: center;
}

img:hover {
  cursor: pointer;
}

.pc-ver img:hover {
  -moz-transform: scale(1.02);
  -webkit-transform: scale(1.02);
  -o-transform: scale(1.02);
  -ms-transform: scale(1.02);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);

  -webkit-transition: transform 0.6s ease-in-out;
  -moz-transition:transform 0.6s ease-in-out;
  -ms-transition:transform 0.6s ease-in-out;
}

/* 900 */
@media (max-width: 900px) {
.fill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden
}
.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%
}
.fill p {
  width: 80%;
  text-align: center;
  border-radius: 50vh;
  font-size: 20px;
  margin-top: -17px;
}
}
</style>