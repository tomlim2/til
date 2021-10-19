---
layout: post-base
title: React / React에서 이미지 삽입하기
meta: React Native guide
category: ReactAndReactNative
---
```
...
<li className="nav-logo">
    <a href="index.html"><img src='/imgs/instagram.svg' alt="logo" /></a>
    <span id="logo">| westagram</span>
</li>
...
```
- `img` 태그 `src` 값으로 `/images/(파일이름)` 이렇게 지정해주시면 됩니다. 예시)`<img src=“/images/파일이름” />`
- `css`에서는 public 폴더에 접근하는게 불가능하므로 `background-image` 에 활용해야하는 이미지들은 `src/assets/images/` 디렉토리에서 관리해주세요