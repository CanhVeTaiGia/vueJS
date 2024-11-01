<template>
  <div
    class="w-full z-50 bg-[#0000002c] flex justify-center items-center h-screen absolute top-0 left-0"
  >
    <v-form @submit="addProduct" class="bg-white rounded w-1/3 p-5">
      <h2 class="text-2xl pb-4">
        <slot name="header"></slot>
      </h2>
      <v-text-field
        v-model="product.name"
        label="Tên"
        :rules="[
          (v) => !!v || 'Tên không được để trống',
          () => !sameName || 'Tên không được trùng',
        ]"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="product.image"
        label="Ảnh"
        :rules="[(v) => !!v || 'Ảnh không được để trống']"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="product.price"
        type="number"
        :rules="[(v) => v > 0 || 'Giá phải lớn hơn 0']"
        label="Giá"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="product.description"
        label="Mô tả"
        :rules="[(v) => !!v || 'Mô tả không được để trống']"
        variant="outlined"
      ></v-text-field>
      <v-btn type="submit" variants="elevated" color="blue" class="mr-4"
        >Lưu</v-btn
      >
      <v-btn @click="hideForm" variants="elevated" color="red">Đóng</v-btn>
    </v-form>
  </div>
</template>
<script setup>
import { defineProps, ref, reactive } from "vue";
const product = reactive({
  name: "",
  image: "",
  price: 0,
  description: "",
});
const sameName = ref(false);

const props = defineProps([
  "toggleForm",
  "products",
  "isShowForm",
  "getAllProduct",
]);
const hideForm = () => {
  props.toggleForm();
};
const addProduct = (e) => {
  e.preventDefault();
  const newProduct = {
    ...product,
    price: parseInt(product.price),
  };
  const found = props.products.find((item) => item.name === product.name);
  if (found) {
    return (sameName.value = true);
  }
  sameName.value = false;
  if (product.image === "" || product.price === 0 || product.name === "") {
    return;
  }
  fetch("http://localhost:8080/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  hideForm();
  console.log(props.getAllProduct());
  props.getAllProduct();
};
</script>
<style></style>
