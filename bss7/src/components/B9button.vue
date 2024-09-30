<template>
  <button
    :type="type"
    @click="handleClick"
    class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-[5px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

// Định nghĩa props
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
});
const emit = defineEmits(["click"]);
const handleClick = () => {
  emit("click");
};
</script>
