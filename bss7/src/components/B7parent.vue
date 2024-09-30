<template>
  <div class="mt-[10px]">
    <h2 class="text-[24px]">Bài 7</h2>
    <B7child @sendMessage="handleSendMessage" />
  </div>
</template>
<script setup>
import B7child from "./B7child.vue";
const handleSendMessage = () => {
  alert("Chào mừng đến với Rikkei Education");
};
</script>
<style></style>
