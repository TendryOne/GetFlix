<template>

    <div class="container" v-if="message">
        <affichageList :affichage="affichages" :message="message" v-for="affichages in affichage "
            @retire="emit('retire', $event)" @unaddToFavoris="emit('UnaddToFavoris', $event)"
            @addToFavoris='emit("addToFavoris", $event)' :key="affichages._id" :favoritebtn="favoritebtn" />
    </div>
</template>



<script setup lang="ts">
import type { carousselInterface } from '@/interface/caroussel.interface';
import affichageList from './affichageList.vue'

defineProps<{
    affichage: carousselInterface[]
    message: boolean
    favoritebtn: boolean
}>()

const emit = defineEmits<
    {
        (e: 'retire', Id: string): void,
        (e: 'addToFavoris', Id: string): void
        (e: 'UnaddToFavoris', Id: string): void
    }>()

</script>


<style scoped>
/* .container {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
} */
</style>