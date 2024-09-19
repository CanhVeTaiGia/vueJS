<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Exercise 011</h2>
        <div class="w-[200px] h-[100px]" :class="{ 'bg-red': !isBlue, 'bg-blue': isBlue }"></div>
        <button class="p-[10px] border border-black mt-[10px]" @click="toggleBackground">Change Background</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isBlue = ref(false);

const toggleBackground = () => {
    isBlue.value = !isBlue.value;
}
</script>

<style>
.bg-red {
    background-color: red;
}

.bg-blue {
    background-color: blue;
}
</style>
