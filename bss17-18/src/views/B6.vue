<template>
  <div>
    <nav class="w-full h-14 flex items-center gap-6">
      <RouterLink
        exact-active-class="bg-white"
        active-class="bg-red text-white"
        class="p-3"
        to="/b6"
        >Dashboard</RouterLink
      >
      <RouterLink
        active-class="bg-red p-3 text-white"
        class="text-black p-3"
        to="/b6/b6-user-manager"
        >User manager</RouterLink
      >
      <RouterLink
        active-class="bg-red text-white"
        class="text-black p-3"
        to="/b6/b6-product-manager"
        >Product manager</RouterLink
      >
      <RouterLink
        active-class="bg-red text-white"
        class="text-black p-3"
        to="/b6/b6-settings"
        >Settings</RouterLink
      >
    </nav>
    <RouterView />
  </div>
</template>
<script setup></script>
<style scoped></style>
