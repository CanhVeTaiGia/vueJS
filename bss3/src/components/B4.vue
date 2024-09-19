<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 4</h2>
        <div class="w-[200px] p-[10px]" :class="[bg, { active: isActive }]">Block</div>
    </div>
</template>
<script setup>
    const bg = 'bg-[blue]'
    const isActive = true;
</script>
<style>
    .active{
        color: #fff;
    }
</style>