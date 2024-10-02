<template>
  <div class="mt-5 w-full">
    <BookItem
      v-for="book in books"
      :key="book.id"
      :book="book"
      @edit="openEditForm(book)"
      @delete="deleteBook(book)"
      @statusChange="updateStatus"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import BookItem from "./BookItem.vue";

const props = defineProps({
  books: Array,
});

const emit = defineEmits(["edit", "delete", "statusChange"]);

const openEditForm = (book) => {
  emit("edit", book);
};

const deleteBook = (book) => {
  emit("delete", book);
};

const updateStatus = (status) => {
  emit("statusChange", status);
};
</script>

<style scoped></style>
