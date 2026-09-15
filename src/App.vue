<!-- src/App.vue -->
<template>
  <div class="app-layout">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
@import './assets/css/main.css';

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bone);
}


.main-content {
  flex: 1;
  width: 100%;
}
</style>