function defaultFocusCheckFn() {
  return true;
}

export function visibleFocusCheckFn(el, scrolled = false) {
  const { left, top } = el.getBoundingClientRect();
  const elAtPos = document.elementFromPoint(left, top);

  if (elAtPos === null && scrolled !== true && typeof el.scrollIntoView === 'function') {
    const scrollPos = [];
    let parent = el.parentElement;

    while (parent !== null) {
      scrollPos.push([parent, parent.scrollLeft, parent.scrollTop]);
      parent = parent.parentElement;
    }

    el.scrollIntoView();

    const visible = visibleFocusCheckFn(el, true);

    for (let i = scrollPos.length - 1; i >= 0; i -= 1) {
      const [scrollEl, scrollLeft, scrollTop] = scrollPos[i];
      scrollEl.scrollLeft = scrollLeft;
      scrollEl.scrollTop = scrollTop;
    }

    return visible;
  }

  return elAtPos === null || el.contains(elAtPos) === true;
}

export function focus(el, checkFn = defaultFocusCheckFn) {
  if (el === null || typeof el.focus !== 'function' || checkFn(el) !== true) {
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

export function dirIsRtl(activeElement, currentTrapEl) {
  const dirEl = (
    activeElement && activeElement !== currentTrapEl
      ? activeElement.parentElement || currentTrapEl
      : currentTrapEl
  ).closest('[dir="rtl"],[dir="ltr"]');

  return dirEl && dirEl.matches('[dir="rtl"]');
}
