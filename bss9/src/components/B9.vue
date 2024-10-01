<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 9</h2>
    <form
      class="w-[300px] flex flex-col items-center p-[10px] border border-[#888]"
      @submit="handleSubmit"
    >
      <h2 class="text-center text-[24px]">Đăng ký tài khoản</h2>
      <div class="w-[100%] flex flex-col">
        <label>Họ và tên</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.fullname"
        />
        <p class="text-[14px] text-[#f00]" v-if="warning.fullname">Tên không được để trống</p>
      </div>
      <div class="w-[100%] flex flex-col">
        <label>Email</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.email"
        />
        <p class="text-[14px] text-[#f00]" v-if="warning.email">Email không được để trống</p>
        <p class="text-[14px] text-[#f00]" v-if="warning.sameEmail">Email không được trùng</p>
      </div>
      <div class="w-[100%] flex flex-col">
        <label>Mật khẩu</label>
        <input
          type="password"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.password"
        />
        <p class="text-[14px] text-[#f00]" v-if="warning.password">Mật khẩu không được để trống</p>
      </div>
      <div class="w-[100%] flex flex-col">
        <label>Số điện thoại</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.phonenumber"
        />
        <p class="text-[14px] text-[#f00]" v-if="warning.phonenumber">Số điện thoại không được để trống</p>
      </div>
      <button
        class="mt-[10px] bg-[#08f] w-[100%] py-[5px] text-white rounded-[5px]"
        type="submit"
      >
        Đăng ký
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const warning = reactive({
  fullname: false,
  email: false,
  sameEmail: false,
  password: false,
  phonenumber: false,
});

const user = reactive({
  fullname: "",
  email: "",
  password: "",
  phonenumber: "",
});

const users = reactive(JSON.parse(localStorage.getItem("users") || "[]"));

const resetInput = () => {
  user.fullname = "";
  user.email = "";
  user.password = "";
  user.phonenumber = "";
};

const handleSubmit = (e) => {
  e.preventDefault();

  warning.fullname = user.fullname === "";
  warning.email = user.email === "";
  warning.password = user.password === "";
  warning.phonenumber = user.phonenumber === "";

  if (
    warning.fullname ||
    warning.email ||
    warning.password ||
    warning.phonenumber
  ) {
    return;
  }

  const found = users.findIndex((item) => item.email === user.email);
  if (found !== -1) {
    warning.sameEmail = true;
    return;
  }

  users.push({ ...user });
  localStorage.setItem("users", JSON.stringify(users));
  resetInput();
  alert("Đăng ký thành công");
};
</script>

<style></style>
