



<template>
    <teleport to="body">
        <transition>
            <div v-if="message && !state.Mobile" class="calc over" @click.stop="emit('retire', affichage._id)">
                <div class="affichageList" @click.stop>

                    <div>
                        <div class="image">
                            <div @click="emit('retire', affichage._id)" class="remove">X</div>
                            <iframe width="1000px" height='500px' v-if="trailer"
                                :src="`${affichage.trailer}?controls=0&amp;start=5`" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <div v-if="!trailer" class="img-container"
                                :style="{ backgroundImage: `url('${affichage.showroom}')` }">
                                <h1 class="faker">{{ affichage.name }}</h1>

                            </div>
                            <div class="button-container">
                                <button class="button-primary">Play</button>
                                <button class="button-primary" @click="trailer = !trailer">{{ !trailer ? 'voir trailer'
                                        :
                                        'Voir Couverture'
                                }}</button>
                                <i v-if="!ok" v-on:click="ok = !ok" @click="emit('addToFavoris', affichage._id)"
                                    :class="{ active: favoritebtn }" class="fa-solid fa-heart"></i>
                                <i v-else @click="emit('UnaddToFavoris', affichage._id)" v-on:click="ok = !ok"
                                    :class="{ active: favoritebtn }" class="fa-solid fa-thumbs-down"></i>
                            </div>
                        </div>
                        <div class="description">

                            <div class="category">
                                <h4>Genres :</h4>
                                <div v-for="category in affichage.categories">
                                    {{ category }} |
                                </div>
                            </div>
                            <div class="des">
                                <h2 style="color :white">Description :</h2>
                                <p>{{ affichage.description }}</p>
                            </div>
                        </div>


                    </div>


                    <div class="episodeContainer">
                        <episode :EP="state.EP" />
                    </div>


                </div>
            </div>
        </transition>

        <!-------------------------------------- Mobile version --------------------------------->
        <div v-if="message && state.Mobile" class="calc over" @click.stop="emit('retire', affichage._id)">

            <div v-if="state.open" class="affichageListMobile" @click.stop>
                <div class="des-img-container">
                    <div @click="emit('retire', affichage._id)" class="remove">X</div>
                    <div v-if="!trailer" class="img-containerMobile"
                        :style="{ backgroundImage: `url('${affichage.image}')` }">


                    </div>
                    <div class="des">
                        <h2 class="faker">{{ affichage.name }}</h2>
                        <p>{{ affichage.description }}</p>
                    </div>
                </div>
                <div class="button-container">
                    <i class="fa-solid fa-heart"></i>
                    <span @click="state.open = !state.open"> Voir plus d'info et
                        episodes <i class="fa-solid fa-chevron-down"></i> </span>
                </div>

            </div>
            <div @click.stop class="affichageEpisode" v-else>
                <div @click="emit('retire', affichage._id)" class="remove">X</div>

                <iframe :src="`${affichage.trailer}?controls=0&amp;start=5`" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <div>
                    <h1>{{ affichage.name }}</h1>
                    <div class="category">
                        <h4>Genres :</h4>
                        <div v-for="category in affichage.categories">
                            {{ category }} -
                        </div>
                    </div>
                    <h4>Description : </h4>
                    <p>{{ affichage.description }}</p>
                </div>
                <div class="episodeContainer">
                    <episode :EP="state.EP" />
                </div>


            </div>






        </div>



    </teleport>
</template>



<script setup lang="ts">
import type { carousselInterface } from '@/interface/caroussel.interface';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import Episode from './episode.vue';
import type { episodeInterface } from '@/interface/episode.interface'
import episodes from '@/data/episode.data'
const trailer = ref<boolean>(false)
const ok = ref<boolean>(false)


const state = reactive<{
    EP: episodeInterface[]
    Mobile: boolean
    open: boolean
}>({
    EP: episodes,
    Mobile: false,
    open: true
})


defineProps<{
    favoritebtn: boolean
    affichage: carousselInterface
    message: boolean
}>()


const emit = defineEmits<
    {
        (e: 'retire', Id: string): void
        (e: 'addToFavoris', Id: string): void
        (e: 'UnaddToFavoris', Id: string): void
    }>();


// Evenement resize permettant la partie Mobile
const resize = () => {
    if (window.innerWidth <= 576) {
        state.Mobile = true

    }
    else {
        state.Mobile = false
    }
}



onMounted(() => {
    resize()
    window.addEventListener("resize", resize);

});

onUnmounted(() => {
    window.removeEventListener("resize", resize);
});


</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(30px);
    opacity: 0;
}








.fa-heart.active {
    color: red
}

.remove {
    cursor: pointer;
    position: absolute;
    z-index: 9999999;
    top: -5px;
    right: 10px;
    font-size: 35px;
    color: white;
    margin: 10px;
}

.category {
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.category div {
    margin: 0 3px;
}

.category h4 {
    margin: 0 3px
}

.description {
    margin: 12px;
}

.description .remove {

    cursor: pointer;
    position: absolute;
    z-index: 9999999;
    top: -5px;
    right: 10px;
    font-size: 50px;
    color: white;
    margin: 10px;

}

.fa-solid {
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 15px;
    border: 1px solid black;
    border-radius: 50%;
    transition: 0.2s;
}

.fa-solid:hover {
    color: red;
    background-color: white;
}





p {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
}

.faker {
    margin: 10px;
    position: relative;
    z-index: 3;
}

.image {
    position: relative;

}

.button-container {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;

}

button {
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid black;
    padding: 10px;
    background-color: rgba(240, 248, 255, 0.158);
    border-radius: 0.5rem;
}


h1 {
    color: white;
}

p {
    color: white;
}

.calc {

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.534);
    width: 100%;
    min-height: 100vh;
    z-index: 99;

}


.img-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 2s;
}



.affichageList {
    overflow: hidden;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    background-color: #141414;
    width: 60%;
    min-height: 100vh;
    margin: 10px;
    border-radius: 10px;
}

.over {
    overflow: auto;
}

.img-container::before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgb(13, 9, 1);
    background: linear-gradient(0deg, rgba(13, 9, 1, 0.6783088235294117) 19%, rgba(5, 19, 19, 0.16010154061624648) 100%);
    display: block;
    position: absolute;
    transition: 2s;
}



.episodeContainer {
    display: flex;
    align-items: center;
    justify-content: center;
}



::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
}

::-webkit-scrollbar-corner {
    background-color: transparent;
}

.noScroll::-webkit-scrollbar-track {
    visibility: hidden;
}

iframe {
    width: 100%;
}

@media(max-width : 1200px) {
    .remove {

        cursor: pointer;
        position: absolute;
        z-index: 9999999;
        top: -5px;
        right: 10px;
        font-size: 25px;
        color: white;
        margin: 10px;


    }

    .img-container {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        flex-direction: column;
        width: 100%;
        height: 400px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: 2s;
    }



    .affichageList {
        overflow: hidden;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        background-color: #141414;
        width: 70%;
        min-height: 90vh;
        margin: 10px;
        border-radius: 10px;

    }



    .img-container::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgb(13, 9, 1);
        background: linear-gradient(0deg, rgba(13, 9, 1, 0.6783088235294117) 19%, rgba(5, 19, 19, 0.16010154061624648) 100%);
        display: block;
        position: absolute;
        transition: 2s;
    }

    iframe {
        width: 100%;
        height: 400px;
    }
}

@media (max-width: 992px) {

    .remove {

        cursor: pointer;
        position: absolute;
        z-index: 9999999;
        top: -5px;
        right: 10px;
        font-size: 25px;
        color: white;
        margin: 10px;


    }

    .img-container {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        flex-direction: column;
        width: 100%;
        height: 350px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: 2s;
    }

    .affichageList {
        overflow: hidden;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        background-color: #141414;
        width: 80%;
        min-height: 90vh;
        margin: 10px;
        border-radius: 10px;

    }



    .img-container::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgb(13, 9, 1);
        background: linear-gradient(0deg, rgba(13, 9, 1, 0.6783088235294117) 19%, rgba(5, 19, 19, 0.16010154061624648) 100%);
        display: block;
        position: absolute;
        transition: 2s;
    }

    iframe {
        width: 100%;
        height: 350px;
    }

}


@media (max-width : 768px) {
    .remove {

        cursor: pointer;
        position: absolute;
        z-index: 9999999;
        top: -5px;
        right: 10px;
        font-size: 50px;
        color: white;
        margin: 10px;

    }

    .fa-solid {
        cursor: pointer;
        background-color: black;
        color: white;
        padding: 15px;
        border: 1px solid black;
        border-radius: 50%;
        transition: 0.2s;
    }

    .fa-solid:hover {
        color: red;
        background-color: white;
    }





    p {
        display: flex;
        flex-wrap: wrap;
        margin: 10px;
    }

    .faker {
        margin: 10px;
        position: relative;
        z-index: 3;
    }

    .image {
        position: relative;

    }

    .button-container {
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px;

    }

    button {
        cursor: pointer;
        margin-bottom: 10px;
        border: 1px solid black;
        padding: 10px;
        background-color: rgba(240, 248, 255, 0.158);
        border-radius: 0.5rem;
    }


    h1 {
        color: white;
    }

    p {
        color: white;
    }

    .calc {

        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.534);
        width: 100%;
        min-height: 100vh;
        z-index: 3;

    }


    .img-container {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        flex-direction: column;
        width: 100%;
        height: 350px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: 2s;
    }

    .affichageList {
        overflow: hidden;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        background-color: #141414;
        width: 90%;
        min-height: 90vh;
        margin: 10px;
        border-radius: 10px;

    }

    .over {
        overflow: auto;
    }

    .img-container::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgb(13, 9, 1);
        background: linear-gradient(0deg, rgba(13, 9, 1, 0.6783088235294117) 19%, rgba(5, 19, 19, 0.16010154061624648) 100%);
        display: block;
        position: absolute;
        transition: 2s;
    }



    .episodeContainer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    iframe {
        width: 100%;
        height: 350px;
    }

}


@media (max-width : 576px) {

    .affichageListMobile {

        z-index: 2;
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        background-color: #141414;
        width: 100%;
        height: 250px;
        border-radius: 10px;
    }

    .des-img-container {
        display: flex;
        align-items: flex-start;
    }

    .img-containerMobile {

        flex: 80px 0;
        width: 80px;
        height: 100px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .des {
        flex: 1 1 0;
    }

    .des p {
        font-size: 13px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
    }

    .button-container {

        border-top: 1px solid rgba(105, 105, 105, 0.466);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin: 0;
        padding: 10px 0;
    }

    .button-container span {
        color: white;
        cursor: pointer;
    }

    .faker {
        margin: 10px;
        position: relative;
        z-index: 3;
        color: white;
    }

    .remove {
        z-index: 999;
        font-size: 10px;
        border: 1px solid black;
        background-color: black;
        border-radius: 50%;
        padding: 5px;
    }

    .affichageEpisode {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #141414;
        width: 100%;
        min-height: 100%;
        border-radius: 15px;
    }

    iframe {
        width: 100%;
        height: 200px;

    }

    .category {
        color: white;
        display: flex;
        flex-direction: row;
    }

    .category div {
        margin: 0 3px;
    }

    .category h4 {
        margin: 0 3px
    }
}
</style>