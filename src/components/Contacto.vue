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
              <a href="mailto:415@scoutsdeandalucia.org">415@scoutsdeandalucia.org</a><br />
              <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
            </p>
          </div>

          <!-- Teléfono -->
          <div class="info-item">
            <div class="icon-box">
              <span class="icon phone-icon"></span>
            </div>
            <h3>LLÁMANOS</h3>
            <p>+34 642 53 28 58<br />+34 600 000 000</p>
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

  <!-- Añadir al final de src/views/ContactView.vue -->
  <section class="join-section">
    <div class="join-container">
      <h2>¿QUIERES UNIRTE AL GRUPO?</h2>
      <div class="divider-light"></div>
      <p>Déjanos tus datos y nos pondremos en contacto contigo para informarte sobre el proceso de inscripción.</p>

      <form @submit.prevent="handleJoinSubmit" class="join-form">
        <div class="form-row">
          <input type="text" placeholder="Nombre del educando" required class="custom-input" />
        </div>
        <div class="form-row">
          <input type="text" placeholder="Nombre del tutor" required class="custom-input" />
        </div>
        <div class="form-row">
          <input type="email" placeholder="Correo electrónico" required class="custom-input" />
        </div>
        <div class="form-row">
          <input type="tel" placeholder="Teléfono de contacto" required class="custom-input" />
        </div>
        <div class="form-row">
          <input type="number" placeholder="Año de nacimiento" required class="custom-input"
                  min="1900" max="2026"/>
        </div>


        <textarea placeholder="Mensaje o dudas adicionales..." rows="3" class="custom-input custom-textarea"></textarea>

        <button type="submit" class="submit-btn">SOLICITAR PLAZA</button>
      </form>
    </div>
  </section>

</template>

<script setup>
</script>

<style scoped src="../assets/css/contacto.css"></style>