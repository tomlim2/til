---
layout: post-base
title: Javascript / TDD / Rooster Regulation
meta: 모카를 이용한 객체 테스트 만들기 1
category: Javascript
tags: [Javascript, React, Mocha, TDD]
---
`rooster`객체의 테스트를 만들자

```jsx
// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;
```

```jsx
const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //Setup
      const expected = "cock-a-doodle-doo!";
      //Exercise
      const actual = Rooster.announceDawn();
      //Verify
      assert.equal(actual, expected);
    });
  });
  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      //Setup
      const inputNumber = 12;
      const expected = "12";
      //Exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      //Verify
      assert.equal(actual, expected);
    });
    it("throw a range error it passed a number less than 0", () => {
      //Setup
      const inputNumber = -1;
      const expected = RangeError;

      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber); //Exercise
      }, expected);
    });
    it("throw a range error it passed a number more than 23", () => {
      //Setup
      const inputNumber = 24;
      const expected = RangeError;

      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber); //Exercise
      }, expected);
    });
  });
});
```

## Resource

- [Code Academy](www.codecademy.com)
