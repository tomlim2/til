---
layout: post-base
title: Javascript / Project / Build a Library & School Catalogue
meta: 자바스크립트 클라스 코드 리뷰
category: Javascript
tags: [Javascript, Project, Code Review]
---

## Build a Library

도서관의 도서, CD 등을 정리하는 `class` 베이스 자바스크립트이다. 이 프로젝트에는 도서, CD, 그리고 영화 세 가지의 미디어를 다룬다: . 이 프로젝트에서는 하나의 `Media` class와 세 가지의 subclasses들을 갖는다: `Book`, `Movie`, `CD`

## Code Review

### Parent-class

- Media에서 공통으로 사용할 속성 값들은 `title`, `rating`, `isCheckedOut`이다.
- `isCheckedOut`는 class 외부에서 체크아웃 여부를 설정할 수 있게 하기 위해 setter를 사용한다.
- 함수인 `toggleCheckOutStatus()`은 `isCheckedOut`을 `ture`, `false`로 toggle한다.
- 함수인 `getAverageRating()`은 rating 배열 안에 저장된 0~5점 사이의 평가 점수들의 평균 값을 만들어준다.
- 함수인 `addRating()`은 rating 배열 안에 0~5점 사이의 평가 점수들을 입력시킨다.

```js
class Media {
  constructor(title) {
    this._title = title;
    this._rating = [];
    this._isCheckedOut = false;
  }
  get title() {
    return this._title;
  }
  get rating() {
    return this._rating;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.rating.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return ratingsSum / this.rating.length;
  }
  addRating(num) {
    this.rating.push(num);
  }
}
```

### Sub-classes

미디어 밑에 도서, CD, 영화를 하위 클래스로 설정하고 그에 맞는 고유의 속성 값들을 부여한다.

- 예를 들어 도서는 작가와 책 제목, 총 페이지 수를 입력한다.
- `Media` Class의 sub-classes로써 도서(`Book`) Class를 설정할 때 Media로부터 확장(`extends`)시켜서 사용한다.
- `Super()`로 `Media`의 속성들 중 `title`을 `Book`에 계승시켜 사용하게 한다.

```js
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
```

### Usage

```js
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

console.log(historyOfEverything.getAverageRating()); // 4.66666

const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut); // true
```

## 추가로 구현할 항목

- Add more properties to each class (movieCast, songTitles, etc.)
- Create a CD class that extends Media.
In .addRating(), make sure input is between 1 and 5.
- Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
- Create class called Catalog that holds all of the Media items in our library.

---

## School Catalogue

학교 카테고리를 만드는 작업으로 기본 골자는 위의 Build Library와 비슷하다.

## Code Review

### Parent-class

`numberOfStudents`는 외부의 입력값으로 인해 언제든지 숫자를 변경할 수 있기에 `setter`를 설정한다.

```js
class School {
  constructor(name, level, numberOfStudents){
    this._name = name,
    this._level = level,
    this._numberOfStudents = numberOfStudents
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents === 'number'){
      this._numbderOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[Math.floor(Math.random()*(substituteTeachers.length-1))];
  }
}
```

### Sub-classes

초중고대학교의 클라스를 만들기 위해서 `super`에서 `name`, `level`, `numberOfStudent`을 `Scool`에서 전부 계승 받지만 level 값은 초등, 중등, 고등, 대학으로 나누어져 있고 먼저 입력할 수 있기에 `super(name, '학교레벨', numberOfStudent)`로 입력한다.

```js
class PrimarySchool extends School {
  constructor(name, numberOfStudent, pickupPolicy){
    super(name, 'primary', numberOfStudent);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudent, sportsTeams){
    super(name, 'high', numberOfStudent);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeam
  }
}

const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

const alSmith = new HighSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
```

## Resource

- [Understanding Classes in JavaScript](https://www.taniarascia.com/understanding-classes-in-javascript/)
- [Reference: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Code Academy](www.codecademy.com)