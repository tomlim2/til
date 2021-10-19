---
layout: post-base
title: CSS / Attribute selector - [href]{}
meta: Table example
source: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#syntax
category: htmlAndCss
---
하나하나 디테일한 수정이 필요할때 사용하면 좋다. 

```css
img[src*='winter'] {
  height: 50px;
}

a[href*='florence'] {
  color: lightgreen;
}
```