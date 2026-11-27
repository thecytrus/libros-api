<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Catálogo de Libros</h1>
    <nav>
      <RouterLink to="/">Listado</RouterLink>
      <RouterLink to="/nuevo">Nuevo libro</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
body { font-family: system-ui, sans-serif; margin: 0; color: #222; }
header { background: #2c3e50; color: #fff; padding: 1rem 2rem; }
header h1 { margin: 0 0 .5rem; font-size: 1.4rem; }
nav a { color: #fff; margin-right: 1rem; }
nav a.router-link-exact-active { font-weight: bold; text-decoration: underline; }
main { padding: 1.5rem 2rem; max-width: 800px; }
table { border-collapse: collapse; width: 100%; }
th, td { border-bottom: 1px solid #ddd; padding: .5rem; text-align: left; }
.error { color: #b00020; }
form label { display: block; margin-bottom: .75rem; }
form input { display: block; width: 100%; max-width: 360px; padding: .4rem; }
button { padding: .5rem 1rem; cursor: pointer; }
</style>
