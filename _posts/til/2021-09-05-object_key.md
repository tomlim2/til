---
layout: post-til
title: 21-08-28 Javascript - Object
meta: test
source: https://material.io/design/
category: til
---
객체는 자바스크립트 데이터 타입 중의 하나입니다. 영어로는 object라고 표현합니다. key값과 value값을 쌍으로 이루어져 있고, 배열과는 다르게 순서가 중요하지 않습니다.

### 마침표(Dot Notation) & 대괄호 (Bracket Notation) 예시
```js
let a = {
 "a" : 1,
 "b-c": 2,
 "0d" : 3,
 "d0" : 4
}

console.log(a.a)   // 1
console.log(a.b-c) // ReferenceError: c is not defined
console.log(a.0d)// SyntaxError: Invalid or unexpected token
console.log(a.d0)  // 4
```
```js
let a = {
 a : 1,
 2 : 2,
 d3 : 3
}

console.log(a.a) //1
console.log(a["2"]) //2
console.log(a.2) // error 
```
```js
var a = {
 b : 1,
 c : 2
}
var b = 'c'

console.log(a[b] + ' vs ' + a.b) // 2 vs 1
```

마침표 Dot Notation
>1. 숫자로 시작하는 키에 접근할 수 없다
>2. 띄어쓰기가 포함된 키에는 접근할 수 없다

대괄호 Bracket Notation
>1. 숫자, 띄어쓰기가 포함된 키에 접근가능하다
>2. 변수로 접근 가능하다

```js
let myStorage = {
    "car": {
      "inside": {
        "glove box": {
          "maps" : "why",
          "book cover": {
            intro: "hi"
          }
        },
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  }  

let sayHi = myStorage.car.inside["glove box"]["book cover"].intro

console.log(sayHi) //hi
```