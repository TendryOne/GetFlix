<template>
    <div class="f">
        <Autoplay @unadd-to-favoris="UnaddToFavoris" @add-to-favoris="AddToFavoris" :caroussel="state.caroussel"
            :favoritebtn="state.favoritebtn" :search="state.search" :Unfavoritebtn="state.Unfavoritebtn" />
        <Affichage v-if="state.message" class="affiche" @unadd-to-favoris="UnaddToFavoris"
            @add-to-favoris="AddToFavoris" @retire="retire" :message="state.message" :affichage="state.Affichage"
            :favoritebtn="state.favoritebtn" :favoris="state.favoris" />
        <Caroussel class="caroussel" @show="show" :caroussel="search" @add-to-favoris="AddToFavoris"
            :search="state.search" />

    </div>
</template>
<script setup lang="ts">
import { search } from '@/shared/film';
import Autoplay from '../autoplay.vue';
import Affichage from '../affichage.vue';
import Caroussel from '../caroussel.vue';

import { AddToFavoris, retire, show, state, UnaddToFavoris } from '@/shared/film';

state
retire
show
AddToFavoris
UnaddToFavoris

const caroussel = await (await fetch('https://restapi.fr/api/getfilm')).json()
if (Array.isArray(caroussel)) {
    state.caroussel = caroussel
}
else {
    state.caroussel = [caroussel]
}
console.log(state.caroussel)

</script>
<style scoped>
.f {
    min-height: 100vh;
    background-color: #141414;
}
</style>