import { createRouter, createWebHistory } from 'vue-router';

import marsRover from '../views/marsRover.vue';
import curiosityRover from '../views/curiosityRover.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
/*       // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue') , */
    },
    {
      path: '/perseverance',
      name: 'perseverance',
      component: marsRover,
    },
    {
      path: '/curiosity',
      name: 'curiosity',
      component: curiosityRover,
    },
  ],
});

export default router;
