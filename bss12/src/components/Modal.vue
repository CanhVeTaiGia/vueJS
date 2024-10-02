<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    @click="cancelDelete"
  >
    <div class="bg-white p-5 rounded-lg shadow-lg text-center" @click.stop>
      <p>Bạn có chắc chắn muốn xóa thông tin này?</p>
      <div class="flex justify-around mt-5">
        <button
          @click="confirmDelete"
          class="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
          >Xóa</button
        >
        <button
          @click="cancelDelete"
          class="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
          >Hủy</button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["confirm", "cancel"]);

const confirmDelete = () => {
  emit("confirm");
};

const cancelDelete = () => {
  emit("cancel");
};
</script>

<style scoped></style>
