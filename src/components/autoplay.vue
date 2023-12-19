<template>
    <div v-if="!faker">
        <h1 class="no-content">No content</h1>
    </div>


    <div class="autoplay" v-if="faker && !search">
        <div class="video-container" v-if="!state.ok">
            <iframe :src="`${autoplay}?controls=0&amp;start=5`" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>

            <div class="play">

                <button class="button-secondary"><i class="fa-solid fa-play"></i> Trailer </button>
                <button style="background-color:rgba(128, 128, 128, 0.363); color: white ;" class="button-secondary"><i
                        class="fa-solid fa-circle-info"></i>
                    Plus
                    d'Info</button>
                <i v-if="!state.favoris" @click="emit('addToFavoris', ID)" v-on:click="state.favoris = !state.favoris"
                    class="fa-solid fa-heart"></i>
                <i v-else @click="emit('UnaddToFavoris', ID)" v-on:click="state.favoris = !state.favoris"
                    class="fa-solid fa-thumbs-down"></i>
                <h1>{{ NameAffichage }}</h1>
                <div class="category">
                    <span v-for="categories in category">
                        {{ categories }}
                    </span>
                </div>
                <p>{{ descriptions }}</p>
            </div>
        </div>
        <div>


            <!------------------------------- version Mobile ---------------------------------------->


            <div v-if="state.ok" class="img-container" :style="{ backgroundImage: `url('${Image}')` }">
                <div class="play">
                    <h1>{{ NameAffichage }}</h1>
                    <div class="category">
                        <span v-for="categories in category">
                            {{ categories }}
                        </span>
                    </div>
                </div>
                <div class="buttonMobile">
                    <i class="fa-solid fa-heart"></i>
                    <button class="button-secondary"> <i class="fa-solid fa-play"></i> Trailer </button>
                    <i class="fa-solid fa-info"></i>
                </div>
            </div>
        </div>
    </div>
    <teleport to="body">
        <transition>
            <span v-if="favoritebtn" class="teleport">
                "{{ NameAffichage }}" a été ajouter à votre Favoris
            </span>

        </transition>
        <span v-if="Unfavoritebtn" class="teleport">
            "{{ NameAffichage }}" a été retirer de Vos Favoris
        </span>
    </teleport>
</template>




<script setup lang="ts">
import type { carousselInterface } from "@/interface/caroussel.interface";
import { computed, reactive } from "vue";
import { onMounted, onUnmounted, ref } from "vue";

const emit = defineEmits<
    {
        (e: 'addToFavoris', Id: string): void;
        (e: 'UnaddToFavoris', Id: string): void
    }>()

const favorite = ref<boolean>(false)


const props = defineProps<{
    caroussel: carousselInterface[];
    favoritebtn: boolean
    search: string
    Unfavoritebtn: boolean
}>();


// Declaration de l'affichage sur le heade en random
const faker =
    props.caroussel[Math.floor(Math.random() * props.caroussel.length)];

// declaration des variables utilisées


const ID = computed(() => {
    return faker._id;
});

const autoplay = computed(() => {
    return faker.trailer;
});
const descriptions = computed(() => {
    return faker.description;
});
const NameAffichage = computed(() => {
    return faker.name;
});
const Image = computed(() => {
    return faker.showroom;
});
const category = computed(() => {
    return faker.categories;
});






// declaration version mobile par l'intermediaire de resize beforeOnmoun et unmounted
const state = reactive<{
    ok: boolean
    mobile: boolean
    favoris: boolean
}>(
    {
        mobile: false,
        ok: false,
        favoris: false
    }
)
// Initialisation de la partie mobile


// Evenement resize permettant la partie Mobile
const resize = () => {
    if (window.innerWidth <= 576) {
        state.ok = true
    }
    else {
        state.ok = false
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
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


.teleport {
    right: 15px;
    bottom: 15px;
    position: fixed;
    color: black;
    background-color: white;
    padding: 15px;
    border-radius: 3px;
    z-index: 9999;

}

.no-content {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100vh;
}

.fa-heart.active {
    color: red;
}

.fa-info {
    border-radius: 50%;
    border: 3px solid black;
    padding: 15px;
}

.category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
}

.category span {
    position: relative;
    margin: 10px;
}

.category span::before {
    content: '♦';
    position: absolute;
    left: -15px;
}

.category span::after {
    content: '♦';
    position: absolute;
    right: -15px;
    top: 0;
}



.video-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 70vh;
    overflow: hidden;
}

.button-secondary {
    cursor: pointer;
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    background-color: white;
    color: black;
    border-radius: 3px;
    margin: 30px;
    font-size: larger;
    border: none;
}

.button-secondary::before {
    top: 0;
    left: 0;
    content: '';
    background-color: black;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    width: 0%;
    height: 100%;
    transition: 0.2s;
}

.button-secondary:hover:before {
    color: white;
    width: 100%;
}

.button-secondary:hover {
    color: white;
}

iframe {
    width: 100%;
    height: 150vh;
}

.autoplay {
    position: relative;
    /* overflow: hidden; */
}

.play {
    color: white;
    position: absolute;
    flex-direction: column;
    bottom: 50px;
    left: 0;
    width: 30%;
    margin: 10px;
}

.play p {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.autoplay::before {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(13, 9, 1);
    background: linear-gradient(0deg, rgba(13, 9, 1, 0.6783088235294117) 19%, rgba(5, 19, 19, 0.16010154061624648) 100%);
    transition: 0.2s;
}

.autoplay:hover::before {
    opacity: 0;
    display: none;
}

.img-container {
    background-position: center;
    ;
    background-size: cover;
    width: 100%;
    height: 500px;
}

.fa-heart {
    cursor: pointer;
    background-color: white;
    color: black;
    padding: 15px;
    border: none;
    border-radius: 50%;
    transition: 0.2s;
}

.fa-heart:hover {
    color: red;
    background-color: white;
}

.fa-thumbs-down {
    cursor: pointer;
    background-color: white;
    color: black;
    padding: 15px;
    border: none;
    border-radius: 50%;
    transition: 0.2s;
}

.fa-thumbs-down:hover {
    color: red;
    background-color: white;
}

@media (max-width : 576px) {
    .play {

        align-items: center;
        justify-content: center;
        display: flex;
        bottom: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        margin: 0;
    }

    .buttonMobile {
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        margin-bottom: 100px;
        width: 100%;
        height: 95%;
    }

    .fa-info {
        cursor: pointer;
        border: 3px solid white;
        color: white;
        font-weight: bold;
        padding: 15px;
        border-radius: 50%;
        transition: 0.2s;
    }

    .fa-info:hover {
        color: red;
    }

    .fa-heart {
        cursor: pointer;
        background-color: white;
        color: black;
        padding: 15px;
        border: 1px solid black;
        border-radius: 50%;
        transition: 0.2s;
    }

    .fa-heart:hover {
        color: red;
        background-color: white;
    }

    .autoplay::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: rgb(13, 9, 1);
        background: linear-gradient(0deg, rgba(13, 9, 1, 0.6783088235294117) 19%, rgba(5, 19, 19, 0.16010154061624648) 100%);
    }

    .autoplay:hover:before {
        display: block;
        opacity: 0.5;
    }

    .button-secondary {
        padding: 10px 20px;
        background-color: white;
        color: black;
        border: 1px solid black;
        border-radius: 3px;
        margin: 0;
    }

    .category {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
    }

    .category span {
        position: relative;
        margin: 10px;
    }

    .category span::before {
        content: '♦';
        position: absolute;
        left: -15px;
    }

    .category span::after {
        content: '♦';
        position: absolute;
        right: -15px;
        top: 0;
    }
}

@media (max-width: 1500px) {

    .play {
        width: 50%;
    }

}

@media (max-width: 870px) {

    .play {
        width: 100%;
    }

}
</style>
