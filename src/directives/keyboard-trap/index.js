import * as Vue from 'vue';

import directiveFactory from './directive';

const { markRaw, version } = Vue;
const vue3MarkRaw = version.indexOf('2.') === 0 ? undefined : markRaw;

const directivePlugin = {
  install(app, options) {
    const { name, directive } = directiveFactory(options, vue3MarkRaw);

    app.directive(name, directive);
  },
};

export default directivePlugin;

const VueKeyboardTrapDirectiveFactory = (options) => directiveFactory(options, vue3MarkRaw);

export {
  directivePlugin as VueKeyboardTrapDirectivePlugin,
  VueKeyboardTrapDirectiveFactory,
};
