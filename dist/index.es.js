import { isVue3 as j, markRaw as V, computed as W, watch as H, getCurrentScope as B, onScopeDispose as G, unref as J } from "vue-demi";
function O(t) {
  const e = {
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
      ].map((a) => `${a}:not([tabindex^="-"])`)
    ).concat(
      [
        'input:not([type="hidden"]):not(fieldset[disabled] input)',
        "select:not(fieldset[disabled] select)",
        "textarea:not(fieldset[disabled] textarea)",
        "button:not(fieldset[disabled] button)",
        '[class*="focusable"]'
      ].map((a) => `${a}:not([disabled]):not([tabindex^="-"])`)
    ).concat(
      [
        'input:not([type="hidden"])',
        "select",
        "textarea",
        "button"
      ].map((a) => `fieldset[disabled]:not(fieldset[disabled] fieldset) > legend ${a}:not([disabled]):not([tabindex^="-"])`)
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
    ].map((a) => `${a}:not([disabled])`).join(","),
    trapTabIndex: -9999,
    ...t
  }, n = e.name.toLocaleLowerCase().split(/[^a-z0-9]+/).filter((a) => a.length > 0).map((a) => `${a[0].toLocaleUpperCase()}${a.slice(1)}`).join("");
  if (e.datasetName === void 0 && (e.datasetName = `v${n}`), e.datasetNameActive = `${e.datasetName}Active`, e.datasetNamePreventRefocus = `${e.datasetName}PreventRefocus`, typeof window > "u")
    return e;
  const i = document.createElement("span");
  i.dataset[e.datasetName] = "";
  const r = i.getAttributeNames()[0];
  return e.datasetNameSelector = `[${r}]`, e.datasetNameSelectorRovingHorizontal = `[${r}~="roving"][${r}~="horizontal"],[${r}~="roving"]:not([${r}~="vertical"])`, e.datasetNameSelectorRovingVertical = `[${r}~="roving"][${r}~="vertical"],[${r}~="roving"]:not([${r}~="horizontal"])`, e.datasetNameRow = `${e.datasetName}Row`, e.datasetNameRowSelector = (a) => `:focus,[${r}-row~="${a}"]${e.gridSkipSelector},[${r}-row~="*"]${e.gridSkipSelector}`, e.datasetNameCol = `${e.datasetName}Col`, e.datasetNameColSelector = (a) => `:focus,[${r}-col~="${a}"]${e.gridSkipSelector},[${r}-col~="*"]${e.gridSkipSelector}`, e;
}
function Q() {
  return !0;
}
function P(t, e = !1) {
  if (t.closest("dialog") != null)
    return !0;
  const {
    left: n,
    right: i,
    top: r,
    bottom: a
  } = t.getBoundingClientRect();
  if (n === i && r === a)
    return !0;
  const o = [
    [n, r],
    [n, (r + a) / 2],
    [n, a],
    [(n + i) / 2, r],
    [(n + i) / 2, (r + a) / 2],
    [(n + i) / 2, a],
    [i, r],
    [i, (r + a) / 2],
    [i, a]
  ];
  let s = !1;
  for (let p = 0; p < 9; p += 1) {
    const b = document.elementFromPoint(...o[p]);
    if (t.contains(b) === !0)
      return !0;
    b != null && (s = !0);
  }
  if (e === !0 || typeof t.scrollIntoView != "function")
    return !s;
  const u = [];
  let l = t.parentElement;
  for (; l != null; )
    u.push([l, l.scrollLeft, l.scrollTop]), l = l.parentElement;
  t.scrollIntoView();
  const T = P(t, !0);
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const [b, m, g] = u[p];
    b.scrollLeft = m, b.scrollTop = g;
  }
  return T;
}
let L;
function w(t, e = Q) {
  return t == null || typeof t.focus != "function" || e(t) !== !0 ? !1 : (L = t, t.focus(), [L, t].includes(document.activeElement) || document.activeElement != null && [L, t].includes(document.activeElement.__focusTargetPlaceholder));
}
const X = /(\d+)/;
function R(t) {
  const e = X.exec(t);
  return e == null ? "" : e[1];
}
function D(t, e) {
  const n = (t && t !== e && t.parentElement || e).closest('[dir="rtl"],[dir="ltr"]');
  return n && n.matches('[dir="rtl"]');
}
let v = null;
function S(t, e) {
  v !== t && (t != null && (t.dataset[e.datasetNameActive] = "", t.__vKbdTrapActiveClean = () => {
    delete t.dataset[e.datasetNameActive], t.__vKbdTrapActiveClean = void 0;
  }), v != null && typeof v.__vKbdTrapActiveClean == "function" && v.__vKbdTrapActiveClean(), v = t);
}
function F(t) {
  const e = (t || {}).__vKbdTrap;
  return e === Object(e) ? e : null;
}
function q(t, e, n, i) {
  e === !0 ? (delete t.dataset[i.datasetName], t.tabIndex === i.trapTabIndex && t.removeAttribute("tabindex")) : (t.dataset[i.datasetName] = Object.keys(n.modifiers).filter((r) => n.modifiers[r] === !0).join(" "), t.tabIndex < 0 && t.getAttribute("tabindex") == null && t.matches("dialog") === !1 && t.matches("[popover]") === !1 && (t.tabIndex = i.trapTabIndex));
}
function Y(t, e, n, i) {
  const r = {
    disable: n === !1,
    modifiers: i,
    focusTarget: null,
    relatedFocusTarget: null,
    bind() {
      e.__vKbdTrap = r, e.addEventListener("keydown", r.trap), e.addEventListener("focusin", r.activate), e.addEventListener("focusout", r.deactivate), e.addEventListener("pointerdown", r.overwriteFocusTarget, { passive: !0 }), r.disable === !1 && q(e, r.disable, r, t);
    },
    unbind() {
      delete e.__vKbdTrap, e.removeEventListener("keydown", r.trap), e.removeEventListener("focusin", r.activate), e.removeEventListener("focusout", r.deactivate), e.removeEventListener("pointerdown", r.overwriteFocusTarget), q(e, !0, r, t);
    },
    activate(a) {
      if (r.disable === !0 || a.__vKbdTrap === !0)
        return;
      a.__vKbdTrap = !0;
      const o = a.relatedTarget;
      o != null && o !== document.body && o.closest(t.datasetNameSelector) !== e && o.tabIndex !== t.trapTabIndex && (r.relatedFocusTarget = o), v !== e && (o == null || o.closest(t.datasetNameSelector) !== e) && (S(e, t), (o == null || o.dataset[t.datasetNamePreventRefocus] === void 0 || e.contains(o) === !1) && r.refocus(r.modifiers.roving !== !0));
    },
    deactivate(a) {
      if (r.disable === !0 || a.__vKbdTrap === !0)
        return;
      a.__vKbdTrap = !0;
      const o = a.relatedTarget;
      v === e && (o == null || o.closest(t.datasetNameSelector) !== e) && (r.focusTarget = a.target, o == null && r.relatedFocusTarget && w(r.relatedFocusTarget), S(null, t));
    },
    trap(a) {
      if (r.disable === !0 || a.__vKbdTrap === !0)
        return;
      const { code: o, shiftKey: s } = a, { activeElement: u } = document;
      if (o === "Escape") {
        if (a.__vKbdTrap = !0, v === e) {
          if (r.focusTarget = u, s === !0)
            a.preventDefault();
          else {
            if (r.modifiers.escexits === !0) {
              S(e.parentElement == null ? null : e.parentElement.closest(t.datasetNameSelector), t);
              const c = F(v);
              c?.refocus();
              return;
            }
            if (r.modifiers.escrefocus === !0 && w(r.relatedFocusTarget) === !0)
              return;
          }
          const d = e.parentElement && e.parentElement.closest(t.datasetNameSelector);
          S(d || null, t);
        } else
          S(e, t);
        return;
      }
      if (v !== e)
        return;
      a.__vKbdTrap = !0;
      let l = 0, T = (d) => d, p = !1, b = !1;
      if (r.modifiers.roving === !0) {
        const d = u.matches(t.rovingSkipSelector);
        if (o !== "Tab" && d === !0)
          return;
        if (o === "Tab")
          d === !1 && r.modifiers.tabinside !== !0 ? (p = e.parentElement.closest(t.datasetNameSelector), p != null && (a.__vKbdTrap = void 0), s === !0 ? (l = 1, T = (c, f) => f) : (l = -1, T = () => 0)) : l = s === !0 ? -1 : 1;
        else if (o === "Home")
          l = 1, T = (c, f) => f;
        else if (o === "End")
          l = -1, T = () => 0;
        else if (e.parentElement != null && (r.modifiers.vertical === !0 && r.modifiers.horizontal !== !0 && (o === "ArrowLeft" || o === "ArrowRight") || r.modifiers.horizontal === !0 && r.modifiers.vertical !== !0 && (o === "ArrowUp" || o === "ArrowDown"))) {
          const c = e.parentElement.closest(
            r.modifiers.vertical === !0 ? t.datasetNameSelectorRovingHorizontal : t.datasetNameSelectorRovingVertical
          );
          c != null && (p = c, a.__vKbdTrap = void 0, o === (D(u, e) === !0 ? "ArrowRight" : "ArrowLeft") || o === "ArrowUp" ? (l = 1, T = (f, h) => h) : (l = -1, T = () => 0));
        } else
          (r.modifiers.vertical === !0 || r.modifiers.horizontal !== !0) && (o === "ArrowUp" ? (l = -1, b = "v") : o === "ArrowDown" && (l = 1, b = "v")), (r.modifiers.vertical !== !0 || r.modifiers.horizontal === !0) && (o === "ArrowLeft" ? (l = -1, b = "h") : o === "ArrowRight" && (l = 1, b = "h"), l !== 0 && b === "h" && D(u, e) === !0 && (l *= -1));
      } else o === "Tab" && (l = s === !0 ? -1 : 1);
      if (l === 0)
        return;
      p === !1 ? a.preventDefault() : (r.focusTarget = u, r.focusTarget.dataset[t.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
        r.focusTarget && delete r.focusTarget.dataset[t.datasetNamePreventRefocus];
      }));
      let m = [];
      if (b !== !1) {
        let d;
        if (r.modifiers.grid === !0) {
          const c = R(u.dataset[t.datasetNameRow]), f = R(u.dataset[t.datasetNameCol]), h = b === "v" ? t.datasetNameColSelector(f) : t.datasetNameRowSelector(c);
          m = Array.from(e.querySelectorAll(h)), d = new WeakMap(
            m.map((_) => {
              const N = R(_.dataset[t.datasetNameRow]), y = R(_.dataset[t.datasetNameCol]);
              let A;
              return b === "v" ? (N !== c || y === f) && (A = 1e3 * N + 1 * y) : (y !== f || N === c) && (A = 1e3 * y + 1 * N), [_, A];
            })
          );
        } else if (e.matches('[role="grid"]') === !0 && u.matches('[role="row"] [role="gridcell"]')) {
          const c = Array.from(e.querySelectorAll('[role="row"]')), f = /* @__PURE__ */ new WeakMap(), h = c.map((C, K) => {
            const $ = Array.from(C.querySelectorAll('[role="gridcell"]'));
            return $.forEach((E, U) => {
              f.set(E, [K + 1, U + 1]);
            }), $;
          }), _ = u.closest('[role="row"]'), N = c.indexOf(_) + 1, y = h[N - 1].indexOf(u) + 1, { focusableSelector: A } = t;
          m = Array.from(e.querySelectorAll(A)), d = new WeakMap(
            m.map((C) => {
              const [K, $] = f.get(C) || [null, null];
              let E;
              return b === "v" ? $ === y && (E = 1 * K) : K === N && (E = 1 * $), [C, E];
            })
          );
        }
        d != null && p == null && (m = m.filter((c) => d.get(c) !== void 0), m.sort((c, f) => d.get(c) - d.get(f)));
      }
      if (m.length === 0) {
        const { focusableSelector: d } = t;
        if (m = Array.from(e.querySelectorAll(d)), i.indexorder === !0 && p == null) {
          const c = new WeakMap(
            m.map((f) => [f, Math.max(f.tabIndex || 0, 0)])
          );
          m.sort((f, h) => c.get(f) - c.get(h));
        }
        e.matches(d) && m.unshift(e);
      }
      const g = m.length - 1;
      let x = T(m.indexOf(u), g);
      for (let d = 0; d < g; d += 1)
        if (x += l, x < 0 ? x = g : x > g && (x = 0), w(m[x]) === !0) {
          p !== !1 && S(p, t);
          return;
        }
    },
    overwriteFocusTarget(a) {
      r.disable === !1 && a.__vKbdTrap !== !0 && (a.__vKbdTrap = !0, r.focusTarget = a.target);
    },
    refocus(a) {
      if (r.disable === !1 && v === e && r.focusTarget) {
        let o = r.focusTarget.closest(t.datasetNameSelector);
        for (; o && o !== e; ) {
          const s = F(o);
          if (s !== null && s.disable === !1 && s.focusTarget)
            return S(o, t), s.refocus(a !== void 0 ? s.modifiers.roving !== !0 : void 0);
          o = o.parentElement && o.parentElement.closest(t.datasetNameSelector);
        }
        return r.focusTarget.tabIndex === t.trapTabIndex || r.focusTarget.matches("dialog") === !0 || r.focusTarget.matches("[popover]") === !0 ? r.modifiers.autofocus === !0 && w(e.querySelector(t.autofocusSelector)) === !0 || w(e.querySelector(t.focusableSelector)) === !0 || w(r.focusTarget) === !0 : a === !0 ? !1 : w(r.focusTarget) === !0 || w(e.querySelector(t.focusableSelector)) === !0;
      }
      return !1;
    },
    autofocus() {
      S(e, t), r.disable === !1 && w(e.querySelector(t.autofocusSelector), P) === !1 && w(e.querySelector(t.focusableSelector), P);
    }
  };
  return r;
}
function z(t, e, n, i) {
  const r = Y(t, e, n, i);
  r.bind(), i.autofocus === !0 && r.autofocus();
}
function M(t, e, n, i, r) {
  const a = i === !1;
  e.modifiers = r, q(n, a, e, t), v === n && (a === !0 ? S(null, t) : n.dataset[t.datasetNameActive] = ""), e.disable !== a && (e.disable = a, r.autofocus === !0 ? e.autofocus() : a === !1 && v !== n && n.contains(document.activeElement) === !0 && S(n, t));
}
function k(t, e) {
  const n = F(e);
  n !== null && n.unbind(), v === e && (n.relatedFocusTarget && w(n.relatedFocusTarget), S(null, t));
}
function Z(t) {
  const e = O(t), n = (a, { value: o, modifiers: s }) => z(e, a, o, s), i = (a, { value: o, modifiers: s }) => {
    const u = F(a);
    u !== null ? M(e, u, a, o, s) : j ? n(a, { value: o, modifiers: s }) : v === a && S(null, e);
  }, r = (a) => k(e, a);
  return j ? V({
    name: e.name,
    directive: {
      mounted: n,
      updated: i,
      unmounted: r,
      getSSRProps() {
      }
    }
  }) : {
    name: e.name,
    directive: {
      bind: n,
      update: i,
      unbind: r
    }
  };
}
function I(t) {
  return typeof t == "function" ? t() : J(t);
}
function te(t) {
  const e = O(t);
  return (n, i = {}, r = !0) => {
    const a = W(() => {
      const s = I(n);
      return s == null ? null : V("$el" in s ? s.$el : s);
    }), o = H(() => [a.value, I(r), I(i)], ([s, u, l], [T] = []) => {
      s == null && T == null || (T == null && s != null ? z(e, s, u, l) : s == null ? k(e, s) : s !== T ? (k(e, T), z(e, s, u, l)) : M(e, F(s), s, u, l));
    }, { flush: "sync", deep: !0, immediate: !0 });
    B() && G(() => {
      o(), a.value != null && k(e, a.value);
    });
  };
}
const re = {
  install(t, e) {
    const { name: n, directive: i } = Z(e);
    t.directive(n, i);
  }
};
export {
  Z as VueKeyboardTrapDirectiveFactory,
  re as VueKeyboardTrapDirectivePlugin,
  re as default,
  te as useKeyboardTrapFactory
};
//# sourceMappingURL=index.es.js.map
