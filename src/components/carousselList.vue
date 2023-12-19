<template>

  <div @click="emit('show', caroussel._id)" class="caroussel">
    <div class="img-container" :style="{ backgroundImage: `url('${caroussel.image}')` }">>

    </div>

  </div>


</template>

<script setup lang="ts">

import type { carousselInterface } from "@/interface/caroussel.interface";
import { reactive, ref } from "vue";
defineProps<{

  caroussel: carousselInterface;

}>();
const bool = ref<boolean>(false)

const emit = defineEmits<{
  (e: "show", Id: string): void;
  (e: "retire", Id: string): void;
  (e: 'addToFavoris', Id: string): void

}>();



</script>

<style scoped>
.caroussel {
  transition: 0.2s;
  margin: 10px;
}

.caroussel:hover {
  transform: scale(1.05);
}

.img-container {
  display: flex;
  align-items: flex-end;
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 250px;
  width: 250px;
}

h2.active {
  color: red
}

@media (max-width : 576px) {
  .img-container {
    width: 150px;
  }


}
</style>
