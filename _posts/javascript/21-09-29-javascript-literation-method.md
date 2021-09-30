---
layout: post-base
title: Javascript - How To Use Array Methods in JavaScript (Iteration Methods)
source: https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods
meta: test
category: Javascript
---

* Arrow function
* `.forEach()`
* `.map()`
* `.filter()`
* `.reduce()`
* `.find()`
* `.findIndex()`
* `.every()`
* `.sort()`

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

## More examples
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
## More examples
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
```js
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))//false
```
---
## `.sort()`
```js
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

// [ { speciesName: 'human', numTeeth: 32 }, { speciesName: 'dog', numTeeth: 42 }, { speciesName: 'shark', numTeeth: 50 }, { speciesName: 'alligator', numTeeth: 80 } ]
```