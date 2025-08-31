import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../auth/LoginPage.vue';
import RegisterPage from '../auth/RegisterPage.vue';


const routes = [
  { path: '/', component:LoginPage },
  { path: '/register', component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
