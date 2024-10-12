<template>
  <main class="p-4 pb-0 flex flex-col gap-4">
    <div
      v-for="(job, i) in filteredJobs"
      class="rounded shadow border items-center py-2 px-5 flex justify-between"
    >
      <div class="flex gap-4 items-center">
        <v-checkbox-btn
          color="primary"
          @change="handleChangeStatus(job)"
          v-model="job.status"
        ></v-checkbox-btn>
        <p :class="job.status ? 'line-through' : ''">{{ job.name }}</p>
      </div>
      <div class="flex items-center gap-5">
        <v-icon
          class="cursor-pointer"
          color="orange"
          size="small"
          icon="fa-solid fa-pen"
        ></v-icon>
        <v-icon
          class="cursor-pointer"
          color="red"
          size="small"
          icon="fa-solid fa-trash"
        ></v-icon>
      </div>
    </div>
  </main>
</template>
<script setup>
import axios from "axios";

const props = defineProps(["filteredJobs", "getAllJob"]);

const handleChangeStatus = async (job) => {
  try {
    const res = await axios.patch(`http://localhost:8080/jobs/${job.id}`, {
      ...job,
      status: job.status,
    });
  } catch (err) {
    console.error(err);
  }
  console.log(job);
  props.getAllJob();
};
</script>
<style></style>
