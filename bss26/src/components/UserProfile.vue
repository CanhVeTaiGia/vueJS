<template>
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Email: {{ userEmail }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const userEmail = computed(() => store.getters.user ? store.getters.user.email : 'Chưa đăng nhập');
  </script>
  