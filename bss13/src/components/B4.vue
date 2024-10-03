<template>
  <div class="mt-2">
    <h2 class="text-3xl">Bài 4</h2>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> QUẢN TRỊ VIÊN </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref(["Thông tin cá nhân", "Đổi mật khẩu", "Đăng xuất"]);
</script>
<style></style>
