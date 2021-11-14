---
layout: post-base
title: Like / Retrospect 5 - Scroll event listener
meta: 프로젝트하면서 얻은 다양한 피드백과 영감을 받는 코드들
category: projects
tags: [React, Javascript, Sass, Project]
source: https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend
---

브런치 프로젝트를 도와줬을때 구현한 코드. 네비게이션 상단의 `y`값이 `0`이 아닐 경우에 어떤 기능이 구현되는 기능이다. 너무나 유용하며 언젠가 꼭 사용한다.

## Code Review

```jsx
componentDidMount(){
 window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount(){
 window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = e => {
  if(window.scrollY < 0) {
    this.setState({
      isActivate: !isActivate,
    })
  }
}
```

## Resource

- Like / 라이키, 나이키 클론 프로젝트
  - [홈 페이지](http://wecode26likeproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - [시연 영상](https://drive.google.com/file/d/1QfJUuwgZz7eYWqR9iYJ71wAxjD2XTrBy/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend.git)
  - [Back-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-backend.git)
  - [백엔드 API 설계](https://www.notion.so/LIKE-34de3722ecbe46eabcd5669789a499b1)
  - [Trello](https://trello.com/b/b9cKMX5x/like-%ED%8C%80)