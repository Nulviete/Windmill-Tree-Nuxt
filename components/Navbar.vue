<template>
  <div
    class="navbar flex flex-row w-full justify-between px-10 max-900:px-3 items-center bg-[var(--nav-color)]"
    :class="{ 'navbar--contrast': contrast }"
    id="navbar"
  >
    <NuxtLink to="/" class="navbar-logo" aria-label="Windmill Tree Foundation homepage">
      <img :src="navbarLogo" alt="Windmill Tree Foundation" />
    </NuxtLink>

    <div class="links">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="navbar-link"
      >
        {{ item.label }}
      </NuxtLink>
    </div>

    <div class="navbar-actions">
      <button
        @click="toggleFont()"
        class="navbar-action"
        :aria-pressed="labelFont === 'A−'"
      >
        {{ labelFont }}
      </button>

      <button
        @click="toggleContrast()"
        class="navbar-action navbar-action--contrast"
        :class="{ 'navbar-action--active': contrast }"
        :aria-pressed="contrast"
      >
        Contrast
      </button>
    </div>

    <div class="burger-menu">
      <div class="nav-socials flex items-center">
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
      <UDropdown
        :items="menuItems"
        :popper="{ placement: 'bottom-start' }"
        :ui="{
          width: 'w-56',
          rounded: 'rounded-lg',
          background: 'bg-[var(--bg-green)]',
          ring: 'ring-1 ring-black/10',
          item: {
            base: 'px-3 py-2 text-sm',
            rounded: 'rounded-md',
            active: 'bg-white/30 text-black',
            inactive: 'text-gray-900',
          },
        }"
      >
        <button class="navbar-menu-button" type="button" aria-label="Open navigation menu">
          <IconsMenu class="menu" />
        </button>
      </UDropdown>
    </div>
    <div class="choose-lang" style="">
      <div>UA | EN | PL</div>
    </div>
  </div>
</template>

<script setup>
import logoColor from "~/assets/logo/logoWindmilltree_color.png";
import logoContrast from "~/assets/logo/logoWindmilltree_contrast.png";

const { labelFont, contrast, toggleFont, toggleContrast } = useA11y();

const navbarLogo = computed(() => (contrast.value ? logoContrast : logoColor));

const navItems = [
  {
    label: "Who are we",
    to: "/",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Our Team",
    to: "/our-team",
  },
  {
    label: "Latest news",
    to: "/latest-news",
  },
  {
    label: "Open call",
    to: "/we-need-you",
  },
  {
    label: "Documents & Toolbox",
    to: "/documents",
  },
];

const menuItems = navItems.map((item) => [item]);
let lastScroll = 0;

const handleNavbarScroll = () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleNavbarScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleNavbarScroll);
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
  min-height: 72px;
  gap: 16px;
  transition: all 300ms ease-in-out;
}
.navbar--contrast {
  background-color: #000 !important;
  border-bottom: 6px solid #fde047;
}
.navbar-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.navbar-logo img {
  display: block;
}
.links {
  display: flex;
  align-items: center;
  gap: 6px;
}
.navbar-link {
  margin: 0;
  padding: 5px 10px;
  border-radius: 999px;
}
.navbar-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.24);
  color: black;
}
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.navbar-action {
  min-height: 32px;
  padding: 5px 10px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.26);
  color: var(--con-black);
  font-size: 0.875rem;
  line-height: 1;
}
.navbar-action:hover {
  background-color: rgba(255, 255, 255, 0.42);
}
.navbar-action--contrast {
  background-color: rgba(0, 0, 0, 0.72);
  color: #fff176;
}
.navbar-action--contrast:hover {
  background-color: rgba(0, 0, 0, 0.86);
  color: #fff59d;
}
.navbar-action--active {
  outline: 2px solid #fff59d;
  outline-offset: 2px;
}
.navbar-menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.26);
  color: var(--con-black);
}
.navbar-menu-button:hover {
  background-color: rgba(255, 255, 255, 0.42);
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
  padding-right: 20px;
  justify-content: center;
}
.nav-socials img {
  padding-right: 0px;
  width: 20px;
  margin-left: 20px;
}

@media (max-width: 1130px) {
  .navbar {
    padding-right: 12px;
    padding-left: 12px;
  }
  .links {
    display: none;
  }
  .burger-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .navbar {
    min-height: 71px;
  }
  .choose-lang {
    display: none;
  }
  .burger-menu .nav-socials {
    display: none;
  }
  .navbar-actions {
    gap: 4px;
  }
  .navbar-action {
    min-height: 30px;
    padding: 5px 8px;
    font-size: 0.75rem;
  }
}

@media (max-width: 900px) {
  .navbar-logo img {
    width: 100px;
    min-height: 50px;
    min-width: 100px;
  }
}

@media (min-width: 1131px) {
  .burger-menu {
    display: none;
  }
  .nav-socials {
    display: none;
  }
}
</style>
