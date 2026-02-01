<template>
  <div
    class="navbar flex flex-row w-full justify-between px-10 max-900:px-3 items-center bg-[var(--nav-color)]"
    id="navbar"
  >
    <div class="navbar-logo">
      <img src="~/assets/logo/logoWindmilltree_color.png" alt="" />
    </div>

    <div class="links">
      <NuxtLink to="/" class="navbar-link" style=""> Who are we </NuxtLink>
      <NuxtLink to="/Projects" class="navbar-link"> Projects </NuxtLink>
      <NuxtLink to="/OurTeam" class="navbar-link"> Our Team </NuxtLink>
      <NuxtLink to="/LatestNews" class="navbar-link"> Latest news </NuxtLink>
      <NuxtLink to="/WeNeedYou" class="navbar-link">
        We need you (Open call)
      </NuxtLink>
      <NuxtLink to="/Documents" class="navbar-link"> Documents / Toolbox </NuxtLink>
    </div>

    <div class="flex items-center gap-2">
            <button @click="toggleFont()"
              class="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm"><span class="text-[var(--con-black)]" :aria-pressed="labelFont">{{ labelFont }}</span></button>

      <button @click="toggleContrast()"
              class="px-3 py-1 rounded bg-black text-yellow-300 hover:text-yellow-200 text-sm">
        Kontrast
      </button>
    </div>

    <div class="burger-menu">
      <div class="nav-socials">
        <a href="https://www.facebook.com/FundacjaWindmillTree/photos_by">
          <img src="~/assets/icons/fb-nav.png" alt="" srcset="" />
        </a>
        <a href="https://www.instagram.com/foundation_windmill_tree/">
          <img src="~/assets/icons/ig-nav.png" alt="" srcset="" />
        </a>
        <a href="https://www.youtube.com/@foundationwindmilltree8203">
          <img src="~/assets/icons/yt-nav.png" alt="" srcset="" />
        </a>
      </div>
      <UDropdown :items="menuItems" :popper="{ placement: 'bottom-start' }" :ui="{
        background: 'bg-[var(--bg-green)]',
        item: {
          active: 'bg-green-700 text-white',
          inactive: 'text-gray-800',
        }   
        }
      ">
        <IconsMenu class="menu" />
      </UDropdown>
    </div>
    <div class="choose-lang" style="">
      <div>UA | EN | PL</div>
    </div>
  </div>
</template>

<script setup>
const { labelFont, toggleFont, toggleContrast } = useA11y();

const items = [
  [
    {
      label: "English",
    },
  ],
  [
    {
      label: "Polish",
    },
  ],
  [
    {
      label: "Ukrainian",
    },
  ],
];

const menuItems = [
  [
    {
      label: "Who are we?",
      to: "/",
    },
  ],
  [
    {
      label: "Projects",
      to: "/Projects",
    },
  ],
  [
    {
      label: "Latest news",
      to: "/LatestNews",
    },
  ],
  [
    {
      label: "We need You",
      to: "/WeNeedYou",
    },
  ],
  [
    {
      label: "Our Team",
      to: "/OurTeam",
    },
  ],
  [
    {
      label: "Documents",
      to: "/Documents",
    },
  ],
];

const selected = ref(menuItems[0]);

onMounted(() => {
  const body = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  });
});
</script>

<style lang="scss" scoped>
a {
  padding: 0;
  margin: 0;
  transition: 0.3s;
  color: white;
}
a:hover {
  color: black;
}
.navbar {
  position: fixed;
  top: 0;
  z-index: 9999;
  transition: all 300ms ease-in-out;
}
.navbar-link {
  padding: 5px;
}
.choose-lang {
    display: none;
  }
// .navbar-link:hover {
//   color: #78c0c5;
// }

/* Scrool stuff */
.scroll-down {
  transform: translate3d(0, -100%, 0);
}
.scroll-up {
  filter: drop-shadow(0 -10px 20px rgb(170, 170, 170));
}

.nav-socials {
  display: flex;
  flex-direction: row;
  padding-right: 25px;
  justify-content: center;
}
.nav-socials img {
  padding-right: 0px;
  width: 20px;
  margin-left: 20px;
}

@media (max-width: 900px) {
  .burger-menu {
    display: flex;
    flex-direction: row;
  }
  .navbar-logo img {
    width: 100px;
  }
  .navbar {
    height: 71px;
  }
  .navbar-link {
    display: none;
  }
  .choose-lang {
    display: none;
  }
}

@media (min-width: 900px) {
  .burger-menu {
    display: none;
  }
  .nav-socials {
    display: none;
  }
}
</style>