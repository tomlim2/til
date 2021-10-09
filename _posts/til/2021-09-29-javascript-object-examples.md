---
layout: post-base
title: 21-09-29 Javascript - Advanced Object
meta: test
category: til
---
객체에 좀더 깊게 파고들었다. 아래와 같은 리스트들로 본다.
* how to use the `this` keyword.
* conveying privacy in JavaScript methods.
* defining getters and setters in objects.
* creating factory functions.
* using destructuring techniques.

## The `this` keyword
```js
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());
//I am 1E78V2 and my current energy level is 100.
```

## Privacy
```js
const robot = {
  _energyLevel: 'high',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};


robot.recharge();
//Recharged! Energy is currently at high30%.
```

## Getters
Getters are methods that get and return the internal properties of an object.
```js
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return "My current energy level is " + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
  }
};


console.log(robot.energyLevel);
//My current energy level is 100
```

```js
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'
```

## Setter
We can also create setter methods which reassign values of existing properties within an object.

```js
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      return console.log('Pass in a number that is greater than or equal to 0')
    }
  },
  
};

robot.numOfSensors = 70;
console.log(robot._numOfSensors)//70

robot.numOfSensors = -10;//Pass in a number that is greater than or equal to 0
```

## Factory Functions

```js
const robotFactory = (model, mobile, sound) => {
 return {
   model: model,
   mobile: mobile,
   beep() {
     console.log(sound)
   }
 }
}

const tinCan = robotFactory('P-500', true, 'Beep Boop');

tinCan.beep();//Beep Boop
```

## Property Value Shorthand
ES6 introduced some new shortcuts for assigning properties to variables known as _destructuring_.

```js
function robotFactory(model, mobile, sound){
  return {
    model,
    mobile,
    beep() {
      console.log(sound);
    }
  }
}

const newRobot = robotFactory('P-501', false, 'Beep Boop')
console.log(newRobot.model)//P-501
console.log(newRobot.mobile)//false
newRobot.beep();//Beep Boop
```

## Destructured Assignment
```js
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
functionality.beep();//Beep Boop
```

## Built-in Object Methods
.hasOwnProperty(), .valueOf(), Object.assign(), Object.entries(), Object.keys() 등 많은 객체용 매서드들이 많다.
[MDN’s object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)에서 확인하자.

## Meal Maker
```js
const menu = {
  _courses: {
    appetizers: [],
    ...
  },
  get appetizer() {
    return this._courses.appetizers;
  },
  ...
  ,
  set appetizer(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  ...
  ,
  get courses() {
    return {
      appetizers: this.appetizers,
      ...
    }
  },
  addDishToCourse(courseName, name, price) {
    const dish = {
      name: name,
      price: price
    };

    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    ...
    const price = appetizers.price + mains.price + desserts.price;

    return `Appetizer is ${appetizers.name}... total price is ${price}`
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
...

let meal = menu.generateRandomMeal();
console.log(meal);
```

## Team Stats
```js
const team = {
  _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    ...
  ],
  _games: [{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    ...
  ],
  get players() {
    return this._players
  },
  get game() {
    return this._game
  },
  addPlayer(firstName, lastName, age) {
    const newPlayer = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(newPlayer);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const newGame = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(newGame);
  }
};

team.addPlayer('Steph', 'Curry', 28);
console.log(team['players']);

team.addGame('Help', 22, 28);
console.log(team['_games']);
```

## Resource
* MDN - [Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* MDN - [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)