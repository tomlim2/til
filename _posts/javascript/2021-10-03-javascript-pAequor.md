---
layout: post-base
title: Mysterious Organism
meta: 자바스크립트 객체로 미확인 유기체 시뮬레이팅 하기
category: Javascript
tags: [Javascript, Project]
---
## Context

You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

## Codes

```js
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// pAequorFactory contained four method: .mutate(), .compareDNA(), .willLikelySurvive(), .complementStrand()

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    _dna: array,
    mutate(){
      //15개의 dna 중 하나를 임의의 다른 dna로 변형시킨다.

      let randomDnaIndex = Math.floor(Math.random()*array.length);
      const dnaBases = ['A', 'T', 'C', 'G'];
      const subDna = dnaBases.filter(vl => 
        vl != this._dna[randomDnaIndex]
    );
      const mutated = dnaBases[Math.floor(Math.random() * 3)];
      this._dna[randomDnaIndex] = mutated;
    },
    compareDNA(object){
      //다른 qAequor의 object와 비교하여 DNA 배열이 얼마나 일치하느냐를 비교한 qAequor의 specimenNum과 일치률을 출력시킨다.

      let sameLocation = 0;
      let arrayLength = object._dna.length;

      for(i=0; i<arrayLength; i++){
        if(this._dna[i] === object._dna[i]){
          sameLocation += 1;
        }
      }

      let result = [];
      let text =`specimen #${this.specimenNum} and specimen #${object.specimenNum}`;

      result.push(text);

      let percent = Math.floor(sameLocation/arrayLength*100);
      
      result.push(percent);

      return result;
    },
    willLikelySurvive(){
      //dna배열 안의 c와 g의 비율(생존률)이 60% 이상인지 아닌지를 boolean값으로 출력한다.

      let count = 0;

      for(i=0; i<this._dna.length; i++){
        if(this._dna[i] === 'C' || this._dna[i] === 'G') count += 1;
      }

      return Math.floor(count/this._dna.length*100) > 60 ? true : false;
    },
    complementStrand(){
      //return dna's complement strand array

      let complementDna = [];

      for(let i=0; i < this._dna.length;i++){
        if(this._dna[i]==='A') complementDna.push('T'); 
        if(this._dna[i]==='T') complementDna.push('A'); 
        if(this._dna[i]==='C') complementDna.push('G'); 
        if(this._dna[i]==='G') complementDna.push('C');
        };

        return complementDna
    },
  };
};

//function to generate [n] pAequor
const pAequor = () => {
  let target = 0;
  let listOfpAequor = [];
  let numberOfpAequor = 30;
  let n = 0;
  let i = 1;

  while (target < numberOfpAequor+1) {
    let sample = pAequorFactory(i, mockUpStrand());
    
    if(sample.willLikelySurvive() === true){
      listOfpAequor.push(sample)
      target += 1;
    };
    i ++;
  };

  return listOfpAequor;
}

//find array of the two the most related pAequor's specimen and the percentage.
const findTheTwoMostRelated = (array) => {
  let maxLength = array.length;
  let twoTemp = [];

  for(let i = 0; i < maxLength; i++){
    for(let j = i+1; j < maxLength; j++){
        twoTemp.push(array[i].compareDNA(array[j]));  
    };
  };

  let numberArr = []

  for (let i = 0; i < twoTemp.length; i++){
    numberArr.push(twoTemp[i][1])
  }

  let hi = twoTemp.filter(vl => vl[1] >= Math.max(...numberArr));
}
```

### `.mutate()`

15개의 dna 중 하나를 선택하여 본래의 dna를 제외한 다른 세 개의 dna로 변형시킨다. 예를 들면 변형시킬 dna가 'A'라면 'A'를 제외한 ['T', 'C', 'G'] 중 임의의 dna로 대입시킨다.

### `.compareDNA()`

다른 qAequor의 object와 비교하여 dna 배열이 얼마나 일치하느냐를 비교한 qAequor의 specimenNum과 일치률을 출력시킨다.
결과값으로 두 개의 요소를 가진 배열을 주며 첫 번째 요소에서는 비교된 두 pAequor의 넘버를 가지고 두 번째 요소에서는 두 DNA의 위치와 값의 일치률을 가지고 있다.

### `.willLikelySurvive()`

설정상 dna 중 'C'와 'G'이 외부환경에 대한 생존률을 높여주는 요소이다. 이 메서드는 해당 dna의 'C'와 'G'의 비율(생존률)이 60% 이상인지 아닌지를 boolean값으로 출력한다.

### `.complementStrand()`

dna의 complement strand를 출력한다. 'A'는 'T'로, 'T'는 'A', 'C'는 'G'로 'G'는 'C'로 바꿔준다.

## Resource

- www.codecademy.com
