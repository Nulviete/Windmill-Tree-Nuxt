<template>
  <div class="relative">
  <div class="card group aspect-[444/457] mt-4 min-900:mt-12 items-center justify-center overflow-hidden" @click.stop>
    <!-- FOTO -->
    <img
      v-if="member.profile_pic"
      :src="member.profile_pic"
      class="photo object-fit"
      @click="onTap"
    />
    <img
      v-else
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      class="photo"
      @click="onTap"
    />
    <div class="name">
      <span>{{ member.name }}</span>
    </div>

    <!-- OVERLAY -->
    <div class="overlay" :class="{ open }" @click.stop>
      <div class="overlay-box">
        <div class="overlay-title">{{ member.name }}</div>

        <div class="overlay-text">
          <div v-if="member.country" class="overlay-line">Country: {{ member.country }}</div>
          <div v-if="member.volunteering_from" class="overlay-line">
            Volunteering: {{ member.volunteering_from }} – {{ member.volunteering_to }}
          </div>
          <div v-if="member.role" class="overlay-role">
            {{ member.role }}
          </div>

          <div v-if="member.field_of_work" class="overlay-fields">
            <span>Field of work</span>
            <div class="overlay-tags">
              <div v-for="m in member.field_of_work" :key="m.id" class="overlay-small">
                {{ m }}
              </div>
            </div>
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
  overflow: hidden;
  width: 444px;
  height: 457px;
  border-radius: 22px;
  border: 1px solid rgba(17, 153, 40, 0.24);
  cursor: pointer;
  background: #102016;
  box-shadow: 0 18px 46px rgba(22, 32, 19, 0.16);
  transition:
    border-color 260ms ease,
    box-shadow 260ms ease,
    transform 260ms ease;
}

.photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transition: transform 600ms ease;
}

.name {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  min-height: 42%;
  padding: 28px 22px 20px;
  color: white;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.1;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(16, 32, 22, 0) 0%, rgba(16, 32, 22, 0.82) 100%);
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.4);
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  padding: 18px;

  transform: translateY(110%);
  opacity: 0;
  transition: transform 600ms cubic-bezier(.22,.9,.3,1), opacity 400ms ease;
}

.overlay-box {
  width: 100%;
  max-height: 100%;
  overflow: auto;
  border-radius: 18px;
  padding: 20px 20px 18px;
  color: white;
  background:
    linear-gradient(180deg, rgba(20, 83, 45, 0.82), rgba(16, 32, 22, 0.94));
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 28px 80px rgba(0,0,0,0.42);
}

.overlay-title {
  font-size: 26px;
  line-height: 1.05;
  font-weight: 700;
  margin-bottom: 14px;
}

.overlay-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  line-height: 1.45;
}

.overlay-role {
  color: rgba(255, 255, 255, 0.92);
}

.overlay-fields {
  padding-top: 8px;
}

.overlay-fields > span {
  display: block;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.overlay-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.overlay-small {
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 4px 9px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 13px;
  line-height: 1.2;
}

/* Desktop hover otevření */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-4px);
    border-color: rgba(17, 153, 40, 0.52);
    box-shadow: 0 24px 70px rgba(22, 32, 19, 0.22);
  }

  .card:hover .overlay {
    transform: translateY(0);
    opacity: 1;
  }

  .card:hover .photo {
    transform: scale(1.05);
  }
}

.photo img {
  object-fit: contain;
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
    border-radius: 16px;
  }

  .photo {
    border-radius: 16px;
  }

  .name {
    min-height: 44%;
    padding: 22px 12px 10px;
    font-size: 13px;
  }

  .overlay {
    padding: 8px;
  }

  .overlay-box {
    border-radius: 14px;
    padding: 10px;
  }

  .overlay-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .overlay-text {
    gap: 6px;
    font-size: 12px;
    line-height: 1.35;
  }

  .overlay-fields {
    padding-top: 2px;
  }

  .overlay-fields > span {
    display: none;
  }

  .overlay-small {
    padding: 3px 7px;
    font-size: 11px;
  }
}
@media (max-width: 550px) {
  .card {
    border-width: 1px;
  }
}
</style>

