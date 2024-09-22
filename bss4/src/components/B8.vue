<template>
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        <li v-for="(product, index) in products" :key="product.id">
          <span>{{ product.name }} - Số lượng: {{ product.quantity }}</span>
          <button class="border border-black" @click="increaseQuantity(index)">Tăng số lượng</button>
        </li>
      </ul>
      <p>Tổng số lượng sản phẩm trong giỏ hàng: {{ totalQuantity }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const products = ref([
  {
    name: "Mèn mén loại 1",
    quantity: 0,
  },
  {
    name: "Mèn mén loại 2",
    quantity: 0,
  },
  {
    name: "Mèn mén loại 3",
    quantity: 0,
  },
  ]);
  
  const totalQuantity = ref(0);
  
  const increaseQuantity = (index) => {
    products.value[index].quantity++;
  };
  
  watch(products, (newVal, oldVal) => {
    totalQuantity.value = newVal.reduce((sum, product) => sum + product.quantity, 0);
  }, { deep: true });
  </script>
  
  <style>
    button {
      margin-left: 10px;
    }
  </style>
  