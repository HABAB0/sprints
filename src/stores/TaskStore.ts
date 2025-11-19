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

export const sizes: Sizes[] = [
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
    const workTasks = ref<Task[]>([])
    const testingTasks = ref<Task[]>([])
    const completedTasks = ref<Task[]>([])


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
        const lists = [scheduledTasks, workTasks, testingTasks, completedTasks];
        for (const list of lists) {
            const index = list.value.findIndex(task => task.id === id);
            if (index !== -1) {
                list.value.splice(index, 1);
                break;
            }
        }
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
        const lists = [scheduledTasks, workTasks, testingTasks, completedTasks];
        for (const list of lists) {
            const task = list.value.find(t => t.id === updateTaskId.value);
            if (task) return task;
        }
        return null;
    }

    const saveUpdateTask = (taskData: TaskData) => {
        const lists = [scheduledTasks, workTasks, testingTasks, completedTasks];
        for (const list of lists) {
            const task = list.value.find(task => task.id === updateTaskId.value);
            if (task) {
                task.title = taskData.title;
                task.description = taskData.description;
                task.date = taskData.date;
                task.deadline = taskData.deadline;
                task.size = sizes.find(s => s.name === taskData.size) || sizes[1];
                task.priority = priorities.find(p => p.name === taskData.priority) || priorities[1];
                task.role = roles.find(r => r.name === taskData.role) || roles[1];
                task.updatedAt = new Date().toISOString();
                closeUpdateTask();
                return;
            }
        }

        closeUpdateTask()
    }

    const dragItem = ref<Task | null>(null)
    const dragList = ref<'scheduled' | 'work' | 'testing' | 'completed' | ''>('')

    const setDragItem = (task: Task, list: typeof dragList.value) => {
        dragItem.value = task
        dragList.value = list
    }

    const moveTaskByDrag = (targetStage: 'scheduled' | 'work' | 'testing' | 'completed') => {
        if (!dragItem.value || !dragList.value) return

        const lists = {
            scheduled: scheduledTasks,
            work: workTasks,
            testing: testingTasks,
            completed: completedTasks,
        }

        const fromStage = dragList.value
        const toStage = targetStage

        const allowedDrag = (
            (fromStage === 'scheduled' && toStage === 'work') ||
            (fromStage === 'work' && toStage === 'testing') ||
            (fromStage === 'testing' && toStage === 'completed') ||
            (fromStage === 'testing' && toStage === 'work')
        )

        if (allowedDrag) {
            const fromList = lists[fromStage]
            const toList = lists[toStage]

            const index = fromList.value.findIndex(t => t.id === dragItem.value!.id)
            if (index !== -1) {
                const [task] = fromList.value.splice(index, 1)

                if (toStage === 'completed') {
                    task.isMade = new Date(task.deadline) < new Date();
                }
                toList.value.push(task)
            }
        }
        dragItem.value = null
        dragList.value = ''
    }



  return {isCreateTask, openCreateTask, closeCreateTask, createTask, scheduledTasks, removeTask, phoneStatus, phoneSwitch, updateTask,
      isUpdateTask, openUpdateTask, closeUpdateTask, saveUpdateTask, workTasks, testingTasks, completedTasks, dragItem, setDragItem, moveTaskByDrag}
})
