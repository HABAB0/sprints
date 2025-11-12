<script setup>
import { RouterView } from 'vue-router'
import {StoriesStorage} from "@/stores/stories.js";
const store = StoriesStorage();
setTimeout(() => {
  store.refreshStories()
},60000)
</script>

<template>
  <main>
    <router-view />
  </main>
</template>

<style scoped>

</style>
