<template>
  <section class="noticias-container">
    <h2 class="titulo-seccion">Últimas Noticias</h2>

    <div class="cascada-grid">
      <article
          v-for="(noticia, index) in noticias.slice(0, 11)"
          :key="noticia.id"
          :class="['noticia-card', `card-${index + 1}`]"
          @click="irANoticia(noticia.id)"
      >
        <div class="imagen-wrapper">
          <img :src="noticia.imagen" :alt="noticia.titulo" loading="lazy" />
          <span class="categoria">{{ noticia.categoria }}</span>
        </div>

        <div class="contenido">
          <span class="fecha">{{ noticia.fecha }}</span>
          <h3 class="titulo">{{ noticia.titulo }}</h3>
          <p class="resumen">{{ noticia.resumen }}</p>
          <span class="leer-mas">Leer más →</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { noticiasDict } from '../data/noticias';

const router = useRouter();
const noticias = ref(noticiasDict);

const irANoticia = (id) => {
  router.push(`/noticias/${id}`);
}

</script>

<!-- Importamos el archivo CSS externo -->
<style scoped>
@import '../assets/css/noticias.css';
</style>