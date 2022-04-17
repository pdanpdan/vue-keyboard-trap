---
title: Guide
---

## Install

```bash
yarn add https://github.com/pdanpdan/vue-keyboard-trap
```
or
```bash
npm install https://github.com/pdanpdan/vue-keyboard-trap
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

or included in specific components
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

The directive does not require any CSS styles to work, but for cosmetic purposes some example styles are provided in `dist/styles/VueKeyboardTrapDirective.sass`.

```javascript
import 'vue-keyboard-trap/dist/styles/VueKeyboardTrapDirective.sass';
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

If you want you can access the SASS cosmetic style from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/VueKeyboardTrapDirective.sass](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@latest/dist/styles/VueKeyboardTrapDirective.sass).

### Directive configuration options

- `name`: snake-case name of the directive (without `v-` prefix) - default `kbd-trap`
- `ctxName`: key used to store context on element - default `__v${ PascalCase from name }`
- `datasetName`: camelCase name of the `data-attribute` to be set on element when trap is enabled - default `v${ PascalCase from name}`
- `focusableSelector`: CSS selector for focusable elements
- `rovingSkipSelector`: CSS selector for elements that should not respond to roving key navigation (input, textarea, ...)
- `gridSkipSelector`: CSS selector that will be applied in .roving.grid mode to exclude elements - must be a series of `:not()` selectors
- `autofocusSelector`: CSS selector for the elements that should be autofocused
- `trapTabIndex`: tabIndex value to be used when trap element has a tabIndex of -1 and has no `tabindex` attribute (default -9999)

### Dynamic enable/disable

Use the value of the directive (boolean) to enable/disable it.

```html
<div v-kbd-trap="directiveEnabled">
```

The modifiers are reactive so if you use render functions you can dynamically change the behaviour.

### Directive modifiers

- `.autofocus` - autofocuses the element with `[autofocus]` or `[data-autofocus]` attribute when the directive is mounted or enabled
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

### RTL / LTR

The directive checks the closest parent DOM Element of the active element that has a `[dir="rtl"]` or `[dir="ltr`]` attribute.

If the direction is RTL the `ARROW_LEFT` and `ARROW_RIGHT` keys move in reverse (according to document order of the focusable elements) but consistent to the way the elements are order on screen.

## Develpment

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
