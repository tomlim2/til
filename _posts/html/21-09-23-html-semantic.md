---
layout: post-base
title: HTML&CSS / Improving semantic HTML&CSS **
meta: Basic Structure example
category: htmlAndCss
---
밑의 자료들은 semantic HTML&CSS에 대한 일반적인 구현형식과 태그들을 간략하게 정리하였다. 웹 구축이 필요할시 항상 읽고 시작하자.

## General
Semantic HTML&CSS 구축시 컴퓨터, 개발자, 구글 등 검색엔진의 코드의 가독성을 높이기 위해 고안된 프로그래밍 방식이다. 이를 구현하기 위해 일반적인 웹에 대한 권장 틀들과 다양한 태그들이 있다.

HTML에 이미지를 넣는다고 한다면,

검색 엔진 관점에서는 구글, 네이버가 검색된 블로그 혹은 웹사이트의 이미지를 검색결과로 내놓는다고 한다면 html의 구성하는 div에 섞인 이미지보다는 img 태그에 있는 이미지를 읽어 유저들에게 보여주는 것이 좀 더 효율적이다. 한 웹사이트에는 수천 개의 div를 사용할 수도 있다. 검색엔진 입장에서는 그 수천개의 div를 읽고 이미지를 찾아오는 것은 서버에 과부하를 가져올 것이다.

협업 관점에서는 `background-image`를 이용한 이미지 삽입의 html syntax는 `<section class='hero-image'>히어로 이미지 입니다.</section>`이 될것이다. 이는 다른 `section`들과 함께 스크린 하나를 차지하는 덩어리로 인식된다. 이미지 삽입 태그인 img의 context는 `와~~ <img alt='화창한 날' src='sunny.png'> 오늘 같은 화창한날엔 라면!`일 것이다. `section`이나 `div`를 이용한 이미지 삽입보다 더욱 글 속의 삽입된 이미지라는 인식을 가지게 된다. 이처럼 semantic HTML&CSS 지향적인 코드 작성은 다른 개발자들과의 원할한 협업을 위해 그리고 후의 유지보수에도 커다란 이점을 가지게 된다.



## Resource
* Semantic [HTML](https://www.internetingishard.com/html-and-css/semantic-html/)&[CSS](https://css-tricks.com/semantic-class-names/)


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