<script setup lang="ts">
import TaskItem from "@/components/TaskItem.vue";
import {useTaskStore} from "@/stores/TaskStore.ts";
const TaskStore = useTaskStore();

</script>

<template>
  <div class="flex flex-col gap-2 align-center" >
    <div>
      <button  @click="TaskStore.openCreateTask()" class="button-create p-4">Создание таска</button>
    </div>
    <div v-for="task in TaskStore.scheduledTasks" :key="task.id" class="tasks flex flex-col" draggable="true" @dragstart="() => TaskStore.setDragItem(task, 'scheduled')">
      <task-item :task="task"></task-item>
    </div>
  </div>
</template>

<style scoped>
  .button-create {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px gold solid;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>