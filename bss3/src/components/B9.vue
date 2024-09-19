<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 9</h2>
    <button class="p-[20px]" @click="increase">Click {{ count }} lần</button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const count = ref(0);
const increase = () => {
    count.value++;
};
</script>
<style></style>
