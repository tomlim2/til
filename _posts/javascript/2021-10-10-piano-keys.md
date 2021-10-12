---
layout: post-base
title: Javascript/DOM - Piano Keys
meta: Javascript
category: Javascript
---
아주 간단한 생일 축하 노래를 연습할 수 있는 피아노 플레이어를 구현시키는 프로젝트. 사용자는 왼쪽에서는 실제로 피아노 키와 상호작용할 수 있고 오른쪽에서는 생일 축하 노래의 가사와 코드를 확인할 수 있다. 오른쪽 박스에서는 한 번에 최대 7개의 키를 확인할 수 있고 노란색 버튼을 누르면 노래의 다음 가사와 키를 확인할수 있다.

![d]({{site.baseurl}}/img/21-10-11-piano.png)
_출처 -[Codeacamedy](https://www.codecademy.com/)_


## 코드 
DOM 컨셉을 이해하기 위한 프로젝트인만큼 js만 정리했다. 사운드 구현은 시간이 된다면 해보자.
```js
// 13개의 키의 ID 이름을 가지고 있는 배열
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];

// 13개의 키의 ID들을 가지고 DOM 요소로 지정하여 notes에 저장한다.
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// 키들의 색을 파랑색(임의의 색)으로 바꾸는 코드
const keyPlay = event => {
  event.target.style.backgroundColor = 'blue';
}

// 키들의 색을 파랑색(임의의 색)을 초기화하는 코드
const keyReturn = event => {
  event.target.style.backgroundColor = '';
}

// mouseDown과 mouseUp을 가지고 event handler들을 포함한 함수
const callNote = note => {
 note.onmousedown = function(){
   keyPlay(event)
 }
 note.onmouseup = function(){
   keyReturn(event)
 }
}

// 반복문을 통해 각 notes 안의 요소들에 함수를 실행하게 한다.
notes.forEach(callNote)

// 이 변수들은 사용자들이 가사를 진행할 수 있는 버튼들을 저장한다.
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// 이변수는 가장 마지막 가사('-END')를 저장하고 있다.
let lastLyric = document.getElementById('column-optional');

// 이 statement들은 nextTwo를 제외한 모든 진행용 버튼들을 "hiding"한다.
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// 첫 번째 진행용 버튼을 위한 event handler 값과 함수를 적용
nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = "D";
  document.getElementByID('letter-note-six').innerHTML = "C";
}

// 두 번째 진행용 버튼을 위한 event handler 값과 함수를 적용
nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementById('word-five').innerHTML = "DEAR";
  document.getElementByID('word-six').innerHTML = "FRI-";

  document.getElementByID('lastLyric').style.display = 'inline-block';

  document.getElementById('letter-note-three').innerHTML = "G";
  document.getElementById('letter-note-four').innerHTML = "E";
  document.getElementById('letter-note-five').innerHTML = "C";
  document.getElementById('letter-note-six').innerHTML = "B";
}

// 세 번째 진행용 버튼을 위한 event handler 값과 함수를 적용
nextThree.onclick = function(){
  startOver.hidden = false;
  nextThree.hidden = true;

  document.getElementById('word-one').innerHTML = "HAP-";
  document.getElementById('word-two').innerHTML = "PY";
  document.getElementById('word-three').innerHTML = "BIRTH";
  document.getElementById('word-four').innerHTML = "DAY";
  document.getElementById('word-five').innerHTML = "TO";
  document.getElementById('word-six').innerHTML = "YOU!";

  document.getElementById('letter-note-one').innerHTML = "F";
  document.getElementById('letter-note-tow').innerHTML = "F";
  document.getElementById('letter-note-three').innerHTML = "E";
  document.getElementById('letter-note-four').innerHTML = "C";
  document.getElementById('letter-note-five').innerHTML = "D";
  document.getElementById('letter-note-six').innerHTML = "C";
  lastLyric.style.display = 'none';
}

// 리셋용 버튼을 위한 event handler 값과 함수를 적용
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;

  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
```