<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 8</h2>
    <p>Chiều rộng của màn hình: {{ w }}</p>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const w = ref(window.innerWidth);
const updateWidth = () => {
    w.value = window.innerWidth;
}
onMounted(() => window.addEventListener('resize', updateWidth))
</script>
<style></style>
