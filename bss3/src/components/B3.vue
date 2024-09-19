<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 3</h2>
    <input
      :disabled="isDisable"
      type="text"
      class="border border-black outline-[#08f]"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isDisable = ref(true);
</script>
<style></style>
