<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 4</h2>
        <input type="range" v-model="progress"/>
        <p>{{ progress }} %</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const progress = ref('');
</script>
<style>
    
</style>