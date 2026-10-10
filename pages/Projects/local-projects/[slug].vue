<template>
    <div class="local-projects px-10 mb-24">
        <section class="project-detail" aria-labelledby="local-project-title">
            <NuxtLink to="/projects/local-projects" class="back-button">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M19 12H5M11 18L5 12L11 6" />
                </svg>
                Back to local projects
            </NuxtLink>

            <header class="detail-header">
                <h1 id="local-project-title">{{ project.name }}</h1>
                <p v-if="project.date" class="project-date">{{ project.date }}</p>
            </header>

            <p v-if="project.comingSoon" class="detail-copy">Coming soon</p>
            <div v-else class="detail-content">
                <img
                    :src="project.main_photo"
                    :alt="project.imageAlt"
                    class="detail-image"
                    decoding="async"
                >
                <div class="detail-copy">
                    <p v-for="paragraph in project.description" :key="paragraph">{{ paragraph }}</p>
                    <template v-if="project.goals">
                        <h3>Other goals include</h3>
                        <ul>
                            <li v-for="goal in project.goals" :key="goal">{{ goal }}</li>
                        </ul>
                    </template>
                    <template v-if="project.activities">
                        <h3>Activities</h3>
                        <ul>
                            <li v-for="activity in project.activities" :key="activity">{{ activity }}</li>
                        </ul>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { localProjects } from '~/utils/localProjects'

// Remount the detail when navigating between project URLs.
definePageMeta({ key: route => route.params.slug })

const route = useRoute()
const project = localProjects.find(project => project.id === route.params.slug)

if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

usePageSeo({
    title: `${project.name} | Windmill Tree Foundation`,
    description: project.description?.[0] || 'Wibracje natury — coming soon.',
    path: `/projects/local-projects/${project.id}`,
})
</script>

<style scoped>
.project-detail {
    max-width: 1160px;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 28px;
    padding: 10px 16px;
    border: 1px solid #1351b4;
    border-radius: 999px;
    color: #1351b4;
    font-size: 16px;
    background: rgb(255 255 255 / 60%);
}

.back-button:hover {
    background: white;
}

.back-button svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.detail-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 24px;
    margin-bottom: 28px;
}

.detail-header h1 {
    font-size: clamp(26px, 4vw, 40px);
    font-weight: 700;
    scroll-margin-top: 120px;
}

.project-date {
    font-size: 18px;
    color: #465c51;
}

.detail-content {
    display: flow-root;
}

.detail-image {
    float: right;
    width: 44%;
    max-height: 360px;
    margin: 0 0 24px 32px;
    border-radius: 24px;
    object-fit: contain;
}

.detail-copy {
    font-size: 20px;
    line-height: 1.75;
}

.detail-copy p,
.detail-copy ul {
    margin-bottom: 24px;
}

.detail-copy h3 {
    margin: 24px 0 10px;
    font-weight: 700;
}

.detail-copy ul {
    padding-left: 24px;
    list-style: disc;
}

.detail-copy li + li {
    margin-top: 8px;
}


.back-button:focus-visible {
    outline: 3px solid #1351b4;
    outline-offset: 5px;
}

@media (max-width: 900px) {
    .local-projects {
        padding-right: 20px;
        padding-left: 20px;
    }

    .detail-image {
        float: none;
        width: 100%;
        max-height: 320px;
        margin: 0 0 24px;
    }

    .detail-copy {
        font-size: 16px;
    }

    .project-date {
        font-size: 14px;
    }
}
</style>
