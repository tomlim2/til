---
layout: post-base
title: Typescript basic - Function
meta: 함수 및 함수 유형
category: Typescript
tags: [typescript, javascript]
---

둘 이상의 유형을 허락하는 유형을 유니온 유형이라고 한다.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

function printOutput (value:any): void{
    console.log(value)
}
```
