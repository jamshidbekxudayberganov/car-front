import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/components/Entering.vue')
    },
    {
        path: "/category",
        component: () => import('@/components/Category.vue')
    },
    {
        path: "/cards",
        component: () => import('@/components/Cars_Cards.vue')
    },
    {
        path: "/inside",
        component: () => import('@/components/Abaut_Car.vue')
    }
]
export default createRouter({
    history: createWebHistory(),
    routes
})