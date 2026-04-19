<template>
  <div
    ref="root"
    class="reveal-on-scroll"
    :class="{ 'reveal-on-scroll--visible': isVisible }"
    :style="rootStyle"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  distance: {
    type: Number,
    default: 36,
  },
  threshold: {
    type: Number,
    default: 0.16,
  },
  once: {
    type: Boolean,
    default: true,
  },
})

const root = ref(null)
const isVisible = ref(false)
let observer

const rootStyle = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-distance': `${props.distance}px`,
}))

onMounted(() => {
  if (!root.value) {
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true

        if (props.once) {
          observer.disconnect()
        }
      } else if (!props.once) {
        isVisible.value = false
      }
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -8% 0px',
    }
  )

  observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.reveal-on-scroll {
  opacity: 0;
  transform: translate3d(0, var(--reveal-distance), 0);
  transition:
    opacity 0.75s ease,
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay);
  will-change: opacity, transform;
}

.reveal-on-scroll--visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
