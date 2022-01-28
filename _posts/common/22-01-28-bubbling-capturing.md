---
layout: post-base
title: Bubbling and Capturing
meta: 포스트맨 토큰 설정
category: common
tags: [common]
---

아래 핸들러는 `<div>`에 할당되어 있지만, `<em>` 이나 `<code>`같은 중첩 태그를 클릭해도 동작합니다.

```html
<div onclick="alert('div에 할당한 핸들러!')">
  <em
    ><code>EM</code>을 클릭했는데도 <code>DIV</code>에 할당한 핸들러가
    동작합니다.</em
  >
</div>
```

## 버블링

한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작합니다. 가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작합니다.

```text
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

이런 동작 방식 때문에 `<p>` 요소를 클릭하면 `p` → `div` → `form` 순서로 3개의 얼럿 창이 뜨는것이죠.

이런 흐름을 '이벤트 버블링’이라고 부릅니다. 이벤트가 제일 깊은 곳에 있는 요소에서 시작해 부모 요소를 거슬러 올라가며 발생하는 모양이 마치 물속 거품(bubble)과 닮았기 때문입니다.

> 거의 모든 이벤트는 버블링 됩니다.
>
> 키워드는 ‘거의’ 입니다.
>
> focus 이벤트와 같이 버블링 되지 않는 이벤트도 있습니다. 몇몇 이벤트를 제외하곤 대부분의 이벤트는 버블링 됩니다.
