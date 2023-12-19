<template>
    <div class="Admin-Welcome">

        <h1>Bienvenue , Sur la page d'admin</h1>


        <img src="https://i.pinimg.com/originals/b9/49/c8/b949c86a570df07a7440abe39405834c.gif" />

        <h2>TendryOne</h2>
        <pre>Status : Online</pre>
        <div class="link"><i class="fa-solid fa-hand-point-right"></i>
            <router-link to="/admin/post"><i class="fa-regular fa-folder-open"></i> Admin post</router-link>
            <router-link to="/admin/management"><i class="fa-solid fa-bars-progress"></i> Admin Management
            </router-link>
            <i class="fa-solid fa-hand-point-left"></i>

        </div>
        <P style="color : gray">©TendryOne | all copyrights reserved to TendryOne</P>
    </div>
</template>


<script setup lang="ts">


</script>

<style scoped >
.fa-hand-point-right,
.fa-hand-point-left {
    font-size: 50px;
    margin: 0px 10px;
}


.Admin-Welcome {
    color: black;
    min-width: calc(100vw - 160px);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

}

.Admin-Welcome h1 {
    animation: animz 0.5s linear;
}

.Admin-Welcome a {
    animation: anim 0.5s 0.6s linear forwards;
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    margin: 10px;
    background-color: #a3c6d8;
    opacity: 0;
}

.Admin-Welcome .link {
    display: flex;
    justify-content: center;
    align-items: center;

}

.Admin-Welcome img {
    opacity: 0;
    animation: animg 0.5s 1s linear forwards;

}

@keyframes anim {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(0.5);
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes animz {
    0% {
        transform: translateX(-50%);
        opacity: 0;
    }

    50% {
        transform: translateX(50%);
        opacity: 0.5;
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes animg {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(0.5) rotateY(360deg);
        ;
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>