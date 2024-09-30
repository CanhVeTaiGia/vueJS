<template>
    <div class="mt-[10px]">
        <h2 class="text-[24px]">Bài 2</h2>
        <B2child :product="product"/>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import B2child from './B2child.vue'
const product = reactive({
    id: 1,
    name: "Bưởi Ba Roi",
    price: 12000,
    quantity: 10
})
</script>
<style>
    
</style>