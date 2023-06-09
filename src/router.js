import { createRouter, createWebHistory } from "vue-router"

import About from './views/About.vue'
import Home from './views/Home.vue'

const routeInfos = [
    {
        path : "/",
        component : Home,
    },
    {
        path : "/about",
        component : About,
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router
