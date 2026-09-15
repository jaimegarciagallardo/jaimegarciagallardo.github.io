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
        <router-link to="/secciones" class="nav-link">Secciones</router-link>
        <router-link to="/quienes-somos" class="nav-link">Quiénes Somos</router-link>
        <router-link to="/apuntate" class="nav-link">Apúnate</router-link>
        <router-link to="/noticias" class="nav-link">Noticias</router-link>
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped src="../assets/css/header.css"></style>