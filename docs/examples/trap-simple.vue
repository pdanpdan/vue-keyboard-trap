<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">First</div>
    <div class="test" tabindex="0">Second</div>
    <div class="test" tabindex="-1">Third (tabindex="-1")</div>
    <div class="test" tabindex="0">Fourth</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
</script>

<style lang="sass" scoped>
.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid var(--vp-c-text-4, rgba(60, 60, 60, 0.18))
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid var(--vp-c-text-4, rgba(60, 60, 60, 0.7))

  &[tabindex="-1"]
    border: 1px dashed var(--vp-c-text-4, rgba(60, 60, 60, 0.7))

  &[tabindex="-9999"]
    border: 1px dashed var(--vp-c-text-4, rgba(60, 60, 60, 0.33))

  &:focus
    background-color: var(--vp-c-bg-mute, #f1f1f1)
</style>
