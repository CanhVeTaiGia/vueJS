<template>
  <div class="text-center">
    <div class="flex p-3 justify-center gap-3">
      <router-link
        class="px-4 py-2"
        :class="{ active: $route.name === 'B7Home' }"
        to="/B7/B7Home"
        >Home</router-link
      >
      <router-link
        class="px-4 py-2"
        :class="{ active: $route.name === 'B7Product' }"
        to="/B7/B7Product"
        >Product</router-link
      >
      <router-link
        class="px-4 py-2"
        :class="{ active: $route.name === 'B7Detail' }"
        to="/B7/B7Detail"
        >Detail</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
.active {
  background-color: #08f;
  border-radius: 5px;
  color: white;
}
</style>
