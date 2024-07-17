<template>
    <div class="navbar flex flex-row w-full justify-between px-5 items-center" id="navbar">
        <div class="navbar-logo">
            <img src="~/assets/logo/logoWindmilltree_color.png" alt="">
            </div>
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
        <div class="burger-menu">
            <UDropdown :items="menuItems" :popper="{ placement: 'bottom-start' }">
                <IconsMenu class="menu" />
             </UDropdown>
        </div>
        <div class="choose-lang">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton class="bg-lime-600" label="Choose language" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>
        </div>
        
    </div>
</template>

<script setup>

const items = [
    [{
        label: 'English'
    }],
     [{
        label: 'Polish'
    }],
     [{
        label: 'Ukrainian'
    }]
]

const menuItems = [
 [{
        label: 'Who are we?',
        to: "/"
    }],
     [{
        label: 'Projects',
        to: "/Projects"
    }],
     [{
        label: 'Latest news',
        to: "/LatestNews"
    }],
    [{
        label: 'We need You',
        to: "/WeNeedYou"
    }],
    [{
        label: 'Our Team',
        to: "/OurTeam"
    }],
    [{
        label: 'Toolbox',
        to: "/Toolbox"
    }],
]

const selected = ref(menuItems[0])

onMounted(() => {
    const body = document.getElementById('navbar')
    let lastScroll = 0

    window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    lastScroll = currentScroll
    })
})


</script>

<style lang="scss" scoped>
.navbar{
    position: fixed;
    top: 0;
    z-index: 9999;
    transition: all 300ms ease-in-out;
}
.navbar-link {
    padding: 1px;
}

/* Scrool stuff */
.scroll-down  {
    transform: translate3d(0, -100%, 0);
}
.scroll-up  {
    filter: drop-shadow(0 -10px 20px rgb(170,170,170));
}
.menu {
    width: 50px;
}


@media (max-width: 640px) {
  .navbar-link {
    display: none;
  }   
  .choose-lang {
    display: none;
  }
}
@media (min-width: 640px) {
  .burger-menu {
    display: none;
    
  }
  } 

</style>