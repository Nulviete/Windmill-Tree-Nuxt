<template>
    <div class="flex flex-col h-screen">
        <Navbar v-if="!fullscreenMode" />
        <NuxtPage class="flex-grow pt-24" style="background-image: url('/back/stem_mod.jpeg'); background-repeat: repeat; background-position: center; background-color: #cccccc;" />
        <Footer v-if="!fullscreenMode" class="footer z-10 bottom-0" />
    </div>
    
</template>

<script setup>
const fullscreenMode = useFullscreen()

</script>

<style scoped>
.footer {
    bottom: 0;
    left: 0;
    position: relative;
}

</style>