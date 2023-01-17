import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/exercise/1',
      component: () => import('@/components/ExerciseOne.vue'),
    },
    {
      path: '/exercise/1/solution',
      component: () => import('@/components/ExerciseOne_solution.vue'),
    },
  ],
});

export default router;
