<template>

    <div class="card flex flex-col">
        <img :src="props.project.main_photo || props.project.video_image" alt="" style="">
        <div class="flex flex-col ml-4 grow justify-around mb-6 mt-2">
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
    height: auto;
    border: 3px solid #81B1FF;
    border-radius: 30px;
    transition: all 0.3s;
    background: rgb(210, 210, 240, 0.4);
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
    font-size: 26px;
    font-weight: bold;
}
.hashtags {
    border: 2px solid #f8764f;
    border-radius: 50vh;
    padding: 0px 15px;
    font-size: 24px;
}

@media (max-width: 900px) {
    .card {
        width: 100%;
        height: 380px;
    }
    .proj-cat {
        font-size: 10px;
    }
    .proj-nam {
        font-size: 14px;
    }
    .hashtags {
        font-size: 12px;
    }


}
</style>