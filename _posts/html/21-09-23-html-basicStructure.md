---
layout: post-base
title: HTML&CSS - Improving semantic HTML&CSS **
meta: Basic Structure example
category: htmlAndCss
---
HTML&CSS 구축시 코드의 가독성을 높이기 위해 tag들과 일반적인 웹에 대한 기본 틀들을 개발되어졌다. 예를 들면 `background-image`를 이용한 이미지 삽입의 html syntax는 `<section class='hero-image'>히어로 이미지 입니다.</section>`이 될것이다. 이는 다른 `section`들과 함께 스크린 하나를 차지하는 덩어리로 인식된다. 이미지 삽입 태그인 img의 context는 `와~~ <img alt='화창한 날' src='sunny.png'> 오늘 같은 화창한날엔 라면!`일 것이다. `section`이나 `div`를 이용한 이미지 삽입보다 더욱 글 속의 삽입된 이미지라는 인식을 가지게 된다. 이처럼 semantic HTML&CSS 지향적인 코드 작성은 다른 개발자들과의 원할한 협업을 위해 그리고 후의 유지보수에도 커다란 이점을 가지게 된다.

밑의 자료들은 semantic HTML&CSS에 대한 구현방법론과 태그들을 간략하게 정리하였다. 웹 구축이 필요할시 항상 읽고 시작하자

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
## UI pattern
http://ui-patterns.com/

## Styling inspiration
* Salesforce’s [Lightning Design System](https://www.lightningdesignsystem.com/utilities/text/)
* Google’s [Material Design](https://material.io/design/)
* Twitter's [Bootstrap](https://getbootstrap.com/docs/4.0/components/buttons/)

## Conclusion
* 가장 기본적인 웹페이지는 `<header>`, `<nav>` , `<main>` 그리고 `<footer>`로 사용하자.
* `<section>`은 같은 테마에 다른 부분, 챕터, 머릿글 등을 쓸 때 사용한다.
* `<aside>`는 메인 컨텐츠에 관련은 있으나 그 컨텐츠를 이해하는데 필수가 아닌 정보를 보여줄때 쓴다.