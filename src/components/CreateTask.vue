<script setup lang="ts">
import {reactive} from "vue";
import {useTaskStore} from "@/stores/TaskStore.ts";
import { priorities, roles, sizes } from '@/stores/TaskStore.ts'

const TaskStore = useTaskStore();

const taskData = reactive({
  title: '',
  date: '',
  description: '',
  deadline: '',
  size: '',
  priority:  '',
  role: '',
})

const createTask = () => {
  TaskStore.createTask(taskData);
  TaskStore.closeCreateTask();
}

</script>

<template>
  <Teleport to=".phone__body">
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <div class="wrapper absolute inset-0 z-9 flex items-center justify-center"></div>
      <div class="task flex flex-col p-4 gap-2 z-11">
      <div class="flex justify-between items-center">
        <p>Создание задачи</p>
        <button @click="TaskStore.closeCreateTask()" class="p-2 bg-red-500 rounded-full cursor-pointer">✖</button>
      </div>

      <form @submit.prevent="createTask" class="inputs flex flex-col gap-2 p-4">
        <div class="input flex justify-between">
          <label >Дата создания</label>
          <input v-model="taskData.date" type="datetime-local" required />
        </div>
        <div class="input flex justify-between">
          <label >Заголовок</label>
          <input v-model="taskData.title" type="text" required />
        </div>
        <div class="input flex justify-between">
          <label >Описание задачи</label>
          <input v-model="taskData.description" type="text" required >
        </div>
        <div class="input flex justify-between">
          <label >Дэдлайн</label>
          <input v-model="taskData.deadline" type="datetime-local" required >
        </div>
        <div class="input flex justify-between">
          <label >Размер задачи</label>
          <select v-model="taskData.size" required >
            <option
               v-for="size in sizes"
               :value="size">
              {{ size.name }}
            </option>
          </select>
        </div>
        <div class="input flex justify-between">
          <label >Приоритет задачи</label>
          <select v-model="taskData.priority" required>
            <option
                v-for="priority in priorities"
                :value="priority">
              {{ priority.name }}
            </option>
          </select>
        </div>
        <div class="input flex justify-between">
          <label >Роль</label>
          <select v-model="taskData.role" required >
            <option
                v-for="role in roles"
                :value="role">
              {{ role.name }}
            </option>
          </select>
        </div>
        <button  class="create-button p-2" type="submit">Создать карточку</button>
      </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.wrapper {
  background: black;
  opacity: 0.7;
}
.task {
  background: black;
  color: silver;
  border: 1px solid silver;
  border-radius: 5px;
}
.inputs {
  border: 1px solid silver;

  border-radius: 5px;
}
.input{
  display: flex;
  gap: 1rem;
}
.input input, select{
  display: flex;
  border: silver solid 1px;
  width: 50%;
}
.create-button{
  border: 1px solid silver;
  border-radius: 5px;
  cursor: pointer;
}
</style>