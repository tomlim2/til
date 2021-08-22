---
layout: post-til
title: 21-08-22 Javascript 1
meta: test
source: https://material.io/design/
category: til
---
요 몇일 Javascript의 기초를 배우고 syntax와 기본 개념들을 정리할수 있었다. 많은 개념들을 배웠지만 그중 가장 기억에 남는 부분과 중요하다고 느끼는 것들을 기록한다. 

### null & undefined
null은 선언이 되어있고 그 값이 blank로 입력된 경우이고 boolean에서는 falsy로 취급된다. undefined는 선언은 되었지만 아무런 value가 입력되어있지 않은 경우이다.

null이란 개념은 소프트웨어를 통해 애니메이션을 만드는 사람들에게는 매우 중요한 개념이다. 자바스크립트에서는 어떤 역할을 할지 궁금하다.

```js
var foo = null;
foo; //null
```
```js
foo; //ReferenceError: foo is not defined
```
예시:
```javascript
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```
{{< caption >}}출처: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) {{< /caption >}}

### Operator
conditional과 function에 자주 쓰이는 개념들로 사용할때마다 까먹고 검색했었다. 앞으로는 무조건 여기에 아예 링크를 걸어두고 더욱 익숙해져서 검색하는 시간을 줄이도록하자.


[javascript Operator Reference](https://www.w3schools.com/jsref/jsref_operators.asp)



<!-- ![A test image]({{site.baseurl}}/img/2021-08-19-1.jpg) -->