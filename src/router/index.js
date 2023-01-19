import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/3.sections/dashboard/Default.vue'),
    },
    {
      path: '/exercise/1',
      component: () => import('@/components/2.views/ExerciseOne.vue'),
    },
    {
      path: '/exercise/2',
      component: () => import('@/components/2.views/ExerciseTwo.vue'),
    },
  ],
});

export default router;
