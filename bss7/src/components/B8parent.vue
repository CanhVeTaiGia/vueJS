<template>
  <div class="mt-[10px]">
    <h2 class="text-[24px]">Bài 8</h2>
    <h2 class="text-[24px]">------ List User ------</h2>
    <button
      @click="toggleForm(true)"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add user
    </button>
    <B8child v-if="isFormVisible" @close="toggleForm(false)" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import B8child from "./B8child.vue";
const isFormVisible = ref(false);
const toggleForm = (a) => {
  isFormVisible.value = a;
};
</script>
<style scoped></style>
