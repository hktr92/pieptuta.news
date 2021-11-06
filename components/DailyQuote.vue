<template>
  <div v-if="quote" class="p-4 mb-3 bg-light rounded">
    <b-media>
      <h3 class="mt-0">
        Citatul zilei <small style="font-size:.75rem;">(la fiecare 10 secunde)</small>
      </h3>
      <blockquote class="blockquote">
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

<script>
import Vue from 'vue'
import { sample } from 'lodash'
import { isNumber } from 'lodash-es'

export default Vue.extend({
  name: 'DailyQuote',
  data () {
    return {
      quote: null,
      timer: null
    }
  },
  computed: {
    quotes () {
      return [
        { text: 'BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI', author: 'Gheorghe Crăciun' },
        { text: 'MEOW MEOW MEOW!!', author: 'Pieptuța' },
        { text: 'DA DA DA OTELU E VIATA MEA', author: 'autor necunoscut' },
        { text: 'Te urăsc, pe urmă te iubesc, iar te urăsc, pe urmă iar te iubesc...', author: 'Gheorghe Crăciun' },
        { text: 'Băgăm un bui cinstit', author: 'iris_danciu' },
        { text: 'Pulă seara, stimați pensionari!', author: 'iris_danciu' },
        { text: 'Hei păpușhe, mă lași să înot la tine ăn pisdă??', author: 'iris_danciu' },
        { text: 'F for biscuite', author: 'hacktor_92' }
      ]
    }
  },
  mounted () {
    this.pickRandomQuote()
    this.timer = setInterval(this.pickRandomQuote.bind(this), 10 * 1000)
  },
  beforeUnmount () {
    if (isNumber(this.timer)) {
      clearInterval(this.timer)
    }
  },
  methods: {
    pickRandomQuote () {
      this.quote = sample(this.quotes)
    }
  }
})
</script>
