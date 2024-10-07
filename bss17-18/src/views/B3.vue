<template>
  <div>
    <h2 class="text-[32px]">Bài 3</h2>
    <v-text-field
      max-width="200px"
      clearable
      label="Search"
      variant="outlined"
      v-model="value"
    />
    <p>{{ searchValue }}</p>
    <v-btn @click="search" variant="outlined"> Button </v-btn>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const value = ref("");
const router = useRouter();
const route = useRoute();

const search = () => {
  router.push({
    query: {
      search: value.value,
    },
  });
};

const searchValue = computed(() => {
  return route.query.search ? route.query.search : "";
});
</script>

<style scoped></style>
