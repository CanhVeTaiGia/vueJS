<template>
  <div>
    <button class="border border-[#888] p-[5px]" @click="$emit('increase')">Nhấn</button>
  </div>
</template>
<script setup>
const emit = defineEmits("increase");
</script>
<style></style>
