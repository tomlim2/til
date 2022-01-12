---
layout: post-base
title: How to use Date object
meta: Date 객체 문자열로 출력하는 방법
category: Javascript
tags: [Javascript]
---

```js
//Date object to string
const expenseDate = new Date(2021, 1, 1);
expenseDate.toISOString();

const month = expenseDate.toLocalString("en-US", { month: "long" });
const day = expenseDate.toLocalString("en-US", { day: "2-digit" });
const year = expenseDate.getFullYear();
```
