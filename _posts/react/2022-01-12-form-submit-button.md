---
layout: post-base
title: form과 submit type의 button
meta: form과 버튼 사용예시!
category: react
tags: [react, javascript]
---

```jsx
const submitHandler = (event) => {
  event.preventDefault();
  ...
};

<form onSubmit={submitHandler}>
  <div className="new-expense__control">
    <label>Title</label>
    <input
      type="text"
      onChange={titleChangeHandler}
      value={userInput.enteredTitle}
    />
  </div>
  ...
  <button type="submit">Add Expense</button>
</form>;
```
