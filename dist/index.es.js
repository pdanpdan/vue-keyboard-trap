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
  let e = o.parentElement;
  for (; e !== null; )
    i.push([e, e.scrollLeft, e.scrollTop]), e = e.parentElement;
  o.scrollIntoView();
  const w = j(o, !0);
  for (let v = i.length - 1; v >= 0; v -= 1) {
    const [t, s, n] = i[v];
    t.scrollLeft = s, t.scrollTop = n;
  }
  return w;
}
function x(o, r = H) {
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
function S(o, r) {
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
  const a = W(o), m = (e, { value: w, modifiers: v }) => {
    const t = {
      disable: w === !1,
      modifiers: v,
      focusTarget: null,
      relatedFocusTarget: null,
      bind() {
        e.__vKbdTrap = t, e.addEventListener("keydown", t.trap), e.addEventListener("focusin", t.activate), e.addEventListener("focusout", t.deactivate), e.addEventListener("pointerdown", t.overwiteFocusTarget, { passive: !0 }), t.disable === !1 && z(e, t.disable, t, a);
      },
      unbind() {
        delete e.__vKbdTrap, e.removeEventListener("keydown", t.trap), e.removeEventListener("focusin", t.activate), e.removeEventListener("focusout", t.deactivate), e.removeEventListener("pointerdown", t.overwiteFocusTarget), z(e, !0, t, a);
      },
      activate(s) {
        if (t.disable === !0 || s.__vKbdTrap === !0)
          return;
        s.__vKbdTrap = !0;
        const n = s.relatedTarget;
        b !== e && (n === null || n.closest(a.datasetNameSelector) !== e) && (S(e, a), t.relatedFocusTarget = n, (n === null || n.dataset[a.datasetNamePreventRefocus] === void 0 || e.contains(n) === !1) && requestAnimationFrame(() => {
          t.refocus(t.modifiers.roving !== !0);
        }));
      },
      deactivate(s) {
        if (t.disable === !0 || s.__vKbdTrap === !0)
          return;
        s.__vKbdTrap = !0;
        const n = s.relatedTarget;
        b === e && (n === null || n.closest(a.datasetNameSelector) !== e) && (t.focusTarget = s.target, S(null, a));
      },
      trap(s) {
        if (t.disable === !0 || s.__vKbdTrap === !0)
          return;
        const { code: n, shiftKey: T } = s, { activeElement: g } = document;
        if (n === "Escape") {
          if (s.__vKbdTrap = !0, b === e) {
            if (t.focusTarget = g, T === !0)
              s.preventDefault();
            else {
              if (t.modifiers.escexits === !0) {
                S(e.parentElement === null ? null : e.parentElement.closest(a.datasetNameSelector), a);
                const c = P(b);
                c !== null && c.refocus();
                return;
              }
              if (t.modifiers.escrefocus === !0 && x(t.relatedFocusTarget) === !0)
                return;
            }
            const u = e.parentElement && e.parentElement.closest(a.datasetNameSelector);
            S(u || null, a);
          } else
            S(e, a);
          return;
        }
        if (b !== e)
          return;
        s.__vKbdTrap = !0;
        let f = 0, h = (u) => u, y = !1, N = !1;
        if (t.modifiers.roving === !0) {
          const u = g.matches(a.rovingSkipSelector);
          if (n !== "Tab" && u === !0)
            return;
          if (n === "Tab")
            u === !1 && t.modifiers.tabinside !== !0 ? (y = e.parentElement.closest(a.datasetNameSelector), y !== null && (s.__vKbdTrap = void 0), T === !0 ? (f = 1, h = (c, d) => d) : (f = -1, h = () => 0)) : f = T === !0 ? -1 : 1;
          else if (n === "Home")
            f = 1, h = (c, d) => d;
          else if (n === "End")
            f = -1, h = () => 0;
          else if (e.parentElement !== null && (t.modifiers.vertical === !0 && t.modifiers.horizontal !== !0 && (n === "ArrowLeft" || n === "ArrowRight") || t.modifiers.horizontal === !0 && t.modifiers.vertical !== !0 && (n === "ArrowUp" || n === "ArrowDown"))) {
            const c = e.parentElement.closest(
              t.modifiers.vertical === !0 ? a.datasetNameSelectorRovingHorizontal : a.datasetNameSelectorRovingVertical
            );
            c !== null && (y = c, s.__vKbdTrap = void 0, n === (M(g, e) === !0 ? "ArrowRight" : "ArrowLeft") || n === "ArrowUp" ? (f = 1, h = (d, A) => A) : (f = -1, h = () => 0));
          } else
            (t.modifiers.vertical === !0 || t.modifiers.horizontal !== !0) && (n === "ArrowUp" ? (f = -1, N = "v") : n === "ArrowDown" && (f = 1, N = "v")), (t.modifiers.vertical !== !0 || t.modifiers.horizontal === !0) && (n === "ArrowLeft" ? (f = -1, N = "h") : n === "ArrowRight" && (f = 1, N = "h"), f !== 0 && N === "h" && M(g, e) === !0 && (f *= -1));
        } else n === "Tab" && (f = T === !0 ? -1 : 1);
        if (f === 0)
          return;
        y === !1 ? s.preventDefault() : (t.focusTarget = g, t.focusTarget.dataset[a.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
          t.focusTarget && delete t.focusTarget.dataset[a.datasetNamePreventRefocus];
        }));
        let p = [];
        if (N !== !1) {
          let u;
          if (t.modifiers.grid === !0) {
            const c = I(g.dataset[a.datasetNameRow]), d = I(g.dataset[a.datasetNameCol]), A = N === "v" ? a.datasetNameColSelector(d) : a.datasetNameRowSelector(c);
            p = Array.from(e.querySelectorAll(A)), u = new WeakMap(
              p.map((R) => {
                const _ = I(R.dataset[a.datasetNameRow]), E = I(R.dataset[a.datasetNameCol]);
                let C;
                return N === "v" ? (_ !== c || E === d) && (C = 1e3 * _ + 1 * E) : (E !== d || _ === c) && (C = 1e3 * E + 1 * _), [R, C];
              })
            );
          } else if (e.matches('[role="grid"]') === !0 && g.matches('[role="row"] [role="gridcell"]')) {
            const c = Array.from(e.querySelectorAll('[role="row"]')), d = /* @__PURE__ */ new WeakMap(), A = c.map((F, q) => {
              const K = Array.from(F.querySelectorAll('[role="gridcell"]'));
              return K.forEach((k, V) => {
                d.set(k, [q + 1, V + 1]);
              }), K;
            }), R = g.closest('[role="row"]'), _ = c.indexOf(R) + 1, E = A[_ - 1].indexOf(g) + 1, { focusableSelector: C } = a;
            p = Array.from(e.querySelectorAll(C)), u = new WeakMap(
              p.map((F) => {
                const [q, K] = d.get(F) || [null, null];
                let k;
                return N === "v" ? K === E && (k = 1 * q) : q === _ && (k = 1 * K), [F, k];
              })
            );
          }
          u !== void 0 && (p = p.filter((c) => u.get(c) !== void 0), p.sort((c, d) => u.get(c) - u.get(d)));
        }
        if (p.length === 0) {
          const { focusableSelector: u } = a;
          if (p = Array.from(e.querySelectorAll(u)), v.indexorder === !0) {
            const c = new WeakMap(
              p.map((d) => [d, Math.max(d.tabIndex || 0, 0)])
            );
            p.sort((d, A) => c.get(d) - c.get(A));
          }
          e.matches(u) && p.unshift(e);
        }
        const L = p.length - 1;
        let $ = h(p.indexOf(g), L);
        for (let u = 0; u < L; u += 1)
          if ($ += f, $ < 0 ? $ = L : $ > L && ($ = 0), x(p[$]) === !0) {
            y !== !1 && S(y, a);
            return;
          }
      },
      overwiteFocusTarget(s) {
        t.disable === !1 && s.__vKbdTrap !== !0 && (s.__vKbdTrap = !0, t.focusTarget = s.target);
      },
      refocus(s) {
        if (t.disable === !1 && b === e && t.focusTarget) {
          let n = t.focusTarget.closest(a.datasetNameSelector);
          for (; n && n !== e; ) {
            const T = P(n);
            if (T !== null && T.disable === !1 && T.focusTarget)
              return S(n, a), T.refocus(s !== void 0 ? T.modifiers.roving !== !0 : void 0);
            n = n.parentElement && n.parentElement.closest(a.datasetNameSelector);
          }
          return t.focusTarget.tabIndex === a.trapTabIndex || t.focusTarget.matches("dialog") === !0 || t.focusTarget.matches("[popover]") === !0 ? t.modifiers.autofocus === !0 && x(e.querySelector(a.autofocusSelector)) === !0 || x(e.querySelector(a.focusableSelector)) === !0 || x(t.focusTarget) === !0 : s === !0 ? !1 : x(t.focusTarget) === !0 || x(e.querySelector(a.focusableSelector)) === !0;
        }
        return !1;
      },
      autofocus() {
        requestAnimationFrame(() => {
          t.disable === !1 && x(e.querySelector(a.autofocusSelector), j) === !1 && x(e.querySelector(a.focusableSelector), j);
        });
      }
    };
    t.bind(), v.autofocus === !0 && t.autofocus();
  }, l = (e, { value: w, modifiers: v }) => {
    const t = P(e);
    if (t !== null) {
      const s = w === !1;
      t.modifiers = v, z(e, s, t, a), b === e && (s === !0 ? S(null, a) : e.dataset[a.datasetNameActive] = ""), t.disable !== s && (t.disable = s, v.autofocus === !0 ? t.autofocus() : s === !1 && b !== e && e.contains(document.activeElement) === !0 && S(e, a));
    } else r !== void 0 ? m(e, { value: w, modifiers: v }) : b === e && S(null, a);
  }, i = (e) => {
    const w = P(e);
    w !== null && w.unbind(), b === e && S(null, a);
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
