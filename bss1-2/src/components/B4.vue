<script setup>
const number = 10;
const sum = number + number;
const sub = number - number;
const mul = number * number;
const div = number / number;

</script>

<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 4</h2>
        <div>
            <h2 class="text-[24px]">
            </h2>
            <ul>
                <li>{{ number }} + {{ number }} = {{ sum }}</li>
                <li>{{ number }} - {{ number }} = {{ sub }}</li>
                <li>{{ number }} * {{ number }} = {{ mul }}</li>
                <li>{{ number }} / {{ number }} = {{ div }}</li>
            </ul>
        </div>
    </div>
</template>

<style></style>