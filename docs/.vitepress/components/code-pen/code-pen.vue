<template>
  <article v-bind="$attrs" class="code-pen">
    <div class="code-pen__header" v-if="title || desc">
      <div class="code-pen__header-title">{{ title }}</div>
      <div class="code-pen__header-desc">{{ desc }}</div>
    </div>

    <component
      v-if="component !== null"
      :is="component"
      class="code-pen__component"
    />

    <div class="code-pen__actions">
      <!-- <button @click="openCodePen">Open in CodePen</button> -->

      <span class="spacer" />

      <button @click="copyCode">{{ copyCodeDone === true ? 'Copied!' : 'Copy code' }}</button>

      <span class="separator" />

      <button @click="sourceToggle">&lt;/&gt;</button>
    </div>

    <div v-if="sourceExpanded" class="code-pen__source">
      <slot />
    </div>
  </article>
</template>

<script setup>
import { ref, markRaw } from 'vue';

import useCopyCode from './use-copy-code.js';
import './code-pen.sass';

const props = defineProps({
  example: String,

  title: {
    type: String,
    default: '',
  },

  desc: {
    type: String,
    default: '',
  },

  sourceExpanded: Boolean,
});

const codePenSrc = `../../../${ props.example }`;

const component = ref(null);
const importCodePenComponent = import.meta.glob('../../../**/*.vue');
importCodePenComponent[codePenSrc]().then((obj) => {
  component.value = markRaw(obj.default);
});

const source = ref(null);
const importCodePenSource = import.meta.glob('../../../**/*.vue', { as: 'raw' });
source.value = decodeURIComponent(importCodePenSource[codePenSrc]);
const sourceExpanded = ref(props.sourceExpanded === true);
const sourceToggle = () => {
  sourceExpanded.value = sourceExpanded.value !== true;
};

// const openCodePen = () => {};

const { showTip: copyCodeDone, copyCode } = useCopyCode(source.value);
</script>
