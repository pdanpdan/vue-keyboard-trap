import * as U from "vue";
function W(o) {
  const r = {
    name: "kbd-trap",
    focusableSelector: [":focus"].concat(
      [
        "a[href]",
        "area[href]",
        "audio[controls]",
        "video[controls]",
        "iframe",
        "[tabindex]:not(slot)",
        '[contenteditable]:not([contenteditable="false"])',
        "details > summary:first-of-type"
      ].map((i) => `${i}:not([tabindex^="-"])`)
    ).concat(
      [
        'input:not([type="hidden"]):not(fieldset[disabled] input)',
        "select:not(fieldset[disabled] select)",
        "textarea:not(fieldset[disabled] textarea)",
        "button:not(fieldset[disabled] button)",
        '[class*="focusable"]'
      ].map((i) => `${i}:not([disabled]):not([tabindex^="-"])`)
    ).concat(
      [
        'input:not([type="hidden"])',
        "select",
        "textarea",
        "button"
      ].map((i) => `fieldset[disabled]:not(fieldset[disabled] fieldset) > legend ${i}:not([disabled]):not([tabindex^="-"])`)
    ).join(","),
    rovingSkipSelector: [
      'input:not([disabled]):not([type="button"]):not([type="checkbox"]):not([type="file"]):not([type="image"]):not([type="radio"]):not([type="reset"]):not([type="submit"])',
      "select:not([disabled])",
      "select:not([disabled]) *",
      "textarea:not([disabled])",
      '[contenteditable]:not([contenteditable="false"])',
      '[contenteditable]:not([contenteditable="false"]) *'
    ].join(","),
    gridSkipSelector: [
      ":not([disabled])",
      ':not([tabindex^="-"])'
    ].join(""),
    autofocusSelector: [
      '[autofocus]:not([autofocus="false"])',
      '[data-autofocus]:not([data-autofocus="false"])'
    ].map((i) => `${i}:not([disabled])`).join(","),
    trapTabIndex: -9999,
    ...o
  }, a = r.name.toLocaleLowerCase().split(/[^a-z0-9]+/).filter((i) => i.length > 0).map((i) => `${i[0].toLocaleUpperCase()}${i.slice(1)}`).join("");
  if (r.datasetName === void 0 && (r.datasetName = `v${a}`), r.datasetNameActive = `${r.datasetName}Active`, r.datasetNamePreventRefocus = `${r.datasetName}PreventRefocus`, typeof window > "u")
    return r;
  const m = document.createElement("span");
  m.dataset[r.datasetName] = "";
  const l = m.getAttributeNames()[0];
  return r.datasetNameSelector = `[${l}]`, r.datasetNameSelectorRovingHorizontal = `[${l}~="roving"][${l}~="horizontal"],[${l}~="roving"]:not([${l}~="vertical"])`, r.datasetNameSelectorRovingVertical = `[${l}~="roving"][${l}~="vertical"],[${l}~="roving"]:not([${l}~="horizontal"])`, r.datasetNameRow = `${r.datasetName}Row`, r.datasetNameRowSelector = (i) => `:focus,[${l}-row~="${i}"]${r.gridSkipSelector},[${l}-row~="*"]${r.gridSkipSelector}`, r.datasetNameCol = `${r.datasetName}Col`, r.datasetNameColSelector = (i) => `:focus,[${l}-col~="${i}"]${r.gridSkipSelector},[${l}-col~="*"]${r.gridSkipSelector}`, r;
}
function H() {
  return !0;
}
function j(o, r = !1) {
  const { left: a, top: m } = o.getBoundingClientRect(), l = document.elementFromPoint(a, m);
  if (o.contains(l) === !0)
    return !0;
  if (r === !0 || typeof o.scrollIntoView != "function")
    return l === null;
  const i = [];
  let t = o.parentElement;
  for (; t !== null; )
    i.push([t, t.scrollLeft, t.scrollTop]), t = t.parentElement;
  o.scrollIntoView();
  const v = j(o, !0);
  for (let g = i.length - 1; g >= 0; g -= 1) {
    const [e, s, n] = i[g];
    e.scrollLeft = s, e.scrollTop = n;
  }
  return v;
}
function S(o, r = H) {
  return o === null || typeof o.focus != "function" || r(o) !== !0 ? !1 : (o.focus(), o === document.activeElement);
}
const B = /(\d+)/;
function I(o) {
  const r = B.exec(o);
  return r === null ? "" : r[1];
}
function M(o, r) {
  const a = (o && o !== r && o.parentElement || r).closest('[dir="rtl"],[dir="ltr"]');
  return a && a.matches('[dir="rtl"]');
}
let b = null;
function w(o, r) {
  b !== o && (o !== null && (o.dataset[r.datasetNameActive] = "", o.__vKbdTrapActiveClean = () => {
    delete o.dataset[r.datasetNameActive], o.__vKbdTrapActiveClean = void 0;
  }), b !== null && typeof b.__vKbdTrapActiveClean == "function" && b.__vKbdTrapActiveClean(), b = o);
}
function P(o) {
  const r = (o || {}).__vKbdTrap;
  return r === Object(r) ? r : null;
}
function z(o, r, a, m) {
  r === !0 ? (delete o.dataset[m.datasetName], o.tabIndex === m.trapTabIndex && o.removeAttribute("tabindex")) : (o.dataset[m.datasetName] = Object.keys(a.modifiers).filter((l) => a.modifiers[l] === !0).join(" "), o.tabIndex < 0 && o.getAttribute("tabindex") === null && o.matches("dialog") === !1 && o.matches("[popover]") === !1 && (o.tabIndex = m.trapTabIndex));
}
function D(o, r) {
  const a = W(o), m = (t, { value: v, modifiers: g }) => {
    const e = {
      disable: v === !1,
      modifiers: g,
      focusTarget: null,
      relatedFocusTarget: null,
      bind() {
        t.__vKbdTrap = e, t.addEventListener("keydown", e.trap), t.addEventListener("focusin", e.activate), t.addEventListener("focusout", e.deactivate), t.addEventListener("pointerdown", e.overwiteFocusTarget, { passive: !0 }), e.disable === !1 && z(t, e.disable, e, a);
      },
      unbind() {
        delete t.__vKbdTrap, t.removeEventListener("keydown", e.trap), t.removeEventListener("focusin", e.activate), t.removeEventListener("focusout", e.deactivate), t.removeEventListener("pointerdown", e.overwiteFocusTarget), z(t, !0, e, a);
      },
      activate(s) {
        if (e.disable === !0 || s.__vKbdTrap === !0)
          return;
        s.__vKbdTrap = !0;
        const n = s.relatedTarget;
        b !== t && (n === null || n.closest(a.datasetNameSelector) !== t) && (w(t, a), e.relatedFocusTarget = n, (n === null || n.dataset[a.datasetNamePreventRefocus] === void 0 || t.contains(n) === !1) && requestAnimationFrame(() => {
          e.refocus(e.modifiers.roving !== !0);
        }));
      },
      deactivate(s) {
        if (e.disable === !0 || s.__vKbdTrap === !0)
          return;
        s.__vKbdTrap = !0;
        const n = s.relatedTarget;
        b === t && (n === null || n.closest(a.datasetNameSelector) !== t) && (e.focusTarget = s.target, n === null && e.relatedFocusTarget && S(e.relatedFocusTarget), w(null, a));
      },
      trap(s) {
        if (e.disable === !0 || s.__vKbdTrap === !0)
          return;
        const { code: n, shiftKey: N } = s, { activeElement: T } = document;
        if (n === "Escape") {
          if (s.__vKbdTrap = !0, b === t) {
            if (e.focusTarget = T, N === !0)
              s.preventDefault();
            else {
              if (e.modifiers.escexits === !0) {
                w(t.parentElement === null ? null : t.parentElement.closest(a.datasetNameSelector), a);
                const c = P(b);
                c !== null && c.refocus();
                return;
              }
              if (e.modifiers.escrefocus === !0 && S(e.relatedFocusTarget) === !0)
                return;
            }
            const u = t.parentElement && t.parentElement.closest(a.datasetNameSelector);
            w(u || null, a);
          } else
            w(t, a);
          return;
        }
        if (b !== t)
          return;
        s.__vKbdTrap = !0;
        let f = 0, h = (u) => u, y = !1, x = !1;
        if (e.modifiers.roving === !0) {
          const u = T.matches(a.rovingSkipSelector);
          if (n !== "Tab" && u === !0)
            return;
          if (n === "Tab")
            u === !1 && e.modifiers.tabinside !== !0 ? (y = t.parentElement.closest(a.datasetNameSelector), y !== null && (s.__vKbdTrap = void 0), N === !0 ? (f = 1, h = (c, d) => d) : (f = -1, h = () => 0)) : f = N === !0 ? -1 : 1;
          else if (n === "Home")
            f = 1, h = (c, d) => d;
          else if (n === "End")
            f = -1, h = () => 0;
          else if (t.parentElement !== null && (e.modifiers.vertical === !0 && e.modifiers.horizontal !== !0 && (n === "ArrowLeft" || n === "ArrowRight") || e.modifiers.horizontal === !0 && e.modifiers.vertical !== !0 && (n === "ArrowUp" || n === "ArrowDown"))) {
            const c = t.parentElement.closest(
              e.modifiers.vertical === !0 ? a.datasetNameSelectorRovingHorizontal : a.datasetNameSelectorRovingVertical
            );
            c !== null && (y = c, s.__vKbdTrap = void 0, n === (M(T, t) === !0 ? "ArrowRight" : "ArrowLeft") || n === "ArrowUp" ? (f = 1, h = (d, A) => A) : (f = -1, h = () => 0));
          } else
            (e.modifiers.vertical === !0 || e.modifiers.horizontal !== !0) && (n === "ArrowUp" ? (f = -1, x = "v") : n === "ArrowDown" && (f = 1, x = "v")), (e.modifiers.vertical !== !0 || e.modifiers.horizontal === !0) && (n === "ArrowLeft" ? (f = -1, x = "h") : n === "ArrowRight" && (f = 1, x = "h"), f !== 0 && x === "h" && M(T, t) === !0 && (f *= -1));
        } else n === "Tab" && (f = N === !0 ? -1 : 1);
        if (f === 0)
          return;
        y === !1 ? s.preventDefault() : (e.focusTarget = T, e.focusTarget.dataset[a.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
          e.focusTarget && delete e.focusTarget.dataset[a.datasetNamePreventRefocus];
        }));
        let p = [];
        if (x !== !1) {
          let u;
          if (e.modifiers.grid === !0) {
            const c = I(T.dataset[a.datasetNameRow]), d = I(T.dataset[a.datasetNameCol]), A = x === "v" ? a.datasetNameColSelector(d) : a.datasetNameRowSelector(c);
            p = Array.from(t.querySelectorAll(A)), u = new WeakMap(
              p.map((R) => {
                const _ = I(R.dataset[a.datasetNameRow]), E = I(R.dataset[a.datasetNameCol]);
                let C;
                return x === "v" ? (_ !== c || E === d) && (C = 1e3 * _ + 1 * E) : (E !== d || _ === c) && (C = 1e3 * E + 1 * _), [R, C];
              })
            );
          } else if (t.matches('[role="grid"]') === !0 && T.matches('[role="row"] [role="gridcell"]')) {
            const c = Array.from(t.querySelectorAll('[role="row"]')), d = /* @__PURE__ */ new WeakMap(), A = c.map((L, q) => {
              const K = Array.from(L.querySelectorAll('[role="gridcell"]'));
              return K.forEach((k, V) => {
                d.set(k, [q + 1, V + 1]);
              }), K;
            }), R = T.closest('[role="row"]'), _ = c.indexOf(R) + 1, E = A[_ - 1].indexOf(T) + 1, { focusableSelector: C } = a;
            p = Array.from(t.querySelectorAll(C)), u = new WeakMap(
              p.map((L) => {
                const [q, K] = d.get(L) || [null, null];
                let k;
                return x === "v" ? K === E && (k = 1 * q) : q === _ && (k = 1 * K), [L, k];
              })
            );
          }
          u !== void 0 && (p = p.filter((c) => u.get(c) !== void 0), p.sort((c, d) => u.get(c) - u.get(d)));
        }
        if (p.length === 0) {
          const { focusableSelector: u } = a;
          if (p = Array.from(t.querySelectorAll(u)), g.indexorder === !0) {
            const c = new WeakMap(
              p.map((d) => [d, Math.max(d.tabIndex || 0, 0)])
            );
            p.sort((d, A) => c.get(d) - c.get(A));
          }
          t.matches(u) && p.unshift(t);
        }
        const F = p.length - 1;
        let $ = h(p.indexOf(T), F);
        for (let u = 0; u < F; u += 1)
          if ($ += f, $ < 0 ? $ = F : $ > F && ($ = 0), S(p[$]) === !0) {
            y !== !1 && w(y, a);
            return;
          }
      },
      overwiteFocusTarget(s) {
        e.disable === !1 && s.__vKbdTrap !== !0 && (s.__vKbdTrap = !0, e.focusTarget = s.target);
      },
      refocus(s) {
        if (e.disable === !1 && b === t && e.focusTarget) {
          let n = e.focusTarget.closest(a.datasetNameSelector);
          for (; n && n !== t; ) {
            const N = P(n);
            if (N !== null && N.disable === !1 && N.focusTarget)
              return w(n, a), N.refocus(s !== void 0 ? N.modifiers.roving !== !0 : void 0);
            n = n.parentElement && n.parentElement.closest(a.datasetNameSelector);
          }
          return e.focusTarget.tabIndex === a.trapTabIndex || e.focusTarget.matches("dialog") === !0 || e.focusTarget.matches("[popover]") === !0 ? e.modifiers.autofocus === !0 && S(t.querySelector(a.autofocusSelector)) === !0 || S(t.querySelector(a.focusableSelector)) === !0 || S(e.focusTarget) === !0 : s === !0 ? !1 : S(e.focusTarget) === !0 || S(t.querySelector(a.focusableSelector)) === !0;
        }
        return !1;
      },
      autofocus() {
        requestAnimationFrame(() => {
          e.disable === !1 && S(t.querySelector(a.autofocusSelector), j) === !1 && S(t.querySelector(a.focusableSelector), j);
        });
      }
    };
    e.bind(), g.autofocus === !0 && e.autofocus();
  }, l = (t, { value: v, modifiers: g }) => {
    const e = P(t);
    if (e !== null) {
      const s = v === !1;
      e.modifiers = g, z(t, s, e, a), b === t && (s === !0 ? w(null, a) : t.dataset[a.datasetNameActive] = ""), e.disable !== s && (e.disable = s, g.autofocus === !0 ? e.autofocus() : s === !1 && b !== t && t.contains(document.activeElement) === !0 && w(t, a));
    } else r !== void 0 ? m(t, { value: v, modifiers: g }) : b === t && w(null, a);
  }, i = (t) => {
    const v = P(t);
    v !== null && v.unbind(), b === t && (v.relatedFocusTarget && S(v.relatedFocusTarget), w(null, a));
  };
  return r !== void 0 ? r({
    name: a.name,
    directive: {
      beforeMount: m,
      updated: l,
      unmounted: i,
      getSSRProps() {
      }
    }
  }) : {
    name: a.name,
    directive: {
      bind: m,
      update: l,
      unbind: i
    }
  };
}
const { markRaw: G, version: J } = U, O = J.indexOf("2.") === 0 ? void 0 : G, Q = {
  install(o, r) {
    const { name: a, directive: m } = D(r, O);
    o.directive(a, m);
  }
}, X = (o) => D(o, O);
export {
  X as VueKeyboardTrapDirectiveFactory,
  Q as VueKeyboardTrapDirectivePlugin,
  Q as default
};
//# sourceMappingURL=index.es.js.map
