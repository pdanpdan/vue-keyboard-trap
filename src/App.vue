<template>
  <img class="logo" alt="VueKeyboardTrap logo" src="./assets/logo.png" />

  <div class="global-settings" dir="ltr" v-kbd-trap.roving.horizontal.escrefocus>
    <label><input type="checkbox" v-model="rtl" /> RTL</label>

    <label><input type="checkbox" v-model="active1" /> Show set 5</label>

    <label><input type="checkbox" v-model="active2" /> Activate set 6</label>

    <label><input type="checkbox" v-model="skipCells" /> Skip cells in set 9</label>

    <label><input type="checkbox" v-model="covered3" /> Cover set 14</label>

    <label><input type="checkbox" v-model="active3" /> Activate set 14 ({{ covered3 === true ? 'covered' : 'uncovered' }})</label>

    <label><input type="checkbox" v-model="activeDialog" /> Show dialog</label>

    <a href="https://github.com/pdanpdan/vue-keyboard-trap" target="blank" title="Code, Issues, Discussions for @pdanpdan/vue-keyboard-trap on GitHub">
      <span>GitHub</span>
    </a>
  </div>

  <div style="width: 800px; max-width: 95vw; margin-inline: auto" :dir="rtl === true ? 'rtl' : undefined" v-kbd-trap>
    <div class="test" tabindex="0">0</div>

    <div class="test" v-kbd-trap.roving>
      <div class="description">v-kbd-trap.roving</div>

      <div class="test" tabindex="0">1</div>

      <div class="test" tabindex="0">2</div>

      <input v-model="text" placeholder="Input field" />

      <div class="test" tabindex="-1" v-kbd-trap.roving.escrefocus>
        <div class="description">v-kbd-trap.roving.escrefocus</div>

        <div class="test" tabindex="0">3.1</div>

        <div class="test" tabindex="0">3.2</div>

        <input v-model="text" placeholder="Input field 3.3" />

        <div class="test" tabindex="0">3.4</div>
      </div>

      <div class="test" tabindex="0">4</div>

      <div v-if="active1" class="test" v-kbd-trap.autofocus.escexits>
        <div class="description">v-kbd-trap.autofocus.escexits</div>

        <div class="test" tabindex="0">5.1</div>

        <div class="test" tabindex="0" data-autofocus>5.2</div>

        <input v-model="text" placeholder="Input field 5.3" />

        <div class="test" tabindex="0">5.4</div>
      </div>

      <div class="test" tabindex="0">6</div>

      <div class="test" tabindex="0" v-kbd-trap.autofocus="active2">
        <div class="description">v-kbd-trap.autofocus {{ active2 }}</div>

        <div class="test" tabindex="0">6.1</div>

        <div class="test" tabindex="0">6.2</div>

        <div class="test" tabindex="0" data-autofocus>6.3</div>
      </div>

      <div class="test row" tabindex="-1" v-kbd-trap.roving.horizontal.tabinside.escrefocus>
        <div class="description">v-kbd-trap.roving.horizontal.tabinside.escrefocus</div>

        <div class="test col" tabindex="0">7.1</div>

        <div class="test col" tabindex="0">7.2</div>

        <div class="test col" tabindex="0">7.3</div>
      </div>

      <div class="test" tabindex="-1" v-kbd-trap.roving.vertical.tabinside.escrefocus>
        <div class="description">v-kbd-trap.roving.vertical.tabinside.escrefocus</div>

        <div class="test" tabindex="0">8.1</div>

        <div class="test" tabindex="0">8.2</div>

        <div class="test" tabindex="0">8.3</div>
      </div>
    </div>

    <div class="test" v-kbd-trap.roving.grid>
      <div class="description">v-kbd-trap.roving.grid</div>

      <div class="row" v-for="i in 6" :key="i">
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

    <div class="test" v-kbd-trap.roving.grid>
      <div class="description">v-kbd-trap.roving.grid</div>

      <div class="row" v-for="i in 5" :key="i">
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

    <div class="test">
      <div class="description">v-kbd-trap.roving - Role grid test (roles: grid, row, gridcell)</div>

      <table
        class="calendar"
        role="grid"
        aria-labelledby="calendarheader"
        v-kbd-trap.roving
      >
        <caption id="calendarheader">April 2022</caption>

        <thead role="rowgroup">
          <tr role="row">
            <th role="columnheader" aria-label="Week">Wk.</th>
            <th role="columnheader" aria-label="Sunday">Su</th>
            <th role="columnheader" aria-label="Monday">Mo</th>
            <th role="columnheader" aria-label="Tuesday">Tu</th>
            <th role="columnheader" aria-label="Wednesday">We</th>
            <th role="columnheader" aria-label="Thursday">Th</th>
            <th role="columnheader" aria-label="Friday">Fr</th>
            <th role="columnheader" aria-label="Saturday">Sa</th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr role="row">
            <th scope="row" role="rowheader">13</th>
            <td role="gridcell" tabindex="-1">27</td>
            <td role="gridcell">28</td>
            <td role="gridcell">29</td>
            <td role="gridcell">30</td>
            <td role="gridcell">31</td>
            <td role="gridcell" tabindex="0">1</td>
            <td role="gridcell" tabindex="0">2</td>
          </tr>

          <tr v-for="m in 4" :key="m" role="row">
            <th scope="row" role="rowheader">{{ 13 + m}}</th>
            <td
              v-for="d in 7"
              :key="d"
              role="gridcell"
              tabindex="0"
            >{{ 2 + (m - 1) * 7 + d }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="test" tabindex="0">11</div>

    <div class="test row" dir="rtl" v-kbd-trap.roving.horizontal>
      <div class="description">RTL Always - v-kbd-trap.roving.horizontal</div>

      <div class="test col" tabindex="0">12.1</div>

      <div class="test col" tabindex="0">12.2</div>

      <div class="test col" tabindex="0">12.3</div>
    </div>

    <div class="test row" dir="rtl" v-kbd-trap.roving.horizontal>
      <div class="description">RTL Always - v-kbd-trap.roving.horizontal</div>

      <div class="test col" tabindex="0">12bis.1</div>

      <div class="test col" tabindex="0">12bis.2</div>

      <div class="test col" tabindex="0">12bis.3</div>
    </div>

    <div class="test row" dir="ltr" v-kbd-trap.roving.horizontal>
      <div class="description">LTR Always - v-kbd-trap.roving.horizontal</div>

      <div class="test col" tabindex="0">13.1</div>

      <div class="test col" tabindex="0">13.2</div>

      <div class="test col" tabindex="0">13.3</div>
    </div>

    <div class="test row" dir="ltr" v-kbd-trap.roving.horizontal>
      <div class="description">LTR Always - v-kbd-trap.roving.horizontal</div>

      <div class="test col" tabindex="0">13bis.1</div>

      <div class="test col" tabindex="0">13bis.2</div>

      <div class="test col" tabindex="0">13bis.3</div>
    </div>

    <div class="test">
      <div class="description">Autofocus covered test</div>

      <div style="margin-bottom: 16px; height: 150px; overflow: auto;">
        <div class="test-covered">
          <div class="test" style="margin-top: 200px" v-kbd-trap.autofocus="active3">
            <div class="description">v-kbd-trap.autofocus {{ active3 }}</div>

            <div class="test" tabindex="0">14.1</div>

            <div class="test" tabindex="0">14.2</div>

            <div class="test" tabindex="0" data-autofocus>14.3</div>
          </div>

          <div v-if="covered3" class="test-covered__cover">Cover</div>
        </div>
      </div>
    </div>

    <div class="test" tabindex="0">15</div>

    <div class="test" v-kbd-trap>
      <div class="description">v-kbd-trap (Use DOM order)</div>

      <div class="test col" tabindex="0">16.1 (tabindex 0)</div>

      <div class="test col" tabindex="-1">16.2 (tabindex -1)</div>

      <div class="test col" tabindex="4">16.3 (tabindex 4)</div>

      <div class="test col" tabindex="0">16.4 (tabindex 0)</div>

      <div class="test col" tabindex="1">16.5 (tabindex 1)</div>

      <div class="test col" tabindex="5">16.6 (tabindex 5)</div>

      <div class="test col" tabindex="0">16.7 (tabindex 0)</div>
    </div>

    <div class="test" v-kbd-trap.indexorder>
      <div class="description">v-kbd-trap.indexorder (Force tabindex order)</div>

      <div class="test col" tabindex="0">16.1bis (tabindex 0)</div>

      <div class="test col" tabindex="-1">16.2bis (tabindex -1)</div>

      <div class="test col" tabindex="4">16.3bis (tabindex 4)</div>

      <div class="test col" tabindex="0">16.4bis (tabindex 0)</div>

      <div class="test col" tabindex="1">16.5bis (tabindex 1)</div>

      <div class="test col" tabindex="5">16.6bis (tabindex 5)</div>

      <div class="test col" tabindex="0">16.7bis (tabindex 0)</div>
    </div>

    <div class="test" v-kbd-trap.roving>
      <div class="description">v-kbd-trap.roving (Use DOM order)</div>

      <div class="test col" tabindex="0">17.1 (tabindex 0)</div>

      <div class="test col" tabindex="-1">17.2 (tabindex -1)</div>

      <div class="test col" tabindex="4">17.3 (tabindex 4)</div>

      <div class="test col" tabindex="0">17.4 (tabindex 0)</div>

      <div class="test col" tabindex="1">17.5 (tabindex 1)</div>

      <div class="test col" tabindex="5">17.6 (tabindex 5)</div>

      <div class="test col" tabindex="0">17.7 (tabindex 0)</div>
    </div>

    <div class="test" v-kbd-trap.roving.indexorder>
      <div class="description">v-kbd-trap.roving.indexorder (Force tabindex order)</div>

      <div class="test col" tabindex="0">17.1bis (tabindex 0)</div>

      <div class="test col" tabindex="-1">17.2bis (tabindex -1)</div>

      <div class="test col" tabindex="4">17.3bis (tabindex 4)</div>

      <div class="test col" tabindex="0">17.4bis (tabindex 0)</div>

      <div class="test col" tabindex="1">17.5bis (tabindex 1)</div>

      <div class="test col" tabindex="5">17.6bis (tabindex 5)</div>

      <div class="test col" tabindex="0">17.7bis (tabindex 0)</div>
    </div>

    <div class="test" tabindex="0">18</div>

    <div class="test" v-kbd-trap.roving.vertical>
      <div class="description">v-kbd-trap.roving - form elements</div>

      <div class="test" tabindex="0">19.1</div>

      <div class="test">
        <button type="button">Button 19.2</button>
      </div>

      <div class="test">
        <input type="button" value="Input type='button' 19.3" />
      </div>

      <div class="test">
        <input type="submit" value="Input type='submit' 19.4" />
      </div>

      <div class="test">
        <input type="reset" value="Input type='reset' 19.5" />
      </div>

      <div class="test">
        <input type="file" placeholder="Input type='file' 19.6" />
      </div>

      <div class="test" v-kbd-trap.roving.horizontal>
        <label tabindex="-1"><input type="checkbox" /> Checkox 19.7.1</label>
        <label tabindex="-1"><input type="checkbox" /> Checkox 19.7.2</label>
        <label tabindex="-1"><input type="checkbox" /> Checkox 19.7.3</label>
      </div>

      <div class="test" v-kbd-trap.roving.horizontal>
        <label tabindex="-1"><input type="radio" name="radio" value="1" /> Radio 19.8.1</label>
        <label tabindex="-1"><input type="radio" name="radio" value="2" /> Radio 19.8.2</label>
        <label tabindex="-1"><input type="radio" name="radio" value="3" /> Radio 19.8.3</label>
      </div>

      <div class="test">
        <video
          class="test"
          style="width: 600px; max-width: 80vw"
          src="https://filesamples.com/samples/video/mp4/sample_960x540.mp4"
          controls
        />
      </div>

      <div class="test">
        <audio
          class="test"
          src="https://filesamples.com/samples/audio/mp3/sample3.mp3"
          controls
        />
      </div>

      <div class="test" style="padding-block: 1.5em">
        <div class="description">Tab / Shift + Tab</div>

        <input v-model="text" placeholder="Input field 19.9" />
      </div>

      <div class="test" style="padding-block: 1.5em">
        <div class="description">Tab / Shift + Tab</div>

        <textarea v-model="text" placeholder="Input field 19.10"></textarea>
      </div>

      <div class="test" style="padding-block: 1.5em">
        <div class="description">Tab / Shift + Tab</div>

        <select placeholder="Select 19.11">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div class="test" style="padding-block: 1.5em">
        <div class="description">Tab / Shift + Tab</div>

        <select multiple placeholder="Select multiple 19.12">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <fieldset class="test" style="padding-block: 1.5em">
        <div class="description">Tab / Shift + Tab [fieldset]</div>

        <textarea v-model="text" placeholder="Input field in fieldset 19.13"></textarea>
      </fieldset>

      <fieldset class="test" style="padding-block: 1.5em" disabled>
        <div class="description">Tab / Shift + Tab [disabled fieldset]</div>

        <textarea v-model="text" placeholder="Input field in disabled fieldset 19.14"></textarea>
      </fieldset>

      <fieldset class="test" style="padding-block: 1.5em" disabled>
        <legend>
          <input v-model="text" placeholder="Input field in legend in disabled fieldset 19.15.1" />
        </legend>

        <div class="description">Tab / Shift + Tab [disabled fieldset]</div>

        <fieldset class="test" style="padding-block: 1.5em">
          <legend>
            <input v-model="text" placeholder="Input field in legend in fieldset in disabled fieldset 19.15.2" />
          </legend>

          <div class="description">Tab / Shift + Tab [fieldset in disabled fieldset]</div>

          <textarea v-model="text" placeholder="Input field in fieldset in disabled fieldset 19.15.3"></textarea>
        </fieldset>
      </fieldset>

      <div class="test" tabindex="0">19.16</div>
    </div>

    <div class="test" tabindex="0">20</div>
  </div>

  <dialog
    ref="dialog"
    v-kbd-trap="activeDialog"
    @close="activeDialog = false"
    @keydown.esc.capture.prevent
  >
    <div style="padding-block-start: 32px">
      <a href="#1" class="test">Link 1</a>
      <a href="#2" class="test">Link 2</a>
      <a href="#3" class="test">Link 3</a>
    </div>
    <button type="button" class="test" @click="activeDialog = false">Close</button>
  </dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const text = ref('text');
const active1 = ref(false);
const active2 = ref(false);
const active3 = ref(false);
const activeDialog = ref(false);
const covered3 = ref(true);
const skipCells = ref(false);
const rtl = ref(false);
const dialog = ref(null);

watch(activeDialog, (v) => {
  if (dialog.value !== null) {
    if (v === true) {
      dialog.value.showModal();
    } else {
      dialog.value.close();
    }
  }
});
</script>

<style lang="sass">
html
  padding-top: 4em
  scroll-padding: 8em 1em 1em 1em
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
  top: 8px
  left: 8px
  right: 8px
  z-index: 2
  pointer-events: none

  &[data-v-kbd-trap]:after
    position: static

  > *
    pointer-events: all
    font-size: 14px
    display: inline-block
    font-weight: bold
    font-variant: small-caps
    color: #f63
    padding: 0 .4em 0 .1em
    box-shadow: 0 0 3px 1px #333
    cursor: pointer
    background-color: #eee
    margin-inline-end: 8px
    margin-block-end: 8px
    line-height: 2em

    input[type="checkbox"]
      width: 1.1em
      height: 1.1em
      transform: translateY(.2em)

  > a
    color: #36f
    text-decoration: none

    > span
      text-decoration: underline

    &:before
      content: '\1f517'
      padding: 4px

.description
  position: absolute
  inset-inline-start: 16px
  inset-block-start: 1px
  font-weight: bold
  font-variant: small-caps
  color: #36f
  pointer-events: none

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%

table.calendar
  margin: 32px 16px
  border-collapse: collapse

  tbody
    th,
    td
      padding: 12px

    td
      border: 1px solid #ccc
      text-align: center
      color: #ccc

      &[tabindex]:not([tabindex^="-"])
        color: #000

      &:focus
        background-color: #6e66

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
    background-color: #ee66

  &:focus-visible
    background-color: #6e66

.test-covered
  position: relative

  &__cover
    position: absolute
    left: 0
    right: 0
    top: -8px
    bottom: -8px
    padding: 8px
    background: #c633
    text-align: center
    color: #c63
    font-size: 1.5em
    font-variant: small-caps
    font-weight: bold
</style>
