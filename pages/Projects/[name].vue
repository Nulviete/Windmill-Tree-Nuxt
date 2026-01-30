<template>
    <div v-if="dataLoaded && project" class="pb-24">
        <!-- <div class="">
            <div class="font-bold text-4xl p-10" :class="{ hidden: fullscreenMode}">{{ project[0].name }}</div>
            <div class="year pb-5 text-gray-500" :class="{ hidden: fullscreenMode}"> {{ project[0].year }}</div>
            <div class="text-lg" :class="{ hidden: fullscreenMode}">{{ project[0].projectDescription }}</div>

                <div class="gallery" :class="{ galleryfull: fullscreenMode }" >
                <Carousel class="max-h-3" :photos="project[0].photos"  />
                </div>
         
        </div>    -->

        <div class="header text-white -mt-[160px] pl-12 pt-[160px]" :style=" { 
            backgroundImage: `url(${project?.bg_img || 'https://i.imgur.com/FlJnzka.png'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover' 
            }">
            <div class="inline-block backdrop-blur-sm bg-black/30 px-5 py-1 rounded-xl">
            <div class="header-1 text-center "> International projects </div>
            </div>
            <div class="text-center pb-24 flex-col flex items-center justify-center">
              <div class="inline-block backdrop-blur-sm bg-black/30 px-5 py-1 rounded-xl">
                <div class="proj-cat "> {{ project.category }}</div>
              </div>
              <div class="inline-block backdrop-blur-sm bg-black/30 px-5 py-1 rounded-xl mt-4">
                <div class="proj-nam"> "{{ project.name }}"</div>
                </div>
                <div class="vid mx-auto overflow-hidden mt-12">
                    <img v-if="project.video_image" :src="project.video_image" alt="" class="object-cover">
                </div>
            </div>
        </div>

        <div class="proj-info pl-12 mt-12 py-6 text-black">
            <div> {{ project.place }}</div>
            <div>{{ project.date }}</div>
            <div>Number of participant: {{ project.number_of_participants }}</div>
        </div>

        <div class="flex justify-end pb-36 max-md:pb-4 ">
            <div class="proj-participants py-6 text-[var(--white-to-black)] pl-8 pr-6 -mt-4">
            Participants from: {{ project.participants_countries }}
            </div>
        </div>
        

        <div class="proj-des px-12 pb-24 max-md:mb-6">
            {{ project.description }}
        </div>



        <!-- gallery slideshow -->
    <div class="relative w-full max-w-4xl mx-auto">
      <!-- Slider -->
      <div class="overflow-hidden w-full">
        <div v-if="project.photos && project.photos.length"
          ref="slider"
          class="flex transition-transform duration-300"
          :style="{
            transform: `translateX(-${currentIndex * (100 / (project.photos.length / photosPerSlide))}%)`,
            width: `${Math.ceil((project.photos?.length || 0) / photosPerSlide) * 100}%`
          }"
        
        >
          <div
            v-for="(photo, index) in project.photos"
            :key="index"
            class="w-full md:w-1/4 p-2 cursor-pointer"
            @click="openFullscreen(photo)"
          >
            <img :src="photo" class="rounded-xl object-cover w-full h-64" />
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <button
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
        @click="prevSlide"
        v-if="currentIndex > 0"
      >
        ◀
      </button>
      <button
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
        @click="nextSlide"
        v-if="currentIndex < maxIndex"
      >
        ▶
      </button>

      <!-- Fullscreen Overlay -->
      <div
        v-if="fullscreenPhoto"
        class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        @click="closeFullscreenOnBackground"
      >
        <button class="absolute top-4 right-4 text-white text-4xl font-bold z-50" @click.stop="closeFullscreen">
          &times;
        </button>
        <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          @click.stop="prevFullscreenSlide" v-if="currentFullscreenIndex > 0">
          ◀
        </button>
        <img :src="fullscreenPhoto" class="max-w-full max-h-full rounded-lg" />
        <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          @click.stop="nextFullscreenSlide" v-if="currentFullscreenIndex < project.photos.length - 1">
          ▶
        </button>
      </div>
    </div>

    <div class="pl-24 pt-12 max-900:pl-4"><span class="text-3xl max-900:text-xl">Video links:</span>
    <div v-if="project.fb_videos" class="pt-3">
        <div v-for="(video, index) in project.fb_videos" :key="index" class="pl-6 py-1 max-900:pl-2">
          <IconsFacebook class="inline-block w-6 h-6 mr-2 text-blue-600"/>
            <a :href="video" target="_blank" class="text-blue-600 underline hover:text-[16.5px] max-900:hover:text-sm ease-linear duration-300 max-900:text-xs">{{ video }}</a>
        </div>
    </div>
    <div v-else>No video links available :(</div>
    </div>
  </div>
  <div v-else class="text-center">
  DATA LOADING
  <div>{{ dataLoaded }}</div>
  <div>{{ project }}</div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'
import Carousel from "~/components/Carousel";

const route = useRoute()
const projectName = ref(route.params.name)
const project = ref(null)
const dataLoaded = ref(false)

const fullscreenMode = useFullscreen()

const fullscreenPhoto = ref(null)
const currentFullscreenIndex = ref(0)
const currentIndex = ref(0)

const photosPerSlide = ref(4)

const slider = ref(null)

const updatePhotosPerSlide = () => {
  photosPerSlide.value = window.innerWidth <= 768 ? 1 : 4
}

const fetchData = async () => {
  const { data } = await $fetch(`/api/project?name=${projectName.value}`, {
    query: { projectName },
    headers: useRequestHeaders(['cookie']),
    key: 'data-from-server',
    transform: data => data.data
  })
  project.value = data[0]
  console.log(project.value)
  dataLoaded.value = true
}

const maxIndex = computed(() => {
  return Math.ceil((project.value?.photos?.length || 0) / photosPerSlide.value - 1)
})

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}
const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const openFullscreen = (photo) => {
  fullscreenPhoto.value = photo
  currentFullscreenIndex.value = project.value.photos.indexOf(photo)
}
const closeFullscreen = () => {
  fullscreenPhoto.value = null
  currentFullscreenIndex.value = 0
}
const nextFullscreenSlide = () => {
  if (currentFullscreenIndex.value < project.value.photos.length - 1) {
    currentFullscreenIndex.value++
    fullscreenPhoto.value = project.value.photos[currentFullscreenIndex.value]
  }
}
const prevFullscreenSlide = () => {
  if (currentFullscreenIndex.value > 0) {
    currentFullscreenIndex.value--
    fullscreenPhoto.value = project.value.photos[currentFullscreenIndex.value]
  }
}

const closeFullscreenOnBackground = (event) => {
  if (event.target === event.currentTarget) {
    closeFullscreen()
  }
}

const handleKeyDown = (event) => {
  if (fullscreenPhoto.value) {
    if (event.key === 'ArrowRight') nextFullscreenSlide()
    else if (event.key === 'ArrowLeft') prevFullscreenSlide()
    else if (event.key === 'Escape') closeFullscreen()
  }
}

const touchStartX = ref(0)

const handleTouchStart = (event) => {
  touchStartX.value = event.changedTouches[0].clientX
}

const handleTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX
  const deltaX = touchStartX.value - touchEndX

  if (Math.abs(deltaX) > 50) {
    // Swipe Left
    if (deltaX > 0) nextSlide()
    // Swipe Right
    else prevSlide()
  }
}

onMounted(async () => {
  await fetchData()
  updatePhotosPerSlide()

  window.addEventListener('resize', updatePhotosPerSlide)
  window.addEventListener('keydown', handleKeyDown)

  if (slider.value) {
    slider.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    slider.value.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePhotosPerSlide)
  window.removeEventListener('keydown', handleKeyDown)
})
</script>


<style lang="scss" scoped>
// .gallery {
//     max-height: 100vh;
//     padding-top: 2.5vh;
//     position: relative;
// }
// .galleryfull {
//     position: absolute;
//     left: 0;
//     top: 0;
//     right: 0;
//     height: 100vh;
//     margin: auto;
//     background: black;
//     max-width: 1200px;
// }
// .hidden {
//     display: none;
// }



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
    width: 714.66px;
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
}
.proj-des {
    font-size: 32px;
}


@media (max-width: 900px) {

.vid {
width: 95%;
height: auto;
border-radius: 10px;
}
.proj-info {
    font-size: 11px;
    padding: 15px;
}
.proj-participants {
    font-size: 10px;
    margin-left: 30%;
    margin-top: -10px;
    padding: 10px;
}
.proj-des {
    font-size: 12px;
    padding: 15px;
}
.header-1 {
    font-size: 12px;
    padding-left: 15px;
}
.proj-cat {
    font-size: 16px;
}
.proj-nam {
    font-size: 16px;
}
.header {
    padding-left: 0;
    padding-top: 120px;
    font-weight: bold;
}


}

</style>