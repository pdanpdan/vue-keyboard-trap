import * as U from "vue";
function W(o) {
  const a = {
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
  }, r = a.name.toLocaleLowerCase().split(/[^a-z0-9]+/).filter((i) => i.length > 0).map((i) => `${i[0].toLocaleUpperCase()}${i.slice(1)}`).join("");
  if (a.datasetName === void 0 && (a.datasetName = `v${r}`), a.datasetNameActive = `${a.datasetName}Active`, a.datasetNamePreventRefocus = `${a.datasetName}PreventRefocus`, typeof window > "u")
    return a;
  const f = document.createElement("span");
  f.dataset[a.datasetName] = "";
  const c = f.getAttributeNames()[0];
  return a.datasetNameSelector = `[${c}]`, a.datasetNameSelectorRovingHorizontal = `[${c}~="roving"][${c}~="horizontal"],[${c}~="roving"]:not([${c}~="vertical"])`, a.datasetNameSelectorRovingVertical = `[${c}~="roving"][${c}~="vertical"],[${c}~="roving"]:not([${c}~="horizontal"])`, a.datasetNameRow = `${a.datasetName}Row`, a.datasetNameRowSelector = (i) => `:focus,[${c}-row~="${i}"]${a.gridSkipSelector},[${c}-row~="*"]${a.gridSkipSelector}`, a.datasetNameCol = `${a.datasetName}Col`, a.datasetNameColSelector = (i) => `:focus,[${c}-col~="${i}"]${a.gridSkipSelector},[${c}-col~="*"]${a.gridSkipSelector}`, a;
}
function H() {
  return !0;
}
function j(o, a = !1) {
  const { left: r, top: f } = o.getBoundingClientRect(), c = document.elementFromPoint(r, f);
  if (o.contains(c) === !0)
    return !0;
  if (a === !0 || typeof o.scrollIntoView != "function")
    return c === null;
  const i = [];
  let T = o.parentElement;
  for (; T !== null; )
    i.push([T, T.scrollLeft, T.scrollTop]), T = T.parentElement;
  o.scrollIntoView();
  const L = j(o, !0);
  for (let _ = i.length - 1; _ >= 0; _ -= 1) {
    const [e, b, g] = i[_];
    e.scrollLeft = b, e.scrollTop = g;
  }
  return L;
}
function x(o, a = H) {
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
  const r = W(o), f = (e) => {
    v !== e && (e !== null && (e.dataset[r.datasetNameActive] = "", e.__vKbdTrapActiveClean = () => {
      delete e.dataset[r.datasetNameActive], e.__vKbdTrapActiveClean = void 0;
    }), v !== null && typeof v.__vKbdTrapActiveClean == "function" && v.__vKbdTrapActiveClean(), v = e);
  }, c = (e) => {
    const b = (e || {}).__vKbdTrap;
    return b === Object(b) ? b : null;
  }, i = (e, b, g) => {
    b === !0 ? (delete e.dataset[r.datasetName], e.tabIndex === r.trapTabIndex && e.removeAttribute("tabindex")) : (e.dataset[r.datasetName] = Object.keys(g.modifiers).filter((t) => g.modifiers[t] === !0).join(" "), e.tabIndex < 0 && e.getAttribute("tabindex") === null && (e.tabIndex = r.trapTabIndex));
  }, T = (e, { value: b, modifiers: g }) => {
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
      activate(n) {
        if (t.disable === !0 || n.__vKbdTrap === !0)
          return;
        n.__vKbdTrap = !0;
        const s = n.relatedTarget;
        v !== e && (s === null || s.closest(r.datasetNameSelector) !== e) && (f(e), t.relatedFocusTarget = s, (s === null || s.dataset[r.datasetNamePreventRefocus] === void 0 || e.contains(s) === !1) && requestAnimationFrame(() => {
          t.refocus(t.modifiers.roving !== !0);
        }));
      },
      deactivate(n) {
        if (t.disable === !0 || n.__vKbdTrap === !0)
          return;
        n.__vKbdTrap = !0;
        const s = n.relatedTarget;
        v === e && (s === null || s.closest(r.datasetNameSelector) !== e) && (t.focusTarget = n.target, f(null));
      },
      trap(n) {
        if (t.disable === !0 || n.__vKbdTrap === !0)
          return;
        const { code: s, shiftKey: z } = n, { activeElement: S } = document;
        if (s === "Escape") {
          if (n.__vKbdTrap = !0, v === e) {
            if (t.focusTarget = S, t.modifiers.escexits === !0) {
              f(e.parentElement === null ? null : e.parentElement.closest(r.datasetNameSelector));
              const l = c(v);
              l !== null && l.refocus();
              return;
            }
            if (t.modifiers.escrefocus === !0 && x(t.relatedFocusTarget) === !0)
              return;
            f(null);
          } else
            f(e);
          return;
        }
        if (v !== e)
          return;
        n.__vKbdTrap = !0;
        let m = 0, N = (l) => l, h = !1, w = !1;
        if (t.modifiers.roving === !0) {
          const l = S.matches(r.rovingSkipSelector);
          if (s !== "Tab" && l === !0)
            return;
          if (s === "Tab")
            l === !1 && t.modifiers.tabinside !== !0 ? (h = !0, z === !0 ? (m = 1, N = (u, d) => d) : (m = -1, N = () => 0)) : m = z === !0 ? -1 : 1;
          else if (s === "Home")
            m = 1, N = (u, d) => d;
          else if (s === "End")
            m = -1, N = () => 0;
          else if (e.parentElement !== null && (t.modifiers.vertical === !0 && t.modifiers.horizontal !== !0 && (s === "ArrowLeft" || s === "ArrowRight") || t.modifiers.horizontal === !0 && t.modifiers.vertical !== !0 && (s === "ArrowUp" || s === "ArrowDown"))) {
            const u = e.parentElement.closest(
              t.modifiers.vertical === !0 ? r.datasetNameSelectorRovingHorizontal : r.datasetNameSelectorRovingVertical
            );
            u !== null && (h = u, n.__vKbdTrap = void 0, s === (M(S, e) === !0 ? "ArrowRight" : "ArrowLeft") || s === "ArrowUp" ? (m = 1, N = (d, A) => A) : (m = -1, N = () => 0));
          } else
            (t.modifiers.vertical === !0 || t.modifiers.horizontal !== !0) && (s === "ArrowUp" ? (m = -1, w = "v") : s === "ArrowDown" && (m = 1, w = "v")), (t.modifiers.vertical !== !0 || t.modifiers.horizontal === !0) && (s === "ArrowLeft" ? (m = -1, w = "h") : s === "ArrowRight" && (m = 1, w = "h"), m !== 0 && w === "h" && M(S, e) === !0 && (m *= -1));
        } else
          s === "Tab" && (m = z === !0 ? -1 : 1);
        if (m === 0)
          return;
        h === !1 ? n.preventDefault() : (t.focusTarget = S, t.focusTarget.dataset[r.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
          t.focusTarget && delete t.focusTarget.dataset[r.datasetNamePreventRefocus];
        }));
        let p = [];
        if (w !== !1) {
          let l;
          if (t.modifiers.grid === !0) {
            const u = P(S.dataset[r.datasetNameRow]), d = P(S.dataset[r.datasetNameCol]), A = w === "v" ? r.datasetNameColSelector(d) : r.datasetNameRowSelector(u);
            p = Array.from(e.querySelectorAll(A)), l = new WeakMap(
              p.map((k) => {
                const y = P(k.dataset[r.datasetNameRow]), R = P(k.dataset[r.datasetNameCol]);
                let C;
                return w === "v" ? (y !== u || R === d) && (C = 1e3 * y + 1 * R) : (R !== d || y === u) && (C = 1e3 * R + 1 * y), [k, C];
              })
            );
          } else if (e.matches('[role="grid"]') === !0 && S.matches('[role="row"] [role="gridcell"]')) {
            const u = Array.from(e.querySelectorAll('[role="row"]')), d = /* @__PURE__ */ new WeakMap(), A = u.map((I, q) => {
              const K = Array.from(I.querySelectorAll('[role="gridcell"]'));
              return K.forEach((E, D) => {
                d.set(E, [q + 1, D + 1]);
              }), K;
            }), k = S.closest('[role="row"]'), y = u.indexOf(k) + 1, R = A[y - 1].indexOf(S) + 1, { focusableSelector: C } = r;
            p = Array.from(e.querySelectorAll(C)), l = new WeakMap(
              p.map((I) => {
                const [q, K] = d.get(I) || [null, null];
                let E;
                return w === "v" ? K === R && (E = 1 * q) : q === y && (E = 1 * K), [I, E];
              })
            );
          }
          l !== void 0 && (p = p.filter((u) => l.get(u) !== void 0), p.sort((u, d) => l.get(u) - l.get(d)));
        }
        if (p.length === 0) {
          const { focusableSelector: l } = r;
          if (p = Array.from(e.querySelectorAll(l)), g.indexorder === !0) {
            const u = new WeakMap(
              p.map((d) => [d, Math.max(d.tabIndex || 0, 0)])
            );
            p.sort((d, A) => u.get(d) - u.get(A));
          }
          e.matches(l) && p.unshift(e);
        }
        const F = p.length - 1;
        let $ = N(p.indexOf(S), F);
        for (let l = 0; l < F; l += 1)
          if ($ += m, $ < 0 ? $ = F : $ > F && ($ = 0), x(p[$]) === !0) {
            h !== !1 && f(h === !0 ? null : h);
            return;
          }
      },
      overwiteFocusTarget(n) {
        t.disable === !1 && n.__vKbdTrap !== !0 && (n.__vKbdTrap = !0, t.focusTarget = n.target);
      },
      refocus(n) {
        return t.disable === !1 && v === e && t.focusTarget && t.focusTarget.closest(r.datasetNameSelector) === e ? t.focusTarget.tabIndex === r.trapTabIndex ? t.modifiers.autofocus === !0 && x(e.querySelector(r.autofocusSelector)) === !0 || x(e.querySelector(r.focusableSelector)) === !0 || x(t.focusTarget) === !0 : n === !0 ? !1 : x(t.focusTarget) === !0 || x(e.querySelector(r.focusableSelector)) === !0 : !1;
      },
      autofocus() {
        requestAnimationFrame(() => {
          t.disable === !1 && x(e.querySelector(r.autofocusSelector), j) === !1 && x(e.querySelector(r.focusableSelector), j);
        });
      }
    };
    t.bind(), g.autofocus === !0 && t.autofocus();
  }, L = (e, { value: b, modifiers: g }) => {
    const t = c(e);
    if (t !== null) {
      const n = b === !1;
      t.modifiers = g, i(e, n, t), v === e && (n === !0 ? f(null) : e.dataset[r.datasetNameActive] = ""), t.disable !== n && (t.disable = n, g.autofocus === !0 && t.autofocus());
    } else
      a !== void 0 ? T(e, { value: b, modifiers: g }) : v === e && f(null);
  }, _ = (e) => {
    const b = c(e);
    b !== null && b.unbind(), v === e && f(null);
  };
  return a !== void 0 ? a({
    name: r.name,
    directive: {
      beforeMount: T,
      updated: L,
      unmounted: _,
      getSSRProps() {
      }
    }
  }) : {
    name: r.name,
    directive: {
      bind: T,
      update: L,
      unbind: _
    }
  };
}
const { markRaw: G, version: J } = U, V = J.indexOf("2.") === 0 ? void 0 : G, Q = {
  install(o, a) {
    const { name: r, directive: f } = O(a, V);
    o.directive(r, f);
  }
}, X = (o) => O(o, V);
export {
  X as VueKeyboardTrapDirectiveFactory,
  Q as VueKeyboardTrapDirectivePlugin,
  Q as default
};
//# sourceMappingURL=index.es.js.map
