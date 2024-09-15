import { createRouter, createWebHistory } from 'vue-router';
import { useGlobalStore } from '@/stores/global'; // Импортируйте Pinia store
import HomePage from '@/pages/HomePage.vue';
import PostPage from '../pages/PostPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/hw3',
      name: 'hw3',
      component: () => import('../pages/hw3.vue'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useGlobalStore(); // Используйте Pinia store

  // Предполагается, что в authStore есть состояние isAuthenticated
  // if (to.name !== 'login' && !authStore.token) {
  //   next({ name: 'login' });
  // } else {
  //   next();
  // }
  next();
});

export default router
