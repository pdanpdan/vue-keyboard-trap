<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div>
    <button @click="toggleShowContent">{{ showContent === true ? 'Hide content' : 'Show content' }}</button>

    <div v-if="showContent" class="test" v-kbd-trap.autofocus>
      <div class="test" tabindex="0">First</div>
      <div class="test" tabindex="0">Second</div>
      <div class="test" tabindex="0" data-autofocus>Autofocus</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },

  setup() {
    const showContent = ref(false);
    const toggleShowContent = () => {
      showContent.value = showContent.value !== true;
    };

    return {
      showContent,
      toggleShowContent,
    };
  },
};
</script>

<style lang="sass" scoped>
button
  font-size: 16px
  padding: .5em 1em
  border: 1px solid var(--vp-c-divider, rgba(60, 60, 60, 0.29))

.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid var(--vp-c-text-4, rgba(60, 60, 60, 0.18))
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid var(--vp-c-text-2, rgba(60, 60, 60, 0.7))

  &[tabindex="-1"]
    border: 1px dashed var(--vp-c-text-2, rgba(60, 60, 60, 0.7))

  &[tabindex="-9999"]
    border: 1px dashed var(--vp-c-text-3, rgba(60, 60, 60, 0.33))

  &[data-autofocus]
    box-shadow: 0 0 2px 3px var(--vp-c-text-2, rgba(60, 60, 60, 0.7))

  &:focus
    background-color: var(--vp-button-alt-bg, #f1f1f1)
</style>
