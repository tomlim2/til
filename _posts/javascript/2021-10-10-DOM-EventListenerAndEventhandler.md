---
layout: post-base
title: Javascript / DOM / events
meta: 자바스크립트 이벤트 트리거 개론
category: Javascript
tags: [javascript, DOM]
---
![d]({{site.baseurl}}/img/21-10-10-dog.png)
_출처 -[Codeacamedy](https://www.codecademy.com/)_

## `.addEventListener()`

```js
let eventTarget = document.getElementById('targetElement');
 
eventTarget.addEventListener('click', function() {...})
```

* `document.getElementById('targetElement')`을 사용하여 event target을 설정하였다.
* `eventTarget`에 DOM에 있는 `.addEventListener()` 매서드를 등록하여 구현하였다.
* `.addEventListener()` 매서드는 두 개의 인자를 가진다.
  * 문자열인 event type
  * 함수인 event handler
* 위의 예시는 사용자들이 `eventTarget`에 클릭을 했을 때 작동되는 `'click'` 이벤트를 사용하였다.
* 코드블럭 안의 **event handler**은 `'click'` 이벤트들이 감지되었을때 실행된다.

## `.onevent`

```js
let eventTarget = document.getElementById('targetElement');
 
eventTarget.onclick = function() {...}
```

또한 **event handler**를 DOM 요소들에 `.onevent` 값을 붙여서 사용할 수 있다. 특정 이벤트를 등록하기 위한 패턴은 이벤트 형식 이른에 lowercased로 `.on`을 붙여서 사용된다.

### Toggle view/close buttons

```js
let view = document.getElementById('view-button'); // 처음엔 view버튼만 있다.
let close = document.getElementById('close-button'); // 닫기 버튼
let codey = document.getElementById('codey'); // 이미지

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

function textChange(){
  view.innerHTML = 'Hello, World';
}

function textReturn(){
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);
```

## Event Handler 없애기

`.removeEventListener()`는 `.addEventListener()`와 반대되는 매서드이다. 이 매서드는 event target의 EventListener가 더 이상 필요없을 때 그 기능을 제거할때 사용한다. `.removeEventListener()` 또한 두 가지의 인자를 받는다.

* 문자열인 event type
* 함수인 event handler

## [Event Object Properties](https://developer.mozilla.org/en-US/docs/Web/API/Event#properties)

자바스크립트는 이벤트들을 그에 관련된 데이터들과 기능들과 함께 메소드와 값들을 event object로서 저장한다. 이벤트가 트리거 됬을때 이 event object가 인자처럼 event handler에 통과된다.

* `.target` - property to reference the element that the event is registered to.
* `.type` - property to access the name of the event.
* `.timeStamp` - property to access the number of milliseconds that passed since the document loaded and the event was triggered.

### 예시

```js
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

let sharePhoto = function(event) {
  event.target.style.display = 'none';
  //.target은 이벤트에 설정 되어 있는 요소를 참조한다.(이 경우는 share를 참조한다.)
  text.innerHTML = event.timeStamp;
}

share.addEventListener('click', sharePhoto)
```

### 예시2

```js
let button = document.getElementById('color-button');
let mysteryButton = document.getElementById('next-button');

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';

  event.target.style.backgroundColor = randomColor;
}

button.addEventListener('click', colorChange); //클릭 값이 있을 때마다 colorChange가 실행된다.
mysteryButton.addEventListener('wheel', colorChange) //휠 값이 적용될 때마다 colorChange가 실행된다.
```

## Event Types

* `'click'`
* `'wheel'`
* `'mousedown'`
* `'mouseup'` 마우스가 누르고 뗐을 때
* `'mouseover'` 마우스가 올라왔을 때
* `'mouseout'` 마우스가 나갔을 때
* `'keydown'` 키를 눌렀을 때
* `'keyup'` 키를 뗐을 때
* `'keypress'`키를 눌렀다 뗐을 때

### 예시1 - 박스들

```js
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// reset은 모든 스타일 값을 없애 이벤트가 일어나기 전 값으로 돌아간다.
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

function increaseWidth(){
  itemOne.style.width = '500px';
}
function changeBackground() {
  itemTwo.style.backgroundColor = 'blue'
}
function changeText() {
  itemThree.innerHTML = 'The mouse has left the element'
}
function showItem() {
  itemFive.style.display = 'block';
}

itemOne.addEventListener('mouseover', increaseWidth)
itemTwo.addEventListener('mouseup', changeBackground)
itemThree.addEventListener('mouseout', changeText)
itemFour.addEventListener('mousedown', showItem)
```

### 예시2 - 공 튕기기

```js
let ball = document.getElementById('float-circle');

function up() {
  ball.style.bottom = '250px';
}

function down() {
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);
```
