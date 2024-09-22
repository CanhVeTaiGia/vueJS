<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 6</h2>
        <input class="border border-black mr-[10px]" @input="updateInputValue" min="0" type="number">
        <button @click="addToCart" class="border p-[2px] border-[black]">Add to cart</button>
        <p>Tổng tiền trong giỏ hàng: {{ totalAmount }}</p>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const inputValue = ref(0);
const cartItems = ref([]);

const totalAmount = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item, 0);
});

const updateInputValue = (event) => {
  inputValue.value = Number(event.target.value);
};

const addToCart = () => {
  if (inputValue.value > 0) {
    cartItems.value.push(inputValue.value);
    inputValue.value = 0;
  }
};
</script>
<style>
    
</style>