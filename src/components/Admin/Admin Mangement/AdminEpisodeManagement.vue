<template>
    <div class="Admin-Episode-Management">
        <!-- <select @change="UpdateFilter">
            <option value="0"> No Filter</option>
            <option value="1">saison 1</option>
            <option value="2">saison 2</option>
            <option value="3">saison 3</option>
        </select> -->
        <h1>Admin Episode Management </h1>
        <EpisodeAdminList v-for="episode in episodez" :episode='episode' />
    </div>
</template>


<script setup lang="ts">
import { GetEpisode, usefetchEpisode, usefetch } from '@/shared/services';
import { reactive, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { state } from '@/shared/film';
import type { episodeInterface } from '@/interface/episode.interface';
import EpisodeAdminList from './episodeAdminList.vue';


const { caroussel, error, loading } = usefetch()

const route = useRoute()


function UpdateFilter(e: Event): void {
    const ex = e.target as HTMLSelectElement
    state.season = ex.value

}


const episodez = ref<episodeInterface[] | null>(null)

const car = await usefetchEpisode(route.params.filmName as string)
if (Array.isArray(car)) [
    episodez.value = car
]
else {
    episodez.value = [car]
}

// watchEffect(async () => {


// })



// console.log(route.params.filmName)
// if (route.params.filmName) {
//     episode.value = await GetEpisode(route.params.filmName as string)
//     console.log(episode.value)
// }

// const initialValues = {
//     name: episode.value ? episode.value.name : 0,
//     desc: episode.value ? episode.value.desc : '',
//     duration: episode.value ? episode.value.duration : '',
//     video: episode.value ? episode.value.video : '',


// }


</script>



<style scoped>
.Admin-Episode-Management {
    color: black
}

ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

li {
    width: 300px;
    border: 1px solid white;
    margin: 10px;
    min-height: 100px;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.desc {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>