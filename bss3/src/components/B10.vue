<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 10</h2>
    <input
      ref="inputField"
      type="text"
      @keydown="handleKeyDown"
      placeholder="Nhập văn bản và nhấn Shift + Enter"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputField = ref(null);

function handleKeyDown(event) {
  if (event.key === "Enter") {
    if (event.shiftKey) {
      // Nếu nhấn Shift + Enter
      alert(inputField.value.value);
      inputField.value.value = ""; // Xóa nội dung input
    } else {
      // Nếu chỉ nhấn Enter
      alert("Bạn cần nhấn Shift + Enter");
    }
  }
}
</script>
