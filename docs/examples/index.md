---
title: Examples
---

## Playground with all usage patterns

[Demo codepen](https://codepen.io/pdanpdan/pen/MWrzLdM)


## Modifiers

### `.autofocus`

Focuses the first child element that matches `autofocusSelector` or (if no such element is found) the first focusable child element.

Is only triggered on mount or on directive activation (changed value from false to true) and only if it not covered by another element.

#### Autofocus on mount

```html{4}
<div v-if="showContent" v-kbd-trap.autofocus>
  <div tabindex="0">First</div>
  <div tabindex="0">Second</div>
  <div tabindex="0" data-autofocus>Autofocus</div>
</div>
```

#### Autofocus on activation

```html{4}
<div v-kbd-trap.autofocus="trapActive">
  <div tabindex="0">First</div>
  <div tabindex="0">Second</div>
  <div tabindex="0" data-autofocus>Autofocus</div>
</div>
```

### `.roving`

Simplify `TAB` key navigation in large applications where lots of elements are focusable.

`TAB` / `SHIFT` + `TAB` key navigates between trap groups, while navigation inside the `.roving` trap group is done using `ARROW_KEYS`.

The last focusable element of each `.roving` trap group is remembered and refocused when the trap group is focused.

```html{3,7}
<div tabindex="0">Before</div>

<div v-kbd.trap.roving>
  <div v-for="i in 20" :key="i" tabindex="0">
    Focusable group 1 / {{ i + 1 }}
  </div>
</div>

<div v-kbd.trap.roving>
  <div v-for="i in 20" :key="i" tabindex="0">
    Focusable group 2 / {{ i + 1 }}
  </div>
</div>

<div tabindex="0">After</div>
```

### `.roving.grid`

In order to specify the navigation pattern you must use 2 dataset attributes on the focusable elements inside the `.roving` trap group:

- `data-v-kbd-trap-row` specifies the numeric identifier of the row the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)
- `data-v-kbd-trap-col` specifies the numeric identifier of the column the element belongs to (numbers need not be consecutive, but their natural order determines the navigation order)

Any or both attributes can have a value of `*` that means that it is an alement that can be focused from elements having any coresponding (row or col) attribute.

#### Navigation rules

- the first focusable element on the row / col (based on direction of movement) is focused
- an element with `*` for row or col is considered to belong to any row / col

```html{3,8-9}
<div tabindex="0">Before</div>

<div v-kbd-trap.roving.grid>
  <div v-for="i in 5" :key="i">
    <span
      v-for="j in 5"
      :key="i * 100 + j"
      :data-v-kbd-trap-row="j === 3 ? i : `${ i } *`"
      :data-v-kbd-trap-col="i === 3 ? j : `${ j } *`"
      :tabindex="i !== 3 && j !== 3
        ? ((i + j) % 2 === 0 ? null : -1)
        : 0
      "
    >
      R:{{ i + 1 }}/C:{{ j + 1 }}
    </span>
  </div>
</div>

<div tabindex="0">After</div>
```

### `.roving` on `[role="grid"]` trap group element

In order to specify the navigation pattern you must use role attributes `[role="row"]` and `[role="gridcell"]`.

All focusable element must have `[role="gridcell"]` and must be inside `[role="row"]` elements inside `[role="grid"]` trap element.

The `gridcell`s will be considered inline-start aligned in every row.

#### Navigation rules

- the first focusable element on the row / col (based on direction of movement) is focused

```html{3,8-9}
<div tabindex="0">Before</div>

<table role="grid" v-kbd-trap.roving>
  <tbody role="rowgroup">
    <tr v-for="i in 5" :key="i" role="row">
      <td
        v-for="j in 5"
        :key="i * 100 + j"
        role="gridcell"
        :tabindex="i !== 3 && j !== 3
          ? ((i + j) % 2 === 0 ? null : -1)
          : 0
        "
      >
        R:{{ i + 1 }}/C:{{ j + 1 }}
      </td>
    </tr>
  </tbody>
</table>

<div tabindex="0">After</div>
```
