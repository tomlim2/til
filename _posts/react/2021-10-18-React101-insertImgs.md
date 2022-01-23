---
layout: post-base
title: 이미지 삽입하기
meta: 리엑트에서 이미지 삽입하는 방법
category: react
tags: [React]
---
```jsx
...
<li className="nav-logo">
    <a href="index.html"><img src='/imgs/instagram.svg' alt="logo" /></a>
    <span id="logo">| westagram</span>
</li>
...
```

- `img` 태그 `src` 값으로 `/images/(파일이름)`. 예시)`<img src=“/images/파일이름” />`

```jsx
.feedImage {
  background-image: url('../../assets/images/feedImage.jpg');
}
```

- `css`에서는 public 폴더에 접근하는게 불가능하므로 `background-image` 에 활용해야하는 이미지들은 `src/assets/images/` 디렉토리에서 관리
