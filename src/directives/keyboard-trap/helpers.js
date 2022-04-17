export function focus(el) {
  if (el === null || typeof el.focus !== 'function') {
    return false;
  }

  el.focus();

  return el === document.activeElement;
}

const reNumber = /(\d+)/;

export function extractNumber(val) {
  const match = reNumber.exec(val);

  return match === null ? '' : match[1];
}
