<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 8</h2>
    <a :href="link" @click.prevent="checkLink">{{ linkText }}</a>

  </div>
</template>

<script setup>
import { ref } from "vue";
const link = ref("http://www.google.com");
const linkText = ref("Click here to visit Google");

const checkLink = (event) => {
  if (!link.value.startsWith("https://")) {

    event.preventDefault();
    alert('Đường dẫn không hợp lệ. Vui lòng sử dụng https://')
  } else {
    errorMessage.value = "";
    window.location.href = link.value;
  }
};
</script>
