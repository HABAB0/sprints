<script setup lang="ts">
import ScheduledTasks from '@/components/ScheduledTasks.vue'
import WorkTasks from '@/components/WorkTasks.vue'
import TestingTasks from '@/components/TestingTasks.vue'
import CompletedTasks from '@/components/CompletedTasks.vue'
import CreateTask from "@/components/CreateTask.vue";
import UpdatingTask from "@/components/UpdatingTask.vue";
import {useTaskStore} from "@/stores/TaskStore.ts";

const TaskStore = useTaskStore();

</script>

<template>
  <div class="flex gap-8 p-10 h-screen">
    <div class="phone">
      <div class="phone__header">
        <div class="camera"></div>
      </div>
      <div class="phone__content">
        <div v-if="TaskStore.phoneStatus" class="phone__body">
          <div class="phone__wrapper">
            <div class="phone__columns">
              <scheduled-tasks/>
            </div>
            <div>
              <p>Запланированные задачи</p>
            </div>
          </div>
          <div class="phone__wrapper">
            <div class="phone__columns">
              <work-tasks/>
            </div>
            <div>
              <p>Задачи в работе</p>
            </div>
          </div>
          <div class="phone__wrapper">
            <div class="phone__columns">
              <testing-tasks/>
            </div>
            <div>
              <p>Тестирование</p>
            </div>
          </div>
          <div class="phone__wrapper">
            <div class="phone__columns">
              <completed-tasks/>
            </div>
            <div>
              <p>Выполненные задачи</p>
            </div>
          </div>
        </div>
      </div>
      <div class="phone__footer">
        <div @click="TaskStore.phoneSwitch()" class="circle-button"></div>
      </div>
    </div>
  </div>
  <div v-if="TaskStore.isCreateTask">
    <create-task />
  </div>
  <div v-if="TaskStore.isUpdateTask">
    <updating-task />
  </div>


</template>

<style scoped>
  .phone {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    height: 100%;
    border: 2px solid #ccc;
    border-radius: 40px;
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,0.7),
        inset 0 0 0 2px rgba(0,0,0,0.1),
        0 2px 8px rgba(0,0,0,0.1);
    background: transparent;
  }

  .phone__header {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .phone__footer {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .phone__content {
    position: relative;
    background: black;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
  }

  .phone__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    height: 100%;
    width: 100%;
  }

  .phone__wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    justify-content: space-between;
  }

  .phone__columns {
    height: 100%;
    width: 100%;
    justify-content: center;
    background: dimgray;
    border: 1px gold solid;
    border-radius: 5px;
    padding: 10px;
  }

  .circle-button {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 20px;
  }

  .camera {
    width: 12px;
    height: 12px;
    background: #1a1a1a;
    border-radius: 50%;
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.3);
  }
</style>
