import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface TaskData {
    title: string
    description: string
    date: string
    deadline: string
    size: string
    priority: string
    role: string
}

export interface Task {
    id: number
    title: string
    description: string
    date: string
    deadline: string
    size: string
    priority: string
    role: string
}

export const useTaskStore = defineStore('task', () => {

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

  return {isCreateTask, openCreateTask, closeCreateTask, createTask, scheduledTasks}
})
