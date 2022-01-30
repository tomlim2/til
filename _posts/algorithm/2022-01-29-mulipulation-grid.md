---
layout: post-base
title: Multiplation table
meta: 조건 들어간 구구단표 만들기
category: algorithm
tags: [Algorithm, Javascript]
---

```js
let result = [];

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (j !== 4) {
      result.push(i + "+" + j + "=" + i * j);
    }
  }
}

let filtered = "";

for (let offset = 0; offset < 2; offset++) {
  let limit = result.length / 2;
  for (let row = 0; row <= 8; row++) {
    for (let index = limit * offset; index < limit * (offset + 1); index++) {
      if (index % 8 === row) {
        filtered += result[index] + " ";
      }
    }
    filtered += "\n";
  }
  filtered += "\n";
}

console.log(filtered);
```
