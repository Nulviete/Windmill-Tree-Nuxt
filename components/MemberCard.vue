<template>
    <UCard class="w-72 h-full text-center bg-lime-200">
    <template #header>
      <div class="flex flex-row justify-center items-center">
        <div class="w-7">
          <img v-if="props.member.country" :src="'/country_flag/'+props.member.country+'_flag.png'" alt="">
        </div>
        <div class="h-5 pl-1"> {{ props.member.name }} </div>
      </div>
      
    </template>

   
        <div class="h-48"> Foto </div>
    <template #footer>
    
      <div class="relative bottom-0 h-auto"> {{ props.member.positionDescription }} </div>
      <div class="text-xs text-gray-400" v-if="props.member.position === 'Volunteer'">{{ props.member.dateSince }} - {{ props.member.dateTill }}</div>
    </template>
  </UCard>
</template>

<script setup>

const props = defineProps({
    member: {
        type: Object
    }
})

</script>

<style lang="scss" scoped>

</style>