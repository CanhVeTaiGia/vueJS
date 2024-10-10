<template>
  <div class="w-full pt-10 justify-center flex">
    <div class="rounded w-3/4">
      <header class="p-5 rounded-t bg-slate-600 flex justify-between">
        <h2 class="text-white text-3xl">Quản lý sinh viên</h2>
        <v-btn @click="toggleForm(false)" color="green" variants="flat">
          <v-icon class="mr-2" icon="fa-solid fa-circle-plus"> </v-icon>
          <p>Thêm mới sinh viên</p>
        </v-btn>
      </header>
      <main class="py-5 px-10 border rounded-b">
        <v-table>
          <thead>
            <tr>
              <th><v-checkbox color="blue"></v-checkbox></th>
              <th class="text-xl">Tên sinh viên</th>
              <th class="text-xl">Email</th>
              <th class="text-xl">Địa chỉ</th>
              <th class="text-xl">Số điện thoại</th>
              <th class="text-xl">Lựa chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students">
              <td><v-checkbox color="blue"></v-checkbox></td>
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.address }}</td>
              <td>{{ student.phone }}</td>
              <td>
                <v-icon
                  @click="toggleForm(true)"
                  class="cursor-pointer mr-8"
                  size="large"
                  color="orange"
                  icon="fa-solid fa-pen"
                >
                </v-icon>
                <v-icon
                  class="cursor-pointer"
                  size="large"
                  color="red"
                  icon="fa-solid fa-trash"
                >
                </v-icon>
              </td>
              <teleport to="body">
                <Form :isEdit :student :toggle-form v-if="isShowForm">
                  <template #header>
                    <span>{{ isEdit ? "Sửa" : "Thêm" }}</span>
                  </template>
                  <template #button>
                    <span>{{ isEdit ? "Sửa" : "Thêm" }}</span>
                  </template>
                </Form>
              </teleport>
            </tr>
          </tbody>
        </v-table>
      </main>
      <footer class="p-5"></footer>
    </div>
  </div>
</template>
<script setup>
import Form from "./components/Form.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
const students = ref([]);
const isShowForm = ref(false);
const isEdit = ref(false);
const getAllStudent = async () => {
  const res = await axios.get("http://localhost:8080/students");
  if (res.data) students.value = res.data;
  else {
    console.log("Không có dữ liệu");
  }
};

const toggleForm = (is) => {
  isShowForm.value = !isShowForm.value;
  isEdit.value = is;
};

onMounted(() => {
  getAllStudent();
});
</script>
<style></style>
