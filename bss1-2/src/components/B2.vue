<template>
    <div>
        <h1 class="text-[32px]">Bài 2</h1>
        <div class="main-bt2">
            <div class="first square">Box</div>
            <div class="second square">Box</div>
            <div class="square third">Box</div>
        </div>

    </div>
</template>
<script>
</script>
<style>
.main-bt2 {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.square {
    width: 200px;
    height: 200px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.first {
    background-color: red;
}

.second {
    background-color: blue;
}

.third {
    background-color: green;
}
</style>