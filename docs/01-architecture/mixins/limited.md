---
title: Limited Usage
sidebar_position: 1
---

> 가장 기본적인 recipe 들을 다룹니다.

## Feature Mixin

### Example#1 - `PagingMixin`

### Example#2 - `TableMixin`

:::note

### Advice

Feature Mixins 들을 고려할때는 component 로 분리해내는 방법을 먼저 생각합니다.
다음질문들에 대답을 생각해봅니다.

1. 반복적으로 Feature Mixin 과 Feature Mixin 을 사용하는 component들이 각각 따로 import 되고있는 지점들이 많은지.

2. 향후 refactoring을 생각하고 개발 단계의 첫번째 순서(component로 분리이전), 예를들어 comnponent로 분리해서 정의하기 이전에, draft 용도로 Feature Mixin을 정의하고 사용하는것은 괜찮다고 생각합니다. 다만 project 50% 완료 이전에 정리할것을 권장합니다.

3. method 간 orchestration 이 있다면 Component Testing 또는 Unit Testing 을 작성합니다.

:::

:::tip

Mixin 들은 outset of the project때 요구사항들을 큰틀로 추려서 **정의**합니다(구현아님).

:::
