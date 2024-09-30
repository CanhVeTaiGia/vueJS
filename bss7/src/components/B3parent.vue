<template>
  <div class="mt-[10px]">
    <h2 class="text-[24px]">Bài 3</h2>
    <p>{{ count }}</p>
    <B3child @increase="handleIncrease" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import B3child from "./B3child.vue";

const count = ref(0);
const handleIncrease = () => {
  count.value++;
};
</script>
<style></style>
