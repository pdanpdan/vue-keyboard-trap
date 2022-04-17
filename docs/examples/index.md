---
title: Examples
---

## Playground with all usage patterns

[Demo codepen](https://codepen.io/pdanpdan/pen/MWrzLdM)


## Modifiers

### .autofocus

Focuses the first child element with `[autofocus]` or `[data-autofocus]` attribute or, if no such element is found, the first focusable child element.

Is only triggered on mount and on directive activation (changed value from false to true).

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

### .roving

Simplify `TAB` key navigation in large applications where lots of elements are focusable.

`TAB` / `SHIFT` + `TAB` key navigates between trap groups, while navigation inside the `.roving` trap group is done using `ARROW_KEYS`.

The last focusable element of each `.roving` trap group is remembered and refocused when the trap group is focused.

```html{3,7}
<div tabindex="0">Before</div>

<div v-kbd.trap.roving>
  <div v-for="i in 20" :key="i" tabindex="0">Focusable group 1 / {{ i + 1 }}</div>
</div>

<div v-kbd.trap.roving>
  <div v-for="i in 20" :key="i" tabindex="0">Focusable group 2 / {{ i + 1 }}</div>
</div>

<div tabindex="0">After</div>
```

### .roving.grid

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
