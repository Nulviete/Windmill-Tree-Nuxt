<template>
    <div>
        <p>Our Team</p>
    </div>
</template>

<script setup>
const cats = ref()

onMounted(async () => {
    const res = await $fetch('api/members', {
        method: 'GET'
    })
    cats.value = res
})

</script>


<style lang="scss" scoped>

</style>