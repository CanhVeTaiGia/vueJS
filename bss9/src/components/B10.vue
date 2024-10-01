<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 10</h2>
    <form
      @submit="handleSubmit"
      class="w-[300px] p-[10px] border border-[#888]"
    >
      <h2 class="text-center text-[24px]">Đăng ký tài khoản</h2>
      <div class="w-[100%] flex flex-col">
        <label>Email</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.email"
        />
        <p class="text-[14px] text-[#f00]" v-if="warning.email">
          Email không được để trống
        </p>
        <p class="text-[14px] text-[#f00]" v-if="warning.wrong">
          Email hoặc mật khẩu không đúng
        </p>
      </div>
      <div class="w-[100%] flex flex-col">
        <label>Mật khẩu</label>
        <input
          v-model="user.password"
          type="password"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
        />
        <p class="text-[14px] text-[#f00]" v-if="warning.password">
          Mật khẩu không được để trống
        </p>
      </div>
      <button
        type="submit"
        class="w-[100%] mt-[10px] rounded-[5px] text-white p-[5px] bg-[#08f]"
      >
        Đăng nhập
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const users = reactive(JSON.parse(localStorage.getItem("users")) || []);
const user = reactive({
  email: "",
  password: "",
});
const warning = reactive({
  email: false,
  password: false,
  wrong: false,
});

const handleSubmit = (e) => {
  e.preventDefault();

  warning.email = false;
  warning.password = false;
  warning.wrong = false;

  if (user.email === "") {
    warning.email = true;
  }
  if (user.password === "") {
    warning.password = true;
  }
  if (user.email === "" || user.password === "") {
    return;
  }

  const found = users.find((item) => item.email === user.email);

  if (found && found.password === user.password) {
    alert("Đăng nhập thành công");
  } else {
    warning.wrong = true;
  }
};
</script>

<style></style>
