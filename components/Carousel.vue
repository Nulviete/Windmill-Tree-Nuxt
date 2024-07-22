<script setup>

const props = defineProps({
  photos: { type: Array }
})

const fullscreenMode = useFullscreen()

const fullscreen = () => {
  fullscreenMode.value = !fullscreenMode.value
  console.log(fullscreenMode.value)
}

</script>

<template>

<div> {{ props.phots }} </div>

  <UCarousel v-slot="{ item }" :items="props.photos" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
    <img :src="item" class="w-full" draggable="false" @click=fullscreen()>
  </UCarousel>
</template>