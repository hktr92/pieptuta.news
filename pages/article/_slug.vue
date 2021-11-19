<template>
  <div class="mt-3">
    <nuxt-link :to="{name: 'index'}">
      <fa icon="arrow-left" /> Înapoi pe prima pagină.
    </nuxt-link>

    <hr>

    <div class="row g-5">
      <div class="col-md-7">
        <article class="blog-post">
          <h2 class="blog-post-title">
            {{ article.title }}
          </h2>
          <p class="blog-post-meta">
            {{ dateFormat(article.publishedAt) }}
          </p>

          <nuxt-content :document="article" />
          <hr>
          <nuxt-link :to="{name: 'index'}">
            <fa icon="arrow-left" /> Înapoi pe prima pagină.
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
import { DateTime } from 'luxon'

export default Vue.extend({
  name: 'Article',
  async asyncData ({ $content, params }) {
    const article = await $content(`articles/${params.slug}`).where({ draft: 'no' }).fetch()

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
