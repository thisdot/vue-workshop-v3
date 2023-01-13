import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/2.views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/2.views/About.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/2.views/Login.vue'),
      beforeEnter(to, from, next) {
        const loggedIn = localStorage.getItem('vue-training-username');
        if (loggedIn) {
          next({ path: '/' });
        } else {
          next();
        }
      },
    },
    {
      path: '/dashboard',
      component: import('@/components/2.views/Dashboard.vue'),
      beforeEnter(to, from, next) {
        const loggedIn = localStorage.getItem('vue-training-username');
        if (!loggedIn) {
          next({ path: '/login' });
        } else {
          next();
        }
      },
      children: [
        {
          path: '',
          name: 'Default',
          component: import('@/components/3.sections/dashboard/Default.vue'),
        },
        {
          path: 'article/:article_id',
          name: 'Article',
          component: import('@/components/3.sections/dashboard/Article.vue'),
        },
        {
          path: 'create',
          name: 'Create',
          component: import('@/components/3.sections/dashboard/Create.vue'),
        },
      ],
    },
    // {
    //   path: "/exercise/1",
    //   component: ExerciseOne,
    // },
    // {
    //   path: "/exercise/2",
    //   component: ExerciseTwo,
    // },
  ],
});

export default router;
