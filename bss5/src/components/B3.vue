<template>
    <div class="mt-[10px]">
        <h2 class="text-[32px]">Bài 3</h2>
        <ul>
            <li v-if="role === 'user'">quyền của bạn là: user</li>
            <li v-else-if="role === 'admin'">quyền của bạn là: admin</li>
            <li v-else>quyền của bạn là: guest</li>
        </ul>
    </div>
</template>

<script setup>
    const role = 'user'
</script>

<style scoped>

</style>