---
layout: post-base
title: Like / Product size selector
meta: 수량 선택 기능 구현 중
category: react
tags: [React, Project]
source: https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend
---

상세페이지에 사이즈를 선택하는 기능 구현할때 사용한 코드이다. 구현할 때 포인트는 어떻게 수많은 사이즈들 중 하나를 선택하면 해당 사이즈가 활성화되고 이전에 선택되었던 다른 사이즈가 리셋되게 하느냐였다.

## Code Review

```jsx
export class SizeOption extends Component {
  pushSizeAndQuantity = () => {
    const { setMaxQuantity, selectSize, maxQuantity, sizeName } = this.props;
    const available = maxQuantity !== 0;

    if (available) {
      setMaxQuantity(maxQuantity);
      selectSize(sizeName);
    }
  };

  render() {
    const { maxQuantity, sizeName, selectedSize } = this.props;
    const selected = selectedSize === sizeName;
    const available = maxQuantity !== 0;
    
    return (
      <span
        onClick={this.pushSizeAndQuantity}
        className={`SizeOption ${selected && 'selected'} ${
          available && 'activate'
        }`}
      >
        {sizeName}
      </span>
    );
  }
}
```

## Outputs

![size, quantity selector]({{site.baseurl}}/img/2021-11-14-Like/sizeNQuantitySelector.gif)

## [React](https://reactjs.org/) is declarative

버튼이 다른 버튼을 끌 필요가 없고 그냥 그 버튼만 키게 만들면 된다.

## Resource

- [React](https://reactjs.org/)
- Like / 라이키, 나이키 클론 프로젝트
  - [홈 페이지](http://wecode26likeproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - [시연 영상](https://drive.google.com/file/d/1QfJUuwgZz7eYWqR9iYJ71wAxjD2XTrBy/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend.git)
  - [Back-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-backend.git)
  - [백엔드 API 설계](https://www.notion.so/LIKE-34de3722ecbe46eabcd5669789a499b1)
  - [Trello](https://trello.com/b/b9cKMX5x/like-%ED%8C%80)