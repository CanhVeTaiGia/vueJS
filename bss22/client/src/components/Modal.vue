<template>
  <div
    class="w-full z-50 bg-[#0000002c] flex justify-center items-center h-screen absolute top-0 left-0"
  >
    <v-card class="p-4">
      <v-card-title class="font-bold">Xác nhận xóa?</v-card-title>
      <v-card-text>Bạn có chắc muốn xóa sản phẩm này?</v-card-text>
      <v-card-actions>
        <v-btn @click="deleteProduct(props.id)" variant="elevated" color="green"
          >OK</v-btn
        >
        <v-btn @click="hideModal" variant="elevated" color="red">Hủy</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps([
  "toggleModal",
  "isShowModal",
  "getAllProduct",
  "id",
]);
const deleteProduct = async (id) => {
  const res = fetch(`http://localhost:8080/products/${id}`, {
    method: "DELETE",
  });
  hideModal();
  props.getAllProduct();
  console.log(props.getAllProduct());
  
};
const hideModal = () => {
  props.toggleModal();
  console.log(props.isShowModal);
};
</script>
<style></style>
