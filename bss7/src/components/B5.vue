<template>
  <div class="mt-[10px]">
    <h2 class="text-[24px]">Bài 5</h2>
    <B5modal>
      <template #header> Thông báo từ hệ thống </template>
      <template #body>
        Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào nút
        'Close'.
      </template>
    </B5modal>
  </div>
</template>

<script setup>
import B5modal from "./B5modal.vue";
</script>
