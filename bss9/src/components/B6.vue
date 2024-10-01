<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 6</h2>
    <p>Sở thích: {{ hobbies }}</p>
    <label>
      <input type="checkbox" :value="'Đá bóng'" v-model="hobbies" />
      Đá bóng
    </label>
    <br />
    <label>
      <input type="checkbox" :value="'Code'" v-model="hobbies" />
      Code
    </label>
    <br />
    <label>
      <input type="checkbox" :value="'Chơi'" v-model="hobbies" />
      Chơi
    </label>
  </div>
</template>
<script setup>
import { ref } from "vue";
const hobbies = ref([]);
</script>
<style></style>
