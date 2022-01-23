---
layout: post-base
title: select과 option 태그
meta: select과 option 사용예시!
category: react
tags: [react, javascript]
---

```jsx
const [userInput, setUserInput] = useState(2020);
const dropdownChangeHandler = (event) => {
  setUserInput(event.target.value);
};

<div>
  <label>Filter by year</label>
  <select value={userInput} onChange={dropdownChangeHandler}>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
  </select>
</div>;
```

양방향 바인딩(Two-ways binding)을 위와 같이 하면 select와 option을 같이 사용할 수 있다.
