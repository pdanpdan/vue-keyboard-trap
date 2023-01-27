<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div>
    <button @click="toggleRtl">{{ rtl === true ? 'RTL - switch to LTR' : 'LTR - switch to RTL' }}</button>

    <div class="test" :dir="rtl === true ? 'rtl' : 'ltr'">
      <div class="test row" dir="rtl" v-kbd-trap>
        <legend>RTL Always</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>

      <div class="test row" dir="ltr" v-kbd-trap>
        <legend>LTR Always</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>

      <div class="test row" v-kbd-trap>
        <legend>{{ rtl === true ? 'RTL' : 'LTR' }}</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>
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
    const rtl = ref(false);
    const toggleRtl = () => {
      rtl.value = rtl.value !== true;
    };

    return {
      rtl,
      toggleRtl,
    };
  },
};
</script>

<style lang="sass" scoped>
button
  font-size: 16px
  padding: .5em 1em
  border: 1px solid var(--vp-c-divider, rgba(60, 60, 60, 0.29))

legend
  position: absolute
  inset-inline-start: 1px
  inset-block-end: 1px
  font-weight: bold
  font-variant: small-caps
  color: var(--vp-c-text-code, #476582)
  pointer-events: none

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%

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

  &:focus
    background-color: var(--vp-button-alt-bg, #f1f1f1)
</style>
