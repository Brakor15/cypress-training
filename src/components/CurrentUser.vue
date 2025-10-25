<script setup lang="ts">
import type CurrentUser from "@/models/CurrentUser"

withDefaults(defineProps<CurrentUser>(),
  {
    id: 0,
    login: "Guest",
    email: ""
  });
</script>

<template>
  <h1>Bienvenue, {{ login }}</h1>
  <p>Email : {{ email }}</p>
</template>
