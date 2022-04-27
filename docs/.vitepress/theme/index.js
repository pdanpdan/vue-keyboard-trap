import DefaultTheme from 'vitepress/theme';

import './custom.sass';

import InteractiveCode from '../components/interactive-code/interactive-code.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('InteractiveCode', InteractiveCode);
  },
};
