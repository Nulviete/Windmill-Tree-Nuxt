<template>
  <div class="card group">
    <!-- FOTO -->
    <img
      v-if="member.profile_pic"
      :src="member.profile_pic"
      class="photo"
    />
    <img
      v-else
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      class="photo"
    />
    <div class="name"> {{ member.name }}</div>

    <!-- SPODNÍ JMÉNO BAR -->
    <!-- <div class="name">{{ member.name }}</div> -->

    <!-- ROLETOVÝ OVERLAY -->
    <div class="overlay">
      <div class="overlay-box">
        <div class="overlay-title pb-8">{{ member.name }}</div>

        <div class="overlay-text">
          <div v-if="member.country">Country: {{ member.country }}</div>
          <div v-if="member.volunteering_from">
            Volunteering: {{ member.volunteering_from }} – {{ member.volunteering_to }}
          </div>
          <div v-if="member.role">
            {{ member.role }}
          </div>

          <div v-if="member.field_of_work" class="pt-8">
            Field of work:<br />
            <div v-for="m in member.field_of_work" :key="m.id" class="overlay-small">
            {{ m }}
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ member: Object })
</script>

<style scoped>
.card {
  position: relative;
  width: 444px;
  height: 457px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms ease;
}

.name {
  position: absolute;
  top: 0;
  left: 10px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 40px;
  font-weight: 600;
  padding: 10px 0;
  z-index: 3;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;

  transform: translateY(110%);
  opacity: 0;
  transition: transform 600ms cubic-bezier(.22,.9,.3,1), opacity 400ms ease;
}

.overlay-box {
  width: 100%;
  border-radius: 26px;
  padding: 20px;
  color: white;

  background: rgba(84, 194, 143, 0.75);
  backdrop-filter: blur(0.px);
  -webkit-backdrop-filter: blur(0px);

  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: 0 40px 120px rgba(0,0,0,0.6);
}

.overlay-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
}

.overlay-text {
  font-size: 18px;
  line-height: 1.3;
}

.overlay-small {
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.9;
}

/* HOVER ANIMACE */
.card:hover .overlay {
  transform: translateY(0);
  opacity: 1;
}

.card:hover .photo {
  transform: scale(1.05);
}
/* .card:hover .name{
  display: none;
} */

/* MOBILE */
@media (max-width: 900px) {
  .card {
    width: 100%;
    height: auto;
  }

  .photo {
    border-radius: 12px;
  }

  .name {
    font-size: 14px;
  }

  .overlay {
    transform: translateY(0);
    opacity: 1;
    position: relative;
    padding: 10px 0 0 0;
  }

  .overlay-box {
    border-radius: 16px;
    padding: 12px;
  }

  .overlay-title {
    font-size: 16px;
  }

  .overlay-text {
    font-size: 12px;
  }
}
</style>
