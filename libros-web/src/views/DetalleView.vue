<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getLibro, type Libro } from '../services/api';

const route = useRoute();
const libro = ref<Libro | null>(null);
const cargando = ref(true);

onMounted(async () => {
  libro.value = await getLibro(Number(route.params.id));
  cargando.value = false;
});
</script>

<template>
  <h2>Detalle</h2>
  <p v-if="cargando">Cargando...</p>
  <p v-else-if="!libro" class="error">El libro no existe.</p>
  <dl v-else>
    <dt>Título</dt><dd>{{ libro.titulo }}</dd>
    <dt>Autor</dt><dd>{{ libro.autor }}</dd>
    <dt>Año</dt><dd>{{ libro.anio }}</dd>
    <dt>ID</dt><dd>{{ libro.id }}</dd>
  </dl>
  <RouterLink to="/">Volver al listado</RouterLink>
</template>
