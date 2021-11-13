---
layout: post-base
title: Like / Retrospect 2 - Select product size and quantity
meta: 라이키 코드리뷰 - 사이즈와 수량 선택 UI 기능 구현
category: projects
tags: [React, Project]
source: https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend
---

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

## Resource

- [Wecode](www.wecode.co.kr)
