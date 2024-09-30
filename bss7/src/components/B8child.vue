<template>
  <div class="p-4 mt-4 bg-gray-100 rounded-md">
    <form @submit.prevent="addUser" class="space-y-4">
      <div>
        <label class="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          v-model="name"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          v-model="email"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium">Address</label>
        <input
          type="text"
          v-model="address"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div class="flex justify-between">
        <button
          type="submit"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
        <button
          @click="$emit('close')"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits("close");
const name = ref("");
const email = ref("");
const address = ref("");

const addUser = () => {
    
  console.log("New User:", {
    name: name.value,
    email: email.value,
    address: address.value,
  });
};
</script>

<style scoped></style>
