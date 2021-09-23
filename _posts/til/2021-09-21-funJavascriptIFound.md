---
layout: post-base
title: 21-09-21 Javascript - Today I Found(TIF) - 1
meta: test
category: til
---
상호작용용 재밌어 보이는 자바스크립트 코드 모음집

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