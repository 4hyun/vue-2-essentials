---
title: cypress
sidebar_position: 1
---

### Useful Setup

다음과 같은 helper 들을 `support/component.js` 에 추가 합니다.

> `component.js` 는 test files 들이 로딩되기 전에 자동으로 로드됩니다. <br/>
> global configuration 등 전역으로 사용될 코드를 정의하기에 유용합니다. <br/>
> 자세한 설명은 [**<u>supports/component.js</u>**](https://on.cypress.io/configuration) 을 참조하세요

### `mountWrapped()`

```js title=cypress/supports/component.js
/**
 * @description `mountWrapped` wraps the component to mount with a wrapper(default wrapper: Wrapper).
 * This command is WIP but is useable. Take care with return type.
 */
Cypress.Commands.add(
  "mountWrapped",
  (wrappedComponent, options = {}, wrapper = Wrapper, wrapperOptions = {}) => {
    const { store: storeOption, ...wrappedComponentOptions } = options
    const globalOptions = {}
    globalOptions.extensions = options?.extensions || {}
    globalOptions.extensions.plugins = options?.extensions?.plugins || []
    globalOptions.store = createStore(storeOption) || getStore()
    globalOptions.i18n = i18n

    return mount(
      {
        render: (h) =>
          h(wrapper, wrapperOptions, [
            h(wrappedComponent, wrappedComponentOptions),
          ]),
      },
      globalOptions
    ).then(({ component: wrapperComponent, wrapper }) => {
      const componentWithWrap = wrapper.findComponent(
        wrappedComponent?.functional
          ? {
              name: wrappedComponent.name,
            }
          : wrappedComponent
      )

      const component = wrappedComponent?.functional
        ? componentWithWrap
        : componentWithWrap.vm
      return {
        wrapperComponent,
        wrappedComponent,
        wrapper,
        component,
        componentWithWrap,
      }
    })
  }
)
```

### Bookmarks

- [Vue Component Testing - Overview](https://docs.cypress.io/guides/component-testing/vue/overview)
- [Vue Component Testing - API](https://docs.cypress.io/guides/component-testing/vue/api)

### Links

- [Cypress API](https://docs.cypress.io/api)

## Related Topics

### Vue Test Utils

- [Vue Test Utils 1](https://v1.test-utils.vuejs.org/)
  - [Wrapper](https://v1.test-utils.vuejs.org/api/wrapper/)
  - [Mounting Options](https://v1.test-utils.vuejs.org/api/options.html)
