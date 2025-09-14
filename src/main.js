import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css';
import router from './routes/routes.js';
import store from './store';
const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');
