import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import Error404 from './pages/Error404.vue';
 
const router = createRouter({
  history: createWebHistory(),
  // linkExactActiveClass: 'active', per cambiuare nome della classe che deve rispondere al criterio del link active
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
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/project-detail/:slug',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
});

export {router};