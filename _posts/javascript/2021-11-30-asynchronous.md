---
layout: post-base
title: Timeouts and Intervals
meta: setTimeout()와 setInterval()을 사용할 때 알고 있어야 할 것들
category: Javascript
tags: [Javascript]
source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
---
여러가지 심히 유익한 자바스크립트 애니메이션에 대한 정보들이다.

All code is example of [mdn](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals). I impelemented some of code using this documentation on [my test site](/test.html)

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

## Resource

- [Cooperative asynchronous JavaScript: Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Active learning: Creating your own stopwatch!](https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html)
- [Code Academy](codecademy.com)
