<template>
  <div class="p-4 mb-3 bg-pieptuta-white rounded">
    <p v-if="$fetchState.pending">
      <b-spinner variant="primary" type="grow" label="Se încarcă citatele motivaționale..." />
    </p>
    <p v-else-if="$fetchState.error">
      Ow man! Am rămas fără citate motivaționale! :(
    </p>
    <b-media v-else>
      <h3 class="mt-0">
        {{ widget.title }} <small v-if="widget.subtitle" style="font-size:.75rem;">({{ widget.subtitle }})</small>
      </h3>
      <blockquote v-if="quote" class="blockquote">
        <p class="mb-0 font-italic">
          „{{ quote.text }}”
        </p>
        <footer class="blockquote-footer">
          {{ quote.author }}
        </footer>
      </blockquote>
    </b-media>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { sample } from 'lodash'
import { isNumber } from 'lodash-es'

export default Vue.extend({
  name: 'DailyQuote',
  data (): any {
    return {
      widget: {},
      quote: null,
      timer: null
    }
  },
  async fetch () {
    this.widget = await this.$http.$get('/widget/daily-quote')
    this.pickRandomQuote()
  },
  // dunno how ok this approach is.
  // in theory, should be fine -- watch is triggered only once for widget.
  watch: {
    widget () {
      if (this.widget && this.widget.data) {
        this.timer = setInterval(this.pickRandomQuote.bind(this), 10 * 1000)
      }
    }
  },
  beforeDestroy (): void {
    if (isNumber(this.timer)) {
      clearInterval(this.timer)
    }
  },
  methods: {
    pickRandomQuote (): void {
      this.quote = sample(this.widget.data)
    }
  }
})
</script>
