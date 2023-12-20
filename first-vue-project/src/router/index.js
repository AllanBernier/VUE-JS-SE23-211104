import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path : '/task',
        component: () => import('@/components/exercices/TP/TaskList.vue'),
    },
    {
        path : '/',
        component: () => import('@/pages/Home.vue')
    },
    {
        path : '/404',
        component: () => import('@/pages/E404.vue')
    },
    {
        path : '/task/:id',
        component: () => import('@/pages/TaskShow.vue')
    },
    {
        path: '/:pathMatch(.*)*', redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router