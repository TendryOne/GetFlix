<template>
  <div class="caroussel">

    <div class="container" :class="{ overflow: search }">
      <carousselList @show="emit('show', $event)" @addToFavoris="emit('addToFavoris', $event)"
        v-for="caroussels in caroussel" :caroussel="caroussels" :key="caroussels._id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { carousselInterface } from "@/interface/caroussel.interface";
import { state } from "@/shared/film";
import carousselList from "./carousselList.vue";

defineProps<{
  caroussel: carousselInterface[];
  search: string
}>();
const emit = defineEmits<{
  (e: "show", Id: string): void;
  (e: "retire", Id: string): void;
  (e: 'addToFavoris', Id: string): void
}>();






</script>

<style scoped>
.caroussel {

  background-color: #141414;
  min-height: 20vh;
}

.container {
  /* margin-top: 50px; */
  flex-wrap: wrap;
  display: flex;
}

.overflow {
  min-height: 40vh;
  align-items: center;

}
</style>
