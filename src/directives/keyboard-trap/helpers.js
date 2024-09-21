function defaultFocusCheckFn() {
  return true;
}

export function visibleFocusCheckFn(el, scrolled = false) {
  if (el.closest('dialog') != null) {
    return true;
  }

  const {
    left,
    right,
    top,
    bottom,
  } = el.getBoundingClientRect();

  if (left === right && top === bottom) {
    return true;
  }

  const posList = [
    [left, top],
    [left, (top + bottom) / 2],
    [left, bottom],
    [(left + right) / 2, top],
    [(left + right) / 2, (top + bottom) / 2],
    [(left + right) / 2, bottom],
    [right, top],
    [right, (top + bottom) / 2],
    [right, bottom],
  ];

  let elAtPosFound = false;

  for (let i = 0; i < 9; i += 1) {
    const elAtPos = document.elementFromPoint(...posList[i]);

    if (el.contains(elAtPos) === true) {
      return true;
    }

    if (elAtPos != null) {
      elAtPosFound = true;
    }
  }

  if (scrolled === true || typeof el.scrollIntoView !== 'function') {
    return !elAtPosFound;
  }

  const scrollPos = [];
  let parent = el.parentElement;

  while (parent != null) {
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

export function focus(el, checkFn = defaultFocusCheckFn) {
  if (el == null || typeof el.focus !== 'function' || checkFn(el) !== true) {
    return false;
  }

  el.focus();

  return el === document.activeElement;
}

const reNumber = /(\d+)/;

export function extractNumber(val) {
  const match = reNumber.exec(val);

  return match == null ? '' : match[1];
}

export function dirIsRtl(activeElement, currentTrapEl) {
  const dirEl = (
    activeElement && activeElement !== currentTrapEl
      ? activeElement.parentElement || currentTrapEl
      : currentTrapEl
  ).closest('[dir="rtl"],[dir="ltr"]');

  return dirEl && dirEl.matches('[dir="rtl"]');
}
