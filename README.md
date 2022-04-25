# VueKeyboardTrap (vue-keyboard-trap)

[![License: MIT](https://img.shields.io/github/license/pdanpdan/vue-keyboard-trap?style=for-the-badge)](https://opensource.org/licenses/MIT) &nbsp;
[![minzip](https://img.shields.io/bundlephobia/minzip/@pdanpdan/vue-keyboard-trap/latest?style=for-the-badge)](https://bundlephobia.com/result?p=@pdanpdan/vue-keyboard-trap) &nbsp;
![github release](https://img.shields.io/github/v/tag/pdanpdan/vue-keyboard-trap?sort=semver&style=for-the-badge) &nbsp;
![jsdelivr hits](https://img.shields.io/jsdelivr/gh/hm/pdanpdan/vue-keyboard-trap?style=for-the-badge) &nbsp;
![npm release](https://img.shields.io/npm/v/@pdanpdan/vue-keyboard-trap?style=for-the-badge) &nbsp;
![npm downloads](https://img.shields.io/npm/dm/@pdanpdan/vue-keyboard-trap?style=for-the-badge)

## Project description

Vue directive for keyboard navigation - roving movement and trapping inside container.

Works both for Vue3 and Vue2.

[Demo codepen](https://codepen.io/pdanpdan/pen/MWrzLdM)

[Docs and examples](https://pdanpdan.github.io/vue-keyboard-trap/)

[Source code, Issues, Discussions](https://github.com/pdanpdan/vue-keyboard-trap)

## Install

```bash
yarn add @pdanpdan/vue-keyboard-trap
```
or
```bash
npm install @pdanpdan/vue-keyboard-trap
```

## Playground

[Demo codepen](https://codepen.io/pdanpdan/pen/MWrzLdM)

## Usage

### Usage as ESM

Use as plugin on Vue3
```javascript{2,7-9}
import { createApp } from 'vue';
import { VueKeyboardTrapDirectivePlugin } from '@pdanpdan/vue-keyboard-trap';
import App from './App.vue';

const app = createApp(App);

app.use(VueKeyboardTrapDirectivePlugin, {
  // ...options if required
});

app.mount('#app');
```

or as plugin on Vue2
```javascript{2,5-7}
import Vue from 'vue';
import { VueKeyboardTrapDirectivePlugin } from '@pdanpdan/vue-keyboard-trap';
import App from './App.vue';

Vue.use(VueKeyboardTrapDirectivePlugin, {
  // ...options if required
});

new Vue({
  el: '#app',
});
```

or included in specific components (Vue3 script)
```html{3,5-7,10-12}
<script>
  import { defineComponent } from 'vue';
  import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap';

  const KbdTrap = VueKeyboardTrapDirectiveFactory({
    // ...options if required
  }).directive;

  export default defineComponent({
    directives: {
      KbdTrap,
    },
  });
</script>
```

or included in specific components (Vue3 script setup)
```html{2,4-6}
<script setup>
  import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap';

  const vKbdTrap = VueKeyboardTrapDirectiveFactory({
    // ...options if required
  }).directive;
</script>
```

or included in specific components (Vue2)
```html{2,4-6,9-11}
<script>
  import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap';

  const KbdTrap = VueKeyboardTrapDirectiveFactory({
    // ...options if required
  }).directive;

  export default {
    directives: {
      KbdTrap,
    },
  };
</script>
```

The directive does not require any CSS styles to work, but for cosmetic purposes (as user hints) some example styles are provided in `dist/styles/index.sass`.

in Javascript
```javascript
import '@pdanpdan/vue-keyboard-trap/styles';
```

or in SASS
```sass
@import '@pdanpdan/vue-keyboard-trap/styles'
```

or (if the `/styles` export is not used by your bundler)

in Javascript
```javascript
import '@pdanpdan/vue-keyboard-trap/dist/styles/index.sass';
```

or in SASS
```sass
@import '@pdanpdan/vue-keyboard-trap/dist/styles/index.sass'
```

### Usage as UMD

Load the javascript from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js).

It will expose a global object `VueKeyboardTrap` with `VueKeyboardTrapDirectivePlugin` and `VueKeyboardTrapDirectiveFactory` keys.

Use as plugin on Vue3
```javascript{2,6-8}
const { createApp } = Vue;
const { VueKeyboardTrapDirectivePlugin } = VueKeyboardTrap;

const app = createApp({});

app.use(VueKeyboardTrapDirectivePlugin, {
  // ...options if required
});

app.mount('#app');
```

or as plugin on Vue2
```javascript{1,3-5}
const { VueKeyboardTrapDirectivePlugin } = VueKeyboardTrap;

Vue.use(VueKeyboardTrapDirectivePlugin, {
  // ...options if required
});

new Vue({
  el: '#app',
});
```

or as directive on Vue3
```javascript{2,6-8,10}
const { createApp } = Vue;
const { VueKeyboardTrapDirectiveFactory } = VueKeyboardTrap;

const app = createApp({});

const { name, directive } = VueKeyboardTrapDirectiveFactory({
  // ...options if required
});

app.directive(name, directive);

app.mount('#app');
```

or as directive on Vue2
```javascript{1,3-5,7}
const { VueKeyboardTrapDirectiveFactory } = VueKeyboardTrap;

const { name, directive } = VueKeyboardTrapDirectiveFactory({
  // ...options if required
});

Vue.directive(name, directive);
```

If you want you can access the SASS cosmetic style (user hints) from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass).

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
input:not([disabled]):not([tabindex^="-"]),
select:not([disabled]):not([tabindex^="-"]),
textarea:not([disabled]):not([tabindex^="-"]),
button:not([disabled]):not([tabindex^="-"]),
iframe:not([tabindex^="-"]),
[tabindex]:not([tabindex^="-"]),
[contenteditable]:not([tabindex^="-"]):not([contenteditable="false"]),
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

A default style is provided in `dist/styles/index.sass` (can be imported as `import '@pdapdan/vue-keyboard-trap/styles'`, as `import '@pdapdan/vue-keyboard-trap/dist/styles/index.sass'` (if the bundler does not use the `/styles` export) or included from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass)).

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

```bash
yarn
```

### Start development mode (hot-code reloading, error reporting, etc.)

```bash
yarn dev
```

### Lint the files

```bash
yarn lint
```

### Build for production

```bash
yarn build
```

## Source code, issues, bug reports, feature requests

[Vue Keyboard Trap (vue-keyboard-trap)](https://github.com/pdanpdan/vue-keyboard-trap)

## Author

* Name: Dan Popescu (PDan)
* Email: <pdan.popescu@gmail.com>
* Website: https://github.com/pdanpdan/
* Github: [@pdanpdan](https://github.com/pdanpdan)

## License

Copyright © 2022-present [Dan Popescu](https://github.com/pdanpdan).

This application is distributed under [![License: MIT](https://img.shields.io/github/license/pdanpdan/vue-keyboard-trap?style=for-the-badge)](https://opensource.org/licenses/MIT), see LICENSE for more information.
