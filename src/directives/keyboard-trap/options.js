// options:
//   name: snake-case name of the directive (without `v-` prefix) - default `kbd-trap`
//   datasetName: camelCase name of the `data-attribute` to be set on element when trap is enabled - default `v${ PascalCase from name}`
//
//   focusableSelector: CSS selector for focusable elements
//   rovingSkipSelector: CSS selector for elements that should not respond to roving key navigation (input, textarea, ...)
//   gridSkipSelector: CSS selector that will be applied in .roving.grid mode to exclude elements - must be a series of :not() selectors
//   autofocusSelector: CSS selector for the elements that should be autofocused
//   trapTabIndex: tabIndex value to be used when trap element has a tabIndex of -1 and has no `tabindex` attribute (default -9999)

function createConfig(options) {
  const config = {
    name: 'kbd-trap',

    focusableSelector: [':focus']
      .concat(
        [
          'a[href]',
          'area[href]',
          'audio[controls]',
          'video[controls]',
          'iframe',
          '[tabindex]:not(slot)',
          '[contenteditable]:not([contenteditable="false"])',
          'details > summary:first-of-type',
        ].map((s) => `${ s }:not([tabindex^="-"])`),
      )
      .concat(
        [
          'input:not([type="hidden"]):not(fieldset[disabled] input)',
          'select:not(fieldset[disabled] select)',
          'textarea:not(fieldset[disabled] textarea)',
          'button:not(fieldset[disabled] button)',
          '[class*="focusable"]',
        ].map((s) => `${ s }:not([disabled]):not([tabindex^="-"])`),
      )
      .concat(
        [
          'input:not([type="hidden"])',
          'select',
          'textarea',
          'button',
        ].map((s) => `fieldset[disabled]:not(fieldset[disabled] fieldset) > legend ${ s }:not([disabled]):not([tabindex^="-"])`),
      )
      .join(','),

    rovingSkipSelector: [
      'input:not([disabled]):not([type="button"]):not([type="checkbox"]):not([type="file"]):not([type="image"]):not([type="radio"]):not([type="reset"]):not([type="submit"])',
      'select:not([disabled])',
      'select:not([disabled]) *',
      'textarea:not([disabled])',
      '[contenteditable]:not([contenteditable="false"])',
      '[contenteditable]:not([contenteditable="false"]) *',
    ].join(','),

    gridSkipSelector: [
      ':not([disabled])',
      ':not([tabindex^="-"])',
    ].join(''),

    autofocusSelector: [
      '[autofocus]:not([autofocus="false"])',
      '[data-autofocus]:not([data-autofocus="false"])',
    ].map((s) => `${ s }:not([disabled])`).join(','),

    trapTabIndex: -9999,

    ...options,
  };

  const pascalName = config.name
    .toLocaleLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 0)
    .map((t) => `${ t[0].toLocaleUpperCase() }${ t.slice(1) }`)
    .join('');

  if (config.datasetName === undefined) {
    config.datasetName = `v${ pascalName }`;
  }

  config.datasetNameActive = `${ config.datasetName }Active`;
  config.datasetNamePreventRefocus = `${ config.datasetName }PreventRefocus`;

  if (typeof window === 'undefined') {
    return config;
  }

  const dsEl = document.createElement('span');
  dsEl.dataset[config.datasetName] = '';
  const datasetNameSnake = dsEl.getAttributeNames()[0];

  config.datasetNameSelector = `[${ datasetNameSnake }]`;
  config.datasetNameSelectorRovingHorizontal = `[${ datasetNameSnake }~="roving"][${ datasetNameSnake }~="horizontal"],[${ datasetNameSnake }~="roving"]:not([${ datasetNameSnake }~="vertical"])`;
  config.datasetNameSelectorRovingVertical = `[${ datasetNameSnake }~="roving"][${ datasetNameSnake }~="vertical"],[${ datasetNameSnake }~="roving"]:not([${ datasetNameSnake }~="horizontal"])`;

  config.datasetNameRow = `${ config.datasetName }Row`;
  config.datasetNameRowSelector = (i) => `:focus,[${ datasetNameSnake }-row~="${ i }"]${ config.gridSkipSelector },[${ datasetNameSnake }-row~="*"]${ config.gridSkipSelector }`;

  config.datasetNameCol = `${ config.datasetName }Col`;
  config.datasetNameColSelector = (i) => `:focus,[${ datasetNameSnake }-col~="${ i }"]${ config.gridSkipSelector },[${ datasetNameSnake }-col~="*"]${ config.gridSkipSelector }`;

  return config;
}

export { createConfig };
