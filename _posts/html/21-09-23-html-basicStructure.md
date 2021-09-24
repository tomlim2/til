---
layout: post-base
title: HTML - Semantic HTML&CSS **웹 구축시 항상 필독하기
meta: Basic Structure example
category: htmlAndCss
---
HTML&CSS 구축시 코드의 가독성을 높이기 위한 노력을 아끼지 말고 항상 읽고 시작하자

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

## Conclusion
* 가장 기본적인 웹페이지는 `<header>`, `<nav>` , `<main>` 그리고 `<footer>`로 사용하자.
* `<section>`은 같은 테마에 다른 부분, 챕터, 머릿글 등을 쓸 때 사용한다.
* `<aside>`는 메인 컨텐츠에 관련은 있으나 그 컨텐츠를 이해하는데 필수가 아닌 정보를 보여줄때 쓴다.