<script setup>
import { onMounted } from 'vue'
import { StoriesStorage } from '@/stores/stories'

const store = StoriesStorage()

onMounted(async () => {
  if(!store.loaded) {
    await store.fetchStoriesId()
    await store.fetchStoriesData()
  }
})
</script>

<template>
  <div v-for="(story, index) in store.storiesData" :key="story.id">
    <p>{{ index + 1 }}</p>
    <a :href="story.url" target="_blank">
      {{ story.title }}
    </a>
    <p>
      {{ story.by }}
    </p>
  </div>
</template>

<style scoped>

</style>