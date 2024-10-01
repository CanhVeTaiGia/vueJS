<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 3</h2>
    <input type="date" v-model="date" class="border" />
    <p>{{ date.split("-").reverse().join("/") }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const date = ref("");
</script>
<style></style>
