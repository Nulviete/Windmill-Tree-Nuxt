<script setup>

const props = defineProps({
  photos: { type: Array }
})

</script>

<template>

<div> {{ props.phots }} </div>

  <UCarousel v-slot="{ item }" :items="props.photos" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</template>