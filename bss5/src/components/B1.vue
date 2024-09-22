<template>
    <div>
        <h2 class="text-[32px]">Bài 1</h2>
        <button class="border border-[black]" @click="handleClick">hiện</button>
        <p v-show="check">rikkei academy</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const check = ref(false)
const handleClick = ()=>{
    check.value = true
}
</script>
<style>
    
</style>