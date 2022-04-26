import DefaultTheme from 'vitepress/theme';

import './custom.sass';

import InteractiveCode from '../components/interactive-code/interactive-code.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('InteractiveCode', InteractiveCode);
  },
};
