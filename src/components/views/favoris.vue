<template>
    <div class='favoris-container'>
        <h1>Mes favoris</h1>
        <FavorisList v-for="favori in favoris" :favoris="favori" :key="favori._id" />
    </div>


</template>
<script setup lang="ts">
import { state } from '@/shared/film';
import FavorisList from './favorisList.vue';


const { favoris } = state


</script>
<style scoped>
.favoris-container {
    padding: 100px;
    min-height: 100vh;
    background-color: #141414;
    color: white;
}
</style>