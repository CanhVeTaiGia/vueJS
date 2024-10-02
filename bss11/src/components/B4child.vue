<template>
  <div> </div>
</template>

<script setup>
import { onMounted, onUpdated } from "vue";
const props = defineProps({
  age: {
    type: Number,
    required: true,
  },
});
onUpdated(() => {
  alert("Giá trị của biến age đã được thay đổi");
});
</script>

<style scoped></style>
