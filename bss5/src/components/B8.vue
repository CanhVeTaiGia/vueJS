<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 8</h2>
    <button class="border border-black p-[5px]" @click="sortAsc"
      >Tăng dần</button
    >
    <button class="border border-black p-[5px]" @click="sortDesc"
      >Giảm dần</button
    >
    <br />
    <p>{{ arr }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const arr = ref([5, 2, 9, 1, 5, 6]);
const sortAsc = () => {
  arr.value = [...arr.value].sort((a, b) => a - b);
};
const sortDesc = () => {
  arr.value = [...arr.value].sort((a, b) => b - a);
};
</script>
<style scoped></style>
