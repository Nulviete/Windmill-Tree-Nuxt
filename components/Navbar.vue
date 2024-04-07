<template>
    <div class="navbar flex flex-row w-full justify-between px-5 items-center">
        <div class="navbar-logo"><img src="~/assets/logo/logoWindmilltree_color.png" alt=""></div>
        <div class="links">
            <NuxtLink to="/" class="navbar-link">
                Who are we
            </NuxtLink>
            <NuxtLink to="/Projects" class="navbar-link">
                Projects
            </NuxtLink>
            <NuxtLink to="/OurTeam" class="navbar-link">
                Our Team
            </NuxtLink>
            <NuxtLink to="/LatestNews" class="navbar-link">
                Latest news
            </NuxtLink>
            <NuxtLink to="/WeNeedYou" class="navbar-link">
                We need you (Open call)
            </NuxtLink>
            <NuxtLink to="/Toolbox" class="navbar-link">
                Toolbox
            </NuxtLink>
        </div>
        <div class="languageOptions">
            Choose language
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>