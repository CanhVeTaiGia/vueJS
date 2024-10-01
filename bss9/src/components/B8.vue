<template>
  <div class="mt-[10px]">
    <h2 class="text-[32px]">Bài 8</h2>
    <form
      class="w-[300px] flex flex-col items-center p-[10px] border border-[#888]"
      @submit="handleSubmit"
    >
      <h2 class="text-center text-[24px]">Thêm mới tài khoản</h2>
      <div class="w-[100%] flex flex-col"
        ><label>Họ và tên</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.fullname"
      /></div>
      <div class="w-[100%] flex flex-col"
        ><label>Email</label>
        <input
          type="text"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.email"
      /></div>
      <div class="w-[100%] flex flex-col"
        ><label>Mật khẩu</label>
        <input
          type="password"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.password"
      /></div>
      <div class="w-[100%] flex flex-col"
        ><label>Nhập lại mật khẩu</label>
        <input
          type="password"
          class="border border-[#888] outline-none rounded-[5px] py-[5px] pl-[5px]"
          v-model="user.repassword"
      /></div>
      <button
        class="mt-[10px] bg-[#08f] p-[10px] text-white rounded-[5px]"
        type="submit"
        >Đăng ký</button
      >
    </form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const user = reactive({
  fullname: "",
  email: "",
  password: "",
  repassword: "",
});
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user);
};
</script>
<style></style>
