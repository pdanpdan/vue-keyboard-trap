import { createApp } from 'vue';
import {
  VueKeyboardTrapDirectivePlugin,
  // VueKeyboardTrapDirectiveFactory,
} from './exports.js';
import App from './App.vue';

import './public/styles/index.sass';

const app = createApp(App);

app.use(VueKeyboardTrapDirectivePlugin);

// const { name, directive } = VueKeyboardTrapDirectiveFactory();
// app.directive(name, directive);

app.mount('#app');
