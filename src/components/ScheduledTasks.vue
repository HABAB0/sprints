<script setup lang="ts">
import {useTaskStore} from "@/stores/counter.ts";

const TaskStore = useTaskStore();

</script>

<template>
  <div class="flex flex-col gap-2 align-center">
    <div>
      <button  @click="TaskStore.openCreateTask()" class="button-create p-4">Создание таска</button>
    </div>
    <div v-for="task in TaskStore.scheduledTasks" :key="task.id" class="tasks flex flex-col">
      <div class="task">
        <div class="task__title flex justify-between p-1">
          <div>
            {{task.priority.name}}
          </div>
          <div>
            {{task.title}}
          </div>
          <div @click="TaskStore.removeTask(task.id)" class="p-1 bg-red-500 rounded-full cursor-pointer">✖</div>
        </div>
      </div>
<!--      <div class="task border-8" :class="`border-${task.priority.color}-700`">-->
<!--        <div class="flex gap-2 border-2 border-b-red-600">-->
<!--          <div>-->
<!--            {{task.date}}-->
<!--          </div>-->
<!--          <div>-->
<!--            {{task.deadline}}-->
<!--          </div>-->
<!--        </div>-->
<!--        <div>-->
<!--          {{ task.title }}-->
<!--        </div>-->
<!--        <div>-->
<!--          {{task.description}}-->
<!--        </div>-->
<!--        <div>-->
<!--          {{task.role}}-->
<!--        </div>-->
<!--        <div>-->
<!--          {{task.priority}}-->
<!--        </div>-->
<!--        <div>-->
<!--          {{task.size}}-->
<!--        </div>-->
<!--      </div>-->
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
  .task {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: black;
  }
  .task__title{
    background: gray;
    border: 1px solid silver;
    border-radius: 15px 15px 0 0;
  }

</style>