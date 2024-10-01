<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 7</h2>
    <form
      class="w-[300px] flex flex-col items-center p-[10px] border border-[#888]"
      @submit="handleSubmit"
    >
      <h2 class="text-center text-[24px]">Thêm mới sản phẩm</h2>
      <div class="w-[100%] flex flex-col"
        ><label>Mã sản phẩm</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="product.id"
      /></div>
      <div class="w-[100%] flex flex-col"
        ><label>Tên sản phẩm</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="product.name"
      /></div>
      <div class="w-[100%] flex flex-col"
        ><label>Giá sản phẩm</label>
        <input
          type="number"
          min="0"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="product.price"
      /></div>  
      <div class="w-[100%] flex flex-col"
        ><label>Số lượng sản phẩm</label>
        <input
          type="number"
          min="0"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="product.quantity"
      /></div>
      <button class="mt-[10px] bg-[#08f] p-[10px] text-white rounded-[5px]" type="submit">Thêm sản phẩm</button> 
    </form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const product = reactive({
  id: "",
  name: "",
  price: 0,
  quantity: 0,
});
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(product);
};
</script>
<style></style>
