<template>
    <div class="Admin">

        <div v-if="route.path !== '/admin/welcome'" class="Admin-Link">

            <router-link to="/admin/post"><i class="fa-regular fa-folder-open"></i> Admin post</router-link>
            <router-link to="/admin/management"><i class="fa-solid fa-bars-progress"></i> Admin Management
            </router-link>

        </div>
        <div>
            <router-view v-slot="{ Component, route }">
                <component :is="Component" :key="route.fullPath" />
            </router-view>
        </div>
    </div>



</template>
<script setup lang="ts">
import AdminForm from '@/components/Admin/Admin Form/AdminForm.vue'
import { routes } from '@/routes/routes';
import { useRoute } from 'vue-router';

const route = useRoute()


</script>
<style scoped>
.Admin {

    display: flex;
    padding: 80px;

    flex-direction: row;
    min-height: calc(100vh - 160px);
    color: white;
}

.Admin a {
    color: black;
    text-decoration: none;
    margin: 10px;



}

.Admin-Link {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.308);
    align-items: flex-start;
    padding: 20px;
    background-color: white;
}
</style>