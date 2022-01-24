---
layout: post-base
title: Styled-component / intro
meta: 스타일드 컴포넌트로만 컴포넌트 만들기
category: react
tags: [React, Javascript, Styled-component]
---

```jsx
// src/components/UI/Button/Button.js

import styled from "styled-component";

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
```

```jsx
// src/components/CourseGoals/CourseInput/CourseInput.js

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
...
<Button type="submit">Add Goal</Button>
...
}

```

## Conclusion

신기한 패턴이다. Stateless Component일 때는 위의 컴포넌트를 활용하자.
