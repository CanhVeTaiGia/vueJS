<template>
  <div class="mt-2">
    <h2 class="text-3xl">Bài 8</h2>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">Trang chủ</v-tab>
        <v-tab value="two">Giới thiệu</v-tab>
        <v-tab value="three">Liên hệ</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one"> Trang chủ </v-tabs-window-item>
          <v-tabs-window-item value="two"> Giới thiệu </v-tabs-window-item>
          <v-tabs-window-item value="three"> Liên hệ </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const tab = ref(null);
</script>
<style></style>
