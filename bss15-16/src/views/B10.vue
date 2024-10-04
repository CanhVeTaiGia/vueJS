<template>
  <div class="relative">
    <h1>Danh sách nhân viên</h1>

    <div class="p-3">
      <v-card
        class="p-3 w-96 border rounded"
        v-for="n in employees"
        :key="n.id"
      >
        <v-card-title>{{ n.name }}</v-card-title>
        <v-card-subtitle>{{ n.position }}</v-card-subtitle>

        <v-card-actions>
          <v-btn width="100%" color="blue">
            <router-link :to="`/B10/${n.id}`">Xem chi tiết</router-link>
            Xem chi tiết
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";

const employees = ref([
  { id: 1, name: "Nguyễn Văn A", position: "Quản lý" },
  { id: 2, name: "Trần Thị B", position: "Nhân viên" },
  { id: 3, name: "Lê Văn C", position: "Kế toán" },
]);
</script>
