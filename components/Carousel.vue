<script setup>

const props = defineProps({
  photos: { type: Array }
})

const fullscreenMode = useFullscreen()

const carouselRef = ref()
const indexx = ref(0)

const fullscreen = () => {
  fullscreenMode.value = !fullscreenMode.value
  carouselRef.value.select(indexx.value+1)
}

</script>

<template>

<div class="cont">

  <UCarousel ref="carouselRef" v-slot="{ item, index }" :items="props.photos" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" :class="{carousel: fullscreenMode}" arrows>
    <img :src="item" class="w-full" :class="{ rotated: fullscreenMode}" draggable="false" @click="indexx=index; fullscreen();">
  </UCarousel>
  </div>
</template>

<style scoped>
.cont {
  max-height: 100vh;
}
img {
  max-height: 95vh;
  width: auto;
  margin: auto;
}
@media (max-height: 530px) {
img {
    max-height: 95vh;
    width: auto;
    margin: auto;
}


}
 @media screen and (orientation: portrait) {
.carousel {
width: auto;
margin-top: 28vh;
}
} 
    
</style>