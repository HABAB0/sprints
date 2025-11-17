<script setup lang="ts">
import {useTaskStore} from "@/stores/counter.ts";

const TaskStore = useTaskStore();

</script>

<template>
  <div>
    <button  @click="TaskStore.openCreateTask()" class="p-4 border bg-orange-50 cursor-pointer">Создание таска</button>
  </div>
  <div v-for="task in TaskStore.scheduledTasks" :key="task.id">
    {{ task.title }}
  </div>
</template>

<style scoped>

</style>