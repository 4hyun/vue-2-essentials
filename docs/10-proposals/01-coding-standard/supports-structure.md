---
title: "supports structure"
---

## `utils`, `helpers`, Modules and Further Grouping by Context

여기서 supports 는 helper 유형의, 목적이 support 인 코드들의 grouping 기준과, 폴더 구조를 제시합니다.
먼저 context 범위의 규모로 봤을때 ASC 순서로 utils, helpers, modules, mixin & plugins 으로 나뉩니다. Utils 는 가장 작은 범위의 역할을 다루며 function 들이 대표적입니다.

## Utils

Utility function 들은 다루는 context 가 인자로 제한됩니다.

## Helpers

Helpers는 utility 보다 범위가 넓습니다. Context는 해당하는 루트의 context 가 주체이며, 다른 context 들과의 tight-coupling을 주의하고 제한합니다. 개발 진척도를 위해서 조금의 coupling을 외면하더라도, high-priority 로 follow-up 하여 refactoring을 권장합니다.

### Helpers - types

Helpers의 종류로는 `helpers`, `modules`
제안합니다.

### Helpers - structure

폴더 정의는 `helpers`, 그리고 `helpers/<module>` 파일들로 구성합니다.

## Further Grouping by Context
