<script setup>
import { onMounted } from 'vue'
import { StoriesStorage } from '@/stores/stories'

const store = StoriesStorage()

onMounted(() => {
  store.fetchStories()
})
</script>

<template>
  <div v-for="story in store.stories" key="story.id" >
    {{ story.id }}
    {{ story.title }}
  </div>
</template>

<style scoped>
</style>