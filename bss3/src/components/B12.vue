<template>
    <div class="mt-[10px] flex justify-center flex-col items-center text-center">
        <img :src="currentImage" alt="Random Image" class="w-[300px] h-[200px] mb-[10px]" />
        <button class="p-[10px] w-[130px] border border-black" @click="changeImage">Change Image</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const images = [
    'https://c4.wallpaperflare.com/wallpaper/639/840/966/fate-series-fate-grand-order-oda-nobunaga-fate-grand-order-fgo-artwork-hd-wallpaper-preview.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoWKBSFR9tZJRuYgPh5T4Qv5W4___POtQIg&s',
    'https://wallpapercave.com/wp/wp2539640.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QNipmpzYVDYxfqZF75KvEStVqITFPs4dVw&s'
];

const currentImage = ref(images[0]);

const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    currentImage.value = images[randomIndex];
}
</script>

<style>

</style>
