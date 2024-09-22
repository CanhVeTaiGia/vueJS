<template>
  <div class="mt-[20px]">
    <h2 class="text-[32px]">Bài 10</h2>
    <button class="border border-[black]" @click="isVisible = true">Hiển thị</button>
    <button class="border border-[black]" @click="isVisible = false">Ẩn</button>
    <p v-if="isVisible">Nội dung được hiển thị</p>
    <p v-else>Nội dung bị ẩn</p>
  </div>
</template>
<script></script>
<style></style>
