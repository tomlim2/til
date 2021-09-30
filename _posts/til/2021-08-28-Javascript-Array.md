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

## Array Method Example "Secret Message"
```js
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.push('program');

secretMessage[secretMessage.indexOf('easily')] = 'right'

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.splice(secretMessage.indexOf('get'), 5, 'know')

console.log(secretMessage.join(' '));

```
---

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

## Example - Whale talk
```js
let input = 'Hi, Human';//You can type sentence here
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray =[];

for (let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      resultArray.push(vowels[j])
      if (input[i] === 'e' || input[i] === 'u'){
          resultArray.push(input[i]);
        }
      }
  }
}

console.log(resultArray.join('').toUpperCase());//IUUA
```

## Example - Mini Linter
```js
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ')
console.log(storyWords.length);

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = storyWords.filter(vl => {
  return !unnecessaryWords.includes(vl)
  });
console.log(betterWords.length);

let overusedWords = ['really', 'very', 'basically'];
let countWord = [];
let counting = [];
for(let i=0; i<overusedWords.length;i++){
  counting = storyWords.filter(vl => {
  return vl.includes(overusedWords[i]);
});
  countWord[i] = counting.length;
}

console.log(`you have ${countWord[0]} 'really', ${countWord[1]} 'very', ${countWord[2]} 'basically' `);

let sentences = 0;
for(word of storyWords){
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
};

const logInfo = (wordCount, sentenceCount, overusedWordCount) => {
  console.log(`Word count: ` + wordCount);
  console.log(`Sentence count: ` + sentenceCount);
  console.log(`Overused Word Count: ` + overusedWordCount);
}
let wordCount = story.length;
let overusedWordCount = () => {
  let result = 0;
  for (let i = 0; i < countWord.length; i++){
    result = result + countWord[i];
  };
  return result;
}
logInfo(wordCount,sentences,overusedWordCount())

let betterWordsSingleString = betterWords.join('');
console.log(betterWordsSingleString)
```

## Example - Groceries
```js
const groceries = list => {
  let result = '';
  for(let j=0; j<list.length; j++){
    result += list[j].item;
    if(j < list.length -2){
        result += ", ";
      } else if(j === list.length -2){
        result += ' and ';
      }
  }
  return result
};

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
```