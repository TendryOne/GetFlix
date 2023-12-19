<template>
    <div class="notif">
        <transition-group name="list" tag="NotifList">
            <NotifList v-for="notifCaroussels in notifCaroussel" :key="notifCaroussels._id"
                :notifCaroussel="notifCaroussels" @notif-eraser="emit('notifEraser', $event)" />
        </transition-group>
        <div @click="emit('notifEraserAll')" class="X" v-on:click="">
            X
        </div>
    </div>
</template>


<script setup lang="ts">
import type { carousselInterface } from "@/interface/caroussel.interface";
import NotifList from "./notifList.vue";

defineProps<{
    notifCaroussel: carousselInterface[]
}>()

const emit = defineEmits<{
    (e: 'notifEraser', Id: string): void
    (e: 'notifEraserAll'): void
}>()

</script>


<style scoped>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

.notif {
    position: absolute;
    top: 50px;
    right: 12%;
    background-color: #1414147c;
    min-height: 100px;
    min-width: 500px;
    padding: 10px;
    border-radius: 3px;
}

.X {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.836);
    border-radius: 50%;
    padding: 15px;
}
</style>