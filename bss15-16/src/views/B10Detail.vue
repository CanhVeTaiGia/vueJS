<template>
  <div>
    <div>
      <h1>Thông tin nhân viên</h1>
      <p>ID nhân viên: {{ $route.params.id }}</p>
      <nav class="flex gap-3">
        <v-btn
          color="blue
        "
          ><router-link :to="'/B10/' + $route.params.id + '/B10Profile'"
            >Thông tin cá nhân</router-link
          ></v-btn
        >

        <v-btn color="blue"
          ><router-link :to="'/B10/' + $route.params.id + '/B10Projects'"
            >Dự án</router-link
          ></v-btn
        >

        <v-btn color="blue"
          ><router-link :to="'/B10/' + $route.params.id + '/B10Contact'"
            >Liên hệ</router-link
          ></v-btn
        >
      </nav>

      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>
