---
layout: post-base
title: prevState
meta: 내부함수를 이용해 이전 상태를 가져오기
category: react
tags: [react, javascript]
---

```jsx
...
const [userInput, setUserInput] = useState({
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
});

const titleChangeHandler = (event) => {
  setUserInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
  });
};
...
```

이 패턴은 항상 외워서 사용하자.

이전에는 `...prevState` 자리에 `...userInput`을 사용했다. 하지만 그렇게 사용한다면 이전의 형태는 snapshot의존도가 높아 많은 상태를 업데이트해야 할때 snapshot의 형태가 온존하다는 보장이 없다. 따라서 이전 상태에 따라 상태가 업데이트 되어야 한다면 안전하게 내부 함수를 이용해 이전 상태를 가져오는 이 함수 형태를 사용하는 것이 좋다.

