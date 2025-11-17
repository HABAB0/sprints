<script setup lang="ts">
import ScheduledTasks from '@/components/ScheduledTasks.vue'
import WorkTasks from '@/components/WorkTasks.vue'
import TestingTasks from '@/components/TestingTasks.vue'
import CompletedTasks from '@/components/CompletedTasks.vue'
import CreateTask from "@/components/CreateTask.vue";
import {useTaskStore} from "@/stores/counter.ts";
import {ref} from "vue";

const TaskStore = useTaskStore();

</script>

<template>
  <div class="flex gap-2 p-6">
    <scheduled-tasks/>
    <work-tasks />
    <testingTasks />
    <completedTasks />
  </div>
  <div v-if="TaskStore.isCreateTask">
    <create-task />
  </div>

</template>

<style scoped>

</style>
