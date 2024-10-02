<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 1</h2>
    <p>Trong console log</p>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => console.log("Bài 1: Component mounted"));
</script>
<style></style>
