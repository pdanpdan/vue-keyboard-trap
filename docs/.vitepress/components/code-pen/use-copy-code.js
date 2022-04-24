import { reactive, toRefs } from 'vue';

export default function useCopyCode(code) {
  const state = reactive({
    showTip: false,
  });

  const copyCode = () => {
    navigator.clipboard.writeText(code);

    state.showTip = true;

    setTimeout(() => {
      state.showTip = false;
    }, 5 * 1000);
  };

  return {
    ...toRefs(state),
    copyCode,
  };
}
