import type { App } from 'vue';

export interface IVueKeyboardTrapDirectiveOptions {
  name?: string;
  datasetName?: string;
  focusableSelector?: string;
  rovingSkipSelector?: string;
  gridSkipSelector?: string;
  autofocusSelector?: string;
  trapTabIndex?: number;
}

type IVueDirectivePlugin = {
  install( app: App, options: IVueKeyboardTrapDirectiveOptions ): void,
};

export const VueKeyboardTrapDirectivePlugin: IVueDirectivePlugin;
export function VueKeyboardTrapDirectiveFactory( options?: IVueKeyboardTrapDirectiveOptions ): { name: string, directive: object; };

export default VueKeyboardTrapDirectivePlugin;
