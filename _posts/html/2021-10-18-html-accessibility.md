---
layout: post-base
title: Accessibility(a11y) 
meta: Accessibility in HTML
source: https://www.a11yproject.com/
category: html
tags: [HTML, Accessibility]
---
웹사이트를 만들 때는 언제나 몇몇의 사람들은 다른 방법으로 이용한다는 것을 명심하자. 예를 들면 많은 사용자들은 시각적인 어려움을 가지고 있다. 웹 초창기에는 [Web Accessibility Initiative](https://en.wikipedia.org/wiki/Web_Accessibility_Initiative)(led by W3C)가 모든 사람들에게 정보 접근성을 증진시키기 위해 개발된 표준이다.
이 표준들은 "[ARIA](https://en.wikipedia.org/wiki/WAI-ARIA)(Accessible Rich Internet Applications)"라는 가이드 라인들에 정리되어 있다.

- Semantic Elements
- ARIA Roles
- ARIA Properties
- `alt` Attributes

## Semantic HTML Elements

[스크린 리더](https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%81%AC%EB%A6%B0_%EB%A6%AC%EB%8D%94)([Screen reader](https://en.wikipedia.org/wiki/Screen_reader))의 사용을 돕기 위한 가장 빠른 방법은 Semantic Tag를 사용하는 것이다. 예를 들어서 개발자들은 네비게이션 바를 반드시 `header` 안에 집어넣어야한다. 물론 div 요소에 header의 클라스를 넣어 쓸수는 있지만 native semantics(`<header></header>`) 스크린 리더기를 사용하는 사람에게 웹사이트를 좀더 효율적으로 네비게이트하고 이해하게 해준다.

모든 Semantic 요소들은 [여기](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)에서 확인이 가능하다.

## ARIA Role

웹 페이지의 정보를 추가하는 것을 도와주기 위해 ARIA는 `role`이 라는 속성을 제공한다. 이 role 요소는 스크린 리더가 요소들을 읽는 방식을 맥락을 추가하여 부드럽게 읽어준다.
맥락을 추가하는 만큼 많은 시간과 노력이 들지만 여력이 된다면 필수적으로 진행하자.

```html
<span class="aside" role="note">에이다 러브레이스는 작가가 이 웹페이지에서 가장 좋아하는 프로그래머이다!</span>
```

[note](https://www.w3.org/TR/html-aria/#index-aria-note)는 a, abbr, address, area, aside 등에 사용이 추천 되는 role이다. 주요소는 아니지만 맥락상 필요 컨텐츠라면 사용하자.

## ARIA Properties

ARIA properties는 우리가 실제로 HTML에서 사용 가능한 속성이다. 이 속성들은 스크린 리더 사용자들에게 요소들에 대한 추가적인 정보를 제공한다.

```html
<img src="#" alt="세나도아스 계곡 그림"/>
<p aria-label="Artist">아르멘드 카브레라, 2010</p>
```

ARIA properties 리스트는 [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)에서 확인이 가능하다.

## Alt Attribute

`img` 등 몇 HTML 요소들은 `alt`라고 불리우는 가지고 있다. `aria-label`과 비슷하지만 여러 기능들이 추가되어있다. 스크린 리더는 alt 속성의 값을 크게 읽는다. `<a>` 태그에 사용될 경우 링크가 어디로 연결되었는지 설명해야한다. 그리고 150자 이하로 작성 되어야 한다.

## 사용 예시

```html
<head>
    <title>A Brief History of Programming</title>
</head>

<body>

    <header>
        <h3>A BRIEF HISTORY OF</h3>
        <h1>PROGRAMMING</h1>
    </header>

    <nav>
        <ul role="presentation">
            <li><a href="#early">Early</a></li>
            <li><a href="#middle">Middle</a></li>
            <li><a href="#late">Late</a></li>
            <li><a href="#current">Current</a></li>
        </ul>
    </nav>

    <div id="early" class="container">
        <span class="aside" role="note">Ada Lovelace is the favorite programmer of the author of this web page!</span>

        <h2>Early</h2>
        <h4>Pre-1900</h4>
        <div class="p-container" role="presentation">
            <p>Below is an image of Ada Lovelace, born in 1815 (<em>Died: 1852</em>). She worked with Charles Babbage
                and
                is known as the first programmer.</p>
            <p>Below is an image of Charles Babbage, born in 1791 (<em>Died: 1871</em>). Babbage is considered the
                father
                of the computer.</p>
        </div>

        <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-lovelace.jpg" alt="Ada Lovelace" />
        <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-babbage.jpg" alt="Charles Babbage" />

        <div class="timeline" role="presentation">
            <div class="date-square" role="presentation">
                <p aria-label="Date of Lovelace photo">1840</p>
            </div>
            <div class="date-square" role="presentation">
                <p aria-label="Date of Babbage photo">1850</p>
            </div>
        </div>
    </div>

    <footer>
        <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-logo2.png" id="logo" />
        <ul role="presentation">
            <li>The Programming Historical Society</li>
            <li>about@programminghs.org</li>
        </ul>
    </footer>
</body>
```

## 스크린 리더

- (OS X) VoiceOver
- (Windows) NVDA
- (Google Chrome) ChromeVox

## Conclusion

Refactoring할 때 조금씩 해내보자. 색 사용할 때도 이 점을 유의하자. 적어도 내가 만드는 것들은 최대한 다양한 사람들이 이용할 수 있게 디자인하자(August).

- 웹사이트 기본 글씨 크기는 16px이다.
- `role = "main"`는 웹사이트에서 한 번만 쓸 수 있다.

## Resource

- [Code Acamedy](www.codecademy.com)
- [MDN Sementic HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [ARIA properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive)
