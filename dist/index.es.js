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
  const c = m.getAttributeNames()[0];
  return r.datasetNameSelector = `[${c}]`, r.datasetNameSelectorRovingHorizontal = `[${c}~="roving"][${c}~="horizontal"],[${c}~="roving"]:not([${c}~="vertical"])`, r.datasetNameSelectorRovingVertical = `[${c}~="roving"][${c}~="vertical"],[${c}~="roving"]:not([${c}~="horizontal"])`, r.datasetNameRow = `${r.datasetName}Row`, r.datasetNameRowSelector = (i) => `:focus,[${c}-row~="${i}"]${r.gridSkipSelector},[${c}-row~="*"]${r.gridSkipSelector}`, r.datasetNameCol = `${r.datasetName}Col`, r.datasetNameColSelector = (i) => `:focus,[${c}-col~="${i}"]${r.gridSkipSelector},[${c}-col~="*"]${r.gridSkipSelector}`, r;
}
function H() {
  return !0;
}
function j(o, r = !1) {
  const { left: a, top: m } = o.getBoundingClientRect(), c = document.elementFromPoint(a, m);
  if (o.contains(c) === !0)
    return !0;
  if (r === !0 || typeof o.scrollIntoView != "function")
    return c === null;
  const i = [];
  let t = o.parentElement;
  for (; t !== null; )
    i.push([t, t.scrollLeft, t.scrollTop]), t = t.parentElement;
  o.scrollIntoView();
  const T = j(o, !0);
  for (let v = i.length - 1; v >= 0; v -= 1) {
    const [e, n, s] = i[v];
    e.scrollLeft = n, e.scrollTop = s;
  }
  return T;
}
function N(o, r = H) {
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
let p = null;
function S(o, r) {
  p !== o && (o !== null && (o.dataset[r.datasetNameActive] = "", o.__vKbdTrapActiveClean = () => {
    delete o.dataset[r.datasetNameActive], o.__vKbdTrapActiveClean = void 0;
  }), p !== null && typeof p.__vKbdTrapActiveClean == "function" && p.__vKbdTrapActiveClean(), p = o);
}
function P(o) {
  const r = (o || {}).__vKbdTrap;
  return r === Object(r) ? r : null;
}
function z(o, r, a, m) {
  r === !0 ? (delete o.dataset[m.datasetName], o.tabIndex === m.trapTabIndex && o.removeAttribute("tabindex")) : (o.dataset[m.datasetName] = Object.keys(a.modifiers).filter((c) => a.modifiers[c] === !0).join(" "), o.tabIndex < 0 && o.getAttribute("tabindex") === null && o.matches("dialog") === !1 && (o.tabIndex = m.trapTabIndex));
}
function O(o, r) {
  const a = W(o), m = (t, { value: T, modifiers: v }) => {
    const e = {
      disable: T === !1,
      modifiers: v,
      focusTarget: null,
      relatedFocusTarget: null,
      bind() {
        t.__vKbdTrap = e, t.addEventListener("keydown", e.trap), t.addEventListener("focusin", e.activate), t.addEventListener("focusout", e.deactivate), t.addEventListener("pointerdown", e.overwiteFocusTarget, { passive: !0 }), e.disable === !1 && z(t, e.disable, e, a);
      },
      unbind() {
        delete t.__vKbdTrap, t.removeEventListener("keydown", e.trap), t.removeEventListener("focusin", e.activate), t.removeEventListener("focusout", e.deactivate), t.removeEventListener("pointerdown", e.overwiteFocusTarget), z(t, !0, e, a);
      },
      activate(n) {
        if (e.disable === !0 || n.__vKbdTrap === !0)
          return;
        n.__vKbdTrap = !0;
        const s = n.relatedTarget;
        p !== t && (s === null || s.closest(a.datasetNameSelector) !== t) && (S(t, a), e.relatedFocusTarget = s, (s === null || s.dataset[a.datasetNamePreventRefocus] === void 0 || t.contains(s) === !1) && requestAnimationFrame(() => {
          e.refocus(e.modifiers.roving !== !0);
        }));
      },
      deactivate(n) {
        if (e.disable === !0 || n.__vKbdTrap === !0)
          return;
        n.__vKbdTrap = !0;
        const s = n.relatedTarget;
        p === t && (s === null || s.closest(a.datasetNameSelector) !== t) && (e.focusTarget = n.target, S(null, a));
      },
      trap(n) {
        if (e.disable === !0 || n.__vKbdTrap === !0)
          return;
        const { code: s, shiftKey: q } = n, { activeElement: g } = document;
        if (s === "Escape") {
          if (n.__vKbdTrap = !0, p === t) {
            if (e.focusTarget = g, e.modifiers.escexits === !0) {
              S(t.parentElement === null ? null : t.parentElement.closest(a.datasetNameSelector), a);
              const l = P(p);
              l !== null && l.refocus();
              return;
            }
            if (e.modifiers.escrefocus === !0 && N(e.relatedFocusTarget) === !0)
              return;
            S(null, a);
          } else
            S(t, a);
          return;
        }
        if (p !== t)
          return;
        n.__vKbdTrap = !0;
        let f = 0, x = (l) => l, y = !1, w = !1;
        if (e.modifiers.roving === !0) {
          const l = g.matches(a.rovingSkipSelector);
          if (s !== "Tab" && l === !0)
            return;
          if (s === "Tab")
            l === !1 && e.modifiers.tabinside !== !0 ? (y = t.parentElement.closest(a.datasetNameSelector), y !== null && (n.__vKbdTrap = void 0), q === !0 ? (f = 1, x = (u, d) => d) : (f = -1, x = () => 0)) : f = q === !0 ? -1 : 1;
          else if (s === "Home")
            f = 1, x = (u, d) => d;
          else if (s === "End")
            f = -1, x = () => 0;
          else if (t.parentElement !== null && (e.modifiers.vertical === !0 && e.modifiers.horizontal !== !0 && (s === "ArrowLeft" || s === "ArrowRight") || e.modifiers.horizontal === !0 && e.modifiers.vertical !== !0 && (s === "ArrowUp" || s === "ArrowDown"))) {
            const u = t.parentElement.closest(
              e.modifiers.vertical === !0 ? a.datasetNameSelectorRovingHorizontal : a.datasetNameSelectorRovingVertical
            );
            u !== null && (y = u, n.__vKbdTrap = void 0, s === (M(g, t) === !0 ? "ArrowRight" : "ArrowLeft") || s === "ArrowUp" ? (f = 1, x = (d, A) => A) : (f = -1, x = () => 0));
          } else
            (e.modifiers.vertical === !0 || e.modifiers.horizontal !== !0) && (s === "ArrowUp" ? (f = -1, w = "v") : s === "ArrowDown" && (f = 1, w = "v")), (e.modifiers.vertical !== !0 || e.modifiers.horizontal === !0) && (s === "ArrowLeft" ? (f = -1, w = "h") : s === "ArrowRight" && (f = 1, w = "h"), f !== 0 && w === "h" && M(g, t) === !0 && (f *= -1));
        } else
          s === "Tab" && (f = q === !0 ? -1 : 1);
        if (f === 0)
          return;
        y === !1 ? n.preventDefault() : (e.focusTarget = g, e.focusTarget.dataset[a.datasetNamePreventRefocus] = "", requestAnimationFrame(() => {
          e.focusTarget && delete e.focusTarget.dataset[a.datasetNamePreventRefocus];
        }));
        let b = [];
        if (w !== !1) {
          let l;
          if (e.modifiers.grid === !0) {
            const u = I(g.dataset[a.datasetNameRow]), d = I(g.dataset[a.datasetNameCol]), A = w === "v" ? a.datasetNameColSelector(d) : a.datasetNameRowSelector(u);
            b = Array.from(t.querySelectorAll(A)), l = new WeakMap(
              b.map((R) => {
                const _ = I(R.dataset[a.datasetNameRow]), $ = I(R.dataset[a.datasetNameCol]);
                let E;
                return w === "v" ? (_ !== u || $ === d) && (E = 1e3 * _ + 1 * $) : ($ !== d || _ === u) && (E = 1e3 * $ + 1 * _), [R, E];
              })
            );
          } else if (t.matches('[role="grid"]') === !0 && g.matches('[role="row"] [role="gridcell"]')) {
            const u = Array.from(t.querySelectorAll('[role="row"]')), d = /* @__PURE__ */ new WeakMap(), A = u.map((L, F) => {
              const K = Array.from(L.querySelectorAll('[role="gridcell"]'));
              return K.forEach((k, D) => {
                d.set(k, [F + 1, D + 1]);
              }), K;
            }), R = g.closest('[role="row"]'), _ = u.indexOf(R) + 1, $ = A[_ - 1].indexOf(g) + 1, { focusableSelector: E } = a;
            b = Array.from(t.querySelectorAll(E)), l = new WeakMap(
              b.map((L) => {
                const [F, K] = d.get(L) || [null, null];
                let k;
                return w === "v" ? K === $ && (k = 1 * F) : F === _ && (k = 1 * K), [L, k];
              })
            );
          }
          l !== void 0 && (b = b.filter((u) => l.get(u) !== void 0), b.sort((u, d) => l.get(u) - l.get(d)));
        }
        if (b.length === 0) {
          const { focusableSelector: l } = a;
          if (b = Array.from(t.querySelectorAll(l)), v.indexorder === !0) {
            const u = new WeakMap(
              b.map((d) => [d, Math.max(d.tabIndex || 0, 0)])
            );
            b.sort((d, A) => u.get(d) - u.get(A));
          }
          t.matches(l) && b.unshift(t);
        }
        const C = b.length - 1;
        let h = x(b.indexOf(g), C);
        for (let l = 0; l < C; l += 1)
          if (h += f, h < 0 ? h = C : h > C && (h = 0), N(b[h]) === !0) {
            y !== !1 && S(y, a);
            return;
          }
      },
      overwiteFocusTarget(n) {
        e.disable === !1 && n.__vKbdTrap !== !0 && (n.__vKbdTrap = !0, e.focusTarget = n.target);
      },
      refocus(n) {
        return e.disable === !1 && p === t && e.focusTarget && e.focusTarget.closest(a.datasetNameSelector) === t ? e.focusTarget.tabIndex === a.trapTabIndex || e.focusTarget.matches("dialog") === !0 ? e.modifiers.autofocus === !0 && N(t.querySelector(a.autofocusSelector)) === !0 || N(t.querySelector(a.focusableSelector)) === !0 || N(e.focusTarget) === !0 : n === !0 ? !1 : N(e.focusTarget) === !0 || N(t.querySelector(a.focusableSelector)) === !0 : !1;
      },
      autofocus() {
        requestAnimationFrame(() => {
          e.disable === !1 && N(t.querySelector(a.autofocusSelector), j) === !1 && N(t.querySelector(a.focusableSelector), j);
        });
      }
    };
    e.bind(), v.autofocus === !0 && e.autofocus();
  }, c = (t, { value: T, modifiers: v }) => {
    const e = P(t);
    if (e !== null) {
      const n = T === !1;
      e.modifiers = v, z(t, n, e, a), p === t && (n === !0 ? S(null, a) : t.dataset[a.datasetNameActive] = ""), e.disable !== n && (e.disable = n, v.autofocus === !0 ? e.autofocus() : n === !1 && p !== t && t.contains(document.activeElement) === !0 && S(t, a));
    } else
      r !== void 0 ? m(t, { value: T, modifiers: v }) : p === t && S(null, a);
  }, i = (t) => {
    const T = P(t);
    T !== null && T.unbind(), p === t && S(null, a);
  };
  return r !== void 0 ? r({
    name: a.name,
    directive: {
      beforeMount: m,
      updated: c,
      unmounted: i,
      getSSRProps() {
      }
    }
  }) : {
    name: a.name,
    directive: {
      bind: m,
      update: c,
      unbind: i
    }
  };
}
const { markRaw: G, version: J } = U, V = J.indexOf("2.") === 0 ? void 0 : G, Q = {
  install(o, r) {
    const { name: a, directive: m } = O(r, V);
    o.directive(a, m);
  }
}, X = (o) => O(o, V);
export {
  X as VueKeyboardTrapDirectiveFactory,
  Q as VueKeyboardTrapDirectivePlugin,
  Q as default
};
//# sourceMappingURL=index.es.js.map
