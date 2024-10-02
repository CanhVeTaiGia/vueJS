<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 10</h2>
    <p class="text-lg">{{ formattedTime() }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const time = ref("");
let intervalId = null;
const updateTime = () => {
  const now = new Date();
  time.value = now.toLocaleTimeString();
};
onMounted(() => {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
const formattedTime = () => {
  return time.value;
};
</script>

<style scoped></style>
