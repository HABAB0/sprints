import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {TaskData, Task, Priority, Roles, Sizes} from '@/utils/types.ts';

export const priorities: Priority[] = [
    { name: "низкий", color: "green" },
    { name: "средний", color: "yellow" },
    { name: "высокий", color: "red" }
];

export const roles: Roles[] = [
    { name: "фронт", icon: "🖥️" },
    { name: "бэк", icon: "⚙️" },
    { name: "аналитик", icon: "📊" },
    { name: "тестировщик", icon: "🔍" },
    { name: "дизайнер", icon: "🎨" },
];

export const size: Sizes[] = [
    { name: "маленький", size: "8" },
    { name: "средний", size: "15" },
    { name: "большой", size: "25" }
];

export const useTaskStore = defineStore('task', () => {


    const phoneStatus = ref<boolean>(false);

    const phoneSwitch = () => {
        phoneStatus.value = !phoneStatus.value;
    }

    const scheduledTasks = ref<Task[]>([])

    const isCreateTask = ref<boolean>(false)

    const openCreateTask = () => {
        isCreateTask.value = true
    }

    const closeCreateTask = () => {
        isCreateTask.value = false
    }

    const newId = ref(0)

    const createTask = (taskData: TaskData) => {

        const newTask: Task = {
            id: newId.value,
            ...taskData,
        }
        scheduledTasks.value.push(newTask)
        newId.value += 1
    }

    const removeTask = (id: number) => {
        scheduledTasks.value = scheduledTasks.value.filter(task => task.id !== id);
    }

    const isUpdateTask = ref<boolean>(false)

    const updateTaskId = ref<number>(0)

    const openUpdateTask = (id: number) => {
        updateTaskId.value = id
        isUpdateTask.value = true
    }

    const closeUpdateTask = () => {
        isUpdateTask.value = false
    }

    const updateTask = () => {
        closeCreateTask()
        return scheduledTasks.value.find(task => task.id === updateTaskId.value)
    }

    const saveUpdateTask = (taskData: TaskData) => {
        const task = scheduledTasks.value.find(task => task.id === updateTaskId.value)

        if (!task) {
            return
        }
        task.title = taskData.title
        task.description = taskData.description
        task.date = taskData.date
        task.deadline = taskData.deadline
        task.size = size.find(size => size.name === taskData.size) || size[1]
        task.priority = priorities.find(priority => priority.name === taskData.priority) || priorities[1]
        task.role = roles.find(role => role.name === taskData.role) || roles[1]

        closeUpdateTask()
    }

  return {isCreateTask, openCreateTask, closeCreateTask, createTask, scheduledTasks, removeTask, phoneStatus, phoneSwitch, updateTask, isUpdateTask, openUpdateTask, closeUpdateTask, saveUpdateTask}
})
