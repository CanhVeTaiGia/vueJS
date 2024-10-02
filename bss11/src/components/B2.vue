<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 2</h2>
    <p>{{ count }}</p>
    <button class="border border-[#888] p-[5px]" @click="handleClick">Counter</button>
  </div>
</template>
<script setup>
import { onMounted, onUpdated, ref } from "vue";

const count = ref(0);
const handleClick = () => {
  count.value++;
};
onUpdated(() => console.log(`Bài 2: ${count.value} đã được thay đổi`));
</script>
<style></style>
