<template>
  <div class="flex flex-col items-center justify-center gap-3 py-16">
    <div
      class="h-10 w-10 rounded-full border-4 border-black/20 border-t-black animate-spin"
      aria-label="Loading"
      role="status"
    />
    <div class="text-sm tracking-wide text-black/70">
      Loading<span class="dots">...</span>
    </div>
  </div>
</template>

<style scoped>
/* jemná animace teček */
.dots {
  display: inline-block;
  width: 1.5em;
  text-align: left;
  animation: dots 1.2s steps(4, end) infinite;
}
@keyframes dots {
  0% {
    width: 0;
  }
  100% {
    width: 1.5em;
  }
}
</style>
