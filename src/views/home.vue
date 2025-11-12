<script setup>
import { StoriesStorage } from '@/stores/stories'
import storyPattern from '@/components/storyPattern.vue'

const store = StoriesStorage()

</script>

<template>
  <div class="flex flex-col gap-4 p-12">
    <p class="flex justify-center items-center text-7xl">Hacker News</p>
    <storyPattern />
    <div class="flex justify-between">
      <button @click="store.fetchStoriesData()" class="home__button p-2">Загрузить ещё</button>
      <button @click="store.refreshStories()" class="home__button p-2">Обновить посты</button>
    </div>
  </div>
</template>

<style scoped>
.home__button{
  border: solid black 1px;
  border-radius: 12px;
  cursor: pointer;
}
.home__button:hover{
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}
</style>