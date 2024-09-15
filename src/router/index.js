import { createRouter, createWebHistory } from 'vue-router';
import CotizacionesView from '../views/CotizacionesView.vue';

const routes = [
  // Otras rutas...
  {
    path: '/cotizaciones',
    name: 'Cotizaciones',
    component: CotizacionesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
