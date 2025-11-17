<script setup lang="ts">
import {reactive} from "vue";
import {useTaskStore} from "@/stores/counter.ts";


const TaskStore = useTaskStore();

const taskData = reactive({
  title: '',
  date: '',
  description: '',
  deadline: '',
  size: '',
  priority: '',
  role: '',
})
const sizes = ["маленький", "средний", "большой"];
const priorities = ["высокий", "средний", "низкий"];
const roles = ["фронт", "бэк", "аналитик", "тестировщик", "дизайнер"];

</script>

<template>
  <div class="task flex flex-col p-4 gap-2">
    <div class="flex space-between">
      <p>Создание задачи</p>
      <button @click="TaskStore.closeCreateTask()" class="p-4 border bg-orange-50 cursor-pointer">Закрыть</button>
    </div>

    <div class="inputs flex flex-col gap-2 p-4">
      <div class="input">
        <label >Дата создания</label>
        <input v-model="taskData.date" type="date" />
      </div>
      <div class="input">
        <label >Заголовок</label>
        <input v-model="taskData.title" type="text" />
      </div>
      <div class="input">
        <label >Описание задачи</label>
        <input v-model="taskData.description" type="text">
      </div>
      <div class="input">
        <label >Дэдлайн</label>
        <input v-model="taskData.deadline" type="date">
      </div>
      <div class="input">
        <label >Размер задачи</label>
        <select v-model="taskData.size">
          <option
             v-for="size in sizes"
             :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <div class="input">
        <label >Приоритет задачи</label>
        <select v-model="taskData.priority">
          <option
              v-for="priority in priorities"
              :value="priority">
            {{ priority }}
          </option>
        </select>
      </div>
      <div class="input">
        <label >Роль</label>
        <select v-model="taskData.role">
          <option
              v-for="role in roles"
              :value="role">
            {{ role }}
          </option>
        </select>
      </div>
    </div>
    <button @click="TaskStore.createTask(taskData)">Создать карточку</button>

  </div>
</template>

<style scoped>
.task, .inputs {
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