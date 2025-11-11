<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import {comment} from "postcss";

  const route = useRoute()
  const storyData = ref('')

  onMounted(async () => {
    const id = route.params.id
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    storyData.value = await res.json()
    if ((storyData.kids || []).length > 0){
      storyData.kids.forEach(comment => {

      })
    }
  })
</script>

<template>
  <a href="/">
    {{ storyData.title }}
  </a>
  <div>
    <div>
      <p>
        {{ storyData.by }}
      </p>
      <p>
        {{ (new Date(storyData.time * 1000)).toLocaleTimeString('ru-RU', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'})
        }}
      </p>
  </div>
    <p>Количество коментариев : {{ (storyData.kids || []).length }}</p>
  </div>

</template>

<style scoped>

</style>