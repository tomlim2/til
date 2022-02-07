---
layout: post-base
title: Primitive Type & Reference Type
meta: 원시형과 참조형 타입
category: javascript
tags: [Javascript]
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

// 포인터가 아닌 객체를 진짜로 복사하는 방법

const secondPerson = {
  ...person,
};

person.name = "Manu";

console.log(secondPerson); // Max
```

참조형 타입은 객체과 배열이고 재할당하면 값이 아니라 포인터를 복사하는 것이다.

따라서 정말로 복사하고 싶다면 새 객체를 만들고 대상의 속성(property)만을 복사해야 한다.
