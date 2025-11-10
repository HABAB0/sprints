<script setup>
import { onMounted } from 'vue'
import { StoriesStorage } from '@/stores/stories'
import storyPattern from '@/components/storyPattern.vue'

const store = StoriesStorage()

</script>

<template>
  <storyPattern />
  <button @click="store.fetchStoriesData()">Ещё новости</button>
  <button @click="store.refreshStories()">Новые новости</button>
  <p>asdasd</p>
</template>

<style scoped>
</style>