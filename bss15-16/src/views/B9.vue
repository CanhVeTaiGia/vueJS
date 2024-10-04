<template>
  <div>
    <h1>User List</h1>
    <div class="p-3">
      <v-card class="p-3 w-96 border rounded" v-for="n in users" :key="n.id">
        <v-card-title>{{ n.name }}</v-card-title>
        <v-card-subtitle>{{ n.email }}</v-card-subtitle>
        <v-card-text>{{ n.address }}</v-card-text>

        <v-card-actions>
          <v-btn width="100%" color="blue">
            <router-link :to="`/B9Detail/${n.id}`">Xem chi tiết</router-link>
            Xem chi tiết
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
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


</script>
