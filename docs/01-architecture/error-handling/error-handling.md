---
title: Error Handling
---

> error handling 전략을 제시합니다.

### Global

#### [`errorHandler`](https://v2.vuejs.org/v2/api/#errorHandler)

### Local - General

#### [`errorCaptured`](https://v2.vuejs.org/v2/api/#errorCaptured)

### Defining Boundaries

:::tip
Error Type 를 정의하여 유형별로, application 구조의 계층별로 error handling을 지향합니다.
이로하여 (예: authentication module) coupling된 error handling 로직을 middleware 에 맨 마지막에 가장 세분화된 error handling으로 처리합니다.
:::
