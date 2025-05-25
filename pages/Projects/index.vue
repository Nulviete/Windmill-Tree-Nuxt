<template>
    <div>
        
        <div class="pc-ver">
          <div class="page-title">Projects</div>

          <div class="flex justify-center gap-6">
            <NuxtLink to="/Projects/Local-projects" class="">
              <img src="~/assets/projects/local-pc.png" alt="">
            </NuxtLink>
            <NuxtLink to="/Projects/International-projects" class="">
              <img src="~/assets/projects/international-pc.png" alt="">
            </NuxtLink>
            
          </div>

          <div class="flex justify-center gap-6">
            <NuxtLink to="/Projects/For-Ukraine-projects" class="">
              <img src="~/assets/projects/4ukraine-pc.png" alt="">
            </NuxtLink>
            
            <NuxtLink to="/Projects/Volunteering-projects" class="">
                <img src="~/assets/projects/esc-pc.png" alt="">
            </NuxtLink>

            <NuxtLink to="/Projects/From-partners-projects" class="">
              <img src="~/assets/projects/from-partners-pc.png" alt="" style="">
            </NuxtLink>
            
            
          </div>
        </div>

        <div class="mob-ver">
  <div class="page-title">Projects</div>

  <div class="flex flex-col p-6 gap-6">
    <NuxtLink to="/Projects/International-projects" class="fill">
      <img src="~/assets/projects/international-mob.png" alt="International projects" />
      <p style="background-color: #81B1FF; color: white;">International</p>
    </NuxtLink>

    <NuxtLink to="/Projects/Local-projects" class="fill">
      <img src="~/assets/projects/local-mob.png" alt="Local projects" />
      <p style="background-color: #90A955; color: white;">Local</p>
    </NuxtLink>

    <NuxtLink to="/Projects/Volunteering-projects" class="fill">
      <img src="~/assets/projects/esc-mob.png" alt="European Solidarity Corps" />
      <p style="background-color: #FF7A75; color: white;">European Solidarity Corps</p>
    </NuxtLink>

    <NuxtLink to="/Projects/From-partners-projects" class="fill">
      <img src="~/assets/projects/from-partners-mob.png" alt="From Partners" />
      <p style="background-color: #CC3396; color: white;">From Partners</p>
    </NuxtLink>

    <NuxtLink to="/Projects/For-Ukraine-projects" class="fill">
      <img src="~/assets/projects/4ukraine-mob.png" alt="For Ukraine" />
      <p style="background-color: #B0BF00; color: white;">For Ukraine</p>
    </NuxtLink>
  </div>
</div>

        
        
    </div>
    
</template>

<script setup>
import { ref } from 'vue'

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
}
</style>