import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      component: () => import('@/components/2.views/Dashboard.vue'),
      children: [
        {
          path: '/',
          component: () =>
            import('@/components/3.sections/dashboard/Default.vue'),
        },
      ],
    },
  ],
});

export default router;
