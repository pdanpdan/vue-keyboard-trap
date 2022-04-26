---
title: Examples
---

## Playground with all usage patterns

[Demo codepen](https://codepen.io/pdanpdan/pen/MWrzLdM)

## Basic usage

<interactive-code
  example="examples/trap-simple.vue"
  title="Default behaviour"
  desc="The focus stays inside trap while navigating with Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key."
>
  <<< @/examples/trap-simple.vue{3,14-15,18-20}
</interactive-code>

<interactive-code
  example="examples/trap-rtl.vue"
  title="Default behaviour (RTL / LTR)"
  desc="The focus stays inside trap while navigating with Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key."
>
  <<< @/examples/trap-rtl.vue{6-7,15,23,38-39,42-44}
</interactive-code>

## Modifiers

### `.autofocus`

Focuses the first child element that matches `autofocusSelector` or (if no such element is found) the first focusable child element.

Is only triggered on mount or on directive activation (changed value from false to true) and only if it not covered by another element.

To check if an element is covered it will be scrolled into view (`el.scrollIntoView()`) so if you have fixed (or sticky) headers or footers set `scroll-padding` on `html` in CSS so that the elements scroll in a visible area.

<interactive-code
  example="examples/autofocus-on-mount.vue"
  title="Autofocus on mount"
  desc="Element is focused when it is mounted"
>
  <<< @/examples/autofocus-on-mount.vue{6,9,18-19,22-24}
</interactive-code>

<interactive-code
  example="examples/autofocus-on-activation.vue"
  title="Autofocus on activation"
  desc="Element is focused when the trap is activated"
>
  <<< @/examples/autofocus-on-activation.vue{6,9,18-19,22-24}
</interactive-code>

### `.roving`

Simplify `TAB` key navigation in large applications where lots of elements are focusable.

`TAB` / `SHIFT` + `TAB` key navigates between trap groups, while navigation inside the `.roving` trap group is done using `ARROW_KEYS`.

The last focusable element of each `.roving` trap group is remembered and refocused when the trap group is focused.

<interactive-code
  example="examples/roving-simple.vue"
  title="Default roving behaviour"
  desc="Inside the trap you can navigate with ArrowKeys and with Home / End.\nTo exit the trap use Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key.\nA roving trap remembers the last focused element inside."
>
  <<< @/examples/roving-simple.vue{6,17,35-36,39-41}
</interactive-code>

<interactive-code
  example="examples/roving-nested.vue"
  title="Roving behaviour when using nested traps with orthogonal directions"
  desc="Inside the trap you can navigate with ArrowKeys (vertical in outer trap and horizontal in inner trap) and with Home / End.\nTo exit the inner trap you can use VerticalArrowKeys.\nTo exit inner or outer trap use Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key.\nA roving trap remembers the last focused element inside."
>
  <<< @/examples/roving-nested.vue{6,16,44-45,48-50}
</interactive-code>

<interactive-code
  example="examples/roving-rtl.vue"
  title="Roving behaviour when using RTL / LTR"
  desc="Inside the trap you can navigate with ArrowKeys and with Home / End.\nTo exit the trap use Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key.\nA roving trap remembers the last focused element inside."
>
  <<< @/examples/roving-rtl.vue{6-7,15,23,38-39,42-44}
</interactive-code>

### `.roving.grid`

In order to specify the navigation pattern you must use 2 dataset attributes on the focusable elements inside the `.roving` trap group:

- `data-v-kbd-trap-row` specifies the numeric identifier of the row the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)
- `data-v-kbd-trap-col` specifies the numeric identifier of the column the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)

Any or both attributes can have a value of `*` that means that it is an alement that can be focused from elements having any coresponding (row or col) attribute.

#### Navigation rules

- the first focusable element on the row / col (based on direction of movement) is focused
- an element with `*` for row or col is considered to belong to any row / col

<interactive-code
  example="examples/roving-grid.vue"
  title="Roving behaviour in grid mode"
  desc="Inside the trap you can navigate with ArrowKeys and with Home / End.\nTo exit the trap use Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key.\nA roving trap remembers the last focused element inside."
>
  <<< @/examples/roving-grid.vue{6,12-13,31-32,35-37}
</interactive-code>

### `.roving` on `[role="grid"]` trap group element

In order to specify the navigation pattern you must use role attributes `[role="row"]` and `[role="gridcell"]`.

All focusable element must have `[role="gridcell"]` and must be inside `[role="row"]` elements inside `[role="grid"]` trap element.

The `gridcell`s will be considered inline-start aligned in every row.

#### Navigation rules

- the first focusable element on the row / col (based on direction of movement) is focused

<interactive-code
  example="examples/roving-gridcell.vue"
  title="Roving behaviour with role='grid'"
  desc="Inside the trap you can navigate with ArrowKeys and with Home / End.\nTo exit the trap use Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key.\nA roving trap remembers the last focused element inside."
>
  <<< @/examples/roving-gridcell.vue{9,11,29,31-37,40,45,60-61,64-66}
</interactive-code>

### `.escrefocus`

When pressing `Esc` key disable the active trap and refocus the element that was in focus before activating the trap.

<interactive-code
  example="examples/trap-escrefocus.vue"
  title="Refocus previous focused element on Esc"
  desc="The focus stays inside trap while navigating with Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key.\nWhen it is disabled with Esc key the element that was in focus before activating the trap is refocused."
>
  <<< @/examples/trap-escrefocus.vue{3,8,21,41-42,45-47}
</interactive-code>

### `.escexits`

When pressing `Esc` key disable the active trap and move focus in the parent trap (if it exists).

Has priority over `.escrefocus`.

<interactive-code
  example="examples/trap-escexits.vue"
  title="Exit current trap on Esc"
  desc="The focus stays inside trap while navigating with Tab / Shift + Tab.\nTrap can be enabled/disabled with Esc key.\nWhen it is disabled with Esc key the parent trap is focused (if it exists)."
>
  <<< @/examples/trap-escexits.vue{3,8,21,41-42,45-47}
</interactive-code>
