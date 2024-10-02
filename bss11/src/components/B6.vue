<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 6</h2>
    <p>{{ count }}</p>
    <button
      class="border p-[5px] bg-[#08f] rounded text-white"
      @click="increase"
      >Increase</button
    >
  </div>
</template>
<script setup>
import { onUpdated, ref } from "vue";

const count = ref(0);
const increase = () => {
  count.value++;
};
onUpdated(() => {
  document.title = count.value;
});
</script>
<style></style>
