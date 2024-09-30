<template>
  <div class="ml-[10px] w-[500px] border rounded-[5px] shadow-md">
    <h2 class="text-[24px] font-[600] p-[20px] border-b">
      <slot name="header"></slot>
    </h2>
    <p class="p-[20px] border-b">
      <slot name="body"></slot>
    </p>
    <button
      class="w-[120px] m-[20px] p-[10px] text-white rounded-[5px] bg-[#08f]"
    >
      <slot name="footer"></slot>
    </button>
  </div>
</template>
<script setup></script>
<style></style>
