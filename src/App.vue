<template>
  <div :dir="rtl === true ? 'rtl' : undefined" style="padding-top: 4em">
    <img
      class="logo"
      alt="VueKeyboardTrap logo"
      src="./assets/logo.png"
    />

    <div class="global-settings" dir="ltr" v-kbd-trap.escrefocus>
      <label>
        <input
          type="checkbox"
          v-model="rtl"
        />
        RTL
      </label>

      <label>
        <input
          type="checkbox"
          v-model="active1"
        />
        Show set 5
      </label>

      <label>
        <input
          type="checkbox"
          v-model="active2"
        />
        Activate set 6
      </label>

      <label>
        <input
          type="checkbox"
          v-model="skipCells"
        />
        Skip cells in set 9
      </label>
    </div>

    <div
      class="test"
      tabindex="0"
    >
      0
    </div>

    <div
      class="test"
      v-kbd-trap.roving
    >
      <legend>v-kbd-trap.roving</legend>
      <div
        class="test"
        tabindex="0"
      >
        1
      </div>
      <div
        class="test"
        tabindex="0"
      >
        2
      </div>
      <input
        v-model="text"
        placeholder="Input field"
      />
      <div
        class="test"
        tabindex="-1"
        v-kbd-trap.roving.escrefocus
      >
        <legend>v-kbd-trap.roving.escrefocus</legend>
        <div
          class="test"
          tabindex="0"
        >
          3.1
        </div>
        <div
          class="test"
          tabindex="0"
        >
          3.2
        </div>
        <input
          v-model="text"
          placeholder="Input field"
        />
        <div
          class="test"
          tabindex="0"
        >
          3.3
        </div>
      </div>
      <div
        class="test"
        tabindex="0"
      >
        4
      </div>

      <div
        v-if="active1"
        class="test"
        v-kbd-trap.autofocus.escexits
      >
        <legend>v-kbd-trap.autofocus.escexits</legend>
        <div
          class="test"
          tabindex="0"
        >
          5.1
        </div>
        <div
          class="test"
          tabindex="0"
          data-autofocus
        >
          5.2
        </div>
        <input
          v-model="text"
          placeholder="Input field"
        />
        <div
          class="test"
          tabindex="0"
        >
          5.3
        </div>
      </div>
      <div
        class="test"
        tabindex="0"
      >
        6
      </div>

      <div
        class="test"
        tabindex="0"
        v-kbd-trap.autofocus="active2"
      >
        <legend>v-kbd-trap.autofocus {{ active2 }}</legend>
        <div
          class="test"
          tabindex="0"
        >
          6.1
        </div>
        <div
          class="test"
          tabindex="0"
        >
          6.2
        </div>
        <div
          class="test"
          tabindex="0"
          data-autofocus
        >
          6.3
        </div>
      </div>

      <div
        class="test row"
        tabindex="-1"
        v-kbd-trap.roving.horizontal.tabinside.escrefocus
      >
        <legend>v-kbd-trap.roving.horizontal.tabinside.escrefocus</legend>
        <div
          class="test col"
          tabindex="0"
        >
          7.1
        </div>
        <div
          class="test col"
          tabindex="0"
        >
          7.2
        </div>
        <div
          class="test col"
          tabindex="0"
        >
          7.3
        </div>
      </div>

      <div
        class="test"
        tabindex="-1"
        v-kbd-trap.roving.vertical.tabinside.escrefocus
      >
        <legend>v-kbd-trap.roving.vertical.tabinside.escrefocus</legend>
        <div
          class="test"
          tabindex="0"
        >
          8.1
        </div>
        <div
          class="test"
          tabindex="0"
        >
          8.2
        </div>
        <div
          class="test"
          tabindex="0"
        >
          8.3
        </div>
      </div>
    </div>

    <div
      class="test"
      v-kbd-trap.roving.grid
    >
      <legend>v-kbd-trap.roving.grid</legend>
      <div
        class="row"
        v-for="i in 6"
        :key="i"
      >
        <div
          class="test col"
          v-for="j in 8"
          :key="i * 100 + j"
          :data-v-kbd-trap-row="i"
          :data-v-kbd-trap-col="j"
          :tabindex="skipCells === true && (7 * i + 11 * j) % ((11 * i + 7 * j) % 3 + 1) === 0 ? ((i + j) % 2 === 0 ? null : -1) : 0"
        >
          9 R:{{ i }}/C:{{ j }}
        </div>
      </div>
    </div>

    <div
      class="test"
      v-kbd-trap.roving.grid
    >
      <legend>v-kbd-trap.roving.grid</legend>
      <div
        class="row"
        v-for="i in 5"
        :key="i"
      >
        <div
          v-for="j in 5"
          :key="i * 100 + j"
          class="test col"
          :data-v-kbd-trap-row="j === 3 ? i : `${ i } *`"
          :data-v-kbd-trap-col="i === 3 ? j : `${ j } *`"
          :tabindex="i !== 3 && j !== 3 ? ((i + j) % 2 === 0 ? null : -1) : 0"
        >
          10 R:{{ i }}/C:{{ j }}
        </div>
      </div>
    </div>

    <div
      class="test"
      tabindex="0"
    >
      11
    </div>

    <div
      class="test row"
      dir="rtl"
      v-kbd-trap.roving.horizontal
    >
      <legend>RTL Always - v-kbd-trap.roving.horizontal</legend>
      <div
        class="test col"
        tabindex="0"
      >
        12.1
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        12.2
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        12.3
      </div>
    </div>

    <div
      class="test row"
      dir="rtl"
      v-kbd-trap.roving.horizontal
    >
      <legend>RTL Always - v-kbd-trap.roving.horizontal</legend>
      <div
        class="test col"
        tabindex="0"
      >
        12bis.1
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        12bis.2
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        12bis.3
      </div>
    </div>

    <div
      class="test row"
      dir="ltr"
      v-kbd-trap.roving.horizontal
    >
      <legend>LTR Always - v-kbd-trap.roving.horizontal</legend>
      <div
        class="test col"
        tabindex="0"
      >
        13.1
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        13.2
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        13.3
      </div>
    </div>

    <div
      class="test row"
      dir="ltr"
      v-kbd-trap.roving.horizontal
    >
      <legend>LTR Always - v-kbd-trap.roving.horizontal</legend>
      <div
        class="test col"
        tabindex="0"
      >
        13bis.1
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        13bis.2
      </div>
      <div
        class="test col"
        tabindex="0"
      >
        13bis.3
      </div>
    </div>

    <div
      class="test"
      tabindex="0"
    >
      14
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('text');
const active1 = ref(false);
const active2 = ref(false);
const skipCells = ref(false);
const rtl = ref(false);
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  min-height: 100vh

.logo
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  max-height: 40vh
  max-width: 40vw
  opacity: .1

.global-settings
  position: fixed
  top: 4px
  left: 0
  padding-right: 5em
  z-index: 1
  pointer-events: none

  > *
    pointer-events: all

legend
  position: absolute
  bottom: 1px
  inline-start: 1px
  font-weight: bold
  font-variant: small-caps
  color: #36f

label
  font-weight: bold
  font-variant: small-caps
  color: #f63
  padding: 8px 16px 8px 4px
  box-shadow: 0 0 3px 1px #333
  cursor: pointer
  background-color: #eee

  + label
    margin-left: 8px

  input[type="checkbox"]
    width: 1.6em
    height: 1.6em
    transform: translateY(.35em)

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%

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
