<template>
  <v-form @submit="" class="border rounded w-96 m-2 p-3">
    <h2 class="text-center p-4 text-3xl mb-3 font-bold">Đăng ký</h2>
    <v-text-field
      label="Email"
      placeholder="Nhập email vào đây"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      label="Mật khẩu"
      clearable
      placeholder="Nhập mật khẩu vào đây"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      label="Nhập lại mật khẩu"
      clearable
      placeholder="Nhập lại mật khẩu vào đây"
      variant="outlined"
    ></v-text-field>
    <v-btn width="100%" color="blue">Đăng kí</v-btn>
    <span class="p-4 flex gap-1 justify-center">
      <p class="font-thin">Đã có tài khoản</p>
      <RouterLink to="/B11Login" class="cursor-pointer font-bold"
        >Đăng nhập</RouterLink
      >
    </span>
  </v-form>
</template>
<script setup>
import { reactive } from "vue";
const users = reactive(JSON.parse(localStorage.getItem("users")));
const user = reactive({
  email: "",
  password: "",
});
const repassword = ref("");

const handleSignup = () => {
  // if(email)
  const newUser = { ...user, id: Math.floor(Math.random() * 1000000) };
};
</script>
<style></style>
