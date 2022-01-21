---
layout: post-base
title: Basic - Generic
meta: 제네릭 이해하기
category: Typescript
tags: [typescript, javascript]
---

타입스크립트가 함수의 input 값과 output 값을 유연하게 추론하게 하는 기능을 generic이라고 한다.

아래와 같은 함수가 있다고 하자.

```typescript
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

updatedArray[0].split("");
```

개발자들은 updatedArray가 숫자의 배열로 나올것이라고 생각하지만 컴퓨터는 그렇지 않다. 고로 함수의 output의 추론 유형을 `any`로 반환을 하게 되는데 이것은 타입스크립트를 쓰는 목적과 맞지 않기 때문에 컴퓨터가 함수의 output을 추론할 수 있도록 generic 함수로 변환해야한다.

위의 함수를 generic 함수로 바꾸면 아래와 같다.

```typescript
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // string으로 반환

updatedArray[0].split(""); //updatedArray가 숫자임으로 .split() 매서드를 사용하지 못하기에 에러 메세지를 띄운다.
```

위같이 작성하게 된다면 컴퓨터는 updatedArray가 숫자의 배열이 나올 것이라고 추론하게 된다.
