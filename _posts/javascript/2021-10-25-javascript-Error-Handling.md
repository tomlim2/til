---
layout: post-base
title: Javascript / Error Handling
meta: 에러 처리를 위한 키워드와 예제
category: javascript
tags: [Javascript, Error Handling]
---
`Error Handiling`을 하는 이유는 발생할 에러들을 예측하고 그에 따른 대응하기 위해서이다.

## Runtime Errors

프로그래밍할 때 크게 두 분류의 에러가 있다: 코드를 실행하는 것을 막는 에러와 막지 않는 에러. 이 런타임 에러는 프로그램을 멈추고 콘솔에 에러 메세지를 띄운다.

- `ReferenceError`: when a variable or function cannot be found.
- `TypeError`: when a value is not a valid type, see the example below:

```js
const reminder = 'Reduce, Reuse, Recycle';
reminder = 'Save the world';
// TypeError: Assignment to constant variable.
console.log('This will never be printed!');
```

위의 코드에서는 `reminder`에 값을 재할당 할때 `TypeError`가 발생하고 프로그램이 정지된다. `console.log`는 실행되지 않는다.

## Constructing an Error / 에러 메세지 만들기

`Error('Your message')`를 통해 빌트인 에러 경고가 전부 다루지 못하는 에러들을 만들 수 있다.

```js
console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
```

## The throw Keyword

`throw`는 에러 메세지를 주면서 코드 실행을 멈추는 역할이 필요할 때 사용하는 키워드이다.

```js
throw Error('Something wrong happened');
// Error: Something wrong happened
```

`throw` 키워드를 할때 `throw` 뒤에 있는 코드들은 실행 되지 않는다. 예를 들어 밑의 `console.log`는 실행되지 않는다.

```js
throw Error('Something wrong happened');
// Error: Something wrong happened
 
console.log('This will never run');
```

밑의 사용 예시처럼 사용자 이름 혹은 패스워드가 불일치할때 뒤의 코드를 멈추고 에러를 줄때 사용한다.

```js
throw Error('Username or password do not match');
```

## The `try...catch` Statement

`try` 블록안에서는 코드를 검사하고 만일 에러가 생길 경우 에러는 `catch`로 넘어가고 코드는 계속 실행된다.

```js
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.
```

### 예시

밑의 코드는 실행되지 않는 코드이다.

```js
function capAllElements(arr){
 arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
  });
}

capAllElements('Incorrect argument');
```

위의 코드를 실행하면

```text
/home/ccuser/workspace/error-handling-try-catch-ii/main.js:2
 arr.forEach((el, index, array) => {
     ^

TypeError: arr.forEach is not a function
    at capAllElements (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:2:6)
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:7:1)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
```

에러를 내고 그대로 프로그램은 종료된다. 하지만 위의 코드에 `try...catch`를 사용하면

```js
function capAllElements(arr){
  try {
 arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
  });} catch (e) {
    console.log(e);
  }
}

capAllElements('Incorrect argument');
```

밑의 코드처럼 에러를 내지만 계속 프로그램이 기동된다.

```text
13458679210
function capAllElements(arr){
  try {
 arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
  });} catch (e) {
    console.log(e);
  }
}

capAllElements('Incorrect argument');
Output-only Terminal
Output:
TypeError: arr.forEach is not a function
    at capAllElements (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:3:6)
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:10:1)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
```

`try...catch` 방식은 에러 메세지를 던지지만 프로그램을 계속 실행하게 만든다.

## Resource

- [Code Academy](www.codecademy.com)
