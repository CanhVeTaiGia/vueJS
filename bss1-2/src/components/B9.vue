<template>
  <div class="container mt-[10px] mx-auto">
    <h2 class="text-[32px]">Bài 9</h2>
    <table
      class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md"
    >
      <thead class="bg-gray-200 text-gray-600">
        <tr>
          <th class="py-2 px-4 border-b">STT</th>
          <th class="py-2 px-4 border-b">Họ và tên</th>
          <th class="py-2 px-4 border-b">Ngày sinh</th>
          <th class="py-2 px-4 border-b">Giới tính</th>
          <th class="py-2 px-4 border-b">Địa chỉ</th>
          <th class="py-2 px-4 border-b">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(person, index) in people"
          :key="person.id"
          class="text-center"
        >
          <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
          <td class="py-2 px-4 border-b">{{ person.name }}</td>
          <td class="py-2 px-4 border-b">{{ person.birthDate }}</td>
          <td class="py-2 px-4 border-b">{{ person.gender }}</td>
          <td class="py-2 px-4 border-b">{{ person.address }}</td>
          <td class="py-2 px-4 border-b">
            <button
              class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              Sửa
            </button>
            <button
              class="bg-red-500 text-white px-4 py-1 ml-2 rounded hover:bg-red-600"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const people = ref([
  {
    id: 1,
    name: "Malcolm Lockyer",
    birthDate: "21/03/1961",
    gender: "Nam",
    address: "New York",
  },
  {
    id: 2,
    name: "Maria",
    birthDate: "11/02/1990",
    gender: "Nữ",
    address: "London",
  },
]);
</script>

<style lang=""></style>
