const reHtml = /(?:^|[\n\r]+)<template[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n]*(.*?)[\r\n]*<\/template>/is;
const reCss = /(?:^|[\n\r]+)<style[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n](.*?)[\r\n]<\/style>/is;
const reJs = /(?:^|[\n\r]+)<script[^>]*?(?:\s+(setup))?[^>]*?>[\r\n](.*?)[\r\n]<\/script>/is;
const reImport = /(^|[\n\r]+)import(?:\s+(.*?)\s+from)?\s+(['"])(.+?)\3(;)?/isg;

function extractMatch(text, re) {
  const match = re.exec(text);

  return match === null
    ? {
      type: 'none',
      code: '',
    }
    : {
      type: match[1] || 'none',
      code: match[2] || '',
    };
}

function formatImport(_match, initialSpace, importedNames, _quote, importedFrom, semicolon) {
  const packageMatch = /^(?:@[^/]+\/)?([^@]+)$/i.exec(importedFrom);

  if (importedNames === undefined || packageMatch === null) {
    return '';
  }

  const objFrom = packageMatch[1]
    .split('/')
    .map(
      (s) => s
        .split(/[^a-z0-9]+/i)
        .filter((w) => w.length > 0)
        .map((w) => `${ w[0].toLocaleUpperCase() }${ w.slice(1).toLocaleLowerCase() }`)
        .join(''),
    )
    .join('.');

  return `${ initialSpace }const ${ importedNames } = ${ objFrom }${ semicolon }`;
}

export default function parseCodeForPen(title, text) {
  const parsedHtml = extractMatch(text, reHtml);
  const parsedCss = extractMatch(text, reCss);
  const parsedJs = extractMatch(text, reJs);

  parsedJs.code = parsedJs.code.replaceAll(reImport, formatImport);

  let parsedHtmlCode = parsedHtml.code
    .replace(/(<template>|<\/template>$)/g, '')
    .replace(/\n/g, '\n  ')
    .replace(/([\w]+=")([^"]*?)(")/g, (_match, p1, p2, p3) => p1 + p2.replace(/>/g, '___TEMP_REPLACEMENT___') + p3)
    .replace(/<(q-[\w-]+|div)([^>]*?)\s*?([\n\r][\t ]+)?\/>/gs, '<$1$2$3></$1>')
    .replace(/(<template[^>]*>)(\s*?(?:[\n\r][\t ]+)?)<(thead|tbody|tfoot)/gs, '$1$2<___PREVENT_TEMPLATE___$3')
    .replace(/<(thead|tbody|tfoot)(.*?)[\n\r]?(\s*)<\/\1>/gs, (_match, p1, p2, p3) => `<template>\n${ p3 }  <${ p1 }${ p2.split(/[\n\r]+/g).join('\n  ') }\n${ p3 }  </${ p1 }>\n${ p3 }</template>`)
    .replace(/___PREVENT_TEMPLATE___/g, '')
    .replace(/___TEMP_REPLACEMENT___/g, '>')
    .replace(/^\s{2}/gm, '')
    .trim();
  parsedHtmlCode = `<!--
  Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/
-->
<div id="app" style="min-height: 100vh;">
  ${ parsedHtmlCode }
</div>`;

  let component = /export default {([\s\S]*)}/g.exec(parsedJs.code);
  component = ((component && component[1]) || '').trim();
  if (component.length > 0) {
    component = `\n  ${ component }\n`;
  }

  let parsedJsCode = /^([\s\S]*)export default {/g.exec(parsedJs.code);
  parsedJsCode = ((parsedJsCode && parsedJsCode[1]) || '').trim();
  parsedJsCode += parsedJsCode ? '\n\n' : '';
  parsedJsCode += `const app = Vue.createApp({${ component }})

app.mount('#app')
`;

  const options = {
    title: `Vue Keyboard Trap - ${ title }`,
    head: '',
    // eslint-disable-next-line no-bitwise
    editors: (parsedHtmlCode && 0b100) | (parsedCss.code && 0b010) | (parsedJsCode && 0b001).toString(2),

    html: parsedHtmlCode,
    html_pre_processor: parsedHtml.type,

    css: parsedCss.code,
    css_pre_processor: parsedCss.type,
    css_external: [
      'https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass',
    ],

    js: parsedJsCode,
    js_pre_processor: parsedJs.type === 'none' ? 'babel' : parsedJs.type,
    js_external: [
      'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js',
      'https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js',
    ],
  };

  return JSON.stringify(options);
}
