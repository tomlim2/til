---
layout: post-base
title: Javascript / Project / Credit Card Checker
meta: test
category: Javascript
---
카드체커를 자바스크립트로 구현한 코드이다.

## [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Description)

![Luhn algorithm]({{site.baseurl}}/img/21-10-01-validator-diagram.svg)
_the chart from [Codeacademy](www.codecademy.com)_

## 카드회사 고유식별번호

카드번호 첫번째 숫자는 카드회사를 식별할 수 있는 고유번호이다.

First Digit | Company
------------ | -------------
3 | Amex (American Express)
4 | Visa
5 | Mastercard
6 | Discover

## Code

보통 알고 있는 카드번호는 16자리 숫자이지만 15자리도 존재하기에 코드짤때 유의해야한다.

```js
//유효한 카드, 미유효한 카드, 알수없는 카드의 카드넘버
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];

const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];

const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];

//batch of the card number
const batch = [valid1, valid2, valid3, invalid1, invalid2, invalid3, mystery1, mystery2, mystery3];

//Luhn algorithm를 기초로 카드 번호가 유효한지 확인한다.
const validateCard = array => {
  let cardNumber = [];
  let sum = 0;

  for (let i = array.length-1; i >= 0; i--){
  let digit = array[i];
  cardNumber.push(digit)
  }

  for (let i=0; i<cardNumber.length; i++){
    let digit = cardNumber[i];
    if(i%2 === 1 && (digit *= 2) > 9) digit -= 9;
    sum += digit
  }

  sum%10 === 0 ? true : false;

  return sum
};

//Luhn algorithm를 기초로 카드 번호가 유효한지 확인한다.
const findInvalidCards = array => {
  let cardNumber = [];
  if(validateCard(array) === false){
    cardNumber.push(array);
  };
  console.log(cardNumber);
};

//카드회사를 식별한다.
const idInvalidCardCompanies = array => {
  if(validateCard(array) === false){
    switch(array[0]){
      case 3 :
      console.log('Amex (American Express)')
      break;
    case 4 :
      console.log('Visa')
      break;
    case 5 :
      console.log('Mastercard')
      break;
    case 6 :
      console.log('Discover')
      break;
    default:
      console.log('Company not found');
    }
  };
};

```

## Conclusion

가장 핵심적인 부분만 만들었고 나중에 한번 이 코드를 좀 더 간략하게 해보자. 찾아보면 [간략화 되어있는 코드](https://gist.github.com/DiegoSalazar/4075533)가 간략화가 되어 있다.

기능들(ex - 카드를 읽었을때 바로 카드사에 이메일을 보낸다던가, 유효기간이 지난 카드 혹은 분실신고되어 있는 카드는 어떻게 처리할것인가)이나 context들(ex - 카드리더기로 들어오는 카드넘버들을 어떻게 빨리 처리하여 저 코드 안에 넣는가)을 좀더 감미해보자.
