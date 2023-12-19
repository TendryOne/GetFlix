<template>
    <div class="Loader">
        <h1 v-for="n in 18"></h1>
    </div>
</template>

<script lang="ts" setup>



</script>

<style scoped>
.Loader {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: #141414;

}

.Loader h1 {
    width: 250px;
    min-height: 250px;
    background-color: rgba(0, 0, 0, 0.295);
    margin: 30px;
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

@keyframes load {
    0% {
        opacity: 1;
    }

    25% {
        opacity: 0.3;
    }

    50% {
        opacity: 1;
    }

    75% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }
}
</style>