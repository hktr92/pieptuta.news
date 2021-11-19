<template>
  <div v-if="quote" class="p-4 mb-3 bg-pieptuta-white rounded">
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

<script lang="ts">
import Vue from 'vue'
import { sample } from 'lodash'
import { isNumber } from 'lodash-es'

export default Vue.extend({
  name: 'DailyQuote',
  data (): any {
    return {
      quote: null,
      timer: null
    }
  },
  computed: {
    quotes (): any[] {
      return [
        { text: 'BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI', author: 'Gheorghe Crăciun' },
        { text: 'DA DA DA OTELU E VIATA MEA', author: 'autor necunoscut' },
        { text: 'Te urăsc, pe urmă te iubesc, iar te urăsc, pe urmă iar te iubesc...', author: 'Gheorghe Crăciun' },
        { text: 'Băgăm un bui cinstit', author: 'iris_danciu' },
        { text: 'Pulă seara, stimați pensionari!', author: 'iris_danciu' },
        { text: 'Hei păpușhe, mă lași să înot la tine ăn pisdă??', author: 'iris_danciu' },
        { text: 'F for biscuite', author: 'hacktor_92' },
        { text: 'mmm... muna', author: 'văru vanu (out of context)' },
        { text: 'Response Message', author: 'StreamElements' },
        { text: 'Porodici', author: 'un ghinionist' },
        { text: 'iris esti superba', author: 'tot chatu\'' },
        { text: 'Sănătate mintală și noroc în dragoste!', author: 'comandă de pe twitch' },
        { text: 'PENTRU CA MANEAUA ESTE MUZICA OAMENILOR! MANELELE SUNT FACUTE PENTRU OAMENI IN PULA MEA! DACA OAMENILOR LE PLAC MANELELE, INSEAMNA CA MANELELE TREBUIE SA FIE ASCULTATE! AI INNEBUNIT?! DOAR PENTRU CA... DOAR PENTRU CA NU-TI PLACE TIE NU STIU CE FILM INDIAN DE KKT AI VAZUT TU, DE ASTA NU TREBUIE SA ASCULTE OAMENII MANELE?! AI INNEBUNIT?! AI INNEBUNIT?! DACA OAMENII VOR SA ASCULTE MANELELE, LASA-I SA ASCULTE MANELELE, MORTII TAI!', author: 'NichitaLiga' }
      ]
    }
  },
  mounted (): void {
    this.pickRandomQuote()
    this.timer = setInterval(this.pickRandomQuote.bind(this), 10 * 1000)
  },
  beforeDestroy (): void {
    if (isNumber(this.timer)) {
      clearInterval(this.timer)
    }
  },
  methods: {
    pickRandomQuote (): void {
      this.quote = sample(this.quotes)
    }
  }
})
</script>
