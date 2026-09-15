<!-- src/components/inicio/Slider.vue -->
<template>
  <div class="slider-container">
    <div v-if="images.length > 0" class="slider-wrapper">
      <div
          class="slider-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(img, index) in images" :key="index" class="slide">
          <img :src="img" :alt="`Slide ${index + 1}`" class="slide-img" />
        </div>
      </div>

      <button class="slider-btn prev" @click="prevSlide">❮</button>
      <button class="slider-btn next" @click="nextSlide">❯</button>

      <div class="slider-dots">
        <button
            v-for="(_, index) in images"
            :key="index"
            class="dot"
            :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"
        ></button>
      </div>
    </div>

    <div v-else class="no-images">
      <p>No se encontraron imágenes en <strong>assets/img/sliderInicio/</strong></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Lee absolutamente cualquier archivo dentro de la carpeta sliderInicio
const imageModules = import.meta.glob('../../assets/img/inicio/slider/*', {
  eager: true,
  import: 'default'
})

const images = ref(Object.values(imageModules))
const currentIndex = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  if (images.value.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const prevSlide = () => {
  if (images.value.length === 0) return
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  if (images.value.length > 1) {
    autoplayInterval = setInterval(nextSlide, 5000)
  }
})

onUnmounted(() => {
  if (autoplayInterval) clearInterval(autoplayInterval)
})
</script>

<style scoped src="../../assets/css/inicio/slider.css"></style>