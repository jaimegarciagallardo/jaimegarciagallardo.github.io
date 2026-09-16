import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "../components/inicio/Inicio.vue";
import Contacto from "../components/Contacto.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Inicio
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: Contacto
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router