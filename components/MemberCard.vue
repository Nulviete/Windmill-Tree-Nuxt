<template>
  <div class="container">
    <img v-if="props.member.profile_pic" :src="props.member.profile_pic" alt="" class="object-cover w-full h-full" />
    <img v-else src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" class="object-cover w-full h-full">
    <div class="name rounded-br-[3vh] rounded-bl-[3vh]"> {{ props.member.name }} </div>
  </div>
          

</template>

<script setup>

const props = defineProps({
    member: {
        type: Object
    }
})

</script>

<style lang="scss" scoped>
.container {
  position: relative;
  text-align: center;
  height: 457px;
  width: 444px;
}
.name {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  background-color: rgba(144,169,85,0.8);
  width: 100%;
  font-size: 40px;
 
}
img {
  height: 100%;
  border-radius: 30px;
}

@media (max-width: 900px) {
.container {
  width: 100%;
  height: 100%;
}
.name {
  font-size: 13px;
}
img {
  border-radius: 10px;
}
.name {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

}

</style>