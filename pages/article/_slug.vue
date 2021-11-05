<template>
  <article class="blog-post">
    <h2 class="blog-post-title">
      {{ article.title }}
    </h2>
    <p class="blog-post-meta">
      {{ dateFormat(article.createdAt) }}
    </p>

    <nuxt-content :document="article" />
    <hr>
    <a href="/">
      <fa icon="arrow-left" /> Înapoi pe prima pagină.
    </a>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { DateTime } from 'luxon'

export default Vue.extend({
  name: '_slug.vue',
  async asyncData ({ $content, params }) {
    const article = await $content(`articles/${params.slug}`).fetch()

    return {
      article
    }
  },
  data () {
    return {
      article: {}
    }
  },
  methods: {
    dateFormat (date: string): string {
      return DateTime.fromISO(date).toFormat('dd MMMM yyyy')
    }
  }
})
</script>
