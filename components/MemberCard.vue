<template>
  <div class="card group" @click.stop>
    <!-- FOTO -->
    <img
      v-if="member.profile_pic"
      :src="member.profile_pic"
      class="photo"
      @click="onTap"
    />
    <img
      v-else
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      class="photo"
      @click="onTap"
    />
    <div class="name"> {{ member.name }}</div>

    <!-- OVERLAY -->
    <div class="overlay" :class="{ open }" @click.stop>
      <div class="overlay-box">
        <div class="overlay-title pb-8 max-900:hidden">{{ member.name }}</div>

        <div class="overlay-text">
          <div v-if="member.country">Country: {{ member.country }}</div>
          <div v-if="member.volunteering_from">
            Volunteering: {{ member.volunteering_from }} – {{ member.volunteering_to }}
          </div>
          <div v-if="member.role" class="max-900:text-sm">
            {{ member.role }}
          </div>

          <div v-if="member.field_of_work" class="pt-8 max-900:text-sm max-900:pt-0 max-900:leading-4 ">
            <span class="max-900:hidden">Field of work:</span><br />
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
import { ref, onMounted } from 'vue'

const props = defineProps({ member: Object, open: Boolean })

const emit = defineEmits(['toggle'])

const isTouch = ref(false)

onMounted(() => {
  isTouch.value = window.matchMedia('(hover: none)').matches
})

const onTap = (e) => {
  if (!isTouch.value) return
  e.stopPropagation();
  emit('toggle')
}
</script>


<style scoped>
.card {
  position: relative;
  width: 444px;
  height: 457px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  background: #000; /* fallback když se nenačte obrázek */
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms ease;
}

/* Jméno nahoře */
.name {
  position: absolute;
  top: 0;
  left: 16px;
  right: 16px;
  color: rgb(0, 0, 0);
  font-size: 40px;
  font-weight: 600;
  padding-top: 12px;
  z-index: 3;
}

/* OVERLAY — výchozí stav = skrytý */
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

/* Glass box */
.overlay-box {
  width: 100%;
  border-radius: 26px;
  padding: 20px;
  color: white;

  background: rgba(84, 194, 143, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

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
  font-size: 14px;
  opacity: 0.9;
}

/* Desktop hover otevření */
@media (hover: hover) {
  .card:hover .overlay {
    transform: translateY(0);
    opacity: 1;
  }

  .card:hover .photo {
    transform: scale(1.05);
  }
 
}

/* Mobil otevření přes klik (class="open") */
.overlay.open {
  transform: translateY(0);
  opacity: 1;
}

/* MOBILE STYLES (jen vzhled, ne otevírání!) */
@media (max-width: 900px) {
  .card {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  .photo {
    border-radius: 12px;
  }

  .name {
    font-size: 14px;
    left: 12px;
    right: 12px;
    padding-top: 8px;
  }

  .overlay {
    padding: 10px;
  }

  .overlay-box {
    border-radius: 16px;
    padding: 12px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .overlay-title {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .overlay-text {
    font-size: 12px;
  }

  .overlay-small {
    font-size: 11px;
  }
}
</style>

