import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/Default.vue'),
    },
    {
      path: '/exercise/1',
      component: () => import('@/components/ExerciseOne.vue'),
    },
  ],
});

export default router;
