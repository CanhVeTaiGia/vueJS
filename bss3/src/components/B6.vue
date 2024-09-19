<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 6</h2>
    <button class="border border-black p-[10px]" @click="clicked('Rikkei Academy')">Get Param</button>
  </div>
</template>
<script setup>
const clicked = (mess) => {
  console.log(mess);
};
</script>
<style></style>
