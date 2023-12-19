<template>


    <div class="Header" :style="states.Scroll ? 'background-color : Black' : ''" v-if="!states.Mobile">
        <div class="Logo">
            <h1><i class="fa-solid fa-feather-pointed"></i> GETFLIX</h1>
            <ul>
                <li>
                    <router-link to="/Accueil"> Accueil </router-link>
                </li>
                <li>
                    <router-link to="/Admin"> Admin </router-link>
                </li>

            </ul>

        </div>

        <div class="Profil">

            <span
                v-if="route.path !== '/admin/post' && route.path !== '/admin/management' && route.path !== '/admin/welcome'"
                class="searchBox">
                <i @click.stop="states.search = !states.search" class="fa-solid fa-magnifying-glass"></i>
                <Transition> <input :value="state.search" @input="updateFilters" v-if="states.search" @click.stop
                        type="text" placeholder="Vous cherchez un film?...">
                </Transition>
            </span>

            <span>
                <i @click="state.notif = false" v-on:click="state.Notifblink = !state.Notifblink"
                    class="fa-solid fa-bell"></i>
                <i v-if="state.notif" class="fa-solid fa-circle"></i>

            </span>
            <span class="dropdown">Gestion de profil <i class="fa-solid fa-chevron-down"></i>
                <div class="dropdown-content">
                    <router-link to="/favoris">Mes Favoris <i class="fa-solid fa-bookmark"></i> </router-link>
                    <router-link to="/">Mon profil <i class="fa-solid fa-user"></i></router-link>
                    <router-link to="/">Se deconnecter <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </router-link>
                </div>

            </span>
        </div>
        <Notif v-if="state.Notifblink" :notifCaroussel="state.notifCaroussel" @notif-Eraser='notifEraser'
            @notif-eraser-all="notifEraserAll" />
    </div>

    <div class="MobileHeader" v-if="states.Mobile">

        <div class="Logo">
            <h1><i class="fa-solid fa-feather-pointed"></i>G</h1>
            <ul>
                <li>
                    <router-link to="/Accueil"> Accueil </router-link>
                </li>
                <li>
                    <router-link to="/Admin"> Admin </router-link>
                </li>
            </ul>
        </div>
        <div class="Profil">
            <span href="#"><i class="fa-solid fa-bell"></i></span>
            <span href="#"><i class="fa-solid fa-user"></i> <i class="fa-solid fa-chevron-down"></i>

            </span>
        </div>

    </div>



</template>



<script setup lang="ts">
import type { carousselInterface } from '@/interface/caroussel.interface';
import { notifEraser, notifEraserAll, search } from '@/shared/film';
import { state } from '@/shared/film';
import { onMounted, onUnmounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import Notif from './notif.vue';
const route = useRoute()

defineProps<{
    favoris: carousselInterface[]
}>()

const states = reactive<{
    search: boolean
    Mobile: boolean
    Scroll: boolean
    notifs: boolean
}>(
    {
        search: false,
        Mobile: false,
        Scroll: false,
        notifs: false
    }
)

const resize = () => {
    if (window.innerWidth < 576) {
        states.Mobile = true
    }
    else {
        states.Mobile = false
    }
}

const scroll = () => {
    if (window.scrollY > 10) {
        states.Scroll = true
    }
    else {
        states.Scroll = false
    }
}


onMounted(() => {
    resize()

    window.addEventListener("resize", resize);
    window.addEventListener('scroll', scroll)
});

onUnmounted(() => {
    window.removeEventListener("resize", resize);

});






function updateFilters(e: Event): void {
    if (e.target !== undefined) {
        const ev = e.target as HTMLInputElement
        state.search = ev.value
    }
}

</script>



<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {

    transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    position: absolute;
    transform: translateX(30px);
    opacity: 0;
}









.searchBox {
    position: relative;
}

.searchBox input {
    padding: 5px;
    border-radius: 3px;
    color: white;
    background-color: rgba(0, 0, 0, 0.158);
    border: 1px solid rgba(255, 255, 255, 0.123);
    width: auto;
}

.fa-bell.active {
    color: red;
}

.fa-chevron-down {
    transition: 0.2s;
}

.dropdown:hover .fa-chevron-down {
    transform: rotate(180deg);

}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: black;
    min-width: 200px;
    top: 60px;
    right: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;


}

.dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: white;
    color: black
}

.dropdown:hover .dropdown-content {
    display: block;
}



.black {
    background-color: black;
    color: black;
}

.Profil span {
    position: relative;
    padding: 40px;
}

.Profil span .fa-circle {
    top: 30%;
    right: 30%;
    font-size: 10px;
    position: absolute;
    color: red;
}

.Logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    display: flex;
    list-style: none;
}

.Logo a {
    text-decoration: none;
    color: white;
    transition: 0.2s;
}

li {
    position: relative;
    margin: 10px;
}

.Logo a::after {
    content: '';
    position: absolute;
    background-color: white;
    display: block;
    width: 0%;
    height: 2px;
    bottom: -10px;
    transition: 0.2s;
}

.Logo a:hover:after {
    width: 100%;
}

.Header {
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    background: linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent);
    z-index: 3;
    padding: 10px;
}

.fa-solid {
    color: white
}

.Logo ul li .router-link-exact-active::after {
    content: '';
    position: absolute;
    background-color: white;
    display: block;
    width: 100%;
    height: 2px;
    bottom: -10px;

}

.dropdown-content .router-link-exact-active::after {
    content: '';
    display: none;
}


@media (max-width : 576px) {
    .MobileHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
        position: fixed;
        background-color: black;
        top: 0;
        left: 0;
        width: 100%
    }

    .Logo {
        color: white;
    }

    .fa-feather-pointed {
        color: red;
    }

    .fa-chevron-down {
        font-size: 10px;
    }
}
</style>