<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { crearLibro } from '../services/api';

const router = useRouter();
const form = reactive({ titulo: '', autor: '', anio: new Date().getFullYear() });
const error = ref('');

const guardar = async () => {
  error.value = '';
  try {
    await crearLibro({ ...form, anio: Number(form.anio) });
    router.push('/');
  } catch {
    error.value = 'No se pudo guardar el libro.';
  }
};
</script>

<template>
  <h2>Nuevo libro</h2>
  <form @submit.prevent="guardar">
    <label>Título <input v-model="form.titulo" required /></label>
    <label>Autor <input v-model="form.autor" required /></label>
    <label>Año <input v-model.number="form.anio" type="number" required /></label>
    <button type="submit">Guardar</button>
  </form>
  <p v-if="error" class="error">{{ error }}</p>
</template>
