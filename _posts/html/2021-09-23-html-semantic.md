---
layout: post-base
title: HTML&CSS / Improving Semantic **
meta: 웹사이트 개발 시작전 상기해야할 요소들
category: htmlAndCss
tags: [HTML, CSS, Evergreen]
---
밑의 자료들은 semantic HTML&CSS에 대한 일반적인 구현형식과 태그들을 간략하게 정리하였다. 5분 안에 읽을 수 있도록 더 간결하고 깊게 쓰도록 항상 갱신하자.

![General semantic html]({{site.baseurl}}/img/2021-10-29-semanticHTML.png)

***출처 - [Interneting Is Hard](https://www.internetingishard.com/html-and-css/semantic-html/)***

## General

Semantic HTML&CSS은 검색엔진, 개발자, 스크린 리더 등의 코드의 가독성을 높이기 위해 고안된 개념이다. 이를 바탕으로 여러 태그들과 프로그래밍 방식들이 존재한다.

HTML에 이미지를 넣는다고 한다면, `<img>` 태그에 그림들을 넣는 것이 검색 엔진에 노출되기 쉽다. 검색엔진이 `<img>` 태그에서 그림을 찾는것이 `<div>`의 css에서 연결된 그림을 찾는 것보다 더 효율적이기 때문이다. 다른 협업하는 개발자들에게도 쉽게 `<img>`를 찾아 그림들을 유지보수할 수 있다. 또한 스크린 리더는 그림을 쉽게 찾고 `alt` 속성으로 상세한 설명을 읽어낼 수 있다.

## HTML 예시

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <header>
      <h1>Navigational Links</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#posts">Posts</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section>
        <article>
          <h2>Facts About Dogs</h2>
          <p>Dogs have a sense of time...</p>
        </article>
        <aside>
          <p>A study was conducted on dogs...</p> 
        </aside>
      </section> 
      <figure>
        <img src="dogimage.jpeg"/>
        <figcaption>A cute dog.</figcaption>
      </figure>  
      <audio controls>
        <source src="dogBarking.mp3" type="audio/mp3">
      </audio> 
      <video src="dog-video.mp4" controls>
      </video>
      <embed src="dog-on-beach.gif"/>
    </main>
    
    <footer>
      <p>Contact me at +1 234 567 8910 </p>
    </footer>
              
  </body>
</html>
```

## 태그 정리

* 가장 기본적인 웹페이지는 `<header>`, `<nav>` , `<main>` 그리고 `<footer>`로 사용하자.
* `<section>`은 같은 테마에 다른 부분, 챕터, 머릿글 등을 쓸 때 사용한다.
* `<aside>`는 메인 컨텐츠에 관련은 있으나 그 컨텐츠를 이해하는데 필수가 아닌 정보를 보여줄때 쓴다.

## CSS 예시

```css
/* Site Stylesheet
  1. Global Styles
  2. Typography Styles
  3. Structure Styles
  4. Module Styles
  5. Component Styles
======================================== */

/* 1. Global Styles
======================================== */
*,
html,
body {}
@media only screen and (min-width: 320px) and (max-width: 480px), (orientation: portrait) {
}
/* 2. Typography Styles
======================================== */
h1,
h2,
{
  font-family: 'Roboto', Helvetica, sans-serif;
}
h1 {}
@media(min-width: 720px) {
  h1 {}
}
@media(min-width: 1024px) {
  h1 {}
}

/* 2. Typography Styles
======================================== */
h1,
h2,
{
  font-family: 'Roboto', Helvetica, sans-serif;
}

/* 3. Structure Styles
======================================== */
.container {}
@media(min-width: 720px) {}

/* 4. Modules Styles
======================================== */
.site-header {}
.site-nav-left li:not(:last-child), .site-nav-right li:not(:last-child), .site-nav-mobile li:not(:last-child) {}
.site-nav-link.active {}
/* 5. Component Styles
======================================== */
.alert{}

/* 6. Page Styles
======================================== */
.site-main {}
```

## CSS - Cascade order for pseudo-classes

```css
:hover, :visited, :active, :link
```

## CSS - Useful selector for Navigation

```css
.breadcrumb li.location+li.location::before {
  color: gray;
  content: ">";
}

.breadcrumb li.attribute::after {
  content: " x";
  font-size: 10px;
  vertical-align: super;
}
```

## [UI pattern](http://ui-patterns.com/)

## Styling inspiration

* Salesforce’s [Lightning Design System](https://www.lightningdesignsystem.com/utilities/text/)
* Google’s [Material Design](https://material.io/design/)
* Twitter's [Bootstrap](https://getbootstrap.com/docs/4.0/components/buttons/)

## Resource

* [Semantic HTML](https://www.internetingishard.com/html-and-css/semantic-html/)
* [Semantic CSS](https://css-tricks.com/semantic-class-names/)

---