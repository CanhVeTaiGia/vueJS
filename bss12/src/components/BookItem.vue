<template>
    <div class="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4 bg-gray-100 hover:bg-gray-200 transition-colors">
      <div class="flex-2">
        <p class="font-bold text-lg">{{ book.name }}</p>
        <p class="text-gray-600 text-sm mt-1">{{ book.borrowDate }} - {{ book.returnDate }}</p>
      </div>
      <div class="flex-1 flex items-center space-x-2">
        <select id="status" v-model="status" @change="updateStatus" 
          :class="statusClass"
          class="px-2 py-1 border rounded-md w-full">
          <option value="borrowed">Chưa trả</option>
          <option value="returned">Đã trả</option>
        </select>
      </div>
      <div class="flex-1 flex justify-between space-x-4">
        <button @click="editBook" class="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">Sửa</button>
        <button @click="deleteBook" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">Xóa</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    book: Object
  });
  const emit = defineEmits(['edit', 'delete', 'statusChange']);
  
  const status = ref(props.book.status);
  
  const editBook = () => {
    emit('edit');
  };
  
  const deleteBook = () => {
    emit('delete');
  };
  
  const updateStatus = () => {
    emit('statusChange', status.value);
  };
  
  const statusClass = computed(() => {
    return status.value === 'borrowed' ? 'bg-red-500 text-white' : 'bg-green-500 text-white';
  });
  </script>
  