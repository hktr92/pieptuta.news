<template>
  <div v-if="clip" class="p-4 mb-3 bg-light rounded">
    <div class="d-flex flex-row justify-content-between">
      <h4>
        Random Twitch clip
      </h4>
      <b-btn
        v-b-tooltip
        size="sm"
        variant="none"
        title="Încarcă alt clip random"
        @click="pickRandomClip"
      >
        <fa icon="sync" />
      </b-btn>
    </div>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        :src="buildClipUrl"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { sample } from 'lodash-es'

export default Vue.extend({
  name: 'TwitchClip',
  data (): any {
    return {
      clip: null
    }
  },
  computed: {
    buildClipUrl (): string {
      return `https://clips.twitch.tv/embed?clip=${this.clip}&parent=${window.location.hostname}`
    },
    clips (): any[] {
      return [
        'ThoughtfulCaringVultureBabyRage-mMpohQcq5b2EPuTM',
        'AdorableCarefulGazelleAsianGlow-7-DTuui-hteN5pPz',
        'BeautifulBlindingHawkLitty-eeSOHoEs7-CQFh7c',
        'PrettyCrowdedCrowDeIlluminati-NO5NT3uebuznAEcO',
        'UnsightlySilkyCoffeeBudBlast-zZFMVvmRKNeO0Qv8',
        'LaconicSplendidDiscBCouch-u0MdhA-_qPrsnjud',
        'ManlyRoundCardVoteYea-cws3dOJG8am4uonp',
        'CleanConcernedJellyfishRuleFive-5H9vCtTIhdowqK7W',
        'TrustworthyOptimisticPigJKanStyle-C6bSulBUbChPPF3c',
        'DelightfulTangibleSpiderWoofer-mrMIs12SvVCD4SAH',
        'BrightDeafWrenchDuDudu-npNXXnv5-gJGxY8p',
        'ConsiderateAbnegateLampPJSugar-lpKUtDBZ8Pc4-csr',
        'AbstemiousStormyPotPicoMause-X76Vh05RxLPA-JTS',
        'CuriousToughStarUncleNox-eXfjJey83n5qKfOT'
      ]
    }
  },
  mounted () {
    this.pickRandomClip()
  },
  methods: {
    pickRandomClip (): void {
      this.clip = sample(this.clips)
    }
  }
})
</script>
