<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <span class="logo-img" role="img" aria-label="Logo de la web"></span>
        </router-link>
      </div>

      <!-- Navegación -->
      <nav class="nav">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/secciones" class="nav-link">Grupo</router-link>
        <router-link to="/noticias" class="nav-link">Noticias</router-link>
        <router-link to="/apuntate" class="nav-link">Únete</router-link>
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </nav>

      <div class="social-links">
        <a href="https://www.facebook.com/415scouts" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
          <span class="social-icon facebook"></span>
        </a>
        <a href="https://instagram.com/losolivos415" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
          <span class="social-icon instagram"></span>
        </a>
      </div>


    </div>
  </header>
</template>

<script setup>
</script>

<style scoped src="../assets/css/header.css"></style>