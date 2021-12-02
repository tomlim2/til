---
layout: post-base
title: Timeouts and Intervals
meta: setTimeout()와 setInterval()을 사용할 때 알고 있어야 할 것들
category: Javascript
tags: [Javascript]
source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
---
여러가지 심히 유익한 자바스크립트 애니메이션에 대한 정보들이다.

All code in this post is from examples in [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals). I tried some of the codes, delayed pop-up, stopwatch, clock, `requestAnimationFrame` on [my test site](/test.html).

## Recursive timeouts

Recursive `setTimeout()` guarantees the given delay between the code execution completion and the next call. In this example, the `100` milliseconds will be the delay between the `run` code finishing, and the next `run` call.

```js
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```

```js
let i = 1;

setInterval(function run() {
  console.log(i);
  i++;
}, 100);
```

코드가 `setInterval()`으로 셋팅한 것보다 더 걸리게 될 수 있다면 recursive `setTimeout()`으로 접근하는 것이 좋다.

## Resource

- [MDN-Cooperative asynchronous JavaScript: Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [MDN-Drawing graphics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Code Academy](codecademy.com)
