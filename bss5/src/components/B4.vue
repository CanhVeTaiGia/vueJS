<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 4</h2>
        <button class="border w-[40px] mr-[10px] border-black" @click="handleClick1">hiện</button>
        <button class="border w-[40px] border-black" @click="handleClick2">ẩn</button>
        <p v-show="check">welcome to ...</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const check = ref(false) 
    const handleClick1 = ()=>{
        check.value = true
    }
    const handleClick2 = ()=>{
        check.value = false
    }
</script>

<style scoped>

</style>