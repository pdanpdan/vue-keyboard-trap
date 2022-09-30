import * as Vue from 'vue';

import directiveFactory from './directive';

const { markRaw, version } = Vue;

const directivePlugin = {
  install(app, options) {
    const { name, directive } = directiveFactory(options, markRaw);

    app.directive(name, directive);
  },
};

export default directivePlugin;

function isVue2() {
  return version?.startsWith('2.');
}

const VueKeyboardTrapDirectiveFactory = (options) => directiveFactory(options, (isVue2()) ? undefined : markRaw);

export {
  directivePlugin as VueKeyboardTrapDirectivePlugin,
  VueKeyboardTrapDirectiveFactory,
};
