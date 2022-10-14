<template>
  <client-only>
    <article v-bind="$attrs" class="interactive-code">
      <div class="interactive-code__header" v-if="title || desc">
        <div class="interactive-code__header-title">{{ title }}</div>
        <div class="interactive-code__header-desc" v-html="desc.split(/\\n/).join('<br/>').split(/\n/).join('<br/>')" />
      </div>

      <component
        v-if="component !== null"
        :is="component"
        class="interactive-code__component"
      />

      <div class="interactive-code__actions">
        <button @click="openCodePen">Open in CodePen</button>

        <span class="spacer" />

        <button
          v-show="sourceExpanded !== true"
          class="interactive-code__action-copy"
          :class="{ 'interactive-code__action-copy--copied': copyCodeDone }"
          :title="copyCodeDone === true ? 'Copied' : 'Copy code'"
          @click="copyCode"
        />

        <span v-show="sourceExpanded !== true" class="separator" />

        <button @click="sourceToggle">&lt;/&gt;</button>
      </div>

      <div v-if="sourceExpanded" class="interactive-code__source">
        <slot />
      </div>

      <form
        ref="formRef"
        method="post"
        action="https://codepen.io/pen/define/"
        target="_blank"
        rel="noopener"
      >
        <input
          v-if="formOptions !== null"
          type="hidden"
          name="data"
          :value="formOptions"
        />
      </form>
    </article>
  </client-only>
</template>

<script setup>
import { ref, markRaw, nextTick } from 'vue';

import transformCodeForCodepen from './transform-code-for-codepen.js';

import './interactive-code.sass';

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

  externalCss: [Array, String],

  externalJs: [Array, String],
});

const interactiveCodeSrc = `../../../${ props.example }`;

const component = ref(null);
const importInteractiveCodeComponent = import.meta.glob('../../../**/*.vue');
importInteractiveCodeComponent[interactiveCodeSrc]().then((obj) => {
  component.value = markRaw(obj.default);
});

const source = ref(null);
const importInteractiveCodeSource = import.meta.glob('../../../**/*.vue', { as: 'raw' });
importInteractiveCodeSource[interactiveCodeSrc]().then((text) => {
  source.value = text;
});
const sourceExpanded = ref(props.sourceExpanded === true);
const sourceToggle = () => {
  sourceExpanded.value = sourceExpanded.value !== true;
};

const formRef = ref(null);
const formOptions = ref(null);
const openCodePen = () => {
  formOptions.value = transformCodeForCodepen({
    title: props.title || props.desc,
    text: source.value,
    externalCss: props.externalCss,
    externalJs: props.externalJs,
  });

  nextTick(() => {
    if (formRef.value !== null) {
      formRef.value.submit();
    }
  });
};

const copyCodeDone = ref(false);
const copyCode = () => {
  navigator.clipboard.writeText(source.value);

  copyCodeDone.value = true;

  setTimeout(() => {
    copyCodeDone.value = false;
  }, 5 * 1000);
};
</script>
