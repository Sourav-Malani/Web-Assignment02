import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Ensure you have this Vuetify plugin

// Importing your Vue components
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';
import UserForm from './components/UserForm.vue';
import LicenseActivation from './components/LicenseActivation.vue';
import UserActivation from './components/UserActivation.vue';
import LicenseManagementDashboard from './components/LicenseManagementDashboard.vue';
import LicenseForm from './components/LicenseForm.vue';

// Define routes
const routes = [
  { path: '/', component: ProductList },
  { path: '/products', component: ProductList },
  { path: '/products/add', component: ProductForm },
  { path: '/users/add', component: UserForm },
  { path: '/licenses/activate', component: LicenseActivation },
  { path: '/users/activate', component: UserActivation },
  { path: '/licenses/dashboard', component: LicenseManagementDashboard },
  { path: '/licenses/add', component: LicenseForm },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the root instance
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
