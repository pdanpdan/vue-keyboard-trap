import type { App, ComponentPublicInstance, MaybeRefOrGetter } from 'vue';

export interface IVueKeyboardTrapDirectiveOptions {
  name?: string;
  datasetName?: string;
  focusableSelector?: string;
  rovingSkipSelector?: string;
  gridSkipSelector?: string;
  autofocusSelector?: string;
  trapTabIndex?: number;
}

export interface IUseKeyboardTrapModifiers {
  autofocus: boolean;
  escexits: boolean;
  escrefocus: boolean;
  grid: boolean;
  horizontal: boolean;
  indexorder: boolean;
  roving: boolean;
  tabinside: boolean;
  vertical: boolean;
}

type IVueDirectivePlugin = {
  install( app: App, options: IVueKeyboardTrapDirectiveOptions ): void,
};

export const VueKeyboardTrapDirectivePlugin: IVueDirectivePlugin;
export function VueKeyboardTrapDirectiveFactory(options?: IVueKeyboardTrapDirectiveOptions): { name: string, directive: object; };

export type IUseKeyboardTrap = (
  el: MaybeRefOrGetter<HTMLElement | SVGElement | ComponentPublicInstance | null | undefined>,
  modifiers?: MaybeRefOrGetter<Partial<IUseKeyboardTrapModifiers>>,
  active?: MaybeRefOrGetter<boolean>,
) => void;
export function useKeyboardTrapFactory(options?: IVueKeyboardTrapDirectiveOptions): IUseKeyboardTrap

export default VueKeyboardTrapDirectivePlugin;
