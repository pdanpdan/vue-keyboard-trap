import { createConfig } from './options';
import {
  extractNumber,
  focus,
  visibleFocusCheckFn,
  dirIsRtl,
} from './helpers';

// markRawFn: function from Vue - will generate a Vue3 directive (else Vue2)
//
// options:
//   name: snake-case name of the directive (without `v-` prefix) - default `kbd-trap`
//   datasetName: camelCase name of the `data-attribute` to be set on element when trap is enabled - default `v${ PascalCase from name}`
//
//   focusableSelector: CSS selector for focusable elements
//   rovingSkipSelector: CSS selector for elements that should not respond to roving key navigation (input, textarea, ...)
//   gridSkipSelector: CSS selector that will be applied in .roving.grid mode to exclude elements - must be a series of :not() selectors
//   autofocusSelector: CSS selector for the elements that should be autofocused
//   trapTabIndex: tabIndex value to be used when trap element has a tabIndex of -1 and has no `tabindex` attribute (default -9999)
//
//
// value: false to disable
//
//
// modifiers:
//   .autofocus - autofocuses the first element that matches `autofocusSelector` or (if no such element is found) the first focusable child element when the directive is mounted or enabled
//   .roving, .roving.vertical.horizontal - allow roving navigation (Home, End, ArrowKeys)
//   .roving.vertical - allow roving navigation (Home, End, ArrowUp, ArrowDown)
//   .roving.horizontal - allow roving navigation (Home, End, ArrowLeft, ArrowRight)
//   .roving.grid - allow roving navigation (Home, End, ArrowKeys) using dataset attrs on elements [data-${ camelCase from datasetName }-(row|col)]
//                  [data-${ camelCase from datasetName }-(row|col)~="*"] is a catchall
//   .roving used on an element with [role="grid"] - allow roving navigation (Home, End, ArrowKeys) using role attrs on elements [role="row|gridcell"]
//   .roving.tabinside - Tab key navigates to next/prev element inside trap (by default Tab key navigates to next/prev element outside trap in roving mode)
//   .escrefocus - refocus element that was in focus before activating the trap on Esc
//   .escexits - refocus a parent trap on Esc (has priority over .escrefocus)
//   .indexorder used without .grid and not on elements with [role="grid"] - force usage of order in tabindex (tabindex in ascending order and then DOM order)

let activeTrapEl = null;

function setActiveTrapEl(newEl, config) {
  if (activeTrapEl !== newEl) {
    if (newEl !== null) {
      newEl.dataset[config.datasetNameActive] = '';
      newEl.__vKbdTrapActiveClean = () => {
        delete newEl.dataset[config.datasetNameActive];
        newEl.__vKbdTrapActiveClean = undefined;
      };
    }

    if (activeTrapEl !== null && typeof activeTrapEl.__vKbdTrapActiveClean === 'function') {
      activeTrapEl.__vKbdTrapActiveClean();
    }

    activeTrapEl = newEl;
  }
}

function getCtx(el) {
  const ctx = (el || {}).__vKbdTrap;

  return ctx === Object(ctx) ? ctx : null;
}

function setAttributes(el, disable, ctx, config) {
  if (disable === true) {
    delete el.dataset[config.datasetName];

    if (el.tabIndex === config.trapTabIndex) {
      el.removeAttribute('tabindex');
    }
  } else {
    el.dataset[config.datasetName] = Object.keys(ctx.modifiers)
      .filter((key) => ctx.modifiers[key] === true)
      .join(' ');

    if (el.tabIndex < 0 && el.getAttribute('tabindex') === null) {
      el.tabIndex = config.trapTabIndex;
    }
  }
}

export default function directiveFactory(options, markRawFn) {
  const config = createConfig(options);

  const beforeMount = (el, { value, modifiers }) => {
    const ctx = {
      disable: value === false,
      modifiers,

      focusTarget: null,
      relatedFocusTarget: null,

      bind() {
        el.__vKbdTrap = ctx;
        el.addEventListener('keydown', ctx.trap);
        el.addEventListener('focusin', ctx.activate);
        el.addEventListener('focusout', ctx.deactivate);
        el.addEventListener('pointerdown', ctx.overwiteFocusTarget, { passive: true });

        if (ctx.disable === false) {
          setAttributes(el, ctx.disable, ctx, config);
        }
      },

      unbind() {
        delete el.__vKbdTrap;
        el.removeEventListener('keydown', ctx.trap);
        el.removeEventListener('focusin', ctx.activate);
        el.removeEventListener('focusout', ctx.deactivate);
        el.removeEventListener('pointerdown', ctx.overwiteFocusTarget);
        setAttributes(el, true, ctx, config);
      },

      activate(ev) {
        if (ctx.disable === true || ev.__vKbdTrap === true) {
          return;
        }

        ev.__vKbdTrap = true;

        const oldFocusedElement = ev.relatedTarget;

        if (
          activeTrapEl !== el
          && (
            oldFocusedElement === null
            || oldFocusedElement.closest(config.datasetNameSelector) !== el
          )
        ) {
          setActiveTrapEl(el, config);

          ctx.relatedFocusTarget = oldFocusedElement;

          if (
            oldFocusedElement === null
            || oldFocusedElement.dataset[config.datasetNamePreventRefocus] === undefined
            || el.contains(oldFocusedElement) === false
          ) {
            requestAnimationFrame(() => {
              ctx.refocus(ctx.modifiers.roving !== true);
            });
          }
        }
      },

      deactivate(ev) {
        if (ctx.disable === true || ev.__vKbdTrap === true) {
          return;
        }

        ev.__vKbdTrap = true;

        const newFocusedElement = ev.relatedTarget;

        if (
          activeTrapEl === el
          && (
            newFocusedElement === null
            || newFocusedElement.closest(config.datasetNameSelector) !== el
          )
        ) {
          ctx.focusTarget = ev.target;

          setActiveTrapEl(null, config);
        }
      },

      trap(ev) {
        if (ctx.disable === true || ev.__vKbdTrap === true) {
          return;
        }

        const { code, shiftKey } = ev;
        const { activeElement } = document;

        if (code === 'Escape') {
          ev.__vKbdTrap = true;

          if (activeTrapEl === el) {
            ctx.focusTarget = activeElement;

            if (ctx.modifiers.escexits === true) {
              setActiveTrapEl(el.parentElement === null ? null : el.parentElement.closest(config.datasetNameSelector), config);

              const newCtx = getCtx(activeTrapEl);

              if (newCtx !== null) {
                newCtx.refocus();
              }

              return;
            }

            if (ctx.modifiers.escrefocus === true && focus(ctx.relatedFocusTarget) === true) {
              return;
            }

            setActiveTrapEl(null, config);
          } else {
            setActiveTrapEl(el, config);
          }

          return;
        }

        if (activeTrapEl !== el) {
          return;
        }

        ev.__vKbdTrap = true;

        let step = 0;
        let indexSelector = (i) => i;
        let rovingExit = false;
        let rovingDirection = false;

        if (ctx.modifiers.roving === true) {
          const rovingSkipSelector = activeElement.matches(config.rovingSkipSelector);

          if (code !== 'Tab' && rovingSkipSelector === true) {
            return;
          }

          if (code === 'Tab') {
            if (rovingSkipSelector === false && ctx.modifiers.tabinside !== true) {
              rovingExit = el.parentElement.closest(config.datasetNameSelector);

              if (rovingExit !== null) {
                ev.__vKbdTrap = undefined;
              }

              if (shiftKey === true) {
                step = 1;
                indexSelector = (_, iMax) => iMax;
              } else {
                step = -1;
                indexSelector = () => 0;
              }
            } else {
              step = shiftKey === true ? -1 : 1;
            }
          } else if (code === 'Home') {
            step = 1;
            indexSelector = (_, iMax) => iMax;
          } else if (code === 'End') {
            step = -1;
            indexSelector = () => 0;
          } else if (
            el.parentElement !== null
            && (
              (
                ctx.modifiers.vertical === true
                && ctx.modifiers.horizontal !== true
                && (code === 'ArrowLeft' || code === 'ArrowRight')
              ) || (
                ctx.modifiers.horizontal === true
                && ctx.modifiers.vertical !== true
                && (code === 'ArrowUp' || code === 'ArrowDown')
              )
            )
          ) {
            const parentTrap = el.parentElement.closest(
              ctx.modifiers.vertical === true
                ? config.datasetNameSelectorRovingHorizontal
                : config.datasetNameSelectorRovingVertical,
            );

            if (parentTrap !== null) {
              rovingExit = parentTrap;

              ev.__vKbdTrap = undefined;

              if (code === (dirIsRtl(activeElement, el) === true ? 'ArrowRight' : 'ArrowLeft') || code === 'ArrowUp') {
                step = 1;
                indexSelector = (_, iMax) => iMax;
              } else {
                step = -1;
                indexSelector = () => 0;
              }
            }
          } else {
            if (ctx.modifiers.vertical === true || ctx.modifiers.horizontal !== true) {
              if (code === 'ArrowUp') {
                step = -1;
                rovingDirection = 'v';
              } else if (code === 'ArrowDown') {
                step = 1;
                rovingDirection = 'v';
              }
            }

            if (ctx.modifiers.vertical !== true || ctx.modifiers.horizontal === true) {
              if (code === 'ArrowLeft') {
                step = -1;
                rovingDirection = 'h';
              } else if (code === 'ArrowRight') {
                step = 1;
                rovingDirection = 'h';
              }

              if (step !== 0 && rovingDirection === 'h' && dirIsRtl(activeElement, el) === true) {
                step *= -1;
              }
            }
          }
        } else if (code === 'Tab') {
          step = shiftKey === true ? -1 : 1;
        }

        if (step === 0) {
          return;
        }

        if (rovingExit === false) {
          ev.preventDefault();
        } else {
          ctx.focusTarget = activeElement;
          ctx.focusTarget.dataset[config.datasetNamePreventRefocus] = '';

          requestAnimationFrame(() => {
            if (ctx.focusTarget) {
              delete ctx.focusTarget.dataset[config.datasetNamePreventRefocus];
            }
          });
        }

        let focusableList = [];

        if (rovingDirection !== false) {
          let focusableMap;

          if (ctx.modifiers.grid === true) {
            const row = extractNumber(activeElement.dataset[config.datasetNameRow]);
            const col = extractNumber(activeElement.dataset[config.datasetNameCol]);

            const focusableSelector = rovingDirection === 'v' ? config.datasetNameColSelector(col) : config.datasetNameRowSelector(row);
            focusableList = Array.from(el.querySelectorAll(focusableSelector));

            focusableMap = new WeakMap(
              focusableList.map((o) => {
                const r = extractNumber(o.dataset[config.datasetNameRow]);
                const c = extractNumber(o.dataset[config.datasetNameCol]);
                let val;

                if (rovingDirection === 'v') {
                  if (r !== row || c === col) {
                    val = 1000 * r + 1 * c;
                  }
                } else if (c !== col || r === row) {
                  val = 1000 * c + 1 * r;
                }

                return [o, val];
              }),
            );
          } else if (el.matches('[role="grid"]') === true && activeElement.matches('[role="row"] [role="gridcell"]')) {
            const rows = Array.from(el.querySelectorAll('[role="row"]'));
            const elToRowCol = new WeakMap();
            const rowsCells = rows.map((r, rIndex) => {
              const cols = Array.from(r.querySelectorAll('[role="gridcell"]'));

              cols.forEach((o, cIndex) => {
                elToRowCol.set(o, [rIndex + 1, cIndex + 1]);
              });

              return cols;
            });
            const curRow = activeElement.closest('[role="row"]');
            const row = rows.indexOf(curRow) + 1;
            const col = rowsCells[row - 1].indexOf(activeElement) + 1;

            const { focusableSelector } = config;
            focusableList = Array.from(el.querySelectorAll(focusableSelector));

            focusableMap = new WeakMap(
              focusableList.map((o) => {
                const [r, c] = elToRowCol.get(o) || [null, null];
                let val;

                if (rovingDirection === 'v') {
                  if (c === col) {
                    val = 1 * r;
                  }
                } else if (r === row) {
                  val = 1 * c;
                }

                return [o, val];
              }),
            );
          }

          if (focusableMap !== undefined) {
            focusableList = focusableList.filter((o) => focusableMap.get(o) !== undefined);
            focusableList.sort((el1, el2) => focusableMap.get(el1) - focusableMap.get(el2));
          }
        }

        if (focusableList.length === 0) {
          const { focusableSelector } = config;
          focusableList = Array.from(el.querySelectorAll(focusableSelector));

          if (modifiers.indexorder === true) {
            const tabindexOrder = new WeakMap(
              focusableList.map((o) => ([o, Math.max(o.tabIndex || 0, 0)])),
            );

            focusableList.sort((el1, el2) => tabindexOrder.get(el1) - tabindexOrder.get(el2));
          }

          if (el.matches(focusableSelector)) {
            focusableList.unshift(el);
          }
        }

        const focusableIndexLast = focusableList.length - 1;

        let focusableIndex = indexSelector(focusableList.indexOf(activeElement), focusableIndexLast);

        for (let i = 0; i < focusableIndexLast; i += 1) {
          focusableIndex += step;

          if (focusableIndex < 0) {
            focusableIndex = focusableIndexLast;
          } else if (focusableIndex > focusableIndexLast) {
            focusableIndex = 0;
          }

          if (focus(focusableList[focusableIndex]) === true) {
            if (rovingExit !== false) {
              setActiveTrapEl(rovingExit, config);
            }

            return;
          }
        }
      },

      overwiteFocusTarget(ev) {
        if (ctx.disable === false && ev.__vKbdTrap !== true) {
          ev.__vKbdTrap = true;

          ctx.focusTarget = ev.target;
        }
      },

      refocus(onlyIfTrapEl) {
        if (
          ctx.disable === false
          && activeTrapEl === el
          && ctx.focusTarget
          && ctx.focusTarget.closest(config.datasetNameSelector) === el
        ) {
          if (ctx.focusTarget.tabIndex === config.trapTabIndex) {
            return (ctx.modifiers.autofocus === true && focus(el.querySelector(config.autofocusSelector)) === true)
              || focus(el.querySelector(config.focusableSelector)) === true
              || focus(ctx.focusTarget) === true;
          }

          return onlyIfTrapEl === true
            ? false
            : focus(ctx.focusTarget) === true
            || focus(el.querySelector(config.focusableSelector)) === true;
        }

        return false;
      },

      autofocus() {
        requestAnimationFrame(() => {
          if (ctx.disable === false && focus(el.querySelector(config.autofocusSelector), visibleFocusCheckFn) === false) {
            focus(el.querySelector(config.focusableSelector), visibleFocusCheckFn);
          }
        });
      },
    };

    ctx.bind();

    if (modifiers.autofocus === true) {
      ctx.autofocus();
    }
  };

  const updated = (el, { value, modifiers }) => {
    const ctx = getCtx(el);

    if (ctx !== null) {
      const disable = value === false;

      ctx.modifiers = modifiers;

      setAttributes(el, disable, ctx, config);

      if (activeTrapEl === el) {
        if (disable === true) {
          setActiveTrapEl(null, config);
        } else {
          el.dataset[config.datasetNameActive] = '';
        }
      }

      if (ctx.disable !== disable) {
        ctx.disable = disable;

        if (modifiers.autofocus === true) {
          ctx.autofocus();
        }
      }
    } else if (markRawFn !== undefined) {
      beforeMount(el, { value, modifiers });
    } else if (activeTrapEl === el) {
      setActiveTrapEl(null, config);
    }
  };

  const unmounted = (el) => {
    const ctx = getCtx(el);

    if (ctx !== null) {
      ctx.unbind();
    }

    if (activeTrapEl === el) {
      setActiveTrapEl(null, config);
    }
  };

  return markRawFn !== undefined
    ? markRawFn({
      name: config.name,

      directive: {
        beforeMount,
        updated,
        unmounted,
        getSSRProps() { },
      },
    })
    : {
      name: config.name,

      directive: {
        bind: beforeMount,
        update: updated,
        unbind: unmounted,
      },
    };
}
