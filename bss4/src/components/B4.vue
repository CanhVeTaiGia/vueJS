<template>
    <div class="mt-[10px]">
      <h2 class="text-[32px]">Bài 4</h2>
      <input class="border" type="text" @input="handleChange">
    </div>
  </template>
  
  <script setup>
  import { computed, ref, watch } from 'vue';
  const inputText = ref('');
  const handleChange = (e) => {
    inputText.value = e.target.value;
  };
  watch(inputText, (newValue, oldValue) => {
    console.log('Old Value:', oldValue);
    console.log('New Value:', newValue);
  });
  </script>
  
  <style>
  </style>
  