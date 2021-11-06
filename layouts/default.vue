<template>
  <div>
    <div class="container">
      <header class="blog-header py-3">
        <div class="row">
          <div class="col-4 pt-1">
            <div
              v-for="(link, index) in twitchLinks"
              :key="index"
            >
              <fa :icon="['fab',link.icon]" />
              <a
                class="link-secondary"
                :href="buildLink(link)"
                target="_blank"
              >
                {{ link.value }}
              </a>
            </div>
          </div>
          <div class="col-4 text-center">
            <nuxt-link
              class="blog-header-logo text-dark"
              :to="{name: 'index'}"
            >
              <img
                alt="pieptuta.news logo"
                :src="require('~/assets/img/logo.png')"
                class="logo-responsive"
              >
              pieptuța.news
            </nuxt-link>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <p>{{ clockNow }}</p>
            <!--            <a class="link-secondary" href="#" aria-label="Search">-->
            <!--              <svg-->
            <!--                xmlns="http://www.w3.org/2000/svg"-->
            <!--                width="20"-->
            <!--                height="20"-->
            <!--                fill="none"-->
            <!--                stroke="currentColor"-->
            <!--                stroke-linecap="round"-->
            <!--                stroke-linejoin="round"-->
            <!--                stroke-width="2"-->
            <!--                class="mx-3"-->
            <!--                role="img"-->
            <!--                viewBox="0 0 24 24"-->
            <!--                style="&#45;&#45;darkreader-inline-stroke: currentColor;"-->
            <!--                data-darkreader-inline-stroke=""-->
            <!--              ><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>-->
            <!--            </a>-->
            <!--            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>-->
          </div>
        </div>
      </header>

      <!--      <div class="nav-scroller py-1 mb-2">-->
      <!--        <nav class="nav d-flex justify-content-between">-->
      <!--          <a class="p-2 link-secondary" href="#">World</a>-->
      <!--          <a class="p-2 link-secondary" href="#">U.S.</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Technology</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Design</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Culture</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Business</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Politics</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Opinion</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Science</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Health</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Style</a>-->
      <!--          <a class="p-2 link-secondary" href="#">Travel</a>-->
      <!--        </nav>-->
      <!--      </div>-->
    </div>

    <main class="container">
      <Nuxt />
    </main>

    <footer class="blog-footer">
      <p>
        made with <fa class="text-danger" icon="heart" /> by <fa :icon="['fab','instagram']" /> <a href="https://instagram.com/hacktor_92/" target="_blank">hacktor_92</a> for <fa :icon="['fab','twitch']" /> <a href="https://twitch.tv/iris_danciu" target="_blank">iris_danciu</a>.<br>
        <fa :icon="['fab','github']" /> <a href="https://github.com/hktr92/pieptuta.news" target="_blank">source code</a>
      </p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DateTime } from 'luxon'
import { isNumber } from 'lodash-es'

export default Vue.extend({
  name: 'Default',
  data (): any {
    return {
      clockNow: '',
      clockTimer: null
    }
  },
  computed: {
    twitchLinks (): any[] {
      return [
        { icon: 'twitch', value: 'iris_danciu' },
        { icon: 'instagram', value: 'theknifelady' }
      ]
    }
  },
  mounted () {
    this.clockTimer = setInterval(this.updateClock.bind(this), 1000)
  },
  beforeDestroy (): void {
    if (isNumber(this.clockTimer)) {
      clearInterval(this.clockTimer)
    }
  },
  methods: {
    updateClock (): void {
      this.clockNow = DateTime.now().toFormat('dd.MM.yyyy, HH:mm:ss')
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

<style scoped lang="scss">
.logo-responsive {
  height: 40px;
  width: auto;
}
.twitch-links {
    &:not(:last-child):after {
      content: " | "
    }
}
</style>
