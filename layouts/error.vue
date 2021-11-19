<template>
  <div class="mt-3">
    <nuxt-link :to="{name: 'index'}">
      <fa icon="arrow-left" />
      Înapoi pe prima pagină.
    </nuxt-link>

    <hr>

    <div class="row g-5">
      <div class="col-md-7">
        <article class="blog-post">
          <h2 v-if="error.statusCode === 404" class="blog-post-title">
            404 articol negăsit
          </h2>
          <h2 v-else class="blog-post-title">
            Eroare generală
          </h2>

          <p>
            Ne cerem scuze, Pieptuța are crize și a stricat pagina.
          </p>

          <img src="~/assets/img/error-img.jpg" alt="error img" class="img-fluid">
          <hr>
          <nuxt-link :to="{name: 'index'}">
            <fa icon="arrow-left" />
            Înapoi pe prima pagină.
          </nuxt-link>
        </article>
      </div>
      <div class="col-md-5">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error',
  props: ['error']
})
</script>
