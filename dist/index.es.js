import * as U from "vue";
function W(o) {
  const a = {
    name: "kbd-trap",
    focusableSelector: [
      ":focus",
      'a[href]:not([tabindex^="-"])',
      'area[href]:not([tabindex^="-"])',
      'input:not([disabled]):not([tabindex^="-"])',
      'select:not([disabled]):not([tabindex^="-"])',
      'textarea:not([disabled]):not([tabindex^="-"])',
      'button:not([disabled]):not([tabindex^="-"])',
      'iframe:not([tabindex^="-"])',
      '[tabindex]:not([tabindex^="-"])',
      '[contenteditable]:not([tabindex^="-"]):not([contenteditable="false"])',
      '[class*="focusable"]:not([disabled]):not([tabindex^="-"])'
    ].join(","),
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
      '[autofocus]:not([disabled]):not([autofocus="false"])',
      '[data-autofocus]:not([disabled]):not([data-autofocus="false"])'
    ].join(","),
    trapTabIndex: -9999,
    ...o
  }, r = a.name.toLocaleLowerCase().split(/[^a-z0-9]+/).filter((f) => f.length > 0).map((f) => `${f[0].toLocaleUpperCase()}${f.slice(1)}`).join("");
  if (a.datasetName === void 0 && (a.datasetName = `v${r}`), a.datasetNameActive = `${a.datasetName}Active`, a.datasetNamePreventRefocus = `${a.datasetName}PreventRefocus`, typeof window > "u")
    return a;
  const d = document.createElement("span");
  d.dataset[a.datasetName] = "";
  const s = d.getAttributeNames()[0];
  return a.datasetNameSelector = `[${s}]`, a.datasetNameSelectorRovingHorizontal = `[${s}~="roving"][${s}~="horizontal"],[${s}~="roving"]:not([${s}~="vertical"])`, a.datasetNameSelectorRovingVertical = `[${s}~="roving"][${s}~="vertical"],[${s}~="roving"]:not([${s}~="horizontal"])`, a.datasetNameRow = `${a.datasetName}Row`, a.datasetNameRowSelector = (f) => `:focus,[${s}-row~="${f}"]${a.gridSkipSelector},[${s}-row~="*"]${a.gridSkipSelector}`, a.datasetNameCol = `${a.datasetName}Col`, a.datasetNameColSelector = (f) => `:focus,[${s}-col~="${f}"]${a.gridSkipSelector},[${s}-col~="*"]${a.gridSkipSelector}`, a;
}
function H() {
  return !0;
}
function j(o, a = !1) {
  const { left: r, top: d } = o.getBoundingClientRect(), s = document.elementFromPoint(r, d);
  if (s === null && a !== !0 && typeof o.scrollIntoView == "function") {
    const f = [];
    let T = o.parentElement;
    for (; T !== null; )
      f.push([T, T.scrollLeft, T.scrollTop]), T = T.parentElement;
    o.scrollIntoView();
    const L = j(o, !0);
    for (let y = f.length - 1; y >= 0; y -= 1) {
      const [e, b, g] = f[y];
      e.scrollLeft = b, e.scrollTop = g;
    }
    return L;
  }
  return s === null || o.contains(s) === !0;
}
function w(o, a = H) {
  return o === null || typeof o.focus != "function" || a(o) !== !0 ? !1 : (o.focus(), o === document.activeElement);
}
const B = /(\d+)/;
function P(o) {
  const a = B.exec(o);
  return a === null ? "" : a[1];
}
function M(o, a) {
  const r = (o && o !== a && o.parentElement || a).closest('[dir="rtl"],[dir="ltr"]');
  return r && r.matches('[dir="rtl"]');
}
let v = null;
function O(o, a) {
  const r = W(o), d = (e) => {
    v !== e && (e !== null && (e.dataset[r.datasetNameActive] = "", e.__vKbdTrapActiveClean = () => {
      delete e.dataset[r.datasetNameActive], e.__vKbdTrapActiveClean = void 0;
    }), v !== null && typeof v.__vKbdTrapActiveClean == "function" && v.__vKbdTrapActiveClean(), v = e);
  }, s = (e) => {
    const b = (e || {}).__vKbdTrap;
    return b === Object(b) ? b : null;
  }, f = (e, b, g) => {
    b === !0 ? (delete e.dataset[r.datasetName], e.tabIndex === r.trapTabIndex && e.removeAttribute("tabindex")) : (e.dataset[r.datasetName] = Object.keys(g.modifiers).filter((t) => g.modifiers[t] === !0).join(" "), e.tabIndex < 0 && e.getAttribute("tabindex") === null && (e.tabIndex = r.trapTabIndex));
  }, T = (e, { value: b, modifiers: g }) => {
    const t = {
      disable: b === !1,
      modifiers: g,
      focusTarget: null,
      relatedFocusTarget: null,
      bind() {
        e.__vKbdTrap = t, e.addEventListener("keydown", t.trap), e.addEventListener("focusin", t.activate), e.addEventListener("focusout", t.deactivate), e.addEventListener("pointerdown", t.overwiteFocusTarget, { passive: !0 }), t.disable === !1 && f(e, t.disable, t);
      },
      unbind() {
        delete e.__vKbdTrap, e.removeEventListener("keydown", t.trap), e.removeEventListener("focusin", t.activate), e.removeEventListener("focusout", t.deactivate), e.removeEventListener("pointerdown", t.overwiteFocusTarget), f(e, !0, t);
      },
      activate(n) {
        if (t.disable === !0 || n.__vKbdTrap === !0)
          return;
        n.__vKbdTrap = !0;
        const i = n.relatedTarget;
        v !== e && (i === null || i.closest(r.datasetNameSelector) !== e) && (d(e), t.relatedFocusTarget = i, (i === null || i.dataset[r.datasetNamePreventRefocus] === void 0 || e.contains(i) === !1) && requestAnimationFrame(() => {
          t.refocus(t.modifiers.roving !== !0);
        }));
      },
      deactivate(n) {
        if (t.disable === !0 || n.__vKbdTrap === !0)
          return;
        n.__vKbdTrap = !0;
        const i = n.relatedTarget;
        v === e && (i === null || i.closest(r.datasetNameSelector) !== e) && (t.focusTarget = n.target, d(null));
      },
      trap(n) {
        if (t.disable === !0 || n.__vKbdTrap === !0)
          return;
        const { code: i, shiftKey: z } = n, { activeElement: S } = document;
        if (i === "Escape") {
          if (n.__vKbdTrap = !0, v === e) {
            if (t.focusTarget = S, t.modifiers.escexits === !0) {
              d(e.parentElement === null ? null : e.parentElement.closest(r.datasetNameSelector));
              const c = s(v);
              c !== null && c.refocus();
              return;
            }
            if (t.modifiers.escrefocus === !0 && w(t.relatedFocusTarget) === !0)
              return;
            d(null);
          } else
            d(e);
          return;
        }
        if (v !== e)
          return;
        n.__vKbdTrap = !0;
        let m = 0, N = (c) => c, h = !1, x = !1;
        if (t.modifiers.roving === !0) {
          const c = S.matches(r.rovingSkipSelector);
          if (i !== "Tab" && c === !0)
            return;
          if (i === "Tab")
            c === !1 && t.modifiers.tabinside !== !0 ? (h = !0, z === !0 ? (m = 1, N = (l, u) => u) : (m = -1, N = () => 0)) : m = z === !0 ? -1 : 1;
          else if (i === "Home")
            m = 1, N = (l, u) => u;
          else if (i === "End")
            m = -1, N = () => 0;
          else if (e.parentElement !== null && (t.modifiers.vertical === !0 && t.modifiers.horizontal !== !0 && (i === "ArrowLeft" || i === "ArrowRight") || t.modifiers.horizontal === !0 && t.modifiers.vertical !== !0 && (i === "ArrowUp" || i === "ArrowDown"))) {
            const l = e.parentElement.closest(
              t.modifiers.vertical === !0 ? r.datasetNameSelectorRovingHorizontal : r.datasetNameSelectorRovingVertical
            );
            l !== null && (h = l, n.__vKbdTrap = void 0, i === (M(S, e) === !0 ? "ArrowRight" : "ArrowLeft") || i === "ArrowUp" ? (m = 1, N = (u, A) => A) : (m = -1, N = () => 0));
          } else
            (t.modifiers.vertical === !0 || t.modifiers.horizontal !== !0) && (i === "ArrowUp" ? (m = -1, x = "v") : i === "ArrowDown" && (m = 1, x = "v")), (t.modifiers.vertical !== !0 || t.modifiers.horizontal === !0) && (i === "ArrowLeft" ? (m = -1, x = "h") : i === "ArrowRight" && (m = 1, x = "h"), m !== 0 && x === "h" && M(S, e) === !0 && (m *= -1));
        } else
          i === "Tab" && (m = z === !0 ? -1 : 1);
        if (m === 0)
          return;
        h === !1 ? n.preventDefault() : (t.focusTarget = S, t.focusTarget.dataset[r.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
          t.focusTarget && delete t.focusTarget.dataset[r.datasetNamePreventRefocus];
        }));
        let p = [];
        if (x !== !1) {
          let c;
          if (t.modifiers.grid === !0) {
            const l = P(S.dataset[r.datasetNameRow]), u = P(S.dataset[r.datasetNameCol]), A = x === "v" ? r.datasetNameColSelector(u) : r.datasetNameRowSelector(l);
            p = Array.from(e.querySelectorAll(A)), c = new WeakMap(
              p.map((k) => {
                const _ = P(k.dataset[r.datasetNameRow]), R = P(k.dataset[r.datasetNameCol]);
                let C;
                return x === "v" ? (_ !== l || R === u) && (C = 1e3 * _ + 1 * R) : (R !== u || _ === l) && (C = 1e3 * R + 1 * _), [k, C];
              })
            );
          } else if (e.matches('[role="grid"]') === !0 && S.matches('[role="row"] [role="gridcell"]')) {
            const l = Array.from(e.querySelectorAll('[role="row"]')), u = /* @__PURE__ */ new WeakMap(), A = l.map((I, q) => {
              const K = Array.from(I.querySelectorAll('[role="gridcell"]'));
              return K.forEach((E, D) => {
                u.set(E, [q + 1, D + 1]);
              }), K;
            }), k = S.closest('[role="row"]'), _ = l.indexOf(k) + 1, R = A[_ - 1].indexOf(S) + 1, { focusableSelector: C } = r;
            p = Array.from(e.querySelectorAll(C)), c = new WeakMap(
              p.map((I) => {
                const [q, K] = u.get(I) || [null, null];
                let E;
                return x === "v" ? K === R && (E = 1 * q) : q === _ && (E = 1 * K), [I, E];
              })
            );
          }
          c !== void 0 && (p = p.filter((l) => c.get(l) !== void 0), p.sort((l, u) => c.get(l) - c.get(u)));
        }
        if (p.length === 0) {
          const { focusableSelector: c } = r;
          if (p = Array.from(e.querySelectorAll(c)), g.indexorder === !0) {
            const l = new WeakMap(
              p.map((u) => [u, Math.max(u.tabIndex || 0, 0)])
            );
            p.sort((u, A) => l.get(u) - l.get(A));
          }
          e.matches(c) && p.unshift(e);
        }
        const F = p.length - 1;
        let $ = N(p.indexOf(S), F);
        for (let c = 0; c < F; c += 1)
          if ($ += m, $ < 0 ? $ = F : $ > F && ($ = 0), w(p[$]) === !0) {
            h !== !1 && d(h === !0 ? null : h);
            return;
          }
      },
      overwiteFocusTarget(n) {
        t.disable === !1 && n.__vKbdTrap !== !0 && (n.__vKbdTrap = !0, t.focusTarget = n.target);
      },
      refocus(n) {
        return t.disable === !1 && v === e && t.focusTarget && t.focusTarget.closest(r.datasetNameSelector) === e ? t.focusTarget.tabIndex === r.trapTabIndex ? t.modifiers.autofocus === !0 && w(e.querySelector(r.autofocusSelector)) === !0 || w(e.querySelector(r.focusableSelector)) === !0 || w(t.focusTarget) === !0 : n === !0 ? !1 : w(t.focusTarget) === !0 || w(e.querySelector(r.focusableSelector)) === !0 : !1;
      },
      autofocus() {
        requestAnimationFrame(() => {
          t.disable === !1 && w(e.querySelector(r.autofocusSelector), j) === !1 && w(e.querySelector(r.focusableSelector), j);
        });
      }
    };
    t.bind(), g.autofocus === !0 && t.autofocus();
  }, L = (e, { value: b, modifiers: g }) => {
    const t = s(e);
    if (t !== null) {
      const n = b === !1;
      t.modifiers = g, f(e, n, t), v === e && (n === !0 ? d(null) : e.dataset[r.datasetNameActive] = ""), t.disable !== n && (t.disable = n, g.autofocus === !0 && t.autofocus());
    } else
      a !== void 0 ? T(e, { value: b, modifiers: g }) : v === e && d(null);
  }, y = (e) => {
    const b = s(e);
    b !== null && b.unbind(), v === e && d(null);
  };
  return a !== void 0 ? a({
    name: r.name,
    directive: {
      beforeMount: T,
      updated: L,
      unmounted: y,
      getSSRProps() {
      }
    }
  }) : {
    name: r.name,
    directive: {
      bind: T,
      update: L,
      unbind: y
    }
  };
}
const { markRaw: G, version: J } = U, V = J.indexOf("2.") === 0 ? void 0 : G, Q = {
  install(o, a) {
    const { name: r, directive: d } = O(a, V);
    o.directive(r, d);
  }
}, X = (o) => O(o, V);
export {
  X as VueKeyboardTrapDirectiveFactory,
  Q as VueKeyboardTrapDirectivePlugin,
  Q as default
};
//# sourceMappingURL=index.es.js.map
