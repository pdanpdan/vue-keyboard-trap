<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">Before</div>

    <div class="test">
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
    background-color: var(--vp-button-alt-bg, #f1f1f1)

table.calendar
  margin: 32px 16px
  border-collapse: collapse

  [role="columnheader"],
  [role="rowheader"]
    color: var(--vp-c-text-2, rgba(60, 60, 60, 0.7))
    background-color: var(--vp-c-text-inverse-2, rgba(235, 235, 235, 0.6))
    font-style: italic

  [role="rowheader"]
    font-size: .8em

  tbody
    th,
    td
      padding: 12px

    td
      border: 1px solid var(--vp-c-text-4, rgba(60, 60, 60, 0.18))
      text-align: center
      color: var(--vp-c-text-4, rgba(60, 60, 60, 0.18))
      background-color: var(--vp-c-text-inverse-1, rgba(255, 255, 255, 0.87))

      &[tabindex]:where(:not([tabindex^="-"]))
        color: #999

      &:focus
        color: var(--vp-c-text-1)
        background-color: var(--vp-button-alt-bg, #f1f1f1)
</style>
