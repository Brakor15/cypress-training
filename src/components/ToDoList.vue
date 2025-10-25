<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "@/models/Task";

interface Props {
  title: string
}

const id = ref<number>(0);
const newTask = ref<string>("");
const tasks = ref<Task[]>([
  { id: id.value++, title: "Faire le ménage", done: false}
]);

function addTask(): void {
  tasks.value.push({ id: id.value++, title: newTask.value, done: false })
  newTask.value = ""
}

function deleteTask(task: Task): void {
  tasks.value = tasks.value.filter(t => t.id !== task.id)
}

defineProps<Props>()
</script>

<template>
  <h1>{{ title }}</h1>
  <form @submit.prevent="addTask">
    <input data-cy="newTask" placeholder="New task ..." v-model="newTask" />
    <button id="add-button">Add task</button>
  </form>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <input type="checkbox" v-model="task.done"/>
      {{ task.title }}
      <button data-cy="delete-button" @click="deleteTask(task)">Delete</button>
    </li>
  </ul>
</template>

<style lang="css" scoped>
</style>
