<template>
  <button class="border border-[#888]" @click="$emit('sendMessage')">Gửi tin nhắn</button>
</template>
<script setup>
const emit = defineEmits("sendMessage");
</script>
<style></style>
