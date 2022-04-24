<template>
  <div>
    <button @click="toggleContent">{{ showContent === true ? 'Hide content' : 'Show content' }}</button>

    <div v-if="showContent" class="test" v-kbd-trap.autofocus>
      <div class="test" tabindex="0">First</div>
      <div class="test" tabindex="0">Second</div>
      <div class="test" tabindex="0" data-autofocus>Autofocus</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { VueKeyboardTrapDirectiveFactory } from '../../src/exports.js'; // [codepen](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.umd.js)

const vKbdTrap = VueKeyboardTrapDirectiveFactory().directive;
const showContent = ref(true);
const toggleContent = () => {
  showContent.value = showContent.value !== true;
};
</script>

<style lang="sass" scoped>
  @use '../../src/public/styles/index.sass' // [codepen](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.sass)

  @use '../public/test.sass' // [codepen](https://pdanpdan.github.io/vue-keyboard-trap/test.sass)
</style>
