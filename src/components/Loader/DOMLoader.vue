<template>
    <div class="Loader">
        <h1>G</h1>
        <h1>E</h1>
        <h1>T</h1>
        <h1>F</h1>
        <h1>L</h1>
        <h1>I</h1>
        <h1>X</h1>
    </div>
</template>

<script lang="ts" setup>





</script>

<style scoped>
.Loader {
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;

}

.Loader h1:nth-child(1) {
    animation: load 1s infinite;
}

.Loader h1:nth-child(2) {
    animation: load 1s 0.1s infinite;
}

.Loader h1:nth-child(3) {
    animation: load 1s 0.2s infinite;
}

.Loader h1:nth-child(4) {
    animation: load 1s 0.3s infinite;
}

.Loader h1:nth-child(5) {
    animation: load 1s 0.4s infinite;
}

.Loader h1:nth-child(6) {
    animation: load 1s 0.5s infinite;
}

.Loader h1:nth-child(7) {
    animation: load 1s 0.6s infinite;
}

.Loader h1:nth-child(8) {
    animation: load 1s 0.7s infinite;
}

.Loader h1:nth-child(9) {
    animation: load 1s 0.8s infinite;
}

.Loader h1:nth-child(10) {
    animation: load 1s 0.9s infinite;
}

@keyframes load {
    0% {
        font-size: 32px;
    }

    25% {
        font-size: 16px;
    }

    50% {
        font-size: 32px;
    }

    75% {
        font-size: 16px;
    }

    100% {
        font-size: 32px;
    }
}
</style>