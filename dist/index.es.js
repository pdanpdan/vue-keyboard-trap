import { isVue3 as z, markRaw as D, computed as U, watch as W, getCurrentScope as H, onScopeDispose as B, unref as G } from "vue-demi";
function V(t) {
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
function J() {
  return !0;
}
function q(t, e = !1) {
  const { left: n, top: i } = t.getBoundingClientRect(), r = document.elementFromPoint(n, i);
  if (t.contains(r) === !0)
    return !0;
  if (e === !0 || typeof t.scrollIntoView != "function")
    return r === null;
  const a = [];
  let o = t.parentElement;
  for (; o !== null; )
    a.push([o, o.scrollLeft, o.scrollTop]), o = o.parentElement;
  t.scrollIntoView();
  const s = q(t, !0);
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const [l, b, w] = a[u];
    l.scrollLeft = b, l.scrollTop = w;
  }
  return s;
}
function v(t, e = J) {
  return t === null || typeof t.focus != "function" || e(t) !== !0 ? !1 : (t.focus(), t === document.activeElement);
}
const Q = /(\d+)/;
function R(t) {
  const e = Q.exec(t);
  return e === null ? "" : e[1];
}
function j(t, e) {
  const n = (t && t !== e && t.parentElement || e).closest('[dir="rtl"],[dir="ltr"]');
  return n && n.matches('[dir="rtl"]');
}
let p = null;
function T(t, e) {
  p !== t && (t !== null && (t.dataset[e.datasetNameActive] = "", t.__vKbdTrapActiveClean = () => {
    delete t.dataset[e.datasetNameActive], t.__vKbdTrapActiveClean = void 0;
  }), p !== null && typeof p.__vKbdTrapActiveClean == "function" && p.__vKbdTrapActiveClean(), p = t);
}
function F(t) {
  const e = (t || {}).__vKbdTrap;
  return e === Object(e) ? e : null;
}
function I(t, e, n, i) {
  e === !0 ? (delete t.dataset[i.datasetName], t.tabIndex === i.trapTabIndex && t.removeAttribute("tabindex")) : (t.dataset[i.datasetName] = Object.keys(n.modifiers).filter((r) => n.modifiers[r] === !0).join(" "), t.tabIndex < 0 && t.getAttribute("tabindex") === null && t.matches("dialog") === !1 && t.matches("[popover]") === !1 && (t.tabIndex = i.trapTabIndex));
}
function X(t, e, n, i) {
  const r = {
    disable: n === !1,
    modifiers: i,
    focusTarget: null,
    relatedFocusTarget: null,
    bind() {
      e.__vKbdTrap = r, e.addEventListener("keydown", r.trap), e.addEventListener("focusin", r.activate), e.addEventListener("focusout", r.deactivate), e.addEventListener("pointerdown", r.overwiteFocusTarget, { passive: !0 }), r.disable === !1 && I(e, r.disable, r, t);
    },
    unbind() {
      delete e.__vKbdTrap, e.removeEventListener("keydown", r.trap), e.removeEventListener("focusin", r.activate), e.removeEventListener("focusout", r.deactivate), e.removeEventListener("pointerdown", r.overwiteFocusTarget), I(e, !0, r, t);
    },
    activate(a) {
      if (r.disable === !0 || a.__vKbdTrap === !0)
        return;
      a.__vKbdTrap = !0;
      const o = a.relatedTarget;
      p !== e && (o === null || o.closest(t.datasetNameSelector) !== e) && (T(e, t), r.relatedFocusTarget = o, (o === null || o.dataset[t.datasetNamePreventRefocus] === void 0 || e.contains(o) === !1) && requestAnimationFrame(() => {
        r.refocus(r.modifiers.roving !== !0);
      }));
    },
    deactivate(a) {
      if (r.disable === !0 || a.__vKbdTrap === !0)
        return;
      a.__vKbdTrap = !0;
      const o = a.relatedTarget;
      p === e && (o === null || o.closest(t.datasetNameSelector) !== e) && (r.focusTarget = a.target, o === null && r.relatedFocusTarget && v(r.relatedFocusTarget), T(null, t));
    },
    trap(a) {
      if (r.disable === !0 || a.__vKbdTrap === !0)
        return;
      const { code: o, shiftKey: s } = a, { activeElement: u } = document;
      if (o === "Escape") {
        if (a.__vKbdTrap = !0, p === e) {
          if (r.focusTarget = u, s === !0)
            a.preventDefault();
          else {
            if (r.modifiers.escexits === !0) {
              T(e.parentElement === null ? null : e.parentElement.closest(t.datasetNameSelector), t);
              const c = F(p);
              c !== null && c.refocus();
              return;
            }
            if (r.modifiers.escrefocus === !0 && v(r.relatedFocusTarget) === !0)
              return;
          }
          const d = e.parentElement && e.parentElement.closest(t.datasetNameSelector);
          T(d || null, t);
        } else
          T(e, t);
        return;
      }
      if (p !== e)
        return;
      a.__vKbdTrap = !0;
      let l = 0, b = (d) => d, w = !1, S = !1;
      if (r.modifiers.roving === !0) {
        const d = u.matches(t.rovingSkipSelector);
        if (o !== "Tab" && d === !0)
          return;
        if (o === "Tab")
          d === !1 && r.modifiers.tabinside !== !0 ? (w = e.parentElement.closest(t.datasetNameSelector), w !== null && (a.__vKbdTrap = void 0), s === !0 ? (l = 1, b = (c, f) => f) : (l = -1, b = () => 0)) : l = s === !0 ? -1 : 1;
        else if (o === "Home")
          l = 1, b = (c, f) => f;
        else if (o === "End")
          l = -1, b = () => 0;
        else if (e.parentElement !== null && (r.modifiers.vertical === !0 && r.modifiers.horizontal !== !0 && (o === "ArrowLeft" || o === "ArrowRight") || r.modifiers.horizontal === !0 && r.modifiers.vertical !== !0 && (o === "ArrowUp" || o === "ArrowDown"))) {
          const c = e.parentElement.closest(
            r.modifiers.vertical === !0 ? t.datasetNameSelectorRovingHorizontal : t.datasetNameSelectorRovingVertical
          );
          c !== null && (w = c, a.__vKbdTrap = void 0, o === (j(u, e) === !0 ? "ArrowRight" : "ArrowLeft") || o === "ArrowUp" ? (l = 1, b = (f, N) => N) : (l = -1, b = () => 0));
        } else
          (r.modifiers.vertical === !0 || r.modifiers.horizontal !== !0) && (o === "ArrowUp" ? (l = -1, S = "v") : o === "ArrowDown" && (l = 1, S = "v")), (r.modifiers.vertical !== !0 || r.modifiers.horizontal === !0) && (o === "ArrowLeft" ? (l = -1, S = "h") : o === "ArrowRight" && (l = 1, S = "h"), l !== 0 && S === "h" && j(u, e) === !0 && (l *= -1));
      } else o === "Tab" && (l = s === !0 ? -1 : 1);
      if (l === 0)
        return;
      w === !1 ? a.preventDefault() : (r.focusTarget = u, r.focusTarget.dataset[t.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
        r.focusTarget && delete r.focusTarget.dataset[t.datasetNamePreventRefocus];
      }));
      let m = [];
      if (S !== !1) {
        let d;
        if (r.modifiers.grid === !0) {
          const c = R(u.dataset[t.datasetNameRow]), f = R(u.dataset[t.datasetNameCol]), N = S === "v" ? t.datasetNameColSelector(f) : t.datasetNameRowSelector(c);
          m = Array.from(e.querySelectorAll(N)), d = new WeakMap(
            m.map((x) => {
              const h = R(x.dataset[t.datasetNameRow]), y = R(x.dataset[t.datasetNameCol]);
              let A;
              return S === "v" ? (h !== c || y === f) && (A = 1e3 * h + 1 * y) : (y !== f || h === c) && (A = 1e3 * y + 1 * h), [x, A];
            })
          );
        } else if (e.matches('[role="grid"]') === !0 && u.matches('[role="row"] [role="gridcell"]')) {
          const c = Array.from(e.querySelectorAll('[role="row"]')), f = /* @__PURE__ */ new WeakMap(), N = c.map((E, K) => {
            const _ = Array.from(E.querySelectorAll('[role="gridcell"]'));
            return _.forEach(($, O) => {
              f.set($, [K + 1, O + 1]);
            }), _;
          }), x = u.closest('[role="row"]'), h = c.indexOf(x) + 1, y = N[h - 1].indexOf(u) + 1, { focusableSelector: A } = t;
          m = Array.from(e.querySelectorAll(A)), d = new WeakMap(
            m.map((E) => {
              const [K, _] = f.get(E) || [null, null];
              let $;
              return S === "v" ? _ === y && ($ = 1 * K) : K === h && ($ = 1 * _), [E, $];
            })
          );
        }
        d !== void 0 && (m = m.filter((c) => d.get(c) !== void 0), m.sort((c, f) => d.get(c) - d.get(f)));
      }
      if (m.length === 0) {
        const { focusableSelector: d } = t;
        if (m = Array.from(e.querySelectorAll(d)), i.indexorder === !0) {
          const c = new WeakMap(
            m.map((f) => [f, Math.max(f.tabIndex || 0, 0)])
          );
          m.sort((f, N) => c.get(f) - c.get(N));
        }
        e.matches(d) && m.unshift(e);
      }
      const C = m.length - 1;
      let g = b(m.indexOf(u), C);
      for (let d = 0; d < C; d += 1)
        if (g += l, g < 0 ? g = C : g > C && (g = 0), v(m[g]) === !0) {
          w !== !1 && T(w, t);
          return;
        }
    },
    overwiteFocusTarget(a) {
      r.disable === !1 && a.__vKbdTrap !== !0 && (a.__vKbdTrap = !0, r.focusTarget = a.target);
    },
    refocus(a) {
      if (r.disable === !1 && p === e && r.focusTarget) {
        let o = r.focusTarget.closest(t.datasetNameSelector);
        for (; o && o !== e; ) {
          const s = F(o);
          if (s !== null && s.disable === !1 && s.focusTarget)
            return T(o, t), s.refocus(a !== void 0 ? s.modifiers.roving !== !0 : void 0);
          o = o.parentElement && o.parentElement.closest(t.datasetNameSelector);
        }
        return r.focusTarget.tabIndex === t.trapTabIndex || r.focusTarget.matches("dialog") === !0 || r.focusTarget.matches("[popover]") === !0 ? r.modifiers.autofocus === !0 && v(e.querySelector(t.autofocusSelector)) === !0 || v(e.querySelector(t.focusableSelector)) === !0 || v(r.focusTarget) === !0 : a === !0 ? !1 : v(r.focusTarget) === !0 || v(e.querySelector(t.focusableSelector)) === !0;
      }
      return !1;
    },
    autofocus() {
      requestAnimationFrame(() => {
        r.disable === !1 && v(e.querySelector(t.autofocusSelector), q) === !1 && v(e.querySelector(t.focusableSelector), q);
      });
    }
  };
  return r;
}
function P(t, e, n, i) {
  const r = X(t, e, n, i);
  r.bind(), i.autofocus === !0 && r.autofocus();
}
function M(t, e, n, i, r) {
  const a = i === !1;
  e.modifiers = r, I(n, a, e, t), p === n && (a === !0 ? T(null, t) : n.dataset[t.datasetNameActive] = ""), e.disable !== a && (e.disable = a, r.autofocus === !0 ? e.autofocus() : a === !1 && p !== n && n.contains(document.activeElement) === !0 && T(n, t));
}
function k(t, e) {
  const n = F(e);
  n !== null && n.unbind(), p === e && (n.relatedFocusTarget && v(n.relatedFocusTarget), T(null, t));
}
function Y(t) {
  const e = V(t), n = (a, { value: o, modifiers: s }) => P(e, a, o, s), i = (a, { value: o, modifiers: s }) => {
    const u = F(a);
    u !== null ? M(e, u, a, o, s) : z ? n(a, { value: o, modifiers: s }) : p === a && T(null, e);
  }, r = (a) => k(e, a);
  return z ? D({
    name: e.name,
    directive: {
      beforeMount: n,
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
function L(t) {
  return typeof t == "function" ? t() : G(t);
}
function ee(t) {
  const e = V(t);
  return (n, i = {}, r = !0) => {
    const a = U(() => {
      const s = L(n);
      return s == null ? null : D("$el" in s ? s.$el : s);
    }), o = W(() => [a.value, L(r), L(i)], ([s, u, l], [b] = []) => {
      s == null && b == null || (b == null && s != null ? P(e, s, u, l) : s == null ? k(e, s) : s !== b ? (k(e, b), P(e, s, u, l)) : M(e, F(s), s, u, l));
    }, { flush: "sync", deep: !0, immediate: !0 });
    H() && B(() => {
      o(), a.value != null && k(e, a.value);
    });
  };
}
const te = {
  install(t, e) {
    const { name: n, directive: i } = Y(e);
    t.directive(n, i);
  }
};
export {
  Y as VueKeyboardTrapDirectiveFactory,
  te as VueKeyboardTrapDirectivePlugin,
  te as default,
  ee as useKeyboardTrapFactory
};
//# sourceMappingURL=index.es.js.map
