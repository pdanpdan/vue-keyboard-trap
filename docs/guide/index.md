---
title: Guide
---

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

Can be globally registered on the App (plugin mode)
```javascript
import { createApp } from 'vue';
import { VueKeyboardTrapDirectivePlugin } from 'vue-keyboard-trap';
import App from './App.vue';

const app = createApp(App);

app.use(VueKeyboardTrapDirectivePlugin, {
  // ...options if required
});

app.mount('#app');
```

or included in specific components (script)
```javascript
import { defineComponent } from 'vue';
import { VueKeyboardTrapDirectiveFactory } from 'vue-keyboard-trap';

const KbdTrap = VueKeyboardTrapDirectiveFactory({
  // ...options if required
}).directive;

export default defineComponent({
  directives: {
    KbdTrap,
  },
});
```

or included in specific components (script setup)
```javascript
import { VueKeyboardTrapDirectiveFactory } from 'vue-keyboard-trap';

const vKbdTrap = VueKeyboardTrapDirectiveFactory({
  // ...options if required
}).directive;
```

The directive does not require any CSS styles to work, but for cosmetic purposes some example styles are provided in `dist/styles/index.sass`.

```javascript
import '@pdanpdan/vue-keyboard-trap/styles';
```

### Usage as UMD

Load the javascript from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/index.umd.js](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/index.umd.js).

It will expose a global object `VueKeyboardTrap` with `VueKeyboardTrap.VueKeyboardTrapDirectivePlugin` and `VueKeyboardTrap.VueKeyboardTrapDirectiveFactory`.

```javascript
const { createApp } = Vue;
const { VueKeyboardTrapDirectivePlugin } = VueKeyboardTrap;

const app = createApp({});

app.use(VueKeyboardTrapDirectivePlugin, {
  // ...options if required
});

app.mount('#q-app');
```

or as directive
```javascript
const { createApp } = Vue;
const { VueKeyboardTrapDirectiveFactory } = VueKeyboardTrap;

const app = createApp({});

const { name, directive } = VueKeyboardTrapDirectiveFactory({
  // ...options if required
});

app.directive(name, directive);

app.mount('#q-app');
```

If you want you can access the SASS cosmetic style from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.sass](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.sass).

### Directive configuration options

- `name`: snake-case name of the directive (without `v-` prefix) - default `kbd-trap`
- `datasetName`: camelCase name of the `data-attribute` to be set on element when trap is enabled - default `v${ PascalCase from name}`
- `focusableSelector`: CSS selector for focusable elements
- `rovingSkipSelector`: CSS selector for elements that should not respond to roving key navigation (input, textarea, ...)
- `gridSkipSelector`: CSS selector that will be applied in .roving.grid mode to exclude elements - must be a series of `:not()` selectors
- `autofocusSelector`: CSS selector for the elements that should be autofocused
- `trapTabIndex`: tabIndex value to be used when trap element has a tabIndex of -1 and has no `tabindex` attribute (default -9999)

Default focusableSelector:

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

Default rovingSkipSelector:

```css
input:not([disabled]):not([type="button"]):not([type="checkbox"]):not([type="file"]):not([type="image"]):not([type="radio"]):not([type="reset"]):not([type="submit"]),
select:not([disabled]),
select:not([disabled]) *,
textarea:not([disabled]),
[contenteditable]:not([contenteditable="false"]),
[contenteditable]:not([contenteditable="false"]) *
```

Default gridSkipSelector:

```css
:not([disabled]),
:not([tabindex^="-"])
```

Default autofocusSelector:

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

- `.autofocus` - autofocuses the first element that matches `autofocusSelector` or (if no such element is found) the first focusable child element when the directive is mounted or enabled
- `.roving` (or `.roving.vertical.horizontal`) - allow roving navigation (Home, End, ArrowKeys)
- `.roving.vertical` - allow roving navigation (Home, End, ArrowUp, ArrowDown)
- `.roving.horizontal` - allow roving navigation (Home, End, ArrowLeft, ArrowRight)
- `.roving.grid` - allow roving navigation (Home, End, ArrowKeys) using dataset attrs on elements `[data-${ camelCase from datasetName }-(row|col)]`; `[data-${ camelCase from datasetName }-(row|col)~="*"]` is a catchall
- `.roving.tabinside` - Tab key navigates to next/prev element inside trap (by default Tab key navigates to next/prev element outside trap in roving mode)
- `.escrefocus` - refocus element that was in focus before activating the trap on Esc
- `.escexits` - refocus a parent trap on Esc (has priority over `.escrefocus`)

## Keyboard navigation

- `TAB` / `SHIFT`+`TAB` key
  - moves to next / previous focusable element inside the trap group (moves from last one to first one or from first one to last one when no more focusable elements are available in the group)
  - if `.roving` modifier is used moves to next / previous trap group or focusable element outside the current trap group
  - if `.roving.tabinside` modifiers are used then move inside the trap group
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
- `ARROW_KEYS` when `.roving.grid` modifiers are used
  - move in the grid inside the current trap group

### Keyboard navigation inside `.roving.grid` trap groups

In order to specify the navigation pattern you must use 2 dataset attributes on the focusable elements inside the `.roving` trap group:

- `data-v-kbd-trap-row` specifies the numeric identifier of the row the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)
- `data-v-kbd-trap-col` specifies the numeric identifier of the column the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)

Any or both attributes can have a value of `*` that means that it is an alement that can be focused from elements having any coresponding (row or col) attribute.

#### Navigation rules

- the first focusable element on the row / col (based on direction of movement) is searched
- an element with `*` for row or col is considered to belong to any row / col

### RTL / LTR

The directive checks the closest parent DOM Element of the active element that has a `[dir="rtl"]` or `[dir="ltr`]` attribute.

If the direction is RTL the `ARROW_LEFT` and `ARROW_RIGHT` keys move in reverse (according to document order of the focusable elements) but consistent to the way the elements are order on screen.

## CSS (visual hints for users)

The directive does not require any styles, but it might help the users to have visual hints for navigation.

A default style is provided in `dist/styles/index.sass` (can be imported as `import from '@pdapdan/vue-keyboard-trap/styles'` or included from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.sass](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/index.sass)).

There are 3 CSS variables that can be used to customize the aspect of the hints:

- `--color-v-kbd-trap-enabled` - the text color when directive is enabled
- `--color-v-kbd-trap-disabled` - the text color when directive is disabled
- `--color-v-kbd-trap-background` - the background color of the hint area

In the default style the hint is positioned on the top-right corner of the trap group.

```sass
// defaults
$ColorVKeyboardTrapEnabled: #c33 !default
$ColorVKeyboardTrapDisabled: #999 !default
$ColorVKeyboardTrapBackground: #eeee !default

// place your custom colors on any element and they will be applied on children
// :root
//   --color-v-kbd-trap-enabled: #c33
//   --color-v-kbd-trap-disabled: #999
//   --color-v-kbd-trap-background: #eeee

[data-v-kbd-trap]:after
  content: var(--v-kbd-trap, '') var(--v-kbd-trap-esc, '') var(--v-kbd-trap-tab, '') var(--v-kbd-trap-roving, '')
  pointer-events: none
  position: absolute
  top: 2px
  right: 2px
  font: italic small-caps bold 14px monospace
  line-height: 1em
  padding: 4px
  color: var(--color-v-kbd-trap-disabled, $ColorVKeyboardTrapDisabled)
  background-color: var(--color-v-kbd-trap-background, $ColorVKeyboardTrapBackground)
  border-radius: 2px
  z-index: 1
[data-v-kbd-trap]
  --v-kbd-trap: 'Trap'
  --v-kbd-trap-esc: ''
  --v-kbd-trap-tab: ''
  --v-kbd-trap-roving: ''
[data-v-kbd-trap]:focus-within
  --v-kbd-trap: 'Trap/'
  --v-kbd-trap-esc: 'Esc'
[data-v-kbd-trap-active]
  --v-kbd-trap: '' !important
  --v-kbd-trap-esc: 'Esc'
  --v-kbd-trap-tab: '/Tab'
  --v-kbd-trap-roving: ''
[data-v-kbd-trap-active][data-v-kbd-trap~="roving"]
  --v-kbd-trap-tab: '/Tab\21C5'
  --v-kbd-trap-roving: '/\2962\2963\2965\2964'
[data-v-kbd-trap-active][data-v-kbd-trap~="roving"][data-v-kbd-trap~="tabinside"]
  --v-kbd-trap-tab: '/Tab'
[data-v-kbd-trap-active][data-v-kbd-trap~="roving"][data-v-kbd-trap~="vertical"]
  --v-kbd-trap-roving: '/\2963\2965'
[data-v-kbd-trap-active][data-v-kbd-trap~="roving"][data-v-kbd-trap~="horizontal"]
  --v-kbd-trap-roving: '/\2962\2964'
[data-v-kbd-trap-active][data-v-kbd-trap~="roving"][data-v-kbd-trap~="grid"]
  --v-kbd-trap-roving: '/\229E'
[data-v-kbd-trap-active][data-v-kbd-trap~="escrefocus"]
  --v-kbd-trap-esc: 'Esc\2949'
[data-v-kbd-trap-active][data-v-kbd-trap~="escexits"]
  --v-kbd-trap-esc: 'Esc\2923'
[data-v-kbd-trap][tabindex="-9999"]
  outline: none
[data-v-kbd-trap][data-v-kbd-trap-active]:after
  color: var(--color-v-kbd-trap-enabled, $ColorVKeyboardTrapEnabled)
```

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
