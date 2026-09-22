<!-- src/views/ContactView.vue -->
<template>
  <div class="contact-page">
    <!-- Encabezado superior -->
    <div class="contact-header">
      <h1>CONTÁCTENOS</h1>
      <div class="divider"></div>
      <p class="subtitle">
        Póngase en contacto con nosotros para resolver cualquier duda, solicitar información o unirse a nuestro grupo.
      </p>
    </div>

    <!-- Bloque Principal de Contacto -->
    <div class="contact-card">
      <!-- Panel de Datos (Izquierda) -->
      <div class="info-panel">
        <div class="info-grid">
          <!-- Ubicación -->
          <div class="info-item">
            <div class="icon-box">
              <span class="icon location-icon"></span>
            </div>
            <h3>UBICACIÓN</h3>
            <p>C. Julio Verne, 8<br />29190 Málaga</p>
          </div>

          <!-- Email -->
          <div class="info-item">
            <div class="icon-box">
              <span class="icon email-icon"></span>
            </div>
            <h3>EMAIL</h3>
            <p>
              <a href="mailto:415@scoutsdeandalucia.org">415@scoutsdeandalucia.org</a>
            </p>
          </div>

          <!-- Teléfono -->
          <div class="info-item">
            <div class="icon-box">
              <span class="icon phone-icon"></span>
            </div>
            <h3>LLÁMANOS</h3>
            <p>+34 642 53 28 58</p>
          </div>

          <!-- Información Adicional -->
          <div class="info-item">
            <div class="icon-box">
              <span class="icon info-icon"></span>
            </div>
            <h3>HORARIO</h3>
            <p>Atención presencial:<br />Sábados de 11:00 a 13:30h</p>
          </div>
        </div>
      </div>

      <!-- Widget de Google Maps (Derecha) -->
      <div class="map-panel">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.502143764898!2d-4.469451624953917!3d36.73451637140072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7244b9eec49%3A0xf7abeb1013ca9900!2sColegio%20Los%20Olivos.%20PP.%20Agustinos.!5e0!3m2!1ses!2ses!4v1789574554209!5m2!1ses!2ses"
            width="600"
            height="470"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  </div>

  <section class="join-section">
    <div class="join-container">
      <h2>¿QUIERES UNIRTE AL GRUPO?</h2>
      <div class="divider-light"></div>
      <p>Déjanos tus datos y nos pondremos en contacto contigo para informarte sobre el proceso de inscripción.</p>

      <form @submit.prevent="handleJoinSubmit" class="join-form">
        <div class="form-group">
          <input
              v-model="formData.nombreEducando"
              type="text"
              placeholder="Nombre del educando / participante"
              required
              class="custom-input"
          />
        </div>

        <div class="form-group">
          <input
              v-model="formData.nombreTutor"
              type="text"
              placeholder="Nombre del tutor/a"
              class="custom-input"
          />
        </div>

        <div class="form-group">
          <input
              v-model="formData.anoNacimiento"
              type="number"
              placeholder="Año de nacimiento (ej. 2014)"
              min="1900"
              max="2026"
              required
              class="custom-input"
          />
        </div>

        <div class="form-group">
          <input
              v-model="formData.telefono"
              type="tel"
              placeholder="Teléfono de contacto"
              required
              class="custom-input"
          />
        </div>

        <div class="form-group">
          <input
              v-model="formData.email"
              type="email"
              placeholder="Correo electrónico de contacto"
              required
              class="custom-input"
          />
        </div>

        <div class="form-group">
        <textarea
            v-model="formData.mensaje"
            placeholder="Mensaje o dudas adicionales..."
            rows="3"
            class="custom-input custom-textarea"
        ></textarea>
        </div>

        <!-- Casilla legal obligatoria -->
        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input
                v-model="formData.aceptaTerminos"
                type="checkbox"
                class="custom-checkbox"
            />
            <span class="checkbox-text">
              Declaro ser mayor de edad o actuar como tutor legal del menor a inscribir, y acepto el tratamiento de datos según la
              <router-link to="/politica-privacidad" target="_blank" class="legal-link">
                política de privacidad
              </router-link>.
            </span>
          </label>
        </div>

        <!-- Primera capa de información sobre privacidad -->
        <div class="privacy-layer">
          <div class="privacy-text">
            El Grupo Scout 415 Los Olivos tratará estos datos exclusivamente para gestionar la preinscripción
            y no los cederá a terceros. Puedes conocer cómo ejercer tus derechos y más detalles en nuestra
            <router-link to="/politica-privacidad" target="_blank" class="legal-link">
              Política de Privacidad
            </router-link>.
          </div>
        </div>

        <p v-if="feedbackMessage" :class="['feedback-status', feedbackType]">
          {{ feedbackMessage }}
        </p>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'ENVIANDO...' : 'SOLICITAR PLAZA' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  // Reemplaza esta URL por la que copiaste de Google Apps Script
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyCRZR69UM1husQWIFuXs2zJPuCflpogIvFQEa5d-np4bKe9EvO9JGZfDKRoN7eJfhPWQ/exec'

  const formData = ref({
    nombreEducando: '',
    nombreTutor: '',
    anoNacimiento: '',
    telefono: '',
    email: '',
    mensaje: ''
  })

  const isSubmitting = ref(false)
  const feedbackMessage = ref('')
  const feedbackType = ref('')

  const handleJoinSubmit = async () => {

    if (!formData.value.aceptaTerminos) {
      feedbackType.value = 'error'
      feedbackMessage.value = '⚠️ Por favor, confirma que eres mayor de edad o tutor/a legal y acepta la política de privacidad.'
      return
    }

    isSubmitting.value = true
    feedbackMessage.value = ''

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.value)
      })

      feedbackType.value = 'success'
      feedbackMessage.value = '¡Solicitud enviada con éxito! Nos pondremos en contacto muy pronto.'

      formData.value = {
        nombreEducando: '',
        nombreTutor: '',
        anoNacimiento: '',
        telefono: '',
        email: '',
        mensaje: ''
      }
    } catch (error) {
      feedbackType.value = 'error'
      feedbackMessage.value = 'Hubo un error al enviar la solicitud. Inténtalo de nuevo.'
    } finally {
      isSubmitting.value = false
    }
  }
</script>

<style scoped src="../assets/css/contacto.css"></style>