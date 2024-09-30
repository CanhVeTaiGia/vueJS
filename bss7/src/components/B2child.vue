<template>
    <div>
        <ul>
            <li>Id: {{ product.id }}</li>
            <li>Name: {{ product.name }}</li>
            <li>Giá: {{ product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'}) }}</li>
            <li>Số lượng: {{ product.quantity }}</li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps(['product']);

</script>
<style>
    
</style>