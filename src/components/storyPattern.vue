<script setup>
import { onMounted } from 'vue'
import { StoriesStorage } from '@/stores/stories'

const store = StoriesStorage()


onMounted(async () => {
  if (!store.loaded) {
    await store.fetchStoriesId()
    await store.fetchStoriesData()
  }
})
</script>

<template>
  <div class = "grid grid-cols-2 gap-4">
    <div v-for="(store, index) in store.storiesData" :key="store.id" class="storyPattern__item p-4">
      <router-link :to="{name: 'storyDetail', params: { id: store.id } }">
        {{ store.title }}
      </router-link>
      <div class="flex justify-between">
        <p>
          {{ store.by }}
        </p>
        <p>
          {{ (new Date(store.time * 1000)).toLocaleTimeString('ru-RU', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit'})
          }}
        </p>
      </div>
      <p>Коментарии: {{ store.descendants}}</p>
    </div>
  </div>
</template>

<style scoped>
.storyPattern__item{
  border: solid black 1px;
  border-radius: 15px;
}
</style>