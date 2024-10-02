<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 4</h2>
    <p>{{ age }}</p>
    <button @click="increase" class="border p-[5px] border-[#888]">Increase</button>
    <B4child :age="age" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import B4child from "./B4child.vue";
const age = ref(0);
const increase = () => {
  age.value += 1;
};
</script>
<style></style>
