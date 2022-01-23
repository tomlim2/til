---
layout: post-base
title: Implementing Modules using ES6 Syntax
meta: 자바스크립트 ES6를 활용한 모듈 구현
category: javascript
tags: [Javascript]
---
묘듈은 재사용 가능한 코드의 조각들이다. 이 코드들은 그 파일에서 `export`가 되고 다른 파일에서 `import`될 수 있다.

![what is modules?]({{site.baseurl}}/img/2021-10-25-modular-program-diagram.svg)

_출처 - [Code Academy](www.codecademy.com)_

> **Note**: 모듈과 파일은 혼용되서 사용된다.

## 자바스크립트로 모듈을 구현하는 방법: Node.js vs ES6

모듈을 구현할 수 있는 방법은 몇가지 있지만 그중 Node.js와 ES6를 이용한 구현이 자주 쓰인다.

- [The Node](https://nodejs.org/en/about/) runtime environment and the `module.exports` and `require()` syntax.
- The browser’s runtime environment and the [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) `import`/`export` syntax.

## 코드 예시

### Export

```js
function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}
 
function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.color = `rgb(${r}, ${g}, ${b})`;

  export { changeText, changeToFunkyColor }
}
```

### Import

```js
/* main.js */

import { changeText, changeToFunkyColor } from './module.js'

const header = document.getElementById("header");

// call changeText here
changeText(header, "I did it!");

setInterval(()=> {
  
  // call changeToFunkyColor() here
  changeToFunkyColor(header);

}, 200);
```

모듈 불러올 때 이름으로 인한 파일 충돌을 막기 위해 이름을 바꿀 수 있다.

```js
/* area-calculator.js */
 
import { area as squareArea } from 'square-area.js';
import { area as circleArea } from 'circle-area.js';
 
console.log('The area of a square with sides of length 5 is ' + squareArea(5));
console.log('The area of a circle with radius of length 5 is ' + circleArea(5));
```

### HTML

모듈화된 자바스크립트는 `HTML`에 `import`할 때, `type='module'`을 써줘야 에러를 피할 수 있다. `<script  type='module' src="./my-module.js"> </script>`

### export default

export default는 적용된 어떤 값들도 초기화하여 모듈 안의 그 값 그대로만 export하는 명령어이다.

```js
function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// use default export syntax below here

export default {changeText: changeText, changeToFunkyColor: changeToFunkyColor}
```

### Importing default modules

```js
const resources = {
  articleTitle: "Implementing Modules using ES6 Syntax",
  numberOfChallenges: 6,
  minutesToComplete: 45
}
export default resources;
```

위의 js를 가져오는 방법은 `import resources from './article-data.js'`, `import articleTitle from './article-data.js'`, `import { default as articleData } from './article-data.js'` 등이 있다.

## Resource

- [ES6 syntax to import and export modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Code Acamedy](www.codecademy.com)