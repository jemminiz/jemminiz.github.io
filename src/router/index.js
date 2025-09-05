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
    {
        path: '/resume',
        name: 'Resume',
        component: () => import('@/views/Resume.vue'),
        meta: { title: 'Resume' },
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.afterEach((to) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = 'Portfolio';
    }
});
export default router;
