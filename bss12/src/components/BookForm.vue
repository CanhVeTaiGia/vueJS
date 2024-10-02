<template>
  <div class="fixed inset-0 flex justify-center items-center z-50">
    <form
      @submit.prevent="saveBook"
      class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
    >
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2"
          >Tên sách:</label
        >
        <input
          id="name"
          v-model="book.name"
          required
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="borrower" class="block text-gray-700 font-bold mb-2"
          >Tên người mượn:</label
        >
        <input
          id="borrower"
          v-model="book.borrower"
          required
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="borrowDate" class="block text-gray-700 font-bold mb-2"
          >Ngày mượn:</label
        >
        <input
          id="borrowDate"
          type="date"
          v-model="book.borrowDate"
          required
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="returnDate" class="block text-gray-700 font-bold mb-2"
          >Ngày trả:</label
        >
        <input
          id="returnDate"
          type="date"
          v-model="book.returnDate"
          required
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="flex justify-between mt-6">
        <button
          type="submit"
          class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >Lưu</button
        >
        <button
          type="button"
          @click="$emit('close')"
          class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >Hủy</button
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, watchEffect } from "vue";

const props = defineProps({
  book: Object,
});

const emit = defineEmits(["save", "close"]);

const book = reactive({
  name: "",
  borrower: "",
  borrowDate: "",
  returnDate: "",
  status: "borrowed",
});

watchEffect(() => {
  if (props.book) {
    Object.assign(book, props.book);
  }
});

const saveBook = () => {
  if (book.borrowDate <= book.returnDate) {
    emit("save", { ...book });
  } else {
    alert("Ngày mượn không thể lớn hơn ngày trả!");
  }
};
</script>
