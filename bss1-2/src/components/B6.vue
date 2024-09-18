<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 6</h2>
        <p>Họ và tên: {{ formatName(user) }}</p>
    </div>
</template>
<script setup>
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam"
    };
    const formatName = (user) => {
        const fullName = user.firstName + ' ' + user.lastName
        return fullName
    }
</script>
<style>
    
</style>