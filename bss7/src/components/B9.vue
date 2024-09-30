<template>
  <div class="mt-[10px]">
    <h2 class="text-[24px]">Bài 9</h2>
    <B9button type="submit" @click="handleSubmit">Submit</B9button>
    <B9button type="button" @click="handleButton">Button</B9button>
    <B9button type="reset" @click="handleReset">Reset</B9button>
  </div>
</template>
<script setup>
import B9button from './B9button.vue';
</script>
<style></style>
