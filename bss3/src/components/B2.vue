<template>
    <div class="mt-[10px]" v-bind:id="app" v-bind:data-v-app="d">
        <h2 class="text-[32px]">Bài 2</h2>
        <p v-bind:elementId="elementId" v-bind:elementClass="elementClass">Hello</p>
    </div>
</template>
<script setup>
    const elementId = 'header';
    const elementClass = 'elementClass'
    const app = 'app'
    const d = true
</script>
<style scoped>
    
</style>