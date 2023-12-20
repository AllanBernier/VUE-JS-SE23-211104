import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path : '/task',
        component: () => import('@/components/exercices/TP/TaskList.vue'),
    },

    {
        path : '/HelloWorld',
        component: () => import('@/components/exercices/01/HelloWorld.vue'),
    },

    {
        path : '/ClickComponent',
        component: () => import('@/components/exercices/02/ClickComponent.vue'),
    },
    {
        path : '/ReactiveVarsExercise',
        component: () => import('@/components/exercices/03/ReactiveVarsExercise.vue'),
    },
    {
        path : '/DataBinding',
        component: () => import('@/components/exercices/04/DataBinding.vue'),
    },
    {
        path : '/DirectiveOn',
        component: () => import('@/components/exercices/05/DirectiveOn.vue'),
    },
    {
        path : '/UserForm',
        component: () => import('@/components/exercices/06/UserForm.vue'),
    },
    {
        path : '/ConditionalScoreRendering',
        component: () => import('@/components/exercices/07/ConditionalScoreRendering.vue'),
    },
    {
        path : '/ToDoList',
        component: () => import('@/components/exercices/08/ToDoList.vue'),
    },
    {
        path : '/task',
        component: () => import('@/components/exercices/TP/TaskList.vue'),
    },

    {
        path : '/ComputedField',
        component: () => import('@/components/exercices/09/ComputedField.vue'),
    },
    {
        path : '/MyWatch',
        component: () => import('@/components/exercices/10/MyWatch.vue'),
    },

    {
        path : '/CustomRouter/:name',
        component: () => import('@/components/CustomRouter.vue'),
    },

    {
        path : '/StoreExemple',
        component: () => import('@/components/CounterUsingStore.vue'),
    },


    {
        path : '/TPStore',
        component: () => import('@/components/exercices/TPStore/TaskList.vue'),
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