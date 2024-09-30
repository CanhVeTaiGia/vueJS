<template>
  <div v-if="isVisible" class="bg-white ml-[10px] rounded-lg border shadow-lg w-96 p-6">
    <header class="text-lg font-bold mb-4">
      <slot name="header"></slot>
    </header>
    <section class="mb-6">
      <slot name="body"></slot>
    </section>
    <footer class="text-right">
      <button
        @click="closeModal"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Close
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(true);

function closeModal() {
  isVisible.value = false;
}
</script>
