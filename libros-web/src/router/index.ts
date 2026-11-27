import { createRouter, createWebHistory } from 'vue-router';
import ListaView from '../views/ListaView.vue';
import DetalleView from '../views/DetalleView.vue';
import NuevoView from '../views/NuevoView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'lista', component: ListaView },
    { path: '/libros/:id', name: 'detalle', component: DetalleView },
    { path: '/nuevo', name: 'nuevo', component: NuevoView },
  ],
});
