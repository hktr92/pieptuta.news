<template>
  <div class="position-sticky" style="top: 2rem;">
    <DailyQuote />
    <div class="p-4 mb-3 bg-pieptuta-white rounded">
      <h4 class="fst-italic">
        Despre
      </h4>
      <p class="mb-0">
        Cea mai bună și credibilă sursă de informare pe care o poți avea.
      </p>
    </div>

    <TwitchClip />

    <div class="p-4">
      <h4 class="fst-italic">
        Link-uri sociale
      </h4>
      <ol class="list-unstyled">
        <li v-for="link in links" :key="link.value">
          <fa :icon="['fab',link.icon]" />
          <a :href="buildLink(link)">
            {{ link.value }}
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sidebar',
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
    buildLink (link: any) {
      switch (link.icon) {
        case 'twitch': return `https://twitch.tv/${link.value}`
        case 'instagram': return `https://instagram.com/${link.value}`
      }
    }
  }
})
</script>

<style scoped>

</style>
