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
        <router-link to="/" class="nav-link">INICIO</router-link>

        <!-- Botón desplegable Grupo -->
        <div class="nav-item dropdown">
          <router-link to="/quienes-somos" class="nav-link dropdown-toggle">
            ¿QUIENES SOMOS?<span class="arrow">▾</span>
          </router-link>
          <div class="dropdown-menu">
            <router-link to="/quienes-somos/colonia" class="dropdown-item">Colonia</router-link>
            <router-link to="/quienes-somos/manada" class="dropdown-item">Manada</router-link>
            <router-link to="/quienes-somos/seccion-scout" class="dropdown-item">Sección Scout</router-link>
            <router-link to="/quienes-somos/unidad" class="dropdown-item">Unidad</router-link>
            <router-link to="/quienes-somos/clan" class="dropdown-item">Clan</router-link>
          </div>
        </div>

        <router-link to="/noticias" class="nav-link">NOTICIAS</router-link>
        <router-link to="/revistas" class="nav-link">REVISTAS</router-link>
        <router-link to="/contacto" class="nav-link">CONTACTO</router-link>
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