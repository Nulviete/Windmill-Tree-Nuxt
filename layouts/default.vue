<template>
    <div class="flex flex-col" style="background-color: white;">
        <Navbar v-if="!fullscreenMode" />
        <NuxtPage class="" style="color: black;" />
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
    color: black;
}

</style>