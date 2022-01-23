---
layout: post-base
title: script 태그 위치
meta: test
category: html
tags: [HTML]
---
`<script>` 태그는 javascript의 목적성에 따라 `<head>` 혹은 `<body>` 태그 안쪽에 위치한다.

## `<head>` 안에서의 `<script>` 태그

Google Analytics, Jquery 등 특정 라이브러리를 사용할 때, 또한 사이트 **전반에 걸친** Javascript 활용이 있는 필요한 경우. (상호작용, 사용자 방문확인 등등)

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="hi.js"></script>
  </head>
  <body>
    Hello world!
  </body>
</html>
```

## `<body>` 태그 안에서의 `<script>` 태그

html 안 **부분적으로** 태그 내에서의 `<script>`의 사용이 필요하다면 `<body>` 태그 안에다 사용한다. (트리거를 통한 사용자와의 상호작용)

```html
<!DOCTYPE html>
<html>
  <body>

    <h2>자바스크립트로 텍스트 쓰기</h2>
    <p>
      이 예시는 "하이-ㅅ-"를 id="demo"안에 출력해요</p>

    <p id="demo"></p>

    <script>
      document.getElementById("demo").innerHTML = "하이-ㅅ-";
    </script> 

  </body>
</html>
```

[w3 schools - HTML JavaScript 1](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_script)

```html
<!DOCTYPE html>
<html>
  <body>

    <h1>내 자바스크립트</h1>

    <p>자바스크립트로 HTML의 명령어들을 바꿀 수 있어요.</p>

    <button type="button" onclick="myFunction()">클릭!</button>

    <p id="demo">이 부분이 바뀔꺼예요</p>

    <script>
      function myFunction() { 
        document.getElementById("demo").innerHTML = "하이-ㅅ-";
      }
    </script>

  </body>
</html>
```

[w3 schools - HTML JavaScript 2](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_script_html)

***

## HTML에서 효율적으로 `<head>` 태그에 있는 `<script>`를 불러오는 방법들 ***by [Nehal Khan](https://betterprogramming.pub/improve-page-load-performance-with-these-different-script-loading-techniques-b0d912eae7b1)***

`<head>` 태그에 사용되는 것은 개발자들이 일반적으로 위치이다. 웹사이트를 사용자들에게 가장 완벽한 형태로 경험하게 할 수 있게 만드는 장점이 있는지만 인터넷 환경이 좋지 않은 곳에서는 코드를 읽는 데에 지연될 수 있다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello world!</title> 
    <script src="hi.js"></script>
  </head>
  <body>
    <!-- something here -->
  </body>
</html>
```

![d]({{site.baseurl}}/img/21-09-11-html-1.png)

`<head>` 안에 코드를 사용시 위의 그림에서 보는 것과 같이 html parsing(컨텐츠를 읽는 흐름) 중간에 끊고 자바스크립트들은 읽고 실행한 후에 그 기반으로 html parsing을 다시 시작한다. 만일 javascript의 용량이 크고 실행하는 데에 시간이 걸린다면 사용자들은 상당한 시간 동안은 아무런 이 웹사이트부터 아무런 피드백을 받지 못한다.

### 1. Place the `<script>` Tag at the Bottom of the Page

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello world!</title> 
  </head>
  <body>
    <!-- something here -->
    <script src="hi.js"></script>
  </body>
</html>
```

![d]({{site.baseurl}}/img/21-09-11-html-2.png)

위의 방법은 `<head>`에 쓸 `<script>`를 `<body>` 끝에 위치시킨다. 이는 html의 컨텐츠들을 먼저 읽고 자바스크립트를 맨끝에 놓는 방법이다. html parsing의 흐름상 가장 효율적인 방법이지만 인터넷 상황이 안좋거나 자바스크립트의 용량이 크거나 실행하는데 시간이 걸린다면 자바스크립트가 없는 상태의 html 베이스의 정보만을 준다. 자바스크립트가 메인이 되는 웹사이트라면 이 방법은 회피하는게 좋다.

### 2. Add `async` Attribute Within the script Tag

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello world!</title> 
    <script async src="hi.js"></script>
  </head>
  <body>
    <!-- something here -->
  </body>
</html>
```

![d]({{site.baseurl}}/img/21-09-11-html-3.png)

`<head>`에 위치시키는 대신에 `<script>`에 `aysnc` 속성(attribute)을 붙인다. 이 속성은 html parsing이 진행되는 동안 자바스크립트가 불러온다. 이후 해당 자바스크립트가 필요한 위치에서 실행만 시키기 때문에 웹사이트 로딩 속도를 확실히 줄일 수 있다. 하지만 실행이 실패 혹은 지연되면 일반적인 사용법과 같이 장시간 피드백이 없는 화면만을 받게 된다.

### 3. Add `defer` Attribute Within the script Tag

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello world!</title> 
    <script defer src="hi.js"></script>
  </head>
  <body>
    <!-- something here -->
  </body>
</html>
```

![d]({{site.baseurl}}/img/21-09-11-html-4.png)
`<defer>` 속성은 자바스크립트의 읽기를 html parsing와 동시에 진행되고 실행은 html parsing이 완료된 후에 실행시킨다.

### Conclusion

1. `<script>`의 위치는 크게 `<head>`와 `<body>`에서 사용되고 케이스에 맞춰서 사용하면된다.
1. `<head>`의 `<script>`를 `<body>` 끝에 위치시키면 html parsing 후에 자바스크립트의 download와 excute가 일어난다.
1. `async` 속성을 사용하면 html parsing과 자바스크립트의 download가 동시에 진행되고 자바스크립트의 excute가 실행되면 나머지 html parsing을 완료한다.
1. `defer` 속성을 사용하면 html parsing과 자바스크립트의 download가 동시에 진행되고 html parsing이 완료된 이후 자바스크립트의 excute가 완료된다.

-

![d]({{site.baseurl}}/img/21-09-11-html-5.png)

프로젝트 마지막에 한번 신경써서 사용해보자.

## Resource

- 자바스크립트 코드들은 [w3 schools - HTML script Tag](https://www.w3schools.com/tags/tag_script.asp)에서 참조했다.

- 효율적인 script 태그에 관한 글과 사진은 [Nehal Khan의 블로그](https://betterprogramming.pub/improve-page-load-performance-with-these-different-script-loading-techniques-b0d912eae7b1)에서 가져왔다.
