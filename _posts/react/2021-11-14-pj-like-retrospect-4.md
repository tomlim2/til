---
layout: post-base
title: Like / Gathering of the screenshot
meta: 프로젝트하면서 얻은 다양한 피드백과 영감을 받는 코드들
category: react
tags: [React, Javascript, Sass, Project]
source: https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend
---

프로젝트를 진행하면서 찍은 위코드 멘토분들에게 그리고 동기들에게 받은 인상 깊은 코드들을 나열한다.

## 1. `{...order}`

![size, quantity selector]({{site.baseurl}}/img/2021-11-14-Like/whatIsThis_1.png)

- **장점**: 눈에 띄게 코드가 줄여졌다. 자주 써야할꺼 같다.
- **단점**: 백엔드 데이터와 다른 컨벤션을 쓴다면 코드 가독성이 조금 떨어질거 같다.
- **결론**: 백엔드와의 데이터의 컨벤션이 최종 버전이라면 이 코드를 이용해 나중에 정리하자.

## 2. `.bind()` vs `arrow function`

![what is bind]({{site.baseurl}}/img/2021-11-14-Like/whatIsThis_2.png)

사이즈 및 수량 선택 기능 구현중 자식 컴포넌트에 전역 함수로서 정의하기 위해 `.bind()`를 처음 사용했었다. 하지만 매서드가 화살표 함수로 정의되면 `bind`를 필요 없다고 한다.

- **의문**: `arrow function`이 뭘까?

## 3. `this.setState(prevState => {.... return....})`

![in size, quantity selector]({{site.baseurl}}/img/2021-11-14-Like/whatIsThis_3.png)

`this.setState(prevState =>{})`에서 수량 선택하면서 부모의 어떤 기능을 실행시키기 위해 짠 코드를 멘토님이 바꿔준거다. 코드 개선하면서 더이상 사용하지는 않지만 그대로 `this.setState({})`를 조금 이해할 수 있었다.

## 4. `404`

![size, quantity selector]({{site.baseurl}}/img/2021-11-14-Like/hi404page.png)

예전에 404페이지 구현을 위해 프러덕 디자이너들과 함께 디자인 시안을 살펴본적이 있다. 요기에 쓰는 거였다.

## 5. Router settings for detail pages

![size, quantity selector]({{site.baseurl}}/img/2021-11-14-Like/routerSettingForDetail.png)

## 6. Router settings for modals

![size, quantity selector]({{site.baseurl}}/img/2021-11-14-Like/routerSettingForModals.png)

## 7. Absolute Path vs Relative Path

![Code differences: Absolute Path vs Relative Path]({{site.baseurl}}/img/2021-11-14-Like/absolutePathVSRelativePath.png)

## Resource

- Like / 라이키, 나이키 클론 프로젝트
  - [홈 페이지](http://wecode26likeproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - [시연 영상](https://drive.google.com/file/d/1QfJUuwgZz7eYWqR9iYJ71wAxjD2XTrBy/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend.git)
  - [Back-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-backend.git)
  - [백엔드 API 설계](https://www.notion.so/LIKE-34de3722ecbe46eabcd5669789a499b1)
  - [Trello](https://trello.com/b/b9cKMX5x/like-%ED%8C%80)