<template>
  <div class="flex w-full h-screen justify-center items-center">
    <div class="w-2/5 border rounded">
      <Header
        @resetInp="resetInput"
        @changeInputValue="handleChangeInput"
        :isEdit="isEdit"
        :inputValue="inputValue"
        :toggleIsEdit="toggleIsEdit"
        :addJob="addJob"
        :editJob="editJob"
        :getAllJob="getAllJob"
      />
      <Main :getAllJob="getAllJob" :filteredJobs="filteredJobs" />
      <Footer :getAllJob="getAllJob" />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const jobs = ref([]);
const filteredJobs = ref([]);
const isEdit = ref(false);
const inputValue = ref("");

const toggleIsEdit = (v) => {
  isEdit.value = v;
};

const resetInput = () => {
  inputValue.value = "";
};

const getAllJob = async () => {
  const res = await axios.get("http://localhost:8080/jobs");
  if (res.data) {
    jobs.value = res.data;
    filteredJobs.value = res.data;
  } else {
    console.warn("Không có dữ liệu");
  }
};

const editJob = () => {
  console.log("edit");
  const editJob = { name: name.value };
};

const addJob = () => {
  console.log("add");
  if (!inputValue.value) return console.log("Không được để trống");
  const newJob = {
    name: inputValue.value,
    status: false,
  };
  axios.post("http://localhost:8080/jobs", newJob).then((res) => {
    if (res.data) {
      jobs.value.push(res.data);
      filteredJobs.value.push(res.data);
      inputValue.value = "";
    } else {
      console.warn("Không có dữ liệu");
    }
  });
};

const handleChangeInput = (value) => {
  if (!value) return;
  inputValue.value = value;
  console.log("Giá trị input từ con: ", inputValue.value);
};

onMounted(() => {
  getAllJob();
});
</script>
