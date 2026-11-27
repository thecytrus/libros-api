<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getLibros, type Libro } from '../services/api';

const libros = ref<Libro[]>([]);
const cargando = ref(true);
const error = ref('');

onMounted(async () => {
  try {
    libros.value = await getLibros();
  } catch {
    error.value = 'No se pudo conectar con la API.';
  } finally {
    cargando.value = false;
  }
});
</script>

<template>
  <h2>Listado</h2>
  <p v-if="cargando">Cargando...</p>
  <p v-else-if="error" class="error">{{ error }}</p>
  <table v-else>
    <thead>
      <tr><th>Título</th><th>Autor</th><th>Año</th></tr>
    </thead>
    <tbody>
      <tr v-for="libro in libros" :key="libro.id">
        <td><RouterLink :to="`/libros/${libro.id}`">{{ libro.titulo }}</RouterLink></td>
        <td>{{ libro.autor }}</td>
        <td>{{ libro.anio }}</td>
      </tr>
    </tbody>
  </table>
</template>
