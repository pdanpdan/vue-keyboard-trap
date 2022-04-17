# VueKeyboardTrap (vue-keyboard-trap) <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />

## Project description

Vue directive for keyboard navigation - roving movement and trapping inside container.

Works both for Vue3 and Vue2.

[Docs and examples](https://pdanpdan.github.io/vue-keyboard-trap/)

[Example codepen](https://codepen.io/pdanpdan/pen/MWrzLdM)

## Install

```bash
yarn add https://github.com/pdanpdan/vue-keyboard-trap
```
or
```bash
npm install https://github.com/pdanpdan/vue-keyboard-trap
```

## Usage as ESM

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

## Usage as UMD

Load the javascript from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@1/dist/index.umd.js](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@1/dist/index.umd.js).

It will expose a global object `VueKeyboardTrap` with `VueKeyboardTrap.VueKeyboardTrapDirectivePlugin` and `VueKeyboardTrap.VueKeyboardTrapDirectiveFactory`.

If you want you ca access the SASS cosmetic style from [https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@1/dist/styles/VueKeyboardTrapDirective.sass](https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap@1/dist/styles/VueKeyboardTrapDirective.sass).

## Directive configuration options

- name: snake-case name of the directive (without `v-` prefix) - default `kbd-trap`
- ctxName: key used to store context on element - default `__v${ PascalCase from name }`
- datasetName: camelCase name of the `data-attribute` to be set on element when trap is enabled - default `v${ PascalCase from name}`
- focusableSelector: CSS selector for focusable elements
- rovingSkipSelector: CSS selector for elements that should not respond to roving key navigation (input, textarea, ...)
- gridSkipSelector: CSS selector that will be applied in .roving.grid mode to exclude elements - must be a series of `:not()` selectors
- autofocusSelector: CSS selector for the elements that should be autofocused
- trapTabIndex: tabIndex value to be used when trap element has a tabIndex of -1 (default -9999)

## Dynamic enable/disable

Use the value of the directive (boolean) to enable/disable it.

```html
<div v-kbd-trap="directiveEnabled">
```

## Directive modifiers

- `.autofocus` - autofocuses the element with `[autofocus]` or `[data-autofocus]` attribute when the directive is mounted or enabled
- `.roving` (or `.roving.vertical.horizontal`) - allow roving navigation (Home, End, ArrowKeys)
- `.roving.vertical` - allow roving navigation (Home, End, ArrowUp, ArrowDown)
- `.roving.horizontal` - allow roving navigation (Home, End, ArrowLeft, ArrowRight)
- `.roving.grid` - allow roving navigation (Home, End, ArrowKeys) using dataset attrs on elements `[data-${ camelCase from datasetName }-(row|col)]`; `[data-${ camelCase from datasetName }-(row|col)~="*"]` is a catchall
- `.roving.tabinside` - Tab key navigates to next/prev element inside trap (by default Tab key navigates to next/prev element outside trap in roving mode)
- `.escrefocus` - refocus element that was in focus before activating the trap on Esc
- `.escexits` - refocus a parent trap on Esc (has priority over `.escrefocus`)

## Author

* Name: Dan Popescu (PDan)
* Email: <pdan.popescu@gmail.com>
* Website: https://github.com/pdanpdan/
* Github: [@pdanpdan](https://github.com/pdanpdan)

## License

Copyright © 2022 [Dan Popescu](https://github.com/pdanpdan).

This application is distributed under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT), see LICENSE for more information.

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

## Source code, issues, bug reports, feature requests

[Vue Keyboard Trap (vue-keyboard-trap)](https://github.com/pdanpdan/vue-keyboard-trap)
