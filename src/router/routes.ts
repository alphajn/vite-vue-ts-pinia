import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/pages/demo/Index.vue'),
    },
    {
        path: '/404/',
        component: () => import('@/pages/404.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404/',
    },
];

export default routes;
