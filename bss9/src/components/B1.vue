<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 1</h2>
    <label class="">Email</label>
    <input
      type="text"
      class="border border-[#888] outline-none"
      v-model="input"
    />
    <p>Email: {{ input }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const input = ref("");
</script>
<style></style>
