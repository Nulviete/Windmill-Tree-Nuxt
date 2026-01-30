<template>
    <div class="flex flex-col min-h-screen">
        <Navbar v-if="!fullscreenMode" />
        <NuxtPage class="pt-40 flex-1" />
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