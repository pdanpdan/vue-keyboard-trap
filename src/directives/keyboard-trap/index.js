import directiveFactory, { composableFactory } from './directive';

const VueKeyboardTrapDirectivePlugin = {
  install(app, options) {
    const { name, directive } = directiveFactory(options);

    app.directive(name, directive);
  },
};

export {
  VueKeyboardTrapDirectivePlugin,
  directiveFactory as VueKeyboardTrapDirectiveFactory,
  composableFactory as useKeyboardTrapFactory,
};

export default VueKeyboardTrapDirectivePlugin;
