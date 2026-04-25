<template>
    <div>
        
        <div class="pc-ver">
          <div class="page-title">Projects</div>

          <div class="flex justify-center gap-6">
            <NuxtLink to="/projects/local-projects" class="">
              <img src="~/assets/projects/local-pc.webp" alt="Local projects" loading="lazy" decoding="async">
            </NuxtLink>
            <NuxtLink to="/projects/international-projects" class="">
              <img src="~/assets/projects/international-pc.webp" alt="International projects" loading="lazy" decoding="async">
            </NuxtLink>
            
          </div>

          <div class="flex justify-center gap-6">
            <NuxtLink to="/projects/for-ukraine-projects" class="">
              <img src="~/assets/projects/4ukraine-pc.webp" alt="For Ukraine projects" loading="lazy" decoding="async">
            </NuxtLink>
            
            <NuxtLink to="/projects/volunteering-projects" class="">
                <img src="~/assets/projects/esc-pc.webp" alt="European Solidarity Corps projects" loading="lazy" decoding="async">
            </NuxtLink>

            <div class="project-card project-card--coming-soon" aria-disabled="true">
              <img src="~/assets/projects/from-partners-pc.webp" alt="Projects from partners coming soon" style="" loading="lazy" decoding="async">
              <div class="coming-soon-badge pc-ver">Coming soon</div>
            </div>
            
            
          </div>
        </div>

<!-- mob ver -->
        <div class="mob-ver">
          <div class="page-title">Projects</div>

          <div class="flex flex-col p-6 gap-6">
            <NuxtLink to="/projects/international-projects" class="fill">
              <img src="~/assets/projects/international-mob.webp" alt="International projects" loading="lazy" decoding="async" />
              <p style="background-color: #81B1FF; color: white;">International</p>
            </NuxtLink>

            <NuxtLink to="/projects/local-projects" class="fill">
              <img src="~/assets/projects/local-mob.webp" alt="Local projects" loading="lazy" decoding="async" />
              <p style="background-color: #90A955; color: white;">Local</p>
            </NuxtLink>

            <NuxtLink to="/projects/volunteering-projects" class="fill">
              <img src="~/assets/projects/esc-mob.webp" alt="European Solidarity Corps" loading="lazy" decoding="async" />
              <p style="background-color: #FF7A75; color: white;">European Solidarity Corps</p>
            </NuxtLink>

            <div class="fill project-card project-card--coming-soon" aria-disabled="true">
              <img src="~/assets/projects/from-partners-mob.webp" alt="From Partners" loading="lazy" decoding="async" />
              <p style="background-color: #CC3396; color: white;">From Partners</p>
              <span class="coming-soon-badge coming-soon-badge--mobile">Coming soon</span>
            </div>

            <NuxtLink to="/projects/for-ukraine-projects" class="fill">
              <img src="~/assets/projects/4ukraine-mob.webp" alt="For Ukraine" loading="lazy" decoding="async" />
              <p style="background-color: #B0BF00; color: white;">For Ukraine</p>
            </NuxtLink>
          </div>
</div>

        
        
    </div>
    
</template>

<script setup>
import { ref } from 'vue'

usePageSeo({
  title: "Projects | Windmill Tree Foundation",
  description:
    "Explore Windmill Tree Foundation projects across local initiatives, international exchanges, volunteering, and support for Ukraine.",
});
</script>


<style lang="scss" scoped>
a {
  padding: 0;
  margin: 0;
}

.page-title {
  font-size: 64px;
  text-align: center;
}

.project-card {
  position: relative;
}

.project-card--coming-soon img {
  filter: saturate(0.92);
}

.coming-soon-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(29, 29, 29, 0.82);
  color: rgb(210, 224, 15);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

img:hover {
  cursor: pointer;
}

.pc-ver img:hover {
  -moz-transform: scale(1.02);
  -webkit-transform: scale(1.02);
  -o-transform: scale(1.02);
  -ms-transform: scale(1.02);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);

  -webkit-transition: transform 0.6s ease-in-out;
  -moz-transition:transform 0.6s ease-in-out;
  -ms-transition:transform 0.6s ease-in-out;
}

/* 900 */
@media (max-width: 900px) {
.fill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden
}
.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%
}
.fill p {
  width: 80%;
  text-align: center;
  border-radius: 50vh;
  font-size: 20px;
  margin-top: -17px;
}

.coming-soon-badge--mobile {
  position: static;
  margin-top: 10px;
  padding: 7px 12px;
  font-size: 11px;
}
}
</style>
