import DefaultTheme from 'vitepress/theme';

import CodePen from '../components/code-pen/code-pen.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('CodePen', CodePen);
  },
};
