<template>

    <div class="card flex flex-col">
        <img :src="props.project.main_photo" alt="" style="">
        <div class="flex flex-col ml-4 grow justify-around my-6">
            <div class="proj-cat"> {{ props.project.category }}</div>
            <div class="proj-nam"> {{ props.project.name }}</div>
            <div class="hashtags w-fit"> {{ props.project.hashtags }}</div> 
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
    width: 444px;
    height: 430px;
    border: 3px solid #81B1FF;
    border-radius: 30px;
    transition: all 0.3s;
}
.card:hover {
    box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.5);
    scale: 1.01;
}
.card img {
    border-radius: 30px;
    padding: 5px;
    height: 250px;
    object-fit: cover;
}
.proj-cat {
    font-size: 24px;
}
.proj-nam {
    font-size: 32px;
    font-weight: bold;
}
.hashtags {
    
    border: 2px solid #FFF200;
    border-radius: 50vh;
    padding: 0px 15px;
    font-size: 24px;
}
</style>