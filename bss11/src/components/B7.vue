<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 7</h2>
    <input type="text" v-model="input" class="outline-none rounded border p-[5px] border-[#888]" />
  </div>
</template>
<script setup>
import { onUpdated, ref } from "vue";

const input = ref("");
onUpdated(() => {
  document.title = input.value;
});
</script>
<style></style>
