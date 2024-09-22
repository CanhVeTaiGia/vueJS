<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 9</h2>
    <p>Gender: {{ gender[currentIndex] }}</p>
    <button class="border border-black p-[5px]" @click="handleClick"
      >Random Gender</button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const gender = ["Nam", "Nữ", "Khác"];
const currentIndex = ref(0);
const handleClick = () => {
  currentIndex.value = Math.floor(Math.random() * gender.length);
};
</script>

<style scoped></style>
