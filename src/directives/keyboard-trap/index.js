import { markRaw } from 'vue';
import directiveFactory from './directive';

const directivePlugin = {
  install(app, options) {
    const { name, directive } = directiveFactory(options, markRaw);

    app.directive(name, directive);
  },
};

export default directivePlugin;

export {
  directivePlugin as VueKeyboardTrapDirectivePlugin,
  directiveFactory as VueKeyboardTrapDirectiveFactory,
};
