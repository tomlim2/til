---
layout: post-base
title: Like / Retrospect 3 - Review star in react
meta: 리뷰용 별 구현
category: projects
tags: [React, Javascript, Sass, Project]
source: https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend
---

리뷰 평점에 맞게 별이 채워지는 코드. 밸런스 있게 js와 scss 그리고 이에 맞는 별 이미지도 있어야지 구현되기에 짧고 작지만 마음에 들었다.

## Code Review

{% raw %}

```jsx
//React
//parent component
...
<ReviewStarBar score={rating} />
...

//in ReviewStarBar
export class ReviewStarBar extends Component {
  render() {
    const { score } = this.props;
    const stars = (100 / 5) * score;

    return (
      <div className="ReviewStarBar">
        <div style={{ width: `${stars}%` }} className="reviewStar" />
      </div>
    );
  }
}
```

```scss
//Sass

.ReviewStarBar {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 25px;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 100%;
    height: 100%;
    background-image: url('assets/images/star.svg');
    opacity: 0.2;
  }

  .reviewStar {
    background-color: var(--color-black);
    height: 100%;
    position: relative;
    mask-image: url('assets/images/star.svg');
    mask-mode: alpha;
  }
}

```

{% endraw %}

## Output

![what is modules?]({{site.baseurl}}/img/2021-11-14-Like/reviewStars.png)

## Improvements

- 재활용성 증진
  - `font-size`에 영향을 받는게 만들면 좋을거 같다.
- 상호작용
  - 앞으로의 프로젝트에서 input기능에 쓰일 경우를 위해 사용자들을 즐길 수 있는 다양한 상호작용 기능을 추가하자.

## Resource

- Like / 라이키, 나이키 클론 프로젝트
  - [홈 페이지](http://wecode26likeproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - [시연 영상](https://drive.google.com/file/d/1QfJUuwgZz7eYWqR9iYJ71wAxjD2XTrBy/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend.git)
  - [Back-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-backend.git)
  - [백엔드 API 설계](https://www.notion.so/LIKE-34de3722ecbe46eabcd5669789a499b1)
  - [Trello](https://trello.com/b/b9cKMX5x/like-%ED%8C%80)