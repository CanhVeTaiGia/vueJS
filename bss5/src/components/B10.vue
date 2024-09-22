<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 10</h2>
        <p>{{arr}}</p>
        <button class="border border-black p-[5px]" @click="handleClick">Random Number</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const arr = ref([])
    const handleClick = ()=>{
        arr.value.push(Math.floor(Math.random()*10))
    }
</script>

<style scoped>

</style>