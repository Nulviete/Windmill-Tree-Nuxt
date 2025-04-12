<template>
  <div class="pc-ver" style="color: black;">
    <footer class="footer w-full z-10 font-body bottom-0 flex flex-row mx-auto justify-between px-10 py-5">
        <div class="footer-left self-center">
          <img src="~/assets/footer/logo.png" alt="" srcset="" style="margin-left: -25px;">
          <p style="margin-top: -10px;">
            Paderewskiego str. 10,   <br>
            58-506 Jelenia Góra,  <br>
            Poland
          </p>
        </div>
        <div class="footer-mid-left">
          <div>Who we are</div>   
          <div>What's new</div>   
          <div>Projects</div>   
          <div>Our team</div>   
          <div>Documents</div>   
          <div>Open call (We need you)</div>   
        </div>

        <div class="footer-mid-right">
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
          <p>
            National Court Register No.: 0000784824 <br>
            VAT No.: 6161567287 <br>
            National Official Register: 383942113
          </p>
        </div>
    </footer>
  </div>

  <div class="mob-ver" style="color: black;">
    <footer class="footer z-10 font-body bottom-0 px-10 py-5">

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
          <img src="~/assets/footer/logo.png" alt="" srcset="" style="margin-left: -25px;">
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

<style scoped>
 a {
        padding: 0;
        margin: 0;
    }
.footer {
background-image: url('~/assets/footer/footer.png');
background-size: 100% 315px;
padding-top: 50px;
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

@media (max-width: 900px) {
  .footer {
    background-image: url('~/assets/footer/footer-mob.png');
    background-size: 100% 500px;
    font-size: 10px;
  }
}
</style>