import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import SignIn from '../components/SignIn.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
