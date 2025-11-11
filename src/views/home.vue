<script setup>
import { onMounted } from 'vue'
import { StoriesStorage } from '@/stores/stories'
import storyPattern from '@/components/storyPattern.vue'

const store = StoriesStorage()

</script>

<template>
  <div class = "grid grid-cols-2 gap-4">
    <storyPattern />
  </div>
  <button @click="store.fetchStoriesData()">Загрузить ещё</button>
  <button @click="store.refreshStories()">Новые новости</button>
</template>

<style scoped>
</style>