<script setup lang="ts">
import TaskItem from "@/components/TaskItem.vue";
import {useTaskStore} from "@/stores/TaskStore.ts";
const TaskStore = useTaskStore();

</script>

<template>
  <div class="flex flex-col gap-2 align-center">
    <div v-for="task in TaskStore.completedTasks" :key="task.id" class="tasks flex flex-col" draggable="true" @dragstart="() => TaskStore.setDragItem(task, 'completed')">
      <task-item :task="task"></task-item>
    </div>
  </div>
</template>

<style scoped>
</style>