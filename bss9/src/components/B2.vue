<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 2</h2>
    <input type="color" v-model="rgb" class="" />
    <p>Mã màu: {{ rgb }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const rgb = ref("");
</script>
<style></style>
