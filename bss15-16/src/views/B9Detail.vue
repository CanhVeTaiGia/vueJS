<template>
  <div class="flex justify-center items-center h-full">
    <v-card class="p-3 w-96 border rounded">
      <v-card-title>{{ user.name }}</v-card-title>
      <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      <v-card-text>{{ user.address }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const users = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Oak St",
  },
  {
    id: 3,
    name: "Mark Lee",
    email: "mark@example.com",
    address: "789 Pine St",
  },
]);
const id = parseInt(route.params.id);
const user = ref(users.value.find((u) => u.id === id));

onMounted(() => {
  const id = parseInt(route.params.id);
  user.value = users.value.find((u) => u.id === id);
});
</script>
