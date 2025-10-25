<script setup lang="ts">
import { ref } from 'vue';
import ToDoList from './components/ToDoList.vue';
import type { CurrentUser } from './models/CurrentUser';

const currentUser = ref<CurrentUser>({
  id: 0,
  email: "test@example.com",
  login: "JohnDoe"
})
</script>

<template>
  <h1>You did it!</h1>
  <ToDoList title="To-Do list" />
  <CurrentUser id="currentUser.id" email="currentUser.email" login="currentUser.login"/>
</template>

<style scoped></style>
