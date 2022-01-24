---
layout: post-base
title: Styled-component / dynamic props
meta: 스타일드 컴포넌트를 이용한 동적인 사용
category: react
tags: [React, Javascript, Styled-component]
---

```jsx
// src/components/CourseGoals/CourseInput/CourseInput.js

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparant")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
```

```jsx

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
...
<Button type="submit">Add Goal</Button>
...
}

```

## Conclusion

신기한 패턴이다. Stateless Component일 때는 위의 컴포넌트를 활용하자.
