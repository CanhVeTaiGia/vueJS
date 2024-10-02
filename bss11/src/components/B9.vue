<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 9</h2>
    <p class="text-lg">Count: {{ count }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const count = ref(0);
let intervalId = null;
onMounted(() => {
  intervalId = setInterval(() => {
    count.value += 1;
  }, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped></style>
