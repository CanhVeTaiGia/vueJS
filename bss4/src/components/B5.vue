<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 5</h2>
    <ul>
      <li class="flex gap-[10px] mb-[10px]" v-for="i in products"
        ><p>{{ i.name }} - số lượng: {{ i.stock }}</p>
        <button @click="handleClick(i.name)" class="border border-black">Tăng số lượng</button></li
      >
    </ul>
    <p>Tổng số lượng sản phẩm: {{ totalStock }}</p>
  </div>
</template>
<script setup>
import { computed, reactive } from "vue";

const products = reactive([
  {
    name: "Mèn mén loại 1",
    stock: 0,
  },
  {
    name: "Mèn mén loại 2",
    stock: 0,
  },
  {
    name: "Mèn mén loại 3",
    stock: 0,
  },
]);

const totalStock = computed(() => {
    return products.reduce((acc, product) => acc + product.stock, 0);
})

const handleClick = (name) => {
    const foundIndex = products.findIndex(item => {
        return item.name === name
    });
    if (foundIndex !== -1) {
        products[foundIndex].stock += 1;
    }
}
</script>
<style></style>
