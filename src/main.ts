import { createApp } from "vue";
import App from "./App.vue";
import { createRouter , createWebHistory } from "vue-router";
import "./assets/main.css";
import {routes} from '@/routes/routes'
const route = createRouter({
    history : createWebHistory(),
    routes,
    scrollBehavior(to , from )
    {
        return {
            top : 0
            
        }
    }
})



createApp(App).use(route).mount("#app");
