<template>
  <div
    class="w-full h-screen flex justify-center items-center absolute top-0 left-0 bg-[#0000002c]"
  >
    <v-form @submit.prevent="submitForm" class="bg-white w-2/5 p-5 rounded">
      <div>
        <h2 class="text-2xl mb-3"> <slot name="header"></slot> Sản Phẩm </h2>
      </div>
      <v-text-field
        class="mb-3"
        :rules="[(v) => !!v || 'Tên không được để trống']"
        v-model="student.name"
        label="Tên sản phẩm"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        class="mb-3"
        :rules="[
          (v) => !!v || 'Tên không được để trống',
          (v) => validateEmail(v) || 'Email không đúng định dạng',
        ]"
        v-model="student.email"
        label="Email"
        variant="outlined"
      ></v-text-field>
      <v-textarea
        class="mb-3"
        v-model="student.address"
        :rules="[(v) => !!v || 'Địa chỉ không được để trống']"
        no-resize
        row-height="15"
        rows="2"
        label="Địa chỉ"
        variant="outlined"
      ></v-textarea>
      <v-text-field
        class="mb-3"
        v-model="student.phone"
        :rules="[(v) => !!v || 'Số điện thoại không được để trống']"
        shaped
        label="Số điện thoại"
        type="number"
        variant="outlined"
      ></v-text-field>
      <span class="flex gap-4">
        <v-btn type="submit" variants="elevated" color="blue">
          <slot name="button"></slot>
        </v-btn>
        <v-btn @click="hideForm" variants="elevated" color="gray"> Hủy </v-btn>
      </span>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const props = defineProps(["toggleForm", "student", "isEdit"]);
const validateEmail = (email) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailPattern.test(email)) {
    return true;
  }
  return false;
};
const student = ref(
  props.isEdit
    ? { ...props.student, phone: props.student.phone.split("+84")[1] }
    : {
        name: "",
        email: "",
        address: "",
        phone: "",
        status: false,
      }
);

console.log(props.student);

const hideForm = () => {
  props.toggleForm(false);
  student.value = {
    name: "",
    email: "",
    address: "",
    phone: "",
    status: false,
  };
};

const submitForm = () => {
  if (props.isEdit) {
    editStudent();
  } else {
    addStudent();
  }
};

const addStudent = async () => {
  console.log("add");
  if (
    !student.value.name ||
    !student.value.email ||
    !student.value.address ||
    !student.value.phone
  ) {
    return;
  }
  const newStudent = {
    ...student,
    phone: `+84${student.phone}`,
  };
  const res = await axios.post("http://localhost:8080/students", newStudent);
  console.log("Thêm sinh viên thành công:", res.data);
  hideForm();
};
const editStudent = async () => {
  console.log("edit");
  if (
    !student.value.name ||
    !student.value.email ||
    !student.value.address ||
    !student.value.phone
  ) {
    return;
  }
  const newStudent = {
    ...student,
    phone: `+84${student.phone}`,
  };
  const res = await axios.put(
    `http://localhost:8080/students/${student.value.id}`,
    newStudent
  );
  console.log("Cập nhật sinh viên thành công:", res.data);
  console.log(newStudent);
  hideForm();
};
</script>

<style></style>
