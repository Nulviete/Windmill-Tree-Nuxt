<template>
    <div v-if="projects.length" class="px-10 mb-24">
        <div class="head-title pb-10 load-in-heading">International projects</div>

        <!-- Menu -->
        <div class="menu flex flex-row load-in-menu">
            <button @click="yearSel=2021" class="menu-button menu-button-1 hidden" :class="{ menuButtonActive: yearSel === 2021 }">2021</button>
            <button @click="yearSel=2022" class="menu-button menu-button-2" :class="{ menuButtonActive: yearSel === 2022 }">2022</button>
            <button @click="yearSel=2023" class="menu-button menu-button-3 hidden" :class="{ menuButtonActive: yearSel === 2023 }">2023</button>
            <button @click="yearSel=2024" class="menu-button menu-button-4" :class="{ menuButtonActive: yearSel === 2024 }">2024</button>
            <button @click="yearSel=2025" class="menu-button menu-button-5" :class="{ menuButtonActive: yearSel === 2025 }">2025</button>
            <button @click="yearSel=2026" class="menu-button menu-button-6" :class="{ menuButtonActive: yearSel === 2026 }">2026</button>
        </div>

        <div class="flex flex-row gap-4 flex-wrap">
            <div
                v-for="(project, index) in projects"
                :key="project.id"
                class="project-reveal project-load-in"
                :style="{ animationDelay: `${160 + (index * 55)}ms` }"
            >
                <ProjectCard :project="project" @click="navigateTo('/projects/' +project.slug)" />
            </div>
        </div>
        


    </div>
    <div v-else><LoadingSpinner /></div>
</template>

<script setup>
import { ref } from 'vue'
import LoadingSpinner from '~/components/Icons/LoadingSpinner.vue'

const yearSel = ref(2026)
const { data, pending } = await useAsyncData(
  () => `international-projects-${yearSel.value}`,
  () =>
    $fetch('/api/projects', {
      headers: useRequestHeaders(['cookie']),
      query: { year: yearSel.value },
    }),
  {
    default: () => ({ data: [] }),
    watch: [yearSel],
  }
)

const projects = computed(() =>
  Array.isArray(data.value?.data) ? data.value.data : []
)

usePageSeo({
  title: "International Projects | Windmill Tree Foundation",
  description:
    "Discover Windmill Tree Foundation international youth exchanges, trainings, and cross-border projects.",
});

</script>

<style lang="scss" scoped>
.load-in-heading,
.load-in-menu,
.project-load-in {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  animation: project-load-in 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.load-in-heading {
  animation-delay: 30ms;
}

.load-in-menu {
  animation-delay: 90ms;
}

.project-reveal {
  width: fit-content;
}

@keyframes project-load-in {
  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .load-in-heading,
  .load-in-menu,
  .project-load-in {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
