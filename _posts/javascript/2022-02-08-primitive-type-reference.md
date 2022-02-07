---
layout: post-base
title: Primitive Type & Reference Type
meta: 원시형과 참조형 타입
category: javascript
tags: [Javascript, 얉은 복사, 깊은 복사]
---

## Primitive Type

```text
number, boolean, string
```

언제든지 다른 변수에 변수를 재할당하고 저장할 수 있다.

```js
const number = 1;
const num2 = number;

console.log(num2);
```

## Reference Type

```js
const person = {
  name: "Max",
};
// 객체는 메모리에 저장하고 상수인 person은 메모리에 포인터를 저장한다.

const secondPerson = person;

// 첫 person을 secondPerson에 할당하면 포인터가 복사된다.

console.log(secondPerson); // Max

person.name = "Manu";

console.log(secondPerson); // Manu

// Max가 나오지 않고 Manu가 나온다. 이유는 포인터만 복사해서 메모리에 있는 같은 객체를 지정했기 때문이다.

// Array도 마찬가지이다.
```

```js
const person = {
  name: "Max",
};

// 포인터가 아닌 객체를 진짜로 복사하는 방법 (앑은 복사 Shallow copy)

const secondPerson = {
  ...person,
};

person.name = "Manu";

console.log(secondPerson); // Max
```

참조형 타입은 객체과 배열이고 재할당하면 값이 아니라 포인터를 복사하는 것이다.

따라서 정말로 복사하고 싶다면 새 객체를 만들고 대상의 속성(property)만을 복사해야 한다.

## 깊은복사(Deep copy)

깊은 복사된 객체는 객체안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체를 말한다.

### 1.JSON 객체의 메소드 이용

- 깊은 복사가 불가능한 타입들이 많다.
  - 함수, date 객체, 정규표현식 등
- 속도가 느리다.

```js
const obj1 = {
  a: 1,
  b: "string",
  c: {
    name: "Leon",
    age: "29",
  },
};

// Deep Copy 방법
const obj2 = JSON.parse(JSON.stringify(obj1));
```

### 2.커스텀 재귀 함수 사용

```js
function cloneObject(obj) {
  let clone = {};
  for (let key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      clone[key] = cloneObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}
```

### 3. Library인 lodash의 cloneDeep() 사용하는 방법

```js
const original = { a: { b: 2 } };
let copy = _.cloneDeep(original);
copy.a.b = 100;
console.log(original.a.b); //2
```
