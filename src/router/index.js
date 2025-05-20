import { createRouter, createWebHistory } from 'vue-router';
import SplashPage from '@/views/SplashPage.vue';
const routes = [
    {
        path: '/',
        name: 'SplashPage',
        component: SplashPage,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('@/views/Portfolio.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
