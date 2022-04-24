<template>
  <div>
    <button @click="toggleTrapActive">{{ trapActive === true ? 'Deactivate trap' : 'Activate trap' }}</button>

    <div class="test" v-kbd-trap.autofocus="trapActive">
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
const trapActive = ref(false);
const toggleTrapActive = () => {
  trapActive.value = trapActive.value !== true;
};
</script>

<style lang="sass" scoped>
  @use '../../src/public/styles/index.sass' // [codepen](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.sass)

  @use '../public/test.sass' // [codepen](https://pdanpdan.github.io/vue-keyboard-trap/test.sass)
</style>
