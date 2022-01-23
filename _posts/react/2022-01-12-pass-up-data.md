---
layout: post-base
title: Pass up data
meta: 상향식 자식 대 부모 컴포넌트 통신 예시
category: react
tags: [react, javascript]
---

```jsx
//App.js
const addExpenseHandler = (expense) => {
  console.log(expense);
};
...
<NewExpense onAddExpense={addExpenseHandler}></NewExpense>

//components/Expenses/NewExpense.js
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(),
  };
  props.onAddExpense(expenseData);
};
...
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

//components/Expenses/ExpenseForm.js
const titleChangeHandler = (event) => {
  setUserInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
  });
};

...

const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title: userInput.enteredTitle,
    amount: userInput.enteredAmount,
    date: new Date(userInput.enteredDate),
  };

  props.onSaveExpenseData(expenseData)

  ...

};

...

<form onSubmit={submitHandler}>
  <div>
    <label>Title</label>
    <input
      type="text"
      onChange={titleChangeHandler}
      value={userInput.enteredTitle}
    />
  </div>
  ...
  <button type="submit">Add Expense</button>
</form>

...
```

자식에게서 받은 정보를 부모로 올리는 방식
