<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">Before</div>

    <div class="test" v-kbd-trap.roving.vertical>
      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 1 / {{ i }}
      </div>

      <div class="test row" v-kbd-trap.roving.horizontal>
        <div
          class="test col"
          v-for="i in 3"
          :key="i"
          tabindex="0"
        >
          Group 2 / {{ i }}
        </div>
      </div>

      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 1 / {{ i + 2 }}
      </div>
    </div>

    <div class="test" tabindex="0">After</div>
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
    border: 1px solid var(--vp-c-text-2, rgba(60, 60, 60, 0.7))

  &[tabindex="-1"]
    border: 1px dashed var(--vp-c-text-2, rgba(60, 60, 60, 0.7))

  &[tabindex="-9999"]
    border: 1px dashed var(--vp-c-text-3, rgba(60, 60, 60, 0.33))

  &:focus
    background-color: var(--vp-c-bg-mute, #f1f1f1)

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%
</style>
