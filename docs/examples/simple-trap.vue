<template>
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">First</div>
    <div class="test" tabindex="0">Second</div>
    <div class="test" tabindex="-1">Third (tabindex="-1")</div>
    <div class="test" tabindex="0">Fourth</div>
  </div>
</template>

<script setup>
import { VueKeyboardTrapDirectiveFactory } from '../../src/exports.js'; // [codepen](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.umd.js)

const vKbdTrap = VueKeyboardTrapDirectiveFactory().directive;
</script>

<style lang="sass" scoped>
  @use '../../src/public/styles/index.sass' // [codepen](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.sass)

  @use '../public/test.sass' // [codepen](https://pdanpdan.github.io/vue-keyboard-trap/test.sass)
</style>
