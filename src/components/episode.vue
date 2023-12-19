<template>
    <div class="Episode">
        <episodeList :EP="EPS" v-for="EPS in EP" :key="EPS.name" />
    </div>
</template>


<script setup lang="ts">
import type { episodeInterface } from '@/interface/episode.interface';
import episodeList from './episodeList.vue';



defineProps<
    {
        EP: episodeInterface[]
    }>()
</script>



<style scoped>
.Episode {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>