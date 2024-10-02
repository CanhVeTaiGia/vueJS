<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 5</h2>
    <button
      @click="toggleChild"
      class="px-4 py-2 bg-[#08f] text-white rounded"
    >
      Toggle
    </button>
    <B5child v-if="showChild" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import B5child from "./B5child.vue";
const showChild = ref(true);
const toggleChild = () => {
  showChild.value = !showChild.value;
};
</script>

<style scoped></style>
