---
layout: post-base
title: 21-08-28 Javascript - 배열, 반복문
meta: test
category: til
---
## Array.push()
```js
let arr = [1,2,3];
arr.push(4); 
// arr is now [1,2,3,4]
```
## Array.pop()
```js
let threeArr = [1, 4, 6];
let oneDown = threeArr.pop();
 
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```
## Array.shift()
```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```
## Array.slice()
```js
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```
음수로 입력할 경우 뒤에서부터 자른 array를 만든다.
```js
let nums = [1,2,3,4,5]
let nums_new = nums.slice(-2)
 
console.log(nums) // [ 1, 2, 3, 4, 5 ]
console.log(nums_new) // [ 4, 5 ]
```
## Array.splice()
댓글 삭제기능 등을 구현할때 많이 쓰인다.
```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```
```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
```js
let basket = [['양파','곰팡이'],['곰팡이','빵','딸기잼'],['귤','곰팡이','사과']];

function removeGerm(arr) {
  for(let i=0; i < arr.length; i++){
    for(let j=0; j <= arr[i].length; j++){
      if(arr[i][j] === '곰팡이'){
        arr[i].splice([j],1);
      }
    }
  }
  return arr;
}

console.log(removeGerm(basket));
// [ [ '양파' ], [ '빵', '딸기잼' ], [ '귤', '사과' ] ];
```

## Array.filter()
```js
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filtered (Arg1, Arg2) {
  return Arg1.filter(el => el.includes(Arg2))
}

console.log(filtered(fruits, "ap")); 
//[ 'apple', 'grapes' ]
```

## Array.concat()
```js
let pasta = ['tomato', 'basil', 'onion','chicken'];
let pizza = ['tomato', 'cheese', 'onion','olive','beef'];

function totalIngredients (Arg1, Arg2) {
  return Arg1.concat(Arg2).filter((el,index) => Arg1.concat(Arg2).indexOf(el) === index);
}

  console.log(totalIngredients());
//[ 'tomato', 'basil', 'onion', 'chicken', 'cheese', 'olive', 'beef' ]
```
## for loop
기본문장
```js
let result = 0;
for(let i=0; i <= 10 ; i++) {
  result += i
}
console.log(result) // 45
```

```js
let result = 0;
for(let i=0; i <= 10 ; i+=1) {
  result += i
}
console.log(result) // 45
```
```js
function makeSquare () {
  let arr = new Array(10);
  console.log(arr);
  for(let i=0; i< arr.length; i++){
    arr[i] = i*i;
  }

  return arr;
}

console.log(makeSquare ()) //// [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

결과값은 console.table로 출력하여 확인하자!

```js
let result = 0;
for(let i=0; i <= 10 ; i++) {
  result += i
  console.table({
  index: i,
  result : result
  })
}
 
console.log(result)
```