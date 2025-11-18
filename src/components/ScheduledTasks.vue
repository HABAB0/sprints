<script setup lang="ts">
import {useTaskStore} from "@/stores/TaskStore.ts";
const TaskStore = useTaskStore();
</script>

<template>
  <div class="flex flex-col gap-2 align-center">
    <div>
      <button  @click="TaskStore.openCreateTask()" class="button-create p-4">Создание таска</button>
    </div>
    <div v-for="task in TaskStore.scheduledTasks" :key="task.id" class="tasks flex flex-col">
      <div class="task">
        <div class="task__title flex justify-between items-center">
          <div class="flex gap-1 items-center justify-center">
            <div class="task__priority rounded-full " :style="{ background: task.priority.color, width: task.size.size + 'px', height: task.size.size + 'px'}"></div>
            <div>{{task.role.icon}}</div>
          </div>
          <div>
            {{task.title}}
          </div>
          <div class="flex gap-1 items-center justify-center cursor-pointer">
            <div @click="TaskStore.openUpdateTask(task.id)">✏️</div>
            <div @click="TaskStore.removeTask(task.id)" class=" p-0.5 cursor-pointer items-center justify-center">✖</div>
          </div>

        </div>
        <div class="pl-2">{</div>
        <div class="flex flex-col  gap-1 pl-4">
            <div class="flex gap-1">
              <p>date:</p>
              {{
                (() => {
                  const d = new Date(task.date);
                  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
                })()
              }}
            </div>
            <div class="flex gap-1">
              <p>deadline:</p>{{
                (() => {
                  const d = new Date(task.deadline);
                  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
                })()
              }}
            </div>
            <div class="flex gap-1">
              <p>description:</p>{{task.description}}
            </div>
        </div>
        <div class="pl-2 pb-2">}</div>
      </div>

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
    padding: 5px;
  }

</style>