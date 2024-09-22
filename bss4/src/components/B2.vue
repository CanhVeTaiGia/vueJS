<template>
    <div class="mt-[10px]"> 
        <h2 class="text-[32px]">Bài 2</h2>
        <p>Company: {{ user.company }}</p>
        <p>Age: {{ user.age }}</p>
        <button @click="handleClick" class="p-[10px] border">Change data</button>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const user = reactive({
    company: 'Rikkei Academy',
    age: 2
});
const handleClick = () => {
    user.company = 'Rikkei Education';
    user.age = 1;
}
</script>
<style></style>