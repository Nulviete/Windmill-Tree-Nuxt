<template>
    <div>
        <!-- Hero img -->
        <div class="hero-block">
<div class="hero-img vertical-center">
            <h1 class="py-12 hero-title">Windmill Tree</h1>
            <h3 class="text-center w-full"> ,,Give a person a little of yourself. <br>
             For this, the soul is filled with light." -Lina Kostenko </h3>
        </div>
        
        <!-- Socials -->
        <div class="socials flex flex-row justify-center vertical-center">
            <a href="mailto:projects.windmill.tree@gmail.com">
                <div class="icon">
                    <IconsMail />
                </div>
                
            </a>

            <a href="https://www.facebook.com/FundacjaWindmillTree/photos_by">
            <div class="icon">
                <IconsFacebook />
            </div>
                
            </a>
            <a href="https://www.instagram.com/foundation_windmill_tree/">
            <div class="icon">
                <IconsInstagram />
            </div>
                <i class="fa-brands fa-instagram fa-4x cursor-pointer"/>
            </a>
            <a href="https://www.youtube.com/@foundationwindmilltree8203">
                <div class="icon">
                    <IconsYoutube height="60px" />
                </div>
            </a>
            <a href="https://wa.me/+48796369201">
                <div class="icon">
                    <IconsWhatsapp />
                </div>
            </a>
        </div>
        
        

        <!-- Foundation description -->
        <div class="Foundation-description text-justify max-w-2xl mx-auto -mb-24">
            Windmill Tree is not just a foundation: we are a family on a true-hearted journey.<br><br> Our goal? To fill this world with creativity, make youth and social work even better. We are connecting with rural youth and creating bonds between countries.
            <br><br>Located in the breathtaking Izery Mountains region, our diverse team is a bland of individuals from Poland, Ukraine, Germany and Czech Republic. We're inviting you to be part of something special. <br><br> Let's build a world where everyone is included, and every little bit of effort transforms into something wonderfully positive. <br><br> Welcome home! :)
        </div>
</div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.hero-block {
    position: relative;
    top: -90px;
}
.Foundation-description {
    background-color: #b7d189
}




@media (min-width: 640px) {

.hero-title {
    padding-top: 1.0em;
}
.hero-img h3 {
    font-size: 40px;
}
}



@media (max-width: 640px) {
.socials {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
} 
.icon {
    margin: auto;
}
.hero-title {
    padding-top: 2.5em;
    padding-bottom: 1em;
    font-size: 50px;
    text-shadow: #FC0 1px 0 10px;
}
.hero-img h3 {
    font-size: 30px;
}
.Foundation-description {
    font-size: 20px;
}
}

@media (max-width: 800) {
.hero-img h3 {
    font-size: 5px;
}
}

</style>