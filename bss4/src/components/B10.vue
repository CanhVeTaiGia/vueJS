<template>
  <div class="mt-[20px]">
    <h2 class="text-[32px]">Bài 10</h2>
    <button class="border border-[black]" @click="handleShow(isVisible)">Hiển</button>
    <button class="border border-[black]" @click="handleShow(isVisible)">Ẩn</button>
    <p v-if="isVisible">Nội dung được hiển thị</p>
    <p v-else>Nội dung bị ẩn</p>
  </div>
</template>
<script>
import { ref } from 'vue'
const isVisible = ref(false);
const handleShow = () => {
  isVisible.value = !isVisible.value;
}
</script>
<style></style>
