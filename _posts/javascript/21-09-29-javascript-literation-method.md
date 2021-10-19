---
layout: post-base
title: Javascript / Array&literation Methods **
meta: test
category: Javascript
---

* [Arrow function](#understanding-arrow-functions)
* [forEach()](#foreach)
* [map()](#map)
* [filter()](#filter)
* [reduce()](#reduce)
* [find()](#find)
* [findIndex()](#findIndex)
* [every()](#every)
* [sort()](#sort)
* [repeat()](#repeat)
* [for...in](#forin)
* [More Examples](#more-examples)

## Understanding Arrow Functions
```js
var example = function() {
  // code to execute
}

example();
```
```js
var example = () => {
  // code to execute
}

example();
```
```js
var example = parameter1 => {
  // code to execute
}
```
---
## `.forEach()`
```js
let fish = [ "piranha", "barracuda", "cod", "eel" ];
```
```js
// Print out each item in the array
fish.forEach(individualFish => {
    console.log(individualFish);
})
```
```js
//Output
piranha
barracuda
cod
eel
```
이 매서드와 같은 값을 출력하는 또 다른 방법은 for loop의 사용이다.
```js
// Loop through the length of the array
for (let i = 0; i < fish.length; i++) {
    console.log(fish[i]);
}
```
## more
```js
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = veg => console.log('No ' + veg + ' please. I will have pizza with extra cheese.');

// Write your code here:

const declineEverything = veg => veg.forEach(politelyDecline);
}

const acceptEverything = veg => veg.forEach(e => console.log(`Ok, I guess I will eat some ${e}.`);
}
```
---
## `.map()`
`map()` 매서드를 사용하게 되면 새로운 배열을 만든다.
```js
let fish = [ "piranha", "barracuda", "cod", "eel" ];

// Print out each item in the array
let printFish = fish.map(individualFish => {
    console.log(individualFish);
});

printFish;
```
```js
//Output
piranha
barracuda
cod
eel
```
또한 `map()`을 통해서 각 배열의 항목들을 수정할 수 있다.
```js
// Pluralize all items in the fish array
let pluralFish = fish.map(individualFish => {
    return `${individualFish}s`;
});

pluralFish;
```
```js
//Output
[ 'piranhas', 'barracudas', 'cods', 'eels' ]
```

### example
```js
// const complete = el => el.toUpperCase() + '!';
// const shoutGreetings = arr => arr.map(complete);

const shoutGreetings = arr => arr.map(el => el.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
```
---
## `.filter()`
`filter()`는 결과 값을 새로운 배열에 저장한다. 기존 배열에는 아무런 영향을 주지 않는다.
```js
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filtered (Arg1, Arg2) {
  return Arg1.filter(el => el.includes(Arg2))
}

console.log(filtered(fruits, "ap")); 
//[ 'apple', 'grapes' ]
```
```js
let seaCreatures = [ "shark", "whale", "squid", "starfish", "narwhal" ];

// Filter all creatures that start with "s" into a new list
let filteredList = seaCreatures.filter(creature => {
  return creature[0] === "s";
});

filteredList;
```
```js
//Output
[ 'shark', 'squid', 'starfish' ]
```
### example
```js
const justCoolStuff = (arr1, arr2) =>  newArr = arr1.filter(el => arr2.includes(el));

const coolStuff = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const myStuff = [ 'g', 'i', 'j', 'd', 'k', 'l', 'm', 'n', 'a']; 

console.log(justCoolStuff(myStuff, coolStuff))
//[ 'g', 'd', 'a' ]
```

---
## `.reduce()`
```js
let numbers = [ 42, 23, 16, 15, 4, 8 ];

// Get the sum of all numerical values
let sum = numbers.reduce((a, b) => {
    return a + b;
});

sum;
```
```js
//Output
108
```
---
## `.find()`
```js
let seaCreatures = [ "whale", "octopus", "shark", "cuttlefish", "flounder" ];
```

```js
// Check if a given value is a cephalopod
const isCephalopod = cephalopod => {
    return [ "cuttlefish", "octopus" ].includes(cephalopod);
}

seaCreatures.find(isCephalopod);
```
```js
//Output
octopus
```
---
## `.findIndex()`
```js
let seaCreatures = [ "whale", "octopus", "shark", "cuttlefish", "flounder" ];
```
```js
// Check if a given value is a cephalopod
const isCephalopod = cephalopod => {
    return [ "cuttlefish", "octopus" ].includes(cephalopod);
}

seaCreatures.findIndex(isCephalopod);
```
```js
//Output
1
```
만약 조건에 충족되는 결과가 없다면 아래와 같이 -1을 출력한다.
```js
const isThereAnEel = eel => {
    return [ "eel" ].includes(eel);
}

seaCreatures.findIndex
```
```js
//Output
-1
```
---
## `.every`
### example - Vegan on the dinner
```js
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))//false
```
---
## `.sort()`
### example - Teeth number
```js
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

// [ { speciesName: 'human', numTeeth: 32 }, { speciesName: 'dog', numTeeth: 42 }, { speciesName: 'shark', numTeeth: 50 }, { speciesName: 'alligator', numTeeth: 80 } ]
```
---
## `.repeat`
### example - `.pad()`
![diagram demonstrating pad()]({{site.baseurl}}/img/21-10-01-pad.svg)
```js
pad(string, length, cha){
  if(string.length >= length){
    return string;
  }
  if(cha === undefined){
    cha = " "
  }

  const leftPadding = Math.floor((length - string.length)/2);
  const rightPadding = length - string.length - leftPadding;
  const paddedString = cha.repeat(leftPadding) + string + cha.repeat(rightPadding);

  return paddedString;
},
```
---
## `for...in`
### example - `.invert()`
invert()는 인자에 객체를 넣으면 객체의 key와 value를 뒤바꿔준다.
```js
invert(obj){
    let invertedObject = {};
    for (const prop in obj){
      let originalValue = obj[prop];
      invertedObject[originalValue] = prop;
    }
    return invertedObject;
  },
```

### example - [`.findKey()`](https://lodash.com/docs/4.17.15#findKey)

```js
findKey(obj, func){
    for (let key in obj){
      let value = obj[key];
      let predicatReturnValue = func(value);
      if(predicatReturnValue){
        return key;
      };
    };
    undefined
    return undefined;
  },
```
```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.findKey(users, ['active', false]);
// => 'fred'
 
// The `_.property` iteratee shorthand.
_.findKey(users, 'active');
// => 'barney'
```
### example - [`.dropwhile()`](https://lodash.com/docs/4.17.15#dropWhile)
Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
```js
dropWhile(array, predicate){
    let cb = (element, index) => {return !predicate(element, index, array);}
    let dropNember = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNember);
    return droppedArray;
}
```
[`.drop(array, [n=1])`](https://lodash.com/docs/4.17.15#drop) creates a slice of `array` with `n` elements dropped from the beginning
---
## `.push()`
```js
let arr = [1,2,3];
arr.push(4); 
// arr is now [1,2,3,4]
```
---
## `.pop()`
```js
let threeArr = [1, 4, 6];
let oneDown = threeArr.pop();
 
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```
---
## `.shift()`
```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```
---
## `.slice()`
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
---
## `.splice()`
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
---
## `.concat()`
```js
let pasta = ['tomato', 'basil', 'onion','chicken'];
let pizza = ['tomato', 'cheese', 'onion','olive','beef'];

function totalIngredients (Arg1, Arg2) {
  return Arg1.concat(Arg2).filter((el,index) => Arg1.concat(Arg2).indexOf(el) === index);
}

  console.log(totalIngredients());
//[ 'tomato', 'basil', 'onion', 'chicken', 'cheese', 'olive', 'beef' ]
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
## [`.chunk()`](https://lodash.com/docs/4.17.15#chunk)
```js
chunk(array, size){
    if(size === undefined){
      size === 1;
    }
    let arrayChunks = [];
    let lengthOfMainLoop = array.length/size;
    for(let i=0; i<lengthOfMainLoop; i++) {
      let sliceArray = array.slice(size*i, size*(i+1));
      arrayChunks.push(sliceArray);    
      }
      return arrayChunks
}
```
---
## More Examples
### Whale talk
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

### Mini Linter
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

### Groceries
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
### Secret Message
```js
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.push('program');

secretMessage[secretMessage.indexOf('easily')] = 'right'

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.splice(secretMessage.indexOf('get'), 5, 'know')

console.log(secretMessage.join(' '));

```