<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 3</h2>
    <p>{{ age }}</p>
    <p>{{ currentCompany }}</p>
    <button @click="randomAge" class="border p-[5px] border-[#888]"
      >Random</button
    >
  </div>
</template>
<script setup>
import { computed, onUpdated, reactive, ref } from "vue";
const age = ref(1);
const companies = reactive([
  "Rikkei Academy",
  "Rikkei Education",
  "Rikkei Fukuoka",
]);
const randomAge = () => {
  age.value = Math.floor(Math.random() * 100) + 1;
};
const currentCompany = computed(() => {
  return companies[(age.value - 1) % companies.length];
});
onUpdated(() => {
  currentCompany;
});
</script>
<style></style>
