<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 7</h2>
        <form @submit="handleSubmit" class="p-[20px]">
            <input type="text">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script setup>
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submission prevented!');
        
    }
</script>
<style>
    
</style>