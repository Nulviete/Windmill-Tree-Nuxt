<template>
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
          <img src="~/assets/icons/fb.png" alt="" srcset="">
          <img src="~/assets/icons/ig.png" alt="" srcset="">
          <img src="~/assets/icons/yt.png" alt="" srcset="">
        </div>
        <div class="footer-right text-right">
          <p>
            National Court Register No.: 0000784824 <br>
            VAT No.: 6161567287 <br>
            National Official Register: 383942113
          </p>
        </div>
    </footer>
    
</template>

<style scoped>
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
</style>