---
layout: post-base
title: Bitwise / tilde operators
meta: 물결표시
category: javascript
source: http://rocha.la/JavaScript-bitwise-operators-in-practice
tags: [Javascript]
---

## Bitwise NOT - The ~ operator

```js
~2 === -3; //true
~1 === -2; //true
~0 === -1; //true
~-1 === 0; //true
```

```js
~~2 === Math.floor(2); //true, 2
~~2.4 === Math.floor(2); //true, 2
~~3.9 === Math.floor(3); //true, 3
```

## Summary

Use double bitwise NOT when:

1. You want to convert the number from float to integer.
2. You want to perform same operation as Math.floor() but a lot quicker.
3. You want to minimalize your code.

Do not use double bitwise NOT when:

1. You run Google Chrome (apparently?).
2. You care about readability of your code.
