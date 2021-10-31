---
layout: post-base
title: Fun!
meta: 상호작용으로 사용하면 재미있어 보이는 자바스크립트 코드 모음집
category: til
tags: [Javascript]
---


## changeColor()

```js
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}
```

## random typeface changer

```js
function newStyle() {
  let newColor = '';
  let newFont = ''; 
  let x = Math.floor(Math.random()*7); 
  switch (x){
    case 0:
      newColor = 'red';
      newFont = 'Times New Roman'; 
      break;
    case 1: 
      newColor = 'blue';
      newFont = 'Florence, cursive'; 
      break;
    case 2:
      newColor = 'yellow';
      newFont = 'Verdana';
      break; 
    case 3:
      newColor= 'purple';
      newFont = 'Courier New';
      break
    case 4:
      newColor = 'cyan';
      newFont = 'Georgia'; 
      break;
    case 5:
        newColor = 'maroon';
        newFont = 'Palatino';
        break;
    case 6: 
        newColor = 'lime';
        newFont = 'Impact';
        break;
  }
  var elem = document.getElementById('logo');
  elem.style.color = newColor;
  elem.style.fontFamily = newFont; 
}

```

## [Count seconds]({{site.baseurl}}/test.html)

```js
const timeContainer = document.getElementById("time-container");
const FESTART_DAY = "2021-10-03";
const FESTART_DAY_DATE = new Date(FESTART_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
const now = new Date();
const difference = Math.floor(
    (now.getTime() - FESTART_DAY_DATE.getTime()) / 1000
);
timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);
```
