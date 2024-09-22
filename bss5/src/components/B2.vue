<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 2</h2>
    <button class="border border-black w-[40px]" @click="isShow = !isShow">
      {{ isShow ? "Ẩn" : "Hiện" }}
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isShow = ref(false);
</script>
<style></style>
