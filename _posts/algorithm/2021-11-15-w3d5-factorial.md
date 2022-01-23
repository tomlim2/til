---
layout: post-base
title: Code Kata / W3D5 Recursion - Factorial
meta: 코드카타 3주 5일차 알고리즘 리뷰
source: https://www.a11yproject.com/
category: algorithm
tags: [Javascript, Algorithm]
---

### Solution

```js
const factorial = (n) => {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

### 재귀 알고리즘

오늘은 재귀알고리즘에 대한 문제입니다.
재귀(recursion)란, 자신을 정의할 때 자기 자신을 호출하는 방법을 뜻합니다. 프로그래밍의 함수정의에서 많이 사용됩니다.

예)

```js
const countdown = n => {
  console.log(n);
  countdown(n-1);
}

countdown(10);
```

countdown 함수는 받은 인자를 console로 출력합니다.
그런데 위의 함수를 실행하면 10에서 시작해서 무한으로 마이너스 값까지 내려갑니다.

그래서 재귀함수는 아래의 절차가 꼭 필요합니다.
언제 멈출것인가?

위를 고려해 0이 되면 더이상 재귀를 이어나가지 않도록 종료 조건을 추가하겠습니다.

```js
const countdown = n => {
  console.log(n);

  if (n === 0) return;

  countdown(n-1);
}

countdown(10);
```

재귀의 이론은 위와 같이 아주 간단합니다. 재귀를 더 공부하고 싶은 분은 인터넷에 재귀 문제를 찾아 더 풀어보셔도 좋고, 알고리즘 책에서 재귀 부분만 더 읽으셔도 좋습니다.

### 문제

재귀를 사용하여 팩토리얼(factorial)을 구하는 함수를 구현해주세요.
팩토리얼이란 1에서부터 n까지의 정수를 모두 곱한것을 말합니다.

```text
1! = 1
2! = 1 * 2
5! = 1 * 2 * 3 * 4 * 5
```
