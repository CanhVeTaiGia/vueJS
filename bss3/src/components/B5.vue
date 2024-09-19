<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 5</h2>
        <button class="p-[10px] border border-[black]" @click="handleClick">Nhấn tôi</button>
    </div>
</template>
<script setup>
    const handleClick = () => {
        console.log('clicked');
        
    }
</script>
<style>
    
</style>