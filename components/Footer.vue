<template>

<!-- PC verze -->
  <div class="pc-ver text-[var(--con-black)]">
    <footer
      v-bind="$attrs"
      class="footer w-full z-10 font-body bottom-0 flex flex-row mx-auto justify-between px-10 py-5 bg-[var(--bg-page)]"
      :class="{ 'footer--contrast': contrast }"
    >
        <div class="footer-left self-center">
          <img :src="footerLogo" alt="Windmill Tree Foundation" class="footer-logo">
          <p style="margin-top: -10px;">
            Paderewskiego str. 10,   <br>
            58-506 Jelenia Góra,  <br>
            Poland
          </p>
        </div>
        <div class="footer-mid-left">
          <NuxtLink to="/" class="navbar-link" style=""><span class="text-[var(--con-black)]">Who we are</span></NuxtLink>  
          <NuxtLink to="/latest-news" class="navbar-link"><span class="text-[var(--con-black)]">What's new</span></NuxtLink>   
          <NuxtLink to="/projects" class="navbar-link"><span class="text-[var(--con-black)]">Projects</span> </NuxtLink>  
          <NuxtLink to="/our-team" class="navbar-link"><span class="text-[var(--con-black)]">Our team</span></NuxtLink>   
          <NuxtLink to="/documents" class="navbar-link"><span class="text-[var(--con-black)]">Documents</span></NuxtLink>   
          <NuxtLink to="/we-need-you" class="navbar-link"><span class="text-[var(--con-black)]">Open call (We need you)</span></NuxtLink>   
        </div>

        <div class="footer-mid-right ">
          <a href="https://www.facebook.com/FundacjaWindmillTree/photos_by">
            <img src="~/assets/icons/fb.png" alt="" srcset="">
          </a>
          <a href="https://www.instagram.com/foundation_windmill_tree/">
            <img src="~/assets/icons/ig.png" alt="" srcset="">
          </a>
          <a href="https://www.youtube.com/@foundationwindmilltree8203">
            <img src="~/assets/icons/yt.png" alt="" srcset="">
          </a>
        </div>
        <div class="footer-right text-right">
          <p class="">
            National Court Register No.: 0000784824 <br>
            VAT No.: 6161567287 <br>
            National Official Register: 383942113
          </p>
        </div>
    </footer>
  </div>


<!-- Mob verze -->
  <div class="mob-ver" style="color: black;">
    <footer
      v-bind="$attrs"
      class="footer z-10 font-body bottom-0 px-10 py-5"
      :class="{ 'footer--contrast': contrast }"
    >

      <div class="footer-mob">
        <div class="footer-mob-socials" style="align-self: flex-start;">
          <a href="https://www.youtube.com/@foundationwindmilltree8203">
            <img src="~/assets/footer/footer-mob-yt.png" alt="" srcset="">
          </a>
          <a href="https://www.instagram.com/foundation_windmill_tree/">
            <img src="~/assets/footer/footer-mob-ig.png" alt="" srcset="">
          </a>
          <a href="https://www.facebook.com/FundacjaWindmillTree/photos_by">
            <img src="~/assets/footer/footer-mob-fb.png" alt="" srcset="">
          </a>
          
        </div>

        <div class="footer-mob-address" style="align-self: flex-start;">
          <div>email: projects.windmill.tree@gmail.com</div>
          <div>tel: +48506506506</div>
          <div style="padding-top: 20px;">Paderewskiego str. 10, 58-506 Jelenia Góra, Poland</div>
        </div>

        <div class="footer-mob-logo">
          <img :src="footerLogo" alt="Windmill Tree Foundation" class="footer-logo">
        </div>

        <div class="footer-mob-vat" style="align-self: flex-end;">
          <div>National Court Register No.: 0000784824</div>
          <div>VAT No.: 6161567287</div>
          <div>National Official Register: 383942113</div>
        </div> 
      </div>
            
        
        
    </footer>
  </div>
    
    
</template>

<script setup>
import footerLogoDefault from "~/assets/footer/logo.png";
import footerLogoContrast from "~/assets/logo/logoWindmilltree_contrast.png";

const { contrast } = useA11y();

const footerLogo = computed(() => (contrast.value ? footerLogoContrast : footerLogoDefault));

defineOptions({
  inheritAttrs: false
})
</script>


<style scoped>
 a 
 {
    padding: 0;
    margin: 0;
    transition: 0.3s;
}
a:hover {
  background-color: #f7fad8;
  color: #8E9193;
}
.footer {
  position: relative;
  background-image: url('~/assets/footer/footer.png');
  background-size: 100% 315px;
  padding-top: 50px;
  overflow: hidden;
}
.footer--contrast {
  background-color: #000 !important;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 80' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-20 44 C 220 10 430 8 690 40 C 940 70 1130 70 1460 28' fill='none' stroke='%23fde047' stroke-width='13' stroke-linecap='round'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: center 14px !important;
  background-size: 100% 58px !important;
  color: #fde047 !important;
  padding-top: 72px;
}
.footer--contrast :where(p, div, span, a) {
  color: #fde047 !important;
}
.footer--contrast a {
  text-decoration-color: #fde047;
  text-underline-offset: 3px;
}
.footer--contrast a:hover {
  background-color: transparent;
  color: #fff176;
}
.footer--contrast .footer-mid-left {
  gap: 4px;
}
.footer--contrast .footer-mid-left a {
  width: fit-content;
  padding: 3px 0;
}
.footer--contrast .footer-mid-right {
  gap: 8px;
}
.footer--contrast .footer-mid-right a,
.footer--contrast .footer-mob-socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid #fde047;
  border-radius: 999px;
  background-color: #111;
}
.footer--contrast .footer-mid-right img,
.footer--contrast .footer-mob-socials img {
  margin: 0;
  padding: 0;
}
p {
  font-size: 20px;
  padding-bottom: 10px;
}
.footer-mid-left, .footer-mid-right, .footer-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.footer-mid-right img {
padding: 5px;
}
.footer-logo {
  width: 328px;
  max-width: 100%;
  height: auto;
  margin-left: -25px;
}

@media (max-width: 900px) {
  .footer {
    background-image: url('~/assets/footer/footer-mob.png');
    background-size: 100% 500px;
    font-size: 10px;
  }
  .footer--contrast {
    padding: 62px 24px 32px;
    background-position: center 10px !important;
    background-size: 100% 44px !important;
  }
  .footer--contrast .footer-mob {
    align-items: stretch;
    width: min(100%, 430px);
    margin: 0 auto;
    gap: 18px;
  }
  .footer--contrast .footer-mob-socials {
    align-self: center !important;
    justify-content: center;
    gap: 12px;
    padding-bottom: 0;
  }
  .footer--contrast .footer-mob-socials img {
    width: 22px;
    margin-right: 0;
    margin-bottom: 0;
  }
  .footer--contrast .footer-mob-address,
  .footer--contrast .footer-mob-vat {
    align-self: stretch !important;
    padding: 14px 16px;
    border: 1px solid rgba(253, 224, 71, 0.72);
    border-radius: 8px;
    background-color: rgba(253, 224, 71, 0.06);
    line-height: 1.55;
  }
  .footer--contrast .footer-mob-logo {
    display: flex;
    justify-content: center;
  }
  .footer--contrast .footer-logo {
    width: min(100%, 260px);
    margin-left: 0;
  }
}
</style>
