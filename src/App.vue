<template>
  <div class="app-layout">
    <Header />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
/* Importamos el CSS global con los colores */
@import 'assets/css/main.css';

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bone);
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>