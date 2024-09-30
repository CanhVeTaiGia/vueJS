<template>
  <div class="mt-[10px]">
    <h2 class="text-[24px]">Bài 4</h2>
    <p>{{ id }}</p>
    <B4child @delete="handleDelete" />
  </div>
</template>
<script setup>
const id = ref('');
import { ref } from "vue";
import B4child from "./B4child.vue";
const handleDelete = (data) => {
  id.value = data;
};
</script>
<style></style>
