<script setup>
import { onMounted } from 'vue'
import { StoriesStorage } from '@/stores/stories'

const story = StoriesStorage()

onMounted(async () => {
  if(!story.loaded) {
    await story.fetchStoriesId()
    await story.fetchStoriesData()
  }
})
</script>

<template>
  <div v-for="(story, index) in story.storiesData" :key="story.id" >
    <p>{{ index + 1 }}</p>
    <router-link :to="{name: 'storyDetail', params: { id: story.id } }">
      {{ story.title }}
    </router-link>
    <div>
      <p>
        {{ story.by }}
      </p>
      <p>
        {{ (new Date(story.time * 1000)).toLocaleTimeString('ru-RU', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'})
        }}
      </p>
    </div>
    <p>Коментарии: {{ (story.kids || []).length }}</p>
  </div>
</template>

<style scoped>

</style>