<template>
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">First</div>
    <div class="test" tabindex="0">Second</div>
    <div class="test" tabindex="-1">Third (tabindex="-1")</div>
    <div class="test" tabindex="0">Fourth</div>
  </div>
</template>

<script>
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap';
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
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66
</style>
