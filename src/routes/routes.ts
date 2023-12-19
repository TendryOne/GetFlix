import type { RouteRecordRaw } from "vue-router";
import { ADMIN_ROUTES } from "./Admin.routes";


export const routes : RouteRecordRaw[] =  [
    {
            path : '/',
            redirect : '/Accueil'
    },
    {
        path : '/Accueil',
        component : ()=> import('@/components/views/Accueil.vue')
    },
    {
        path : '/Admin',
        component : ()=> import('@/components/views/Admin.vue'),
        children : ADMIN_ROUTES
            
    },
    {
        path : '/favoris',
        component : ()=> import ('@/components/views/favoris.vue')
    }
]