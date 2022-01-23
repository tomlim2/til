---
layout: post-base
title: 조건문, 연산자, null&undifined
meta: test
category: javascript
tags: [Javascript]
---
요 몇일 Javascript의 기초를 배우고 syntax와 기본 개념들을 정리할수 있었다. 많은 개념들을 배웠지만 그중 가장 기억에 남는 부분과 중요하다고 느끼는 것들을 기록한다.

## 조건문(Conditional Statement)

조건문이 프로그래밍할 때 필요한 이유는 조건문을 통해 많은 상황 즉 조건에 따른 결정을 만듦으로서 현실의 상황을 모델링할 수 있다는 점 때문이다. 조건문은 주어진 조건식의 평가 결과에 따라 블록의 실행을 결정할 때 쓰이고 불리언(boolean) 값으로 평가될 수 있는 표현식으로 나타난다.

![d](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKPOPp%2FbtqDHtcNo5B%2FokziouuigeMDhPpTW1j9U1%2Fimg.png)
_조건문은 복잡한 현실의 일들을 시스템화 시킬 때 필수! (출처: [뭐래, 나 개발 공부해](https://ystidy.tistory.com/40#:~:text=%EB%A8%BC%EC%A0%80%20%EC%A1%B0%EA%B1%B4%EB%AC%B8%EC%9D%B4%20%ED%95%84%EC%9A%94%ED%95%9C%20%EC%9D%B4%EC%9C%A0,%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%84%A4%EB%AA%85%ED%95%98%EA%B3%A0%EC%9E%90%20%ED%95%9C%EB%8B%A4.&text=%EC%9A%B0%EB%A6%AC%EB%8A%94%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%EC%9D%B4%20%EC%A1%B0%EA%B1%B4,%EB%8A%94%20%EC%9D%B4%EA%B2%83%EC%9D%84%20%EC%A0%9C%EA%B3%B5%ED%95%98%EA%B3%A0%20%EC%9E%88%EB%8B%A4.))_

## How to use? (출처: [w3schools](https://www.w3schools.com/jsref/jsref_if.asp))

In JavaScript we have the following conditional statements:

```js
if (condition) {
  // block of code to be executed if the condition is true
}
```

Use if to specify a block of code to be executed, if a specified condition is true

```js
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

Use else to specify a block of code to be executed, if the same condition is false

```js
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  /* block of code to be executed if the condition1 is 
  false and condition2 is true */
} else {
  /* block of code to be executed if the condition1 is 
  false and condition2 is false  */
}
```

Use else if to specify a new condition to test, if the first condition is false

```js
var text;
var fruits = document.getElementById("myInput").value;

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
}
```

Use switch to select one of many blocks of code to be executed

---

## 연산자(Operator)

conditional과 function에 자주 쓰이는 것들로 사용할때마다 잊어먹고 검색했었다. 앞으로는 무조건 여기에 아예 링크를 걸어두고 더욱 익숙해져서 검색하는 시간을 줄이도록하자.

Link: [javascript Operator Reference](https://www.w3schools.com/jsref/jsref_operators.asp)

---

## null & undefined

null은 선언이 되어있고 그 값이 blank로 입력된 경우이고 boolean에서는 falsy로 취급된다. undefined는 선언은 되었지만 아무런 value가 입력되어있지 않은 경우이다.

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

출처: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

<!-- ![A test image]({{site.baseurl}}/img/2021-08-19-1.jpg) -->