<template>
  <div
    ref="root"
    class="reveal-on-scroll"
    :class="{
      'reveal-on-scroll--ready': hasMounted,
      'reveal-on-scroll--visible': isVisible,
    }"
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
  direction: {
    type: String,
    default: 'up',
    validator: (value) => ['up', 'down', 'left', 'right'].includes(value),
  },
  threshold: {
    type: Number,
    default: 0.16,
  },
  rootMargin: {
    type: String,
    default: '0px 0px -8% 0px',
  },
  triggerOffset: {
    type: Number,
    default: 0.92,
  },
  once: {
    type: Boolean,
    default: true,
  },
})

const root = ref(null)
const hasMounted = ref(false)
const isVisible = ref(false)
let observer
let fallbackFrame

const stopFallbackCheck = () => {
  if (fallbackFrame) {
    cancelAnimationFrame(fallbackFrame)
    fallbackFrame = undefined
  }

  window.removeEventListener('scroll', scheduleFallbackCheck)
  window.removeEventListener('resize', scheduleFallbackCheck)
}

const reveal = () => {
  isVisible.value = true

  if (props.once) {
    observer?.disconnect()
    stopFallbackCheck()
  }
}

const checkVisibility = () => {
  fallbackFrame = undefined

  if (!root.value) {
    return
  }

  const rect = root.value.getBoundingClientRect()
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight
  const isInRange =
    rect.top <= viewportHeight * props.triggerOffset && rect.bottom >= 0

  if (isInRange) {
    reveal()
  } else if (!props.once) {
    isVisible.value = false
  }
}

function scheduleFallbackCheck() {
  if (fallbackFrame) {
    return
  }

  fallbackFrame = requestAnimationFrame(checkVisibility)
}

const offsetByDirection = computed(() => {
  const distance = `${props.distance}px`

  if (props.direction === 'down') {
    return { x: '0px', y: `-${distance}` }
  }

  if (props.direction === 'left') {
    return { x: `-${distance}`, y: '0px' }
  }

  if (props.direction === 'right') {
    return { x: distance, y: '0px' }
  }

  return { x: '0px', y: distance }
})

const rootStyle = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-x': offsetByDirection.value.x,
  '--reveal-y': offsetByDirection.value.y,
}))

onMounted(() => {
  if (!root.value) {
    return
  }

  hasMounted.value = true
  window.addEventListener('scroll', scheduleFallbackCheck, { passive: true })
  window.addEventListener('resize', scheduleFallbackCheck)
  scheduleFallbackCheck()

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal()
        } else if (!props.once) {
          isVisible.value = false
        }
      },
      {
        threshold: props.threshold,
        rootMargin: props.rootMargin,
      }
    )

    observer.observe(root.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
  stopFallbackCheck()
})
</script>

<style scoped>
.reveal-on-scroll {
  opacity: 1;
  transform: none;
  transition:
    opacity 0.75s ease,
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay);
  will-change: opacity, transform;
}

.reveal-on-scroll--ready:not(.reveal-on-scroll--visible) {
  opacity: 0;
  transform: translate3d(var(--reveal-x), var(--reveal-y), 0);
}

.reveal-on-scroll--visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
