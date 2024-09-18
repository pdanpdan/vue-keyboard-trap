---
title: Guide
---

# VueKeyboardTrap (vue-keyboard-trap)

[![License: MIT](https://img.shields.io/github/license/pdanpdan/vue-keyboard-trap?style=for-the-badge)](https://opensource.org/licenses/MIT) &nbsp;
[![minzip](https://img.shields.io/bundlephobia/minzip/@pdanpdan/vue-keyboard-trap/latest?style=for-the-badge)](https://bundlephobia.com/result?p=@pdanpdan/vue-keyboard-trap) &nbsp;
![github release](https://img.shields.io/github/v/tag/pdanpdan/vue-keyboard-trap?sort=semver&style=for-the-badge) &nbsp;
![jsdelivr hits](https://img.shields.io/jsdelivr/gh/hm/pdanpdan/vue-keyboard-trap?style=for-the-badge) &nbsp;
![npm release](https://img.shields.io/npm/v/@pdanpdan/vue-keyboard-trap?style=for-the-badge) &nbsp;
![npm downloads](https://img.shields.io/npm/dm/@pdanpdan/vue-keyboard-trap?style=for-the-badge)

## Project description

Vue directive and composable for keyboard navigation - roving movement and trapping inside container.

Works both for Vue3 and Vue2, as a directive (`v-kbd-trap`) or as a composable (`useKeyboardTrap`).

## Install

::: code-group

```bash [pnpm] :no-line-numbers
pnpm add @pdanpdan/vue-keyboard-trap
```

```bash [yarn] :no-line-numbers
yarn add @pdanpdan/vue-keyboard-trap
```

```bash [npm] :no-line-numbers
npm install @pdanpdan/vue-keyboard-trap
```

:::

## Playground

[Demo codepen](https://codepen.io/pdanpdan/pen/MWrzLdM)

## Usage

### Usage as ESM

#### As composable (both Vue3 and Vue2)

::: code-group

```html{3,5-8,11-20,24} [Vue3 and Vue2]
<script setup>
  import { ref } from 'vue';
  import { useKeyboardTrapFactory } from '@pdanpdan/vue-keyboard-trap'; // [!code focus]

  // you can do this in another file and import the configured `useKeyboardTrap`
  const useKeyboardTrap = useKeyboardTrapFactory({ // [!code focus]
    // ...options if required
  }); // [!code focus]

  const elRef = ref(null);
  useKeyboardTrap( // [!code focus]
    // element (reactive)
    elRef, // [!code focus]
    // modifiers (optional, reactive, default all modifiers are false)
    {
      roving: true,
    },
    // active (optional, reactive, default true)
    true
  ); // [!code focus]
</script>

<template>
  <div ref="elRef"> // [!code focus]
    ...
  </div>
</template>
```

:::

#### As plugin

::: code-group

```javascript{2,7-9} [Vue3]
import { createApp } from 'vue';
import { VueKeyboardTrapDirectivePlugin } from '@pdanpdan/vue-keyboard-trap'; // [!code focus]
import App from './App.vue';

const app = createApp(App);

app.use(VueKeyboardTrapDirectivePlugin, { // [!code focus:3]
  // ...options if required
});

app.mount('#app');
```

```javascript{2,5-7} [Vue2]
import Vue from 'vue';
import { VueKeyboardTrapDirectivePlugin } from '@pdanpdan/vue-keyboard-trap'; // [!code focus]
import App from './App.vue';

Vue.use(VueKeyboardTrapDirectivePlugin, { // [!code focus:3]
  // ...options if required
});

new Vue({
  el: '#app',
});
```

:::

#### Include in specific components

::: code-group

```html{2,4-6} [Vue3 script setup]
<script setup>
  import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // [!code focus]

  const vKbdTrap = VueKeyboardTrapDirectiveFactory({ // [!code focus:3]
    // ...options if required
  }).directive;
</script>
```

```html{3,5-7,10-12} [Vue3 script]
<script>
  import { defineComponent } from 'vue';
  import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // [!code focus]

  const KbdTrap = VueKeyboardTrapDirectiveFactory({ // [!code focus:3]
    // ...options if required
  }).directive;

  export default defineComponent({
    directives: { // [!code focus:3]
      KbdTrap,
    },
  });
</script>
```

```html{2,4-6,9-11} [Vue2]
<script>
  import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // [!code focus]

  const KbdTrap = VueKeyboardTrapDirectiveFactory({ // [!code focus:3]
    // ...options if required
  }).directive;

  export default {
    directives: { // [!code focus:3]
      KbdTrap,
    },
  };
</script>
```

:::

#### User hint styles (cosmetic)

The directive does not require any CSS styles to work, but for cosmetic purposes (as user hints) some example styles are provided in `dist/styles/index.sass`.

::: code-group

```javascript [Javascript] :no-line-numbers
import '@pdanpdan/vue-keyboard-trap/styles';
```

```sass [SASS] :no-line-numbers
@import '@pdanpdan/vue-keyboard-trap/styles'
```

:::

If the `/styles` export is not used by your bundler:

::: code-group

```javascript [Javascript] :no-line-numbers
import '@pdanpdan/vue-keyboard-trap/dist/styles/index.sass';
```

```sass [SASS] :no-line-numbers
@import '@pdanpdan/vue-keyboard-trap/dist/styles/index.sass'
```

:::

### Usage as UMD

Load the javascript from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js).

It will expose a global object `VueKeyboardTrap` with `VueKeyboardTrapDirectivePlugin` and `VueKeyboardTrapDirectiveFactory` keys.

In order to work it requires that `VueDemi` is already loaded on the page. You can do it like this:

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-demi/lib/index.iife.js"></script>
<script src="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"></script>

```

#### As composable

::: code-group
```javascript{3-6,9-18} [Vue3 and Vue2]
const { ref } = Vue;

const { useKeyboardTrapFactory } = VueKeyboardTrap; // [!code focus:3]
const useKeyboardTrap = useKeyboardTrapFactory({ // [!code focus:3]
  // ...options if required
}); // [!code focus]

const elRef = ref(null);
useKeyboardTrap( // [!code focus:3]
  // element (reactive)
  elRef, // [!code focus]
  // modifiers (optional, reactive, default all modifiers are false)
  {
    roving: true,
  },
  // active (optional, reactive, default true)
  true
); // [!code focus]
```

:::

#### As plugin

::: code-group

```javascript{2,6-8} [Vue3]
const { createApp } = Vue;
const { VueKeyboardTrapDirectivePlugin } = VueKeyboardTrap; // [!code focus]

const app = createApp({});

app.use(VueKeyboardTrapDirectivePlugin, { // [!code focus:3]
  // ...options if required
});

app.mount('#app');
```

```javascript{1,3-5} [Vue2]
const { VueKeyboardTrapDirectivePlugin } = VueKeyboardTrap; // [!code focus]

Vue.use(VueKeyboardTrapDirectivePlugin, { // [!code focus:3]
  // ...options if required
});

new Vue({
  el: '#app',
});
```

:::

#### As directive

::: code-group
```javascript{2,6-8,10} [Vue3]
const { createApp } = Vue;
const { VueKeyboardTrapDirectiveFactory } = VueKeyboardTrap; // [!code focus]

const app = createApp({});

const { name, directive } = VueKeyboardTrapDirectiveFactory({ // [!code focus:3]
  // ...options if required
});

app.directive(name, directive); // [!code focus]

app.mount('#app');
```

```javascript{1,3-5,7} [Vue2]
const { VueKeyboardTrapDirectiveFactory } = VueKeyboardTrap; // [!code focus]

const { name, directive } = VueKeyboardTrapDirectiveFactory({ // [!code focus:3]
  // ...options if required
});

Vue.directive(name, directive); // [!code focus]
```

:::

#### User hint styles (cosmetic)

If you want you can access the CSS cosmetic style (user hints) from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.css](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.css).

### Directive configuration options

| Option | Description | Default |
|--------|-------------|:-------:|
| `name` | snake-case name of the directive (without `v-` prefix) | `kbd-trap` |
| `datasetName` | camelCase name of the `data-attribute` to be set on element when trap is enabled | `v${PascalCase from name}` |
| `focusableSelector` | CSS selector for focusable elements | [see here](#default-focusableselector) |
| `rovingSkipSelector` | CSS selector for elements that should not respond to roving key navigation (input, textarea, ...) | [see here](#default-rovingskipselector) |
| `gridSkipSelector` | CSS selector that will be applied in .roving.grid mode to exclude elements - must be a series of `:not()` selectors | [see here](#default-gridskipselector) |
| `autofocusSelector` | CSS selector for the elements that should be autofocused | [see here](#default-autofocusselector) |
| `trapTabIndex` | tabIndex value to be used when trap element has a tabIndex of -1 and has no `tabindex` attribute | -9999 |

#### Default `focusableSelector`:

```css
:focus,
a[href]:not([tabindex^="-"]),
area[href]:not([tabindex^="-"]),
video[controls]:not([tabindex^="-"]),
audio[controls]:not([tabindex^="-"]),
iframe:not([tabindex^="-"]),
[tabindex]:not(slot):not([tabindex^="-"]),
[contenteditable]:not([contenteditable="false"]):not([tabindex^="-"]),
details > summary:first-of-type:not([tabindex^="-"]),
input:not([type="hidden"]):not(fieldset[disabled] input):not([disabled]):not([tabindex^="-"]),
select:not(fieldset[disabled] input):not([disabled]):not([tabindex^="-"]),
textarea:not(fieldset[disabled] input):not([disabled]):not([tabindex^="-"]),
button:not(fieldset[disabled] input):not([disabled]):not([tabindex^="-"]),
fieldset[disabled]:not(fieldset[disabled] fieldset) > legend input:not([type="hidden"]):not([disabled]):not([tabindex^="-"]),
fieldset[disabled]:not(fieldset[disabled] fieldset) > legend select:not([disabled]):not([tabindex^="-"]),
fieldset[disabled]:not(fieldset[disabled] fieldset) > legend textarea:not([disabled]):not([tabindex^="-"]),
fieldset[disabled]:not(fieldset[disabled] fieldset) > legend button:not([disabled]):not([tabindex^="-"]),
[class*="focusable"]:not([disabled]):not([tabindex^="-"])
```

By default `a` tags without href are not focusable - add a `tabindex="0"` attribute on them to make them focusable.
This can be done for all other elements if you want them to be focusable.

#### Default `rovingSkipSelector`:

```css
input:not([disabled]):not([type="button"]):not([type="checkbox"]):not([type="file"]):not([type="image"]):not([type="radio"]):not([type="reset"]):not([type="submit"]),
select:not([disabled]),
select:not([disabled]) *,
textarea:not([disabled]),
[contenteditable]:not([contenteditable="false"]),
[contenteditable]:not([contenteditable="false"]) *
```

#### Default `gridSkipSelector`:

```css
:not([disabled]),
:not([tabindex^="-"])
```

#### Default `autofocusSelector`:

```css
[autofocus]:not([disabled]):not([autofocus="false"]),
[data-autofocus]:not([disabled]):not([data-autofocus="false"])
```

### Dynamic enable/disable

Use the value of the directive (boolean) to enable/disable it.

```html
<div v-kbd-trap="directiveEnabled">
```

The modifiers are reactive so if you use render functions you can dynamically change the behaviour.

### Directive modifiers

| Modifier | Description |
|----------|-------------|
| `.autofocus` | autofocuses the first element that matches [autofocusSelector](#default-autofocusselector) or (if no such element is found) the first focusable child element **when the directive is mounted or enabled** (**only if it not covered by another element**) |
| `.roving` or `.roving.vertical.horizontal` | allow roving navigation (`Home`, `End`, `ArrowKeys`) |
| `.roving.vertical` | allow roving navigation (`Home`, `End`, `ArrowUp`, `ArrowDown`) |
| `.roving.horizontal` | allow roving navigation (`Home`, `End`, `ArrowLeft`, `ArrowRight`) |
| `.roving.grid` | allow roving navigation (`Home`, `End`, `ArrowKeys`) using dataset attrs on elements `[data-${camelCase from datasetName}-(row/col)]`; `[data-${camelCase from datasetName}-(row/col)~="*"]` is a catchall |
| `.roving` used on an element with `[role="grid"]` | allow roving navigation (`Home`, `End`, `ArrowKeys`) using role attrs on elements `[role="row/gridcell"]` |
| `.roving.tabinside` | `Tab` key navigates to next/prev element inside trap (by default `Tab` key navigates to next/prev element outside trap in roving mode) |
| `.escrefocus` | refocus element that was in focus before activating the trap on `Esc` |
| `.escexits` | refocus a parent trap on `Esc` (has priority over `.escrefocus`) |
| `.indexorder` used without `.grid` modifier and on elements without `[role="grid"]` | force usage of order in `tabindex` (`tabindex` in ascending order and then DOM order) |

## Keyboard navigation

- `TAB` / `SHIFT`+`TAB` key
  - moves to next / previous focusable element inside the trap group (moves from last one to first one or from first one to last one when no more focusable elements are available in the group)
  - if `.roving` modifier is used moves to next / previous trap group or focusable element outside the current trap group
  - if `.roving.tabinside` modifiers are used then move inside the trap group
  - if `.indexorder` modifier is used without `.grid` and on elements without `[role="grid"]` - the order of tabindex will be used
- `ESC` key
  - disables / enables the current tab group
  - if `.escexits` modifier is used then refocus the last active focusable element in a parent trap group
  - if `.escrefocus` modifier is used then refocus the last focusable element that was active before the current trap group got focus
  - if `.escexits` or `.escrefocus` are used then press `SHIFT + ESC` to disable / enable the current tab group
- `HOME` / `END` when `.roving` modifier is used
  - move to first / last focusable element in the current trap group
- `ARROW_KEYS` when `.roving` modifier is used (`.roving.horizontal.vertical` is the same as `.roving`)
  - if only `.horizontal` modifier is used then only `ARROW_LEFT` / `ARROW_RIGHT` keys can be used
  - if only `.vertical` modifier is used then only `ARROW_UP` / `ARROW_DOWN` keys can be used
  - `ARROW_LEFT` / `ARROW_UP` move to the previous focusable element inside the trap group
  - `ARROW_RIGHT` / `ARROW_DOWN` move to the next focusable element inside the trap group
  - if `.indexorder` modifier is used without `.grid` and on elements without `[role="grid"]` - the order of tabindex will be used
- `ARROW_KEYS` when `.roving.grid` modifiers are used or `.roving` modifier on a trap element with [role="grid"]
  - move in the grid inside the current trap group

### Keyboard navigation inside `.roving.grid` trap groups

In order to specify the navigation pattern you must use 2 dataset attributes on the focusable elements inside the `.roving` trap group:

- `data-v-kbd-trap-row` specifies the numeric identifier of the row the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)
- `data-v-kbd-trap-col` specifies the numeric identifier of the column the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)

Any or both attributes can have a value of `*` that means that it is an alement that can be focused from elements having any coresponding (row or col) attribute.

#### Navigation rules

- the first focusable element on the row / col (based on direction of movement) is focused
- an element with `*` for row or col is considered to belong to any row / col

### Keyboard navigation inside `.roving` trap groups with `[role="grid"]`

In order to specify the navigation pattern you must use role attributes `[role="row"]` and `[role="gridcell"]`.

All focusable element must have `[role="gridcell"]` and must be inside `[role="row"]` elements inside `[role="grid"]` trap element.

The `gridcell`s will be considered inline-start aligned in every row.

#### Navigation rules

- the first focusable element on the row / col (based on direction of movement) is focused

### RTL / LTR

The directive checks the closest parent DOM Element of the active element that has a `[dir="rtl"]` or `[dir="ltr`]` attribute.

If the direction is RTL the `ARROW_LEFT` and `ARROW_RIGHT` keys move in reverse (according to document order of the focusable elements) but consistent to the way the elements are ordered on screen.

## CSS (visual hints for users)

The directive does not require any styles, but it might help the users to have visual hints for navigation.

A default style is provided as SASS in `dist/styles/index.sass` (can be imported as `import '@pdapdan/vue-keyboard-trap/styles'`, as `import '@pdapdan/vue-keyboard-trap/dist/styles/index.sass'` (if the bundler does not use the `/styles` export) or included from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass)).

The default style is also provided as CSS in `dist/styles/index.css` (can be imported as `import '@pdapdan/vue-keyboard-trap/dist/styles/index.css'` or included from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.css](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.css)).

There are some CSS variables that can be used to customize the aspect of the hints:

| Variable | Role | Default |
|----------|------|:-------:|
| `--color-v-kbd-trap-enabled` | the text color when directive is enabled | `#c33` <span style="color: #c33">■</span> |
| `--color-v-kbd-trap-disabled` | the text color when directive is disabled | `#999` <span style="color: #999">■</span> |
| `--color-v-kbd-trap-background` | the background color of the hint area | `#eeee` <span style="color: #eeee">■</span> |
| `--text-v-kbd-trap-separator` | separator between elements | `/` |
| `--text-v-kbd-trap-enabled` | indicator for enabled but not active trap | `Trap` |
| `--text-v-kbd-trap-esc` | indicator for `Esc` key active | `Esc` |
| `--text-v-kbd-trap-esc-refocus` | indicator for `Esc` key active when it refocuses | `Esc\2949` / `Esc⥉` |
| `--text-v-kbd-trap-esc-exits` | indicator for `Esc` key active when it exits trap | `Esc\2923` / `Esc⤣` |
| `--text-v-kbd-trap-tab` | indicator for `Tab` key active inside trap | `Tab` |
| `--text-v-kbd-trap-tab-exits` | indicator for `Tab` key active when it exits trap | `Tab\21C5` / `Tab⇅` |
| `--text-v-kbd-trap-grid` | indicator for grid mode active | `\229E` / `⊞` |
| `--text-v-kbd-trap-arrows-all` | indicator for move keys active in roving mode | `\2962\2963\2965\2964` / `⥢⥣⥥⥤` |
| `--text-v-kbd-trap-arrows-horizontal` | indicator for move keys active in roving mode horizontal | `\2962\2964` / `⥢⥤` |
| `--text-v-kbd-trap-arrows-vertical` | indicator for move keys active in roving mode vertical | `\2963\2965` / `⥣⥥` |

In the default style the hint is positioned on the top-right corner of the trap group.

<<< @/../src/public/styles/index.sass

## Development

### Install the dependencies

```bash :no-line-numbers
pnpm i
```

### Start development mode (hot-code reloading, error reporting, etc.)

```bash :no-line-numbers
pnpm dev
```

### Lint the files

```bash :no-line-numbers
pnpm lint
```

### Build for production

```bash :no-line-numbers
pnpm build
```

## Source code, issues, bug reports, feature requests

[Vue Keyboard Trap (vue-keyboard-trap)](https://github.com/pdanpdan/vue-keyboard-trap)

## Author

* Name: Dan Popescu (PDan)
* Email: [pdan.popescu@gmail.com](mailto:pdan.popescu@gmail.com)
* Website: https://github.com/pdanpdan/
* Github: [@pdanpdan](https://github.com/pdanpdan)

## License

Copyright © 2022-present [Dan Popescu](https://github.com/pdanpdan).

This application is distributed under [![License: MIT](https://img.shields.io/github/license/pdanpdan/vue-keyboard-trap?style=for-the-badge)](https://opensource.org/licenses/MIT), see LICENSE for more information.
