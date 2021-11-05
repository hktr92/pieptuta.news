<template>
  <div>
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark bg-pieptuta">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">
          Bun venit pe pieptuța.news
        </h1>
        <p class="lead my-3">
          Cea mai bună sursă de informare, cu editorul vostru preferat, Pieptuța.
        </p>
        <!--        <p class="lead mb-0">-->
        <!--          <a href="#" class="text-white fw-bold">Continue reading...</a>-->
        <!--        </p>-->
      </div>
    </div>

    <!--    <div class="row mb-2">-->
    <!--      <div class="col-md-6">-->
    <!--        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">-->
    <!--          <div class="col p-4 d-flex flex-column position-static">-->
    <!--            <strong class="d-inline-block mb-2 text-primary">World</strong>-->
    <!--            <h3 class="mb-0">-->
    <!--              Featured post-->
    <!--            </h3>-->
    <!--            <div class="mb-1 text-muted">-->
    <!--              Nov 12-->
    <!--            </div>-->
    <!--            <p class="card-text mb-auto">-->
    <!--              This is a wider card with supporting text below as a natural lead-in to additional content.-->
    <!--            </p>-->
    <!--            <a href="#" class="stretched-link">Continue reading</a>-->
    <!--          </div>-->
    <!--          <div class="col-auto d-none d-lg-block">-->
    <!--            <svg-->
    <!--              class="bd-placeholder-img"-->
    <!--              width="200"-->
    <!--              height="250"-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              role="img"-->
    <!--              aria-label="Placeholder: Thumbnail"-->
    <!--              preserveAspectRatio="xMidYMid slice"-->
    <!--              focusable="false"-->
    <!--            ><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" style="&#45;&#45;darkreader-inline-fill: #43484b;" data-darkreader-inline-fill="" /><text-->
    <!--              x="50%"-->
    <!--              y="50%"-->
    <!--              fill="#eceeef"-->
    <!--              dy=".3em"-->
    <!--              style="&#45;&#45;darkreader-inline-fill: #dddad6;"-->
    <!--              data-darkreader-inline-fill=""-->
    <!--            >Thumbnail</text></svg>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-md-6">-->
    <!--        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">-->
    <!--          <div class="col p-4 d-flex flex-column position-static">-->
    <!--            <strong class="d-inline-block mb-2 text-success">Design</strong>-->
    <!--            <h3 class="mb-0">-->
    <!--              Post title-->
    <!--            </h3>-->
    <!--            <div class="mb-1 text-muted">-->
    <!--              Nov 11-->
    <!--            </div>-->
    <!--            <p class="mb-auto">-->
    <!--              This is a wider card with supporting text below as a natural lead-in to additional content.-->
    <!--            </p>-->
    <!--            <a href="#" class="stretched-link">Continue reading</a>-->
    <!--          </div>-->
    <!--          <div class="col-auto d-none d-lg-block">-->
    <!--            <svg-->
    <!--              class="bd-placeholder-img"-->
    <!--              width="200"-->
    <!--              height="250"-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              role="img"-->
    <!--              aria-label="Placeholder: Thumbnail"-->
    <!--              preserveAspectRatio="xMidYMid slice"-->
    <!--              focusable="false"-->
    <!--            ><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" style="&#45;&#45;darkreader-inline-fill: #43484b;" data-darkreader-inline-fill="" /><text-->
    <!--              x="50%"-->
    <!--              y="50%"-->
    <!--              fill="#eceeef"-->
    <!--              dy=".3em"-->
    <!--              style="&#45;&#45;darkreader-inline-fill: #dddad6;"-->
    <!--              data-darkreader-inline-fill=""-->
    <!--            >Thumbnail</text></svg>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Ultimele știri
        </h3>

        <div
          v-for="(article, index) in news"
          :key="index"
          class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">
              {{ article.title }}
            </h3>
            <div class="mb-1 text-muted">
              {{ dateFormat(article.createdAt) }}
            </div>
            <p class="card-text mb-auto">
              {{ article.description }}
            </p>
            <nuxt-link :to="{ name: 'article-slug', params: { slug: article.slug }}">
              Citește mai mult...
            </nuxt-link>
          </div>
          <div
            v-if="article.coverImage"
            class="col-auto d-none d-lg-block"
          >
            <div class="article-image" :style="{backgroundImage: `url(/pieptuta.news/article/${article.coverImage})`}" />
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">
              Despre
            </h4>
            <p class="mb-0">
              Cea mai bună și credibilă sursă de informare pe care o poți avea.
            </p>
          </div>
        </div>

        <div class="p-4">
          <h4 class="fst-italic">
            Link-uri sociale
          </h4>
          <ol class="list-unstyled">
            <li v-for="link in links" :key="link.value">
              <a :href="buildLink(link)">
                <fa :icon="['fab',link.icon]" />
                {{ link.value }}
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DateTime } from 'luxon'

export default Vue.extend({
  async asyncData ({ $content }) {
    return { news: await $content('articles').sortBy('createdAt', 'desc').fetch() }
  },
  data (): any {
    return {
      news: []
    }
  },
  computed: {
    links (): any[] {
      return [
        { icon: 'twitch', value: 'iris_danciu' },
        { icon: 'instagram', value: 'theknifelady' },
        { icon: 'instagram', value: 'irisdanciuoutfits' }
      ]
    }
  },
  methods: {
    dateFormat (date: string): string {
      return DateTime.fromISO(date).toFormat('dd MMMM yyyy, HH:mm')
    },
    buildLink (link: any) {
      switch (link.icon) {
        case 'twitch': return `https://twitch.tv/${link.value}`
        case 'instagram': return `https://instagram.com/${link.value}`
      }
    }
  }
})
</script>

<style lang="scss">
.bg-pieptuta {
  background-image: url("~/assets/img/featured/pieptuta.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
</style>
