<script setup>
  import home from '../views/home.vue'
</script>

<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/noHome">О нас</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
