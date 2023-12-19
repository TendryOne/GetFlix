<template>

    <div>
        <h1 style="color: white ;">{{ favoris.name }}</h1>

    </div>


</template>


<script setup lang="ts">
import type { carousselInterface } from '@/interface/caroussel.interface';


defineProps<{
    favoris: carousselInterface
}>()

</script>



<style scoped>
</style>