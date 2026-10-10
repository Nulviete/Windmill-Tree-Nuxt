<template>
    <div class="local-projects px-10 mb-24">
        <h1 class="head-title pb-10">Local projects</h1>

        <div class="project-grid flex flex-row gap-4 flex-wrap">
            <component
                :is="project.comingSoon ? 'div' : NuxtLink"
                v-for="project in localProjects"
                :key="project.id"
                :to="project.comingSoon ? undefined : `/projects/local-projects/${project.id}`"
                :aria-label="project.comingSoon ? `${project.name} (Coming soon)` : `View ${project.name}`"
                class="project-card-wrap"
            >
                <ProjectCard
                    :id="`local-project-${project.id}`"
                    :project="project"
                    class="local-project-card"
                    :aria-disabled="project.comingSoon ? true : undefined"
                >
                    <template v-if="project.comingSoon" #image>
                        <div class="nature-placeholder" aria-hidden="true">
                            <svg viewBox="0 0 120 120" fill="none">
                                <path d="M60 100V58M60 79C31 79 20 58 24 33C51 33 65 52 60 79Z" />
                                <path d="M61 64C58 34 75 18 100 19C102 45 89 64 61 64Z" />
                                <path d="M60 79L37 48M61 64L87 32" />
                            </svg>
                        </div>
                    </template>
                </ProjectCard>
                <span v-if="project.comingSoon" class="coming-soon-badge card-badge">Coming soon</span>
            </component>
        </div>

    </div>
</template>

<script setup>
import { NuxtLink } from '#components'
import { localProjects } from '~/utils/localProjects'

usePageSeo({
    title: 'Local Projects | Windmill Tree Foundation',
    description:
        'See Windmill Tree Foundation local initiatives, community activities, youth engagement, and creative projects in the region.',
})
</script>

<style scoped>
.project-card-wrap {
    display: block;
    position: relative;
    width: 360px;
    max-width: 100%;
}

.local-project-card {
    width: 100%;
    min-width: 0;
    height: 100%;
    text-align: left;
}

.project-card-wrap:focus-visible {
    border-radius: 30px;
    outline: 3px solid #1351b4;
    outline-offset: 5px;
}

.local-project-card[aria-disabled="true"] {
    cursor: default;
}

.nature-placeholder {
    display: grid;
    place-items: center;
    height: 200px;
    flex-shrink: 0;
    background: radial-gradient(circle at 75% 20%, #ecf39e, transparent 65%), #cbdcbe;
    color: #426443;
}

.nature-placeholder svg {
    width: 120px;
    height: 120px;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.coming-soon-badge {
    display: inline-flex;
    width: fit-content;
    padding: 7px 13px;
    border-radius: 999px;
    background: #263d2c;
    color: #ecf39e;
    font-size: 13px;
    font-weight: 600;
}

.card-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    pointer-events: none;
}

@media (max-width: 900px) {
    .local-projects {
        padding-right: 20px;
        padding-left: 20px;
    }

    .local-project-card {
        height: auto;
        min-height: 290px;
    }

}
</style>
