---
layout: post-base
title: 21-09-28 Javascript / for loop vs for…of loop
meta: test
category: til
---
for...of는 for loop의 es6 버전이다.

## for loop vs for…of loop
```js
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}
```
위의 코드는 for loop문이고 밑은 같은 코드를 for...of loop문으로 변환시켜 놓은 것이다.
```js
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}
```
이 두개의 코드의 결과 값은 아래와 같다.
```
I enjoy singing.
I enjoy eating.
I enjoy quidditch.
I enjoy writing.
```

## Array에서...
for ...of loop의 주요사용 방법은 배열의 항목들을 읽는 것이다.

```js
const fruits = ['oranges', 'apples', 'grapes'];
 
for (const fruit of fruits) {
  console.log(fruit);
}
```
아래와 같이 출력 된다.
```
oranges
apples
grapes
```
* const는 이 loop 안에서만 사용되기에 마음대로 이름을 정할 수 있다. fruits 배열의 fruit, people 배열의 person, puppies의 배열의 puppy 등 코드를 보다 더 직관적이게 읽고 쓸 수 있다.

## String에서...
```js
const username = 'joe';
 
for (const char of username) {
  console.log(char);
}
```
```
j
o
e
```

## Break와 Continue
for...of loop의 장점 중 하나는 break와 continue를 이용하여 반복문이 진행을 어느 정도 제어할 수 있다는 것이다. 

```js
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird);
}
```
위의 예시대로 break를 사용할시 **'Basan' 앞의 항목들이 출력되고 이 반복문을 멈춘다.**
```
Shoebill
Cockatrice
```

```js
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
}
```
'Cow' 항목에 continue 사용할시 **'Cow'를 제외한 남은 항목들이 출력된다.**
```
Shoebill
Cockatrice
Basan
Terrorbird
Parotia
Kakapo
```

## Use Case: for loop vs for ...of loop
```js
const nums = [1, 2, 3];
 
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
 
console.log('Time is up!');
```
위의 코드는 아래와 같이 출력된다.
```
3
2
1
Time is up! 
```

이 케이스에서는 for ...of loop를 사용할 수 없다. 하지만 필요한 상황에 맞게 사용하게 된다면 더 향상된 가독성을 가진 코드를 쓸 수 있다.