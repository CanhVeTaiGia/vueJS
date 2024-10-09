<template>
  <div>
    <header class="p-4"
      ><v-btn @click="toggleForm" color="blue">Thêm sản phẩm</v-btn></header
    >
    <main class="p-4">
      <v-table height="500px" fixed-header>
        <thead>
          <tr>
            <th class="p-3">Ảnh</th>
            <th class="p-3">Tên sản phẩm</th>
            <th class="p-3">Giá</th>
            <th class="p-3">Mô tả</th>
            <th class="p-3">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in products">
            <td class="p-3"
              ><v-img
                :width="80"
                aspect-ratio="1/1"
                cover
                :src="product.image"
              ></v-img
            ></td>
            <td class="p-3">{{ product.name }}</td>
            <td class="p-3">{{
              product.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })
            }}</td>
            <td class="p-3">{{
              product.description.length > 50
                ? product.description.slice(0, 50) + " ..."
                : product.description
            }}</td>
            <td>
              <v-btn class="mr-3" @click="getProduct(product.id)" color="orange"
                >Xem</v-btn
              >
              <v-btn @click="toggleModal(product.id)" color="red">Xóa</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table> </main
    ><teleport to="body"
      ><Modal
        :toggleModal
        :isShowModal
        :getAllProduct
        :id="currentId"
        v-if="isShowModal"
      />
      <Form v-if="isShowForm" :products :toggleForm :getAllProduct />
    </teleport>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Modal from "../components/Modal.vue";
import Form from "../components/Form.vue";
const products = ref([]);
const isShowModal = ref(false);
const currentId = ref(0);
const isShowForm = ref(false);

const addProduct = () => {};
const getAllProduct = async () => {
  const res = await fetch("http://localhost:8080/products");
  const data = await res.json();
  products.value = [...data];
};

const toggleModal = (id) => {
  isShowModal.value = !isShowModal.value;
  currentId.value = id;
};

const toggleForm = () => {
  isShowForm.value = !isShowForm.value;
};

const getProduct = async (id) => {
  const res = await fetch(`http://localhost:8080/products/${id}`);
  const data = await res.json();
  if (data) {
    console.log(data);
  } else {
    console.log("not found");
  }
};

onMounted(() => {
  getAllProduct();
});
</script>
<style></style>
