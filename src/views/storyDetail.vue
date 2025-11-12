<script setup>
import { useRoute } from 'vue-router'
import {currentStory} from "@/stores/currentStory.js";
import comments from '@/components/comments.vue'
import { onMounted } from 'vue'

const route = useRoute()
const store = currentStory()
const goBack = () => router.push('/')
onMounted(async () => {
  store.setId(route.params.id)
  await store.fetchStoryData()
})

</script>

<template>
  <div class="flex justify-center items-center p-12 gap-6">
    <router-link to="/" class="story__button flex justify-center items-center p-2">
      Назад
    </router-link>
    <div v-if="store.storyData" class="storyPattern__item max-w-200 p-4">
      <a href="/">
        {{ store.storyData.title }}
      </a>
      <div>
        <div class="flex justify-between">
          <p>
            {{ store.storyData.by }}
          </p>
          <p>
            {{ (new Date(store.storyData.time * 1000)).toLocaleTimeString('ru-RU', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'})
            }}
          </p>
        </div>
        <p>Количество коментариев : {{store.storyData.descendants}}</p>
      </div>
      <a :href="store.storyData.url" class="flex justify-center items-center">->url<-</a>
    </div>
  </div>

  <div v-if="store.loading" class="p-4 text-center">
    <p>Загрузка</p>
  </div>
  <div v-else class="flex flex-col p-4 gap-2">
    <comments
        v-for="comment in store.commentsData" :key="comment.id" :comment="comment"
    />
  </div>

</template>

<style scoped>
.storyPattern__item{
  border: solid black 1px;
  border-radius: 12px;
}
.story__button{
  border: solid black 1px;
  border-radius: 12px;
  cursor: pointer;
  max-height: 40px;
}
.story__button:hover{
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}
</style>