---
---

# Vue 2

### `$options`

```js

```

#### `$options.components`

```js

```

### The `h()` or `$createElement`

> `h()` is short for **hyperscript** - which means "JavaScript that produces HTML (hypertext markup language)". <br/>
> This name is inherited from conventions shared by many virtual DOM implementations.
> A more descriptive name could be `createVnode()`,
> but a shorter name helps when you have to call this function many times in a render function.

### Functional Components

#### GTKs

- Is stateless
- Data Options (not `data()`)

```ts
export interface FunctionalComponentOptions<
  Props = DefaultProps,
  PropDefs = PropsDefinition<Props>
> {
  name?: string
  props?: PropDefs
  model?: {
    prop?: string
    event?: string
  }
  inject?: InjectOptions
  functional: boolean
  render?(
    this: undefined,
    createElement: CreateElement,
    context: RenderContext<Props>
  ): VNode | VNode[]
}

export interface RenderContext<Props = DefaultProps> {
  props: Props
  children: VNode[]
  slots(): any
  data: VNodeData
  parent: Vue
  listeners: { [key: string]: Function | Function[] }
  scopedSlots: { [key: string]: NormalizedScopedSlot }
  injections: any
}
```

#### `v-model` with Functional Components

```js
props: ['value'],
render: function (createElement) {
  var self = this
  return createElement('input', {
    domProps: {
      value: self.value
    },
    on: {
      input: function (event) {
        self.$emit('input', event.target.value)
      }
    }
  })
}
```
