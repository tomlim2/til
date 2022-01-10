---
layout: post-base
title: Small tips
meta: 여러가지 사용해 볼만한 코드들
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
