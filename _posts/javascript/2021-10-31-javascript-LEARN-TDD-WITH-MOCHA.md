---
layout: post-base
title: Learn TDD with Mocha
meta: TDD 프로세스 리뷰
category: Javascript
tags: [Javascript, Mocha, TDD]
---
Test-driven development (TDD) is a programming technique that uses test code and implementation code. The test code is written to define the desired behavior of your program. The test output provides descriptive error messages that inform the implementation of your program.

**At a high-level the process is:**

- Write The Test — Start with a test describing the functionality we’d like to see.
- Fail The Test — Write code in response to the test that fails.
- Pass The Test — The tests fail and communicate feedback to developers through error messages. It’s our responsibility to read those messages, then respond by writing the minimum amount of code to address those messages.
- Refactor Your Code — See below.

**The development process is guided by the red-green-refactor cycle.**

## Red

Write a test that covers the functionality you would like to see implemented. You don’t have to know what your code looks like at this point, you just have to know what it will do.

Run the test. You should see it fail. Most test runners will output red for failure and green for success. While we say “failure” do not take this negatively. It’s a good sign! By seeing the test fail first, we know that once we make it pass, our code works.

## Green

Read the error message from the failing test, and write as little code as possible to fix the current error message. By only writing enough code to see our test pass, we tend to write less code as a whole. Continue this process until the test passes.

This may involve writing intermediary features covering lower level functionality which require their own Red, Green, Refactor cycle. The edge-case was an example of this.

Do not focus on code quality at this point. Be shameless! We simply want to get our new test passing.

## Refactor

Clean up your code, reducing any duplication you may have introduced. This includes your code as well as your tests.

Treat your test suite with as much respect as you would your live code, as it can quickly become difficult to maintain if not handled with care. You should feel confident enough in the tests you’ve written that you can make your changes without breaking anything.

---

## Factorial Feature

### How To Calculate Factorial

You take an integer and you multiply that by all the integers that are less than it.

The factorial of an integer `n` is denoted by an exclamation mark `n`!, so 5! is equal to:

```text
 5 × 4 × 3 × 2 × 1 = 120
```

### Edge Case

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter.

In this case an edge-case is that 0 factorial (or 0!) is 1.

### Step 1-1 red

```js
//index.html
const Calculate = {
}

module.exports = Calculate;
```

```js
//index_test.js
var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns correct value of 5!',()=>{
      assert.equal(Calculate.factorial(5), 120);
    })
  });
});
```

### Step 1-2 Green

```js
//index.html
const Calculate = {
  factorial(inputNumber){
    return 120
  }
}

module.exports = Calculate;
```

### Step 1-3 Refactoring

```js
//index_test.js
describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns correct value of 5!',()=>{
      //Setup
      const inputNember = 5;
      const expectedResult = 120;

      //Exercise
      const result = Calculate.factorial(inputNember)

      //Verify
      assert.equal(result, expectedResult);
      
    })
  });
});
```

### Step 2-1 Red

```js
//index_test.js
describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns correct value of 5!',()=>{
      //Setup
      const inputNember = 5;
      const expectedResult = 120;

      //Exercise
      const result = Calculate.factorial(inputNember)

      //Verify
      assert.equal(result, expectedResult);
      
    })
    it('returns correct value of 3!',()=>{
      //Setup
      const inputNember = 3;
      const expectedResult = 6;

      //Exercise
      const result = Calculate.factorial(inputNember)

      //Verify
      assert.equal(result, expectedResult);
      
    })
  });
});
```

### Step 2-2 Green

```js
//index.html
const Calculate = {
  factorial(inputNumber){
    for (let i = inputNumber-1; i>= 1; i--){
      inputNumber = inputNumber * i
    }
    return inputNumber;
  }
}

module.exports = Calculate;
```

### Step 2-3 Refactoring

```js
//index.html
const Calculate = {
  factorial(inputNumber){
    for (let i = inputNumber-1; i>= 1; i--){
      inputNumber *= i
    }
    return inputNumber;
  }
}

module.exports = Calculate;
```

### Step 3-1 Edge case Red

```js
//index_test.js
describe('Calculate', () => {
  describe('.factorial', () => {
    ...
    it('returns correct value of 0!',()=>{
      assert.equal(Calcluate.factorial(0), 1);
      
    })
  });
});
```

### Step 3-2 Edge case Green

```js
//index.html
const Calculate = {
  factorial(inputNumber){

    if (inputNumber === 0){
      return 1;
    }

    for (let i = inputNumber-1; i>= 1; i--){
      inputNumber *= i
    }
    return inputNumber;
  }
}

module.exports = Calculate;
```

### Step 3-3 Edge case Refactoring

```js
//index_test.js
describe('Calculate', () => {
  describe('.factorial', () => {
    ...
    it('returns correct value of 0!',()=>{

      // Setup
      const inputNumber = 0;
      const expectedNumber = 1;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedNumber);
      
    })
  });
});
```

## Resource

- [Mocha Documentation](mochajs.org/#getting-started)
- [Code Academy](codecademy.com)
