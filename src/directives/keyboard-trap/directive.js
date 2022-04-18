import { createConfig } from './options';
import { extractNumber, focus } from './helpers';

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
//   .roving.tabinside - Tab key navigates to next/prev element inside trap (by default Tab key navigates to next/prev element outside trap in roving mode)
//   .escrefocus - refocus element that was in focus before activating the trap on Esc
//   .escexits - refocus a parent trap on Esc (has priority over .escrefocus)

let activeTrapEl = null;

export default function directiveFactory(options, markRawFn) {
  const config = createConfig(options);

  const setActiveTrapEl = (newEl) => {
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
  };

  const getCtx = (el) => {
    const ctx = (el || {}).__vKbdTrap;

    return ctx === Object(ctx) ? ctx : null;
  };

  const setAttributes = (el, disable, ctx) => {
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
  };

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
          setAttributes(el, ctx.disable, ctx);
        }
      },

      unbind() {
        delete el.__vKbdTrap;
        el.removeEventListener('keydown', ctx.trap);
        el.removeEventListener('focusin', ctx.activate);
        el.removeEventListener('focusout', ctx.deactivate);
        el.removeEventListener('pointerdown', ctx.overwiteFocusTarget);
        setAttributes(el, true, ctx);
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
          setActiveTrapEl(el);

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

          setActiveTrapEl(null);
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

            setActiveTrapEl(el.parentElement === null ? null : el.parentElement.closest(config.datasetNameSelector));

            if (ctx.modifiers.escexits === true) {
              const newCtx = getCtx(activeTrapEl);

              if (newCtx !== null && newCtx.refocus() === true) {
                return;
              }
            }

            if (ctx.modifiers.escrefocus === true) {
              focus(ctx.relatedFocusTarget);
            }
          } else {
            setActiveTrapEl(el);
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

          if (code === 'Tab' && rovingSkipSelector === false && ctx.modifiers.tabinside !== true) {
            rovingExit = true;

            if (shiftKey === true) {
              step = 1;
              indexSelector = (_, iMax) => iMax;
            } else {
              step = -1;
              indexSelector = () => 0;
            }
          } else if (code === 'Tab') {
            step = shiftKey === true ? -1 : 1;
          } else if (code === 'Home') {
            step = 1;
            indexSelector = (_, iMax) => iMax;
          } else if (code === 'End') {
            step = -1;
            indexSelector = () => 0;
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

              if (step !== 0) {
                const dirEl = (activeElement && activeElement !== el ? activeElement.parentElement || el : el).closest('[dir="rtl"],[dir="ltr"]');

                if (dirEl && dirEl.matches('[dir="rtl"]')) {
                  step *= -1;
                }
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
        let focusableSelector;

        if (ctx.modifiers.grid === true && rovingDirection !== false) {
          const row = extractNumber(activeElement.dataset[config.datasetNameRow]);
          const col = extractNumber(activeElement.dataset[config.datasetNameCol]);

          focusableSelector = rovingDirection === 'v' ? config.datasetNameColSelector(col) : config.datasetNameRowSelector(row);
          focusableList = Array.from(el.querySelectorAll(focusableSelector));

          const focusableMap = new WeakMap(
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

          focusableList = focusableList.filter((o) => focusableMap.get(o) !== undefined);
          focusableList.sort((el1, el2) => (focusableMap.get(el1) || 0) - (focusableMap.get(el2) || 0));
        }

        if (focusableList.length === 0) {
          focusableSelector = config.focusableSelector;
          focusableList = Array.from(el.querySelectorAll(focusableSelector));

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
            if (rovingExit === true) {
              setActiveTrapEl(null);
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
          if (ctx.disable === false && focus(el.querySelector(config.autofocusSelector)) === false) {
            focus(el.querySelector(config.focusableSelector));
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

      setAttributes(el, disable, ctx);

      if (activeTrapEl === el) {
        if (disable === true) {
          setActiveTrapEl(null);
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
    } else if (activeTrapEl === el) {
      setActiveTrapEl(null);
    }
  };

  const unmounted = (el) => {
    const ctx = getCtx(el);

    if (ctx !== null) {
      ctx.unbind();
    }

    if (activeTrapEl === el) {
      setActiveTrapEl(null);
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
