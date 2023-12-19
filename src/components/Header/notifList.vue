<template>
    <div class="notifList">
        <div class="img-container" :style="{ backgroundImage: `url('${notifCaroussel.image}')` }">

        </div>
        <div class="notifM">
            <h1>{{ notifCaroussel.name }}</h1>

            <span>a été ajouté dans vos favoris</span>

        </div>
        <div class="x" @click="emit('notifEraser', notifCaroussel._id)"> x </div>
    </div>
</template>


<script setup lang="ts">
import type { carousselInterface } from '@/interface/caroussel.interface';

defineProps<{
    notifCaroussel: carousselInterface
}>()

const emit = defineEmits<{
    (e: 'notifEraser', Id: string): void
}>()



</script>


<style scoped>
.notifList {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.39);
    padding: 10px;
    border-radius: 3px;
}

.img-container {
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.notifM {
    margin: 10px;
}

.x {
    position: absolute;
    top: 10%;
    right: 3%;
    font-size: 20px;
}
</style>