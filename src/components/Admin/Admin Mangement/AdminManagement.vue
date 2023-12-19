<template>
    <div class="Admin-Management">

        <h2>Admin management</h2>

        <h1 v-if="error"> {{ error }}</h1>
        <h1 v-else-if="loading">Loading....</h1>
        <ul v-else>
            <li v-for="caroussels in caroussel">
                <div class="name">
                    <span>{{ caroussels.name }}</span>
                </div>
                <div class="Date">
                    <span>{{ new Date(caroussels.createdAt).toLocaleString('fr-FR', {
                            weekday: 'short',
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: 'numeric'
                        })
                    
                    }}</span>
                </div>
                <div class="certification">
                    <span style="color: #1dd1a1 ;" v-if="caroussels.Certified === 'Certified'">GetFlix <i
                            class='fa-solid fa-circle-check'></i></span>
                    <span style="color : #eb4d4b" v-else>GetFlix <i class="fa-solid fa-ban"></i></span>
                </div>
                <div class="button-content">
                    <router-link :to="{ name: 'add', params: { filmName: caroussels.name } }">
                        <button class="button-secondary">{{ caroussels.Type == 'Serie' ? 'Serie Management' :
                                'Film Management'
                        }}</button>

                    </router-link>
                    <router-link :to="{ name: 'postadd', params: { filmAdd: caroussels.name } }">
                        <button class="button-secondary">Ajouter episodes</button>
                    </router-link>

                    <router-link :to="{ name: 'edit', params: { FilmId: caroussels._id } }"><button
                            class="button-success">Modifier</button></router-link>
                    <button @click="tryToDelete(caroussels._id)" class="button-fail">Supprimer</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { state } from '@/shared/film';
import { deleteFetch, Getfetch, usefetch } from '@/shared/services';

const { caroussel, error, loading } = usefetch()
const date = new Date().toLocaleDateString
console.log(date)

function tryToDelete(id: string) {
    deleteFetch(id)

    caroussel.value = caroussel.value!.filter((c) => id !== c._id)
}


</script>


<style scoped>
.Admin-Management {
    min-width: 80vw;
    margin: 10px;
    color: black;
}


ul li {
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.384);
    margin: 10px;
    border-radius: 3px;

}

ul li span {
    flex: 1 0 0;
}

.gg {
    width: 55%;
    display: flex;
    justify-content: space-between;
}

.name {
    flex: 300px 0 0;
}

.Date {
    flex: 300px 0 0;
}

.certification {
    flex: 100px 0 0;
}

.button-content {
    flex: 1 1 0;
    display: flex;
    justify-content: flex-end;
}
</style>