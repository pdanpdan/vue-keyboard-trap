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

<script>
import { ref } from 'vue';
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap';
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },

  setup() {
    const trapActive = ref(false);
    const toggleTrapActive = () => {
      trapActive.value = trapActive.value !== true;
    };

    return {
      trapActive,
      toggleTrapActive,
    };
  },
};
</script>

<style lang="sass" scoped>
button
  font-size: 16px
  padding: .5em 1em

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

  &[data-autofocus]
    box-shadow: 0 0 2px 3px #f99

  &:focus
    background-color: #6e66
</style>
