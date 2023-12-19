import type { RouteRecordRaw } from "vue-router";

export const ADMIN_ROUTES : RouteRecordRaw[]  =
[
    {
        path : '',
        redirect : '/admin/welcome'
    },

    {
        path : 'post',
        component : ()=> import('@/components/Admin/Admin Form/AdminForm.vue')
    },
    {
        path : 'management',
        component : ()=> import('@/components/Admin/Admin Mangement/AdminManagement.vue')
    },
    {
        
        path : 'edit/:FilmId',
        name : 'edit',
        component : ()=> import('@/components/Admin/Admin Form/AdminForm.vue')
    },
    {
        path : 'addEpisode/:filmName',
        name :'add',
        component: ()=> import('@/components/Admin/Admin Mangement/AdminEpisodeManagement.vue')
    },
    {
        path : 'EpisodePost/:filmAdd',
        name : 'postadd',
        component: ()=> import('@/components/Admin/Admin Form/AdminEpisodeForm.vue')
    },
    {
        path : 'welcome',
        component : ()=> import('@/components/Admin/Admin Mangement/AdminWelcome.vue') 
    }
] 
