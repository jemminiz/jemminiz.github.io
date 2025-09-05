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

export default router;