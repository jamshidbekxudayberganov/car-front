import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/components/Entering.vue')
    },
    {
        path: "/category",
        component: () => import('@/components/Category.vue')
    }
]
export default createRouter({
    history: createWebHistory(),
    routes
})