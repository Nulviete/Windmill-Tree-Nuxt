<template>
  <div v-bind="$attrs">
    <div class="text-4xl text-center font-bold">
      LATEST NEWS
    </div>

    <div class="flex flex-col ml-10 max-900:ml-0" v-if="news.length">
      <div
        v-for="item in paginatedNews"
        :key="item.id"
        class="flex flex-row max-900:flex-col space-x-6 py-6 "
      >
        <img
          :src="item.new_img"
          alt=""
          class="rounded-3xl w-full max-w-[500px] min-h-[300px] max-550:w-[95%] max-900:mb-6 mx-auto aspect-[3/2] object-cover"
        />
        <div class="flex flex-col">
          <div class="new-head text-3xl">{{ item.new_title }}</div>
          <div class="new-date text-2xl">
            {{ formatDate(item.created_at) }}
          </div>
          <div class="new-des text-2xl">
            <p v-for="(paragraph, idx) in item.new_body" :key="idx">{{ paragraph }}</p>
          </div>
          <div v-if="item.new_signature" class="text-xl italic mt-2">
            <p v-for="(sig, i) in item.new_signature" :key="i">{{ sig }}</p>
          </div>
        </div>
      </div>

      <UPagination
         v-model="page"
        :total="news.length / itemsPerPage * 10"
        :items-per-page="itemsPerPage"
        :sibling-count="1"
        class="mt-8 justify-center"
      />

    </div>

    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from '~/components/Icons/LoadingSpinner.vue'

defineOptions({
  inheritAttrs: false
})

const news = ref([])
const page = ref(1)
const itemsPerPage = 5

const paginatedNews = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return news.value.slice(start, end)
})

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('cs-CZ', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

onMounted(async () => {
  const { all } = await $fetch('/api/news', {
    headers: useRequestHeaders(['cookie']),
    key: 'data-from-server',
  })
  news.value = all
})
</script>

<style lang="scss" scoped>
/* Přidej si vlastní styly dle potřeby */
</style>
