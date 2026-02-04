<template>

    <div class="card flex flex-col bg-white/60 backdrop-blur-sm ring-1 ring-black/5 overflow-hidden">
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
    min-width: 250px;
    max-width: 360px;
    height: auto;
    border: 3px solid #1351b4;
    border-radius: 30px;
    transition: all 0.3s;

}
.card:hover {
    cursor: pointer;
}
.card img {
    padding: 0px;
    height: 200px;
    width: 100%;
    object-fit: cover;
}
.card img:hover {
transform: scale(1.04);
transition: all 0.7s;
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