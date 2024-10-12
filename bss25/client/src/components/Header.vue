<template>
  <header class="p-4">
    <h2 class="text-2xl font-bold pb-5 text-center">Quản lý sinh viên</h2>
    <form
      @submit.prevent="handleSubmit"
      class="p-4 border mb-4 shadow-md rounded"
    >
      <v-text-field
        class="mb-2"
        :rules="[(v) => !!v || 'Tên công việc không được để trống']"
        v-model="name"
        variant="outlined"
        label="Nhập tên công việc"
      ></v-text-field>
      <v-btn
        type="submit"
        width="100%"
        size="large"
        color="blue"
        variants="elevated"
      >
        Thêm công việc
      </v-btn>
    </form>
    <nav class="w-full flex p-4 rounded justify-center border gap-5">
      <v-btn
        v-for="btn in btns"
        :key="btn.text"
        @click="changeFilter(btn.text, btn.value)"
        :color="btn.status ? 'blue' : ''"
        :variant="btn.status ? 'elevated' : 'outlined'"
      >
        {{ btn.text }}
      </v-btn>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps(["isEdit", "inputValue", "addJob", "editJob"]);
const emit = defineEmits(["changeInputValue", "resetInp"]);

const name = ref(props.inputValue);

watch(
  () => props.inputValue,
  (newValue) => {
    name.value = newValue;
  }
);

const btns = ref([
  { text: "Tất cả", status: true, value: 0 },
  { text: "Hoàn thành", status: false, value: 1 },
  { text: "Đang thực hiện", status: false, value: 2 },
]);

const changeFilter = (text) => {
  btns.value = btns.value.map((btn) => ({
    ...btn,
    status: text === btn.text,
  }));
};

const handleSubmit = () => {
  if (props.isEdit) {
    props.editJob();
  } else {
    props.addJob();
  }
  emit("changeInputValue", name.value);
};
</script>

<style scoped></style>
