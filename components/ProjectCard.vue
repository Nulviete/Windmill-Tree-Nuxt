<template>

    <div class="card flex flex-col bg-white/60 backdrop-blur-sm ring-1 ring-black/5 overflow-hidden">
        <slot name="image">
            <img :src="props.project.main_photo || props.project.video_image" alt="" style="">
        </slot>
        <div class="project-card-copy flex flex-col grow justify-around">
            <div class="proj-cat"> {{ props.project.category }}</div>
            <div class="proj-nam"> {{ props.project.name }}</div>
            <div v-if="hashtags.length" class="hashtags">
                <span v-for="hashtag in hashtags" :key="hashtag" class="hashtag">{{ hashtag }}</span>
            </div>
        </div>
        
    </div>

</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    project: {
        type: Object
    }
})

const hashtags = computed(() => [...new Set(
    (props.project.hashtags || '').split(/[,#]+/).map(tag => tag.trim()).filter(Boolean)
)])

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
.project-card-copy {
    padding: 10px 22px 24px;
}
.proj-cat {
    font-size: 24px;
}
.proj-nam {
    font-size: 26px;
    font-weight: bold;
}
.hashtags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
}
.hashtag {
    display: inline-flex;
    align-items: center;
    padding: 4px 9px;
    border: 1px solid #f8764f;
    border-radius: 999px;
    background: #fff1e9;
    color: #943b20;
    font-size: 14px;
    line-height: 1.4;
    white-space: nowrap;
}

@media (max-width: 900px) {
    .card {
        height: 380px;
    }
    .project-card-copy {
        padding: 10px 16px 18px;
    }
    .proj-cat {
        font-size: 10px;
    }
    .proj-nam {
        font-size: 14px;
    }
    .hashtags {
        gap: 5px;
        margin-top: 10px;
    }
    .hashtag {
        padding: 3px 8px;
        font-size: 12px;
    }


}
</style>
