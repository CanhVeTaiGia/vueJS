<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 5</h2>
    <p>Giới tính: {{ gender }}</p>
    <input v-model="gender" value="Nam" type="radio" />
    Nam
    <br/>
    <input v-model="gender" value="Nữ" type="radio" />
    Nữ
    <br/>
    <input v-model="gender" value="Khác" type="radio" />
    Khác

  </div>
</template>
<script setup>
import { ref } from "vue";
const gender = ref("");
</script>
<style></style>
