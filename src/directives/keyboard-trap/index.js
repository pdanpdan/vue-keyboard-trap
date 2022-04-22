import * as Vue from 'vue';

import directiveFactory from './directive';

const { markRaw } = Vue;

const directivePlugin = {
  install(app, options) {
    const { name, directive } = directiveFactory(options, markRaw);

    app.directive(name, directive);
  },
};

export default directivePlugin;

const VueKeyboardTrapDirectiveFactory = (options) => {
  directiveFactory(options, markRaw);
};

export {
  directivePlugin as VueKeyboardTrapDirectivePlugin,
  VueKeyboardTrapDirectiveFactory,
};
