<template>
    <div class="mt-[10px]">
        <button @click="$emit('delete', id)" class="border border-[#888]">Xóa</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const id = ref(1);
const emit = defineEmits('delete')
</script>
<style>
    
</style>