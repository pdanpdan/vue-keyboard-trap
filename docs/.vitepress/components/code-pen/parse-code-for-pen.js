const reHtml = /(?:^|[\n\r]+)<template[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n]*(.*?)[\r\n]*<\/template>/is;
const reCss = /(?:^|[\n\r]+)<style[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n](.*?)[\r\n]<\/style>/is;
const reJs = /(?:^|[\n\r]+)<script[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n](.*?)[\r\n]<\/script>/is;
const reImport = /(^|[\n\r]+)import(?:\s+(.*?)\s+from)?\s+(['"])(.+?)\3(;)?(?:\s*\/\/\s*asGlobal=(['"])(.+?)\6)?/isg;
const reExternal = /(?:^|[\n\r]+)\s*\/\/\s*external(js|css)=(['"])(.+?)\2/isg;

const vueUmdSrc = 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js';

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

function formatImport(_match, initialSpace, importedNames, _quote1, importedFrom, semicolon, _quote2, asGlobal) {
  if (typeof importedNames !== 'string' || importedNames.length === 0) {
    return '';
  }

  if (typeof asGlobal === 'string' && asGlobal.length > 0) {
    return `${ initialSpace }const ${ importedNames } = ${ asGlobal }${ semicolon }`;
  }

  const packageMatch = /^(?:@[^/]+\/)?([^@]+)$/i.exec(importedFrom);

  if (packageMatch === null) {
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

  return `${ initialSpace }const ${ importedNames } = ${ objFrom }${ semicolon || '' }`;
}

export default function parseCodeForPen({
  title,
  text,
  externalCss,
  externalJs,
}) {
  const parsedHtml = extractMatch(text, reHtml);
  const parsedCss = extractMatch(text, reCss);
  const parsedJs = extractMatch(text, reJs);
  // eslint-disable-next-line no-nested-ternary
  const cssExternal = Array.isArray(externalCss) === true
    ? externalCss
    : (typeof externalCss === 'string' && externalCss.length > 0 ? [externalCss] : []);
  // eslint-disable-next-line no-nested-ternary
  const jsExternal = Array.isArray(externalJs) === true
    ? externalJs
    : (typeof externalJs === 'string' && externalJs.length > 0 ? [externalJs] : []);

  if (jsExternal.indexOf(vueUmdSrc) === -1) {
    jsExternal.unshift(vueUmdSrc);
  }

  parsedJs.code = parsedJs.code.replace(reExternal, (_match, type, _quote, src) => {
    if (type.toLowerCase() === 'js') {
      if (jsExternal.indexOf(src) === -1) {
        jsExternal.push(src);
      }
    } else if (cssExternal.indexOf(src) === -1) {
      cssExternal.push(src);
    }

    return '';
  });
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
  parsedHtmlCode = `
<div id="app">
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
  parsedJsCode += `const app = Vue.createApp({${ component }});

app.mount('#app');
`;

  const options = {
    title,
    head: '',
    // eslint-disable-next-line no-bitwise
    editors: (parsedHtmlCode && 0b100) | (parsedCss.code && 0b010) | (parsedJsCode && 0b001).toString(2),

    html: parsedHtmlCode,
    html_pre_processor: parsedHtml.type,

    css: parsedCss.code,
    css_pre_processor: parsedCss.type,
    css_external: cssExternal,

    js: parsedJsCode,
    js_pre_processor: parsedJs.type === 'none' ? 'babel' : parsedJs.type,
    js_external: jsExternal,
  };

  return JSON.stringify(options);
}
