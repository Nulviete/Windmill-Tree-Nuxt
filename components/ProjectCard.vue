<template>
    
    <div class="card max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"> {{ props.project.name }}  </div>
             <p class="text-gray-700 text-base">  {{ props.project.year }}  </p>
             <p> {{ props.project.projectDescription }} </p>

        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    project: {
        type: Object
    }
})

</script>

<style scoped>
.card {
    width: 250px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    transition: all 0.3s;
}
.card:hover {
    box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.5);
    scale: 1.04;
}
</style>