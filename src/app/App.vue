<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/noHome">Не главная</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style scoped>

</style>
