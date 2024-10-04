<template>
  <div class="text-center">
    <div class="flex p-3 justify-center gap-3">
      <router-link
        class="px-4 py-2"
        :class="{ active: $route.name === 'B8Dashboard' }"
        to="/B8/B8Dashboard"
        >Home</router-link
      >
      <router-link
        class="px-4 py-2"
        :class="{ active: $route.name === 'B8Account' }"
        to="/B8/B8Account"
        >Product</router-link
      >
      <router-link
        class="px-4 py-2"
        :class="{ active: $route.name === 'B8Product' }"
        to="/B8/B8Product"
        >Detail</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
.active {
  background-color: blue;
  color: #fff;
  font-weight: 700;
}
</style>
