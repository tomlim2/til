---
layout: post-base
title: Javascript - Execution contexts, Hoisting, Scopes, and Closures
meta: execution context
category: Javascript
---

Execution context는 자바스크립트가 가지고 있는 프로세스로 컴퓨터가 코드를 읽을 때 한번에 전체를 읽는 것이 아닌 몇몇의 조각으로 나누어 읽는 방식이다. 이는 자바스크립트가 복잡한 코드를 해석, 작성, 관리, 그리고 실행하게 해준다.

## Global Execution Context
자바스크립트를 실행할때 가장 먼저 실행되는 컨텍스트이다. 아무런 코드가 없어도 이 컨텍스트를 호출할 수 있다. 이 컨텍스트의 Creation Phase에서 다음과 같은 4가지 일이 일어난다.
* `global object` 생성
* `this`를 생성
* 변수들과 함수들에게 Memory Space를 할당
* Variable decoration이 변수들에 기본값으로 `undefined`를 할당(hoisting)되고 함수들은 메모리에 안에 위치함


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
Function execution context는 다음의 항목을 제외하고는 Global execution context와 밑의 완벽히 동일한 테스크가 일어난다.

* global object가 생성되는 대신에 arguments object가 생성된다. 이때 통과되는 지역변수는 function 안에 선언된 변수들이다. 

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

`ADD getUser Execution Context = Phase: Creation`, `BlockStatement` > `START getUser Execution Context = Phase: Execution`, `ReturnStatement` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `Identifier` > `ObjectExpression` > `ReturnStatement` > 

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
`Global Execution Context Phase: Execution`, `FunctionDeclaration` > `Program` > `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
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
`ADD a Execution Context Phase: Creation`, `BlockStatement` > `START a Execution Context Phase: Execution`, `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Literal` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `BlockStatement` > `FunctionDeclaration` > `BlockStatement` > `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
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
`ADD b Execution Context Phase: Creation`, `BlockStatement` > `START b Execution Context Phase: Execution`, `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Literal` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `BlockStatement` > `FunctionDeclaration` > `BlockStatement` > `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
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
`ADD c Execution Context Phase: Creation`, `BlockStatement` > `START c Execution Context Phase: Execution`, `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Literal` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `BlockStatement` > 
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
```
`REMOVE b Execution Context Phase: Execution`, `CallExpression` > `ExpressionStatement` > `BlockStatement` > `CallExpression` > `ExpressionStatement` > `Program` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
a: fn()
```
`REMOVE a Execution Context Phase: Execution`, `Finished`

## 예시2 - Local variable
```js
var name = "hi";
var handle = "@hiyo";

function getURL(handle){
  var twitterURL = 'http://twitter.com/';
  return twitterURL + handle;
}

getURL(handle)
```
## 예시2의 operation log
`(생략)` >
```
Global Execution Context
Phase: Execution
window: global object
this: window
name: "hi"
handle: "@hiyo"
getURL: fn()
        getURL Execution Context
        Phase: Creation
        arguments: { 0: "@hiyo", length: 1 }
        this: window
        twitterURL: undefined
        handle: "@hiyo"
```
`START getURL Execution Context Phase: Creation// Hoist a value or assign defult value of undefined to twitterURL`, `BlockStatement` > `getURL Execution Context Phase: Creation`, `VariableDeclaration` > `Literal // 'http://twitter.com/'` > `VariableDeclaration` > `twitterURL assigned "http://twitter.com/"`, `BlockStatement` > `(생략)`

---

## Scope
위의 Local variable 예시는 Scope라는 주제를 보여준다. Scope는 변수 혹은 expression이 참조 가능한 컨텍스트를 뜻한다.

### 예시1
```js
function first () {
    var name = 'John'

    console.log(name)
}
function second () {
    var name = 'Jeremy'

    console.log(name)
}

console.log(name); // undefined :: a value from variable decoration in creation execution phase
var name = 'AK';
first(); // John
second(); // Jeremy
console.log(name); // AK
```

### 예시1의 operation log 
```
Global Execution Context
Phase: Creation
window: global object
this: window
first: fn()
second: fn()
name: undefined
```
`ADD Global Execution Context Phase: Creation`, `program` > `START Global Execution Context Phase: Execution`, `FunctionDeclaration // fn first` > `Program` > `FunctionDeclaration // fn second` > `program` > `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Identifier` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `Program` > `VariableDeclaration` > `Literal` > `VariableDeclaration` > `assigned "AK" on "name" in Global Execution Context Phase: Execution`, `Program` > `first();`, `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
first: fn()
second: fn()
name: "AK"
        first Execution Context
        Phase: Creation
        arguments: { length: 0 }
        this: window
        name: undefined
```
`ADD first Execution Context Phase: Creation`, `BlockStatement` > `START first Execution Context Phase: Execution`, `VariableDeclaration` > `Literal` > `VariableDeclaration` > `ASSIGN "name" "John"`, `BlockStatement` > `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Identifier` > `CallExpression` > `CallExpression` > `ExpressionStatement` > `BlockStatement` > `REMOVE first Execution Context Phase: Creatio`, `first();`, `CallExpression` > `ExpressionStatement` > `Program` > `second();`, `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > `(생략)`

### 예시2
```js
var name = 'Tyler';

function logname () {
    console.log(name);
}

logname ();
```
### 예시2의 operation log
```
Global Execution Context
Phase: Creation
window: global object
this: window
name: undefined
logname: fn()
```
`ADD Global Execution Context Phase: Creation`, `Program` > `START Global Execution Context Phase: Execution`, `VariableDeclaration` > `Literal` > `VariableDeclaration` > `Assign 'name' 'Tyler'`, `Program` > `FunctionDeclaration` > `Program` > `logname();`, `ExpressionStatement` > `CallExpression` > `Identifier` > `CallExpression` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
name: "Tyler"
logname: fn()
        logname Execution Context
        Phase: Creation
        arguments: { length: 0 }
        this: window
```
`ADD logname Execution Context Phase: Creation`, `BlockStatement` > `START logname Execution Context Phase: Execution`, `ExpressionStatement` > `CallExpression` > `MemberExpression` > `Identifier` > `MemberExpression` > `Identifier` > `MemberExpression` > `CallExpression` > `Identifier` > `CallExpression` > `Print 'Tyler' on console`, `CallExpression` > `(생략)`

### 정리
- Local variable(지역변수?)가 함수 안에 없기 때문에 parent execution context에서 name property(값?)가 있는지 확인하고 그 값을 가져온다.
- 이 프로세스를 Scope chain(or execution context chain)이라고 한다.

---

## Closures
함수 안에 함수가 있다면 바깥 쪽의 함수(outer function)의 execution context가 stack에서 제거되도 안 쪽의 함수(inner function)는 여전히 부모 함수(outer function)의 variable environment를 가져온 closure에서 엑세스할 수 있다.

```js
var count = 0;
function makeAdder (x) {
    return function inner (y) {
        return x + y;
    };
}
var add5 = makeAdder(5);
count += add5(2);
```
### 예시1의 operation log
```
Global Execution Context
Phase: Creation
window: global object
this: window
count: undefined
makeAdder: fn()
add5: undefined
```
`ADD Global Execution Context Phase: Creation`, `Program` > `START Global Execution Context Phase: Execution`, `VariableDeclaration` > `(생략)` > `makeAdder(5)`, `CallExpression` > `Identifier` > `CallExpression` > `READ 5`, `Literal` > `CallExpression` > 

```
Global Execution Context
Phase: Execution
window: global object
this: window
count: 0
makeAdder: fn()
add5: undefined
        makeAdder Execution Context
        Phase: Creation
        arguments: { 0: 5, length: 1 }
        this: window
        x: 5
```
`ADD makeAdder Execution Context Phase: Creation`, `BlockStatement` > `START makeAdder Execution Context Phase: Execution`, `ReturnStatement` > `READ function inner (y){ ... }`, `FunctionExpression` > `ReturnStatement` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
count: 0
makeAdder: fn()
add5: undefined
        Closure Scope
        arguments: { 0: 5, length: 1 }
        this: window
        x: 5
```
****`REMOVED makeAdder Execution Context`, `START Closure Scope, READ makeAdder(5)`**, `CallExpression` > `VariableDeclaration` > `add5: fn()`, `Program` > `ExpressionStatement` > `AssignmentExpression` > `Identifier` > `AssignmentExpression` > `CallExpression` > `Identifier` > `CallExpression` > `READ 2`, `Literal` > `CallExpression` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
count: 0
makeAdder: fn()
add5: fn()
        Closure Scope
        arguments: { 0: 5, length: 1 }
        this: window
        x: 5
                inner Execution Context
                Phase: Creation
                arguments: { 0: 2, length: 1 }
                this: window
                y: 2
```
`ADD inner Execution Context Phase: Creation`, `BlockStatement` > `START inner Execution Context Phase: Execution`, `ReturnStatement` > `x + y`, `BinaryExpression` > `x`, `Identifier` > `BinaryExpression` > `y`, `Identifier` > *****`BinaryExpression`** > `ReturnStatement` >
```
Global Execution Context
Phase: Execution
window: global object
this: window
count: 0
makeAdder: fn()
add5: fn()
        Closure Scope
        arguments: { 0: 5, length: 1 }
        this: window
        x: 5
```
`REMOVED inner Execution Context`, `CallExpression` > `AssignmentExpression` > `Global Execution Context count: 7`, `ExpressionStatement` > `Program` > 
```
Global Execution Context
Phase: Execution
window: global object
this: window
count: 7
makeAdder: fn()
add5: fn()
```
`REMOVED Closure Scope // from the execution stack`, `Finished`
### 정리
 * **함수(outer function)에 또 다른 함수(inner function)가 출력될 경우에 outer function의 execution context가 execution stack에서 제거되어도 closure scope가 생성된다. 이 closure execution context는 outer function의 execution context와 동일한 변수(variable environment)들을 가지고 있다.
 * ***y 값은 inner execution context에서 가져오고 x 값은 parent execution context인 closure scope의 variable environment에서 가져온다.(Scope chain)

## Resources
* [TC39 - Execution Contexts](https://tc39.es/ecma262/#sec-execution-contexts)
* [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0&t=1210s)
* [Execution Context Visualizer](https://ui.dev/)
