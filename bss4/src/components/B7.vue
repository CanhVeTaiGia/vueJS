<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 7</h2>
    <input
      type="number"
      v-model.number="number"
      class="border border-[black]"
    />
    <p>Kết quả căn bậc hai: {{ numberSquare }}</p></div
  >
</template>

<script setup>
import { computed, ref, watch } from "vue";

const number = ref(0);
const numberSquare = computed(() => number.value ** 2);

watch(number, (newVal, oldVal) => {
  console.log(`Số thay đổi từ ${oldVal} sang ${newVal}`);
});
</script>

<style></style>
