---
layout: post-base
title: css module / dynamic style
meta: css 모듈을 이용한 동적 스타일 구현
category: react
tags: [React, Javascript, Styled-component]
---

{%raw%}

```text
// react
// src/components/CourseGoals/CourseInput/CourseInput.js

...
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
...

```

{%endraw%}

```css
/* src/components/CourseGoals/CourseInput/CourseInput.module.css */

.form-control {
  width: 100%;
  margin: 0.5rem 0;
}

.form-control label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.form-control input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

.form-control input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

@media (min-width: 768px) {
  .form-control {
    width: auto;
  }
}
```

## Conclusion

신기한 패턴이다. Stateless Component일 때는 위의 컴포넌트를 활용하자.
