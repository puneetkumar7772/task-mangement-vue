import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../auth/LoginPage.vue';
import RegisterPage from '../auth/RegisterPage.vue';
import DefaultLayout from '../layouts/defaultLayout.vue';



const routes = [
  { path: '/', component:LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/dashboard', component: DefaultLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
