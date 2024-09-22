<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 9</h2>
        <ul v-for="i in products" class="border-b">
            <li>Id: {{ i.id }}</li>
            <li>Title: {{ i.title }}</li>
            <li>Content: {{ i.content }}</li>
            <li>Author: {{ i.author }}</li>
        </ul>
    </div>
</template>
<script setup>
import { reactive } from 'vue';

const products = reactive(
    [
        {
            id: 1,
            title: "Tại sao lại phải học React",
            content: "Học React để đi làm",
            author: "David"
        },
        {
            id: 2,
            title: "Props trong React",
            content: "Props giúp đẩy dữ liệu từ con xuống cha",
            author: "Linda"
        },
        {
            id: 3,
            title: "State trong ReactJS là gì?",
            content: "State giúp lưu trữ trạng thái dữ liệu bên trong 1 components",
            author: "David"
        },
    ]
)
</script>
<style>
    
</style>