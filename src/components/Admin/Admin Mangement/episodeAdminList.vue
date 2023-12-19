<template>


    <div class="episode-container" v-if="episode.season === '1'">
        {{ episode.Episode }}
        f
    </div>
    <div v-if="episode.season === '2'">
        f
    </div>



</template>


<script setup lang="ts">
import type { episodeInterface } from '@/interface/episode.interface';


defineProps<
    {
        episode: episodeInterface
    }>()


</script>


<style scoped>
.episode-container {
    display: flex;
}

.episode-container .ep-content {
    width: 300px;
    min-height: 200px;
    border: 1px solid black;
    margin: 10px;
}
</style>