import * as U from "vue";
function W(n) {
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
    ...n
  }, a = r.name.toLocaleLowerCase().split(/[^a-z0-9]+/).filter((i) => i.length > 0).map((i) => `${i[0].toLocaleUpperCase()}${i.slice(1)}`).join("");
  if (r.datasetName === void 0 && (r.datasetName = `v${a}`), r.datasetNameActive = `${r.datasetName}Active`, r.datasetNamePreventRefocus = `${r.datasetName}PreventRefocus`, typeof window > "u")
    return r;
  const f = document.createElement("span");
  f.dataset[r.datasetName] = "";
  const c = f.getAttributeNames()[0];
  return r.datasetNameSelector = `[${c}]`, r.datasetNameSelectorRovingHorizontal = `[${c}~="roving"][${c}~="horizontal"],[${c}~="roving"]:not([${c}~="vertical"])`, r.datasetNameSelectorRovingVertical = `[${c}~="roving"][${c}~="vertical"],[${c}~="roving"]:not([${c}~="horizontal"])`, r.datasetNameRow = `${r.datasetName}Row`, r.datasetNameRowSelector = (i) => `:focus,[${c}-row~="${i}"]${r.gridSkipSelector},[${c}-row~="*"]${r.gridSkipSelector}`, r.datasetNameCol = `${r.datasetName}Col`, r.datasetNameColSelector = (i) => `:focus,[${c}-col~="${i}"]${r.gridSkipSelector},[${c}-col~="*"]${r.gridSkipSelector}`, r;
}
function H() {
  return !0;
}
function V(n, r = !1) {
  const { left: a, top: f } = n.getBoundingClientRect(), c = document.elementFromPoint(a, f);
  if (n.contains(c) === !0)
    return !0;
  if (r === !0 || typeof n.scrollIntoView != "function")
    return c === null;
  const i = [];
  let S = n.parentElement;
  for (; S !== null; )
    i.push([S, S.scrollLeft, S.scrollTop]), S = S.parentElement;
  n.scrollIntoView();
  const L = V(n, !0);
  for (let _ = i.length - 1; _ >= 0; _ -= 1) {
    const [e, b, g] = i[_];
    e.scrollLeft = b, e.scrollTop = g;
  }
  return L;
}
function N(n, r = H) {
  return n === null || typeof n.focus != "function" || r(n) !== !0 ? !1 : (n.focus(), n === document.activeElement);
}
const B = /(\d+)/;
function P(n) {
  const r = B.exec(n);
  return r === null ? "" : r[1];
}
function j(n, r) {
  const a = (n && n !== r && n.parentElement || r).closest('[dir="rtl"],[dir="ltr"]');
  return a && a.matches('[dir="rtl"]');
}
let v = null;
function D(n, r) {
  const a = W(n), f = (e) => {
    v !== e && (e !== null && (e.dataset[a.datasetNameActive] = "", e.__vKbdTrapActiveClean = () => {
      delete e.dataset[a.datasetNameActive], e.__vKbdTrapActiveClean = void 0;
    }), v !== null && typeof v.__vKbdTrapActiveClean == "function" && v.__vKbdTrapActiveClean(), v = e);
  }, c = (e) => {
    const b = (e || {}).__vKbdTrap;
    return b === Object(b) ? b : null;
  }, i = (e, b, g) => {
    b === !0 ? (delete e.dataset[a.datasetName], e.tabIndex === a.trapTabIndex && e.removeAttribute("tabindex")) : (e.dataset[a.datasetName] = Object.keys(g.modifiers).filter((t) => g.modifiers[t] === !0).join(" "), e.tabIndex < 0 && e.getAttribute("tabindex") === null && (e.tabIndex = a.trapTabIndex));
  }, S = (e, { value: b, modifiers: g }) => {
    const t = {
      disable: b === !1,
      modifiers: g,
      focusTarget: null,
      relatedFocusTarget: null,
      bind() {
        e.__vKbdTrap = t, e.addEventListener("keydown", t.trap), e.addEventListener("focusin", t.activate), e.addEventListener("focusout", t.deactivate), e.addEventListener("pointerdown", t.overwiteFocusTarget, { passive: !0 }), t.disable === !1 && i(e, t.disable, t);
      },
      unbind() {
        delete e.__vKbdTrap, e.removeEventListener("keydown", t.trap), e.removeEventListener("focusin", t.activate), e.removeEventListener("focusout", t.deactivate), e.removeEventListener("pointerdown", t.overwiteFocusTarget), i(e, !0, t);
      },
      activate(o) {
        if (t.disable === !0 || o.__vKbdTrap === !0)
          return;
        o.__vKbdTrap = !0;
        const s = o.relatedTarget;
        v !== e && (s === null || s.closest(a.datasetNameSelector) !== e) && (f(e), t.relatedFocusTarget = s, (s === null || s.dataset[a.datasetNamePreventRefocus] === void 0 || e.contains(s) === !1) && requestAnimationFrame(() => {
          t.refocus(t.modifiers.roving !== !0);
        }));
      },
      deactivate(o) {
        if (t.disable === !0 || o.__vKbdTrap === !0)
          return;
        o.__vKbdTrap = !0;
        const s = o.relatedTarget;
        v === e && (s === null || s.closest(a.datasetNameSelector) !== e) && (t.focusTarget = o.target, f(null));
      },
      trap(o) {
        if (t.disable === !0 || o.__vKbdTrap === !0)
          return;
        const { code: s, shiftKey: z } = o, { activeElement: T } = document;
        if (s === "Escape") {
          if (o.__vKbdTrap = !0, v === e) {
            if (t.focusTarget = T, t.modifiers.escexits === !0) {
              f(e.parentElement === null ? null : e.parentElement.closest(a.datasetNameSelector));
              const l = c(v);
              l !== null && l.refocus();
              return;
            }
            if (t.modifiers.escrefocus === !0 && N(t.relatedFocusTarget) === !0)
              return;
            f(null);
          } else
            f(e);
          return;
        }
        if (v !== e)
          return;
        o.__vKbdTrap = !0;
        let m = 0, x = (l) => l, h = !1, w = !1;
        if (t.modifiers.roving === !0) {
          const l = T.matches(a.rovingSkipSelector);
          if (s !== "Tab" && l === !0)
            return;
          if (s === "Tab")
            l === !1 && t.modifiers.tabinside !== !0 ? (h = e.parentElement.closest(a.datasetNameSelector), h !== null && (o.__vKbdTrap = void 0), z === !0 ? (m = 1, x = (u, d) => d) : (m = -1, x = () => 0)) : m = z === !0 ? -1 : 1;
          else if (s === "Home")
            m = 1, x = (u, d) => d;
          else if (s === "End")
            m = -1, x = () => 0;
          else if (e.parentElement !== null && (t.modifiers.vertical === !0 && t.modifiers.horizontal !== !0 && (s === "ArrowLeft" || s === "ArrowRight") || t.modifiers.horizontal === !0 && t.modifiers.vertical !== !0 && (s === "ArrowUp" || s === "ArrowDown"))) {
            const u = e.parentElement.closest(
              t.modifiers.vertical === !0 ? a.datasetNameSelectorRovingHorizontal : a.datasetNameSelectorRovingVertical
            );
            u !== null && (h = u, o.__vKbdTrap = void 0, s === (j(T, e) === !0 ? "ArrowRight" : "ArrowLeft") || s === "ArrowUp" ? (m = 1, x = (d, y) => y) : (m = -1, x = () => 0));
          } else
            (t.modifiers.vertical === !0 || t.modifiers.horizontal !== !0) && (s === "ArrowUp" ? (m = -1, w = "v") : s === "ArrowDown" && (m = 1, w = "v")), (t.modifiers.vertical !== !0 || t.modifiers.horizontal === !0) && (s === "ArrowLeft" ? (m = -1, w = "h") : s === "ArrowRight" && (m = 1, w = "h"), m !== 0 && w === "h" && j(T, e) === !0 && (m *= -1));
        } else
          s === "Tab" && (m = z === !0 ? -1 : 1);
        if (m === 0)
          return;
        h === !1 ? o.preventDefault() : (t.focusTarget = T, t.focusTarget.dataset[a.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
          t.focusTarget && delete t.focusTarget.dataset[a.datasetNamePreventRefocus];
        }));
        let p = [];
        if (w !== !1) {
          let l;
          if (t.modifiers.grid === !0) {
            const u = P(T.dataset[a.datasetNameRow]), d = P(T.dataset[a.datasetNameCol]), y = w === "v" ? a.datasetNameColSelector(d) : a.datasetNameRowSelector(u);
            p = Array.from(e.querySelectorAll(y)), l = new WeakMap(
              p.map((R) => {
                const A = P(R.dataset[a.datasetNameRow]), K = P(R.dataset[a.datasetNameCol]);
                let k;
                return w === "v" ? (A !== u || K === d) && (k = 1e3 * A + 1 * K) : (K !== d || A === u) && (k = 1e3 * K + 1 * A), [R, k];
              })
            );
          } else if (e.matches('[role="grid"]') === !0 && T.matches('[role="row"] [role="gridcell"]')) {
            const u = Array.from(e.querySelectorAll('[role="row"]')), d = /* @__PURE__ */ new WeakMap(), y = u.map((I, q) => {
              const C = Array.from(I.querySelectorAll('[role="gridcell"]'));
              return C.forEach((E, O) => {
                d.set(E, [q + 1, O + 1]);
              }), C;
            }), R = T.closest('[role="row"]'), A = u.indexOf(R) + 1, K = y[A - 1].indexOf(T) + 1, { focusableSelector: k } = a;
            p = Array.from(e.querySelectorAll(k)), l = new WeakMap(
              p.map((I) => {
                const [q, C] = d.get(I) || [null, null];
                let E;
                return w === "v" ? C === K && (E = 1 * q) : q === A && (E = 1 * C), [I, E];
              })
            );
          }
          l !== void 0 && (p = p.filter((u) => l.get(u) !== void 0), p.sort((u, d) => l.get(u) - l.get(d)));
        }
        if (p.length === 0) {
          const { focusableSelector: l } = a;
          if (p = Array.from(e.querySelectorAll(l)), g.indexorder === !0) {
            const u = new WeakMap(
              p.map((d) => [d, Math.max(d.tabIndex || 0, 0)])
            );
            p.sort((d, y) => u.get(d) - u.get(y));
          }
          e.matches(l) && p.unshift(e);
        }
        const F = p.length - 1;
        let $ = x(p.indexOf(T), F);
        for (let l = 0; l < F; l += 1)
          if ($ += m, $ < 0 ? $ = F : $ > F && ($ = 0), N(p[$]) === !0) {
            h !== !1 && f(h);
            return;
          }
      },
      overwiteFocusTarget(o) {
        t.disable === !1 && o.__vKbdTrap !== !0 && (o.__vKbdTrap = !0, t.focusTarget = o.target);
      },
      refocus(o) {
        return t.disable === !1 && v === e && t.focusTarget && t.focusTarget.closest(a.datasetNameSelector) === e ? t.focusTarget.tabIndex === a.trapTabIndex ? t.modifiers.autofocus === !0 && N(e.querySelector(a.autofocusSelector)) === !0 || N(e.querySelector(a.focusableSelector)) === !0 || N(t.focusTarget) === !0 : o === !0 ? !1 : N(t.focusTarget) === !0 || N(e.querySelector(a.focusableSelector)) === !0 : !1;
      },
      autofocus() {
        requestAnimationFrame(() => {
          t.disable === !1 && N(e.querySelector(a.autofocusSelector), V) === !1 && N(e.querySelector(a.focusableSelector), V);
        });
      }
    };
    t.bind(), g.autofocus === !0 && t.autofocus();
  }, L = (e, { value: b, modifiers: g }) => {
    const t = c(e);
    if (t !== null) {
      const o = b === !1;
      t.modifiers = g, i(e, o, t), v === e && (o === !0 ? f(null) : e.dataset[a.datasetNameActive] = ""), t.disable !== o && (t.disable = o, g.autofocus === !0 && t.autofocus());
    } else
      r !== void 0 ? S(e, { value: b, modifiers: g }) : v === e && f(null);
  }, _ = (e) => {
    const b = c(e);
    b !== null && b.unbind(), v === e && f(null);
  };
  return r !== void 0 ? r({
    name: a.name,
    directive: {
      beforeMount: S,
      updated: L,
      unmounted: _,
      getSSRProps() {
      }
    }
  }) : {
    name: a.name,
    directive: {
      bind: S,
      update: L,
      unbind: _
    }
  };
}
const { markRaw: G, version: J } = U, M = J.indexOf("2.") === 0 ? void 0 : G, Q = {
  install(n, r) {
    const { name: a, directive: f } = D(r, M);
    n.directive(a, f);
  }
}, X = (n) => D(n, M), Y = Q;
export {
  X as VueKeyboardTrapDirectiveFactory,
  Q as VueKeyboardTrapDirectivePlugin,
  Y as default
};
//# sourceMappingURL=index.es.js.map
