<script setup lang="ts">
import {reactive} from "vue";
import {useTaskStore} from "@/stores/counter.ts";


const TaskStore = useTaskStore();
const sizes = ["маленький", "средний", "большой"];

export interface Priority {
  name: string;
  color: string;
}
const priorities: Priority[] = [
  { name: "низкий", color: "green" },
  { name: "средний", color: "amber" },
  { name: "высокий", color: "red" }
];
const roles = ["фронт", "бэк", "аналитик", "тестировщик", "дизайнер"];

const taskData = reactive({
  title: '',
  date: '',
  description: '',
  deadline: '',
  size: '',
  priority:  priorities[1],
  role: '',
})
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

      <div class="inputs flex flex-col gap-2 p-4">
        <div class="input">
          <label >Дата создания</label>
          <input v-model="taskData.date" type="date" required />
        </div>
        <div class="input">
          <label >Заголовок</label>
          <input v-model="taskData.title" type="text" required />
        </div>
        <div class="input">
          <label >Описание задачи</label>
          <input v-model="taskData.description" type="text" required >
        </div>
        <div class="input">
          <label >Дэдлайн</label>
          <input v-model="taskData.deadline" type="date" required >
        </div>
        <div class="input">
          <label >Размер задачи</label>
          <select v-model="taskData.size" required >
            <option
               v-for="size in sizes"
               :value="size">
              {{ size }}
            </option>
          </select>
        </div>
        <div class="input">
          <label >Приоритет задачи</label>
          <select v-model="taskData.priority" required>
            <option
                v-for="priority in priorities"
                :value="priority">
              {{ priority.name }}
            </option>
          </select>
        </div>
        <div class="input">
          <label >Роль</label>
          <select v-model="taskData.role" required >
            <option
                v-for="role in roles"
                :value="role">
              {{ role }}
            </option>
          </select>
        </div>
      </div>
        <button @click="TaskStore.createTask(taskData); TaskStore.closeCreateTask()" >Создать карточку</button>
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
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  opacity: 1;
}
.inputs {
  border: 1px solid black;
  border-radius: 5px;
}
.input{
  display: flex;
  gap: 1rem;
}
.input input{
  border: black solid 1px;
}
</style>