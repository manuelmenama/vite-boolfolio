import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/Home.vue';
import Contacts from './pages/Home.vue';
import Error404 from './pages/Error404.vue';
 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
});

export {router};