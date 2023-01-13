import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('@/components/2.views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: import('@/components/2.views/About.vue'),
    },
    // {
    //   path: "/login",
    //   name: "Login",
    //   component: Login,
    //   beforeEnter(to, from, next) {
    //     const loggedIn = localStorage.getItem("vue-training-username");
    //     if (loggedIn) {
    //       next({ path: "/" });
    //     } else {
    //       next();
    //     }
    //   },
    // },
    // {
    //   path: "/dashboard",
    //   component: Dashboard,
    //   beforeEnter(to, from, next) {
    //     const loggedIn = localStorage.getItem("vue-training-username");
    //     if (!loggedIn) {
    //       next({ path: "/login" });
    //     } else {
    //       next();
    //     }
    //   },
    //   children: [
    //     {
    //       path: "",
    //       name: "Default",
    //       component: Default,
    //     },
    //     {
    //       path: "article/:article_id",
    //       name: "Article",
    //       component: Article,
    //     },
    //     {
    //       path: "create",
    //       name: "Create",
    //       component: Create,
    //     },
    //   ],
    // },
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
