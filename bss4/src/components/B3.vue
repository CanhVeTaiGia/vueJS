<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 3</h2>
    <p>{{ caculator }}</p>
    <button @click="increaseWidth">increase width</button>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';

const width = ref(10);
const height = 10;
const caculator = computed(() => {
    return width.value * height;
})
const increaseWidth = () => {
    width.value += 10;
}
</script>
<style></style>
