---
layout: post-base
title: Javascript - Execution context
meta: execution context
category: Javascript
---

Execution context는 자바스크립트가 가지고 있는 프로세스로 컴퓨터가 코드를 읽을 때 한번에 전체를 읽는 것이 아닌 몇몇의 조각으로 나누어 읽는 방식이다. 이는 자바스크립트가 복잡한 코드를 해석, 작성, 관리, 그리고 실행하게 해준다.

## Global Execution Context
자바스크립트를 실행할때 가장 먼저 실행되는 컨텍스트이다. 아무런 코드가 없어도 이 컨텍스트를 호출할 수 있다. 
```
Global Execution Context
Phase: Creation
window: global object // 브라우저
this: window
```
### 예시 1
```js
var name = "hi";
var handle = "@hiyo";

function getUser(){
  return {
  	name: name,
    hand: handle
  };
}
```
### 예시 1의 Operation log
`(Global Execution Context Creation Phase)`, `Program` >
```
Global Execution Context
Phase: Creation
window: global object
this: window // 'this'와 'window'는 무슨일이 있어도 실행된다.
name: undefined
handle: undefined // name과 함께 변수 값으로 메모리에 저장되지 않았다.
getUser: fn() // 메모리에 저장된다.
```
`(Global Execution Context Execution Phase)`, `VariableDeclaration` > `Literal` > `VariableDeclaration` > `program //name에 "hi"가 입력` > `VariableDeclaration` > `Literal` > `VariableDeclaration` > `program //handle에 "@hiyo"가 입력` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
name: "hi"
handle: "@hiyo"
getUser: fn()
```
`VariableDeclaration` > `program` > `FunctionDeclaration` > `program` > `Finished`

### 정리
- 변수 선언 후 읽는 순간 코드 전역에 있는 코드들을 읽는다.
- Creation Phase에서 변수들이 `undefined`로 설정된 것을 호이스팅(Hoisting)이라고 한다.
- 호이스팅(Hoisting)은 Creation Phase에서 할당되는 Variable decoration(기본값)을 말한다.

### 예시 2
```js
console.log('name: ', name); // name: undefined
console.log('handle: ', handle); // handle: undefined
console.log('getUser ', getUser); // getUser: getUser(){return {name:name, handle:handle}}

var name = "hi";
var handle = "@hiyo";

function getUser(){
  return {
    name: name,
    hand: handle
  };
}
```
### 정리
- `name`과 `handle`이 `undefined`로 출력되는 이유는 Creation Phase에서 바로 넘어와 변수가 전역에 입력되어 있지 않은 상태였기 때문이다.

--- 

## Function Execution Context
### 예시 1
```js
var name = "hi";
var handle = "@hiyo";

function getUser(){
  return {
    name: name,
    hand: handle
  };
}

getUser()
```
### 예시 1의 Operation log
`(이전의 로그는 finished 제외한 Global Execution Context의 로그와 동일)` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
name: "hi"
handle: "@hiyo"
getUser: fn()
```

`ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` >

```
Global Execution Context
Phase: Creation
window: global object
this: window
name: "hi"
handle: "@hiyo"
getUser: fn()

        getUser Execution Context
        Phase: Creation
        arguments: { length: 0 }
        this: window
```

`START getUser Execution Context = Phase: Creation`, `BlockStatement` > `START getUser Execution Context = Phase: Execution`, `ReturnStatement` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `ReturnStatement` > 

```
Global Execution Context
Phase: Execution
window: global object
this: window
name: "hi"
handle: "@hiyo"
getUser: fn()
```
`REMOVE getUser Execution Context`, `CallExpression` > `ExpressionStatement` > `Program` > `Finished`

### 정리
 - 위의 `REMOVE getUser Execution Context`은 Execution Stack의 개념으로 이어진다.

--- 

## Execution Stack
함수가 호출되면 언제나 새로운 Execution context가 생성되고 Execution stack에 추가된다. 언제나 함수가 종료되면 그 함수의 execution context가 끝이나고 execution stack에서 사라진다. 자바스크립트는 코드를 실행할 때 하나의 테스크가 일차원적으로 일어나는 'Single thread'이기에 이 Excution Stack이란 개념을 사용하한다. Single thread이기에 프로세스를 시각화하기 용이하다.

### 예시1
```js
function a () {
    console.log("In fn a")
    function b () {
        console.log("In fn b")
        function c () {
            console.log("In fn c")
        }
        c()
    }
    b()
}
a()
```
### 예시1의 Operation log
```
Global Execution Context
Phase: Creation
window: global object
this: window
a: fn()
```
`Global Execution Context Phase: Creation`, `Program` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
```
`Global Execution Context Phase: Creation`, `FunctionDeclaration` > `Program` > `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
        a Execution Context
        Phase: Creation
        arguments: { length: 0 }
        this: window
        b: fn()
```
`START a Execution Context Phase: Creation`, `BlockStatement` > `a Execution Context Phase: Execution`, `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Literal` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `BlockStatement` > `FunctionDeclaration` > `BlockStatement` > `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
        a Execution Context
        Phase: Execution
        arguments: { length: 0 }
        this: window
        b: fn()
                b Execution Context
                Phase: Creation
                arguments: { length: 0 }
                this: window
                c: fn()
```
`START b Execution Context Phase: Creation`, `BlockStatement` > `b Execution Context Phase: Execution`, `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Literal` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `BlockStatement` > `FunctionDeclaration` > `BlockStatement` > `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
        a Execution Context
        Phase: Execution
        arguments: { length: 0 }
        this: window
        b: fn()
                b Execution Context
                Phase: Execution
                arguments: { length: 0 }
                this: window
                c: fn()
                        c Execution Context
                        Phase: Creation
                        arguments: { length: 0 }
                        this: window
```
`START c Execution Context Phase: Creation`, `BlockStatement` > `c Execution Context Phase: Execution`, `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Literal` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `BlockStatement` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
        a Execution Context
        Phase: Execution
        arguments: { length: 0 }
        this: window
        b: fn()
                b Execution Context
                Phase: Execution
                arguments: { length: 0 }
                this: window
                c: fn()
```
`REMOVE c Execution Context Phase: Execution`, `CallExpression` > `ExpressionStatement` > `BlockStatement` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
        a Execution Context
        Phase: Execution
        arguments: { length: 0 }
        this: window
        b: fn()
                Closure Scope
                arguments: { length: 0 }
                this: window
                c: fn()
```
`REMOVE b Execution Context Phase: Execution`, `**execute Closure Scope`, `CallExpression` > `ExpressionStatement` > `BlockStatement` > `CallExpression` > `ExpressionStatement` > `Program` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
        a Execution Context
        Phase: Execution
        arguments: { length: 0 }
        this: window
        b: fn()
```
`REMOVE Closure Scope`, `Finished`

## local variable



## 의문점
* Closure Scope가 뭐지?

## Resources
* [TC39 - Execution Contexts](https://tc39.es/ecma262/#sec-execution-contexts)
* [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0&t=1210s)
* [Execution Context Visualizer](https://ui.dev/)
