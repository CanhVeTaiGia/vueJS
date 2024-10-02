<template>
  <div class="p-5 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto">
    <h1 class="text-center text-2xl text-gray-800 mb-5"
      >Quản lý mượn trả sách</h1
    >
    <button
      @click="openAddForm"
      class="w-full py-2 bg-green-500 text-white rounded-lg text-lg transition duration-300 hover:bg-green-600"
    >
      Thêm thông tin
    </button>

    <BookForm
      v-if="isFormVisible"
      @save="handleSave"
      @close="closeForm"
      :editData="currentEditData"
    />

    <BookList
      :books="books"
      @delete="openDeleteModal"
      @edit="openEditForm"
      @statusChange="handleStatusChange"
    />

    <Modal
      v-if="isDeleteModalVisible"
      @confirm="confirmDelete"
      @cancel="closeDeleteModal"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BookList from "./components/BookList.vue";
import BookForm from "./components/BookForm.vue";
import Modal from "./components/Modal.vue";

const books = ref(JSON.parse(localStorage.getItem("books")) || []);
const isFormVisible = ref(false);
const isDeleteModalVisible = ref(false);
const currentEditData = ref(null);
const bookToDelete = ref(null);

const openAddForm = () => {
  currentEditData.value = null;
  isFormVisible.value = true;
};

const openEditForm = (book) => {
  currentEditData.value = book;
  isFormVisible.value = true;
};

const handleSave = (book) => {
  if (currentEditData.value) {
    const index = books.value.findIndex((item) => item.id === book.id);
    books.value.splice(index, 1, book);
  } else {
    book.id = Date.now();
    books.value.push(book);
  }
  localStorage.setItem("books", JSON.stringify(books.value));
  isFormVisible.value = false;
};

const handleStatusChange = (bookId, status) => {
  const book = books.value.find((item) => item.id === bookId);
  if (book) {
    book.status = status;
    localStorage.setItem("books", JSON.stringify(books.value));
  }
};

const openDeleteModal = (book) => {
  bookToDelete.value = book;
  isDeleteModalVisible.value = true;
};

const confirmDelete = () => {
  books.value = books.value.filter((book) => book.id !== bookToDelete.value.id);
  localStorage.setItem("books", JSON.stringify(books.value));
  closeDeleteModal();
};

const closeDeleteModal = () => {
  isDeleteModalVisible.value = false;
};

const closeForm = () => {
  isFormVisible.value = false;
};
</script>

<style scoped></style>
