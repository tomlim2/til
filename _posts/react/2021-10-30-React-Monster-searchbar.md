---
layout: post-base
title: Monster / Code Review - Search Bar
meta: 검색창 구현 코드 리뷰
category: React
tags: [React, Project]
---
```jsx
state = {
  monsters: [],
  userInput: "",
};

getMonstersData = () => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ monsters: data });
    });
};

handleChange = (input) => {
  const userInput = input.target.value;
  this.setState({
    userInput,
  });
  userInput !== "" ? this.searchCard(userInput) : this.getMonstersData();
};

searchCard = (userInput) => {
  this.setState({
    monsters: [
      ...this.state.monsters.filter((search) =>
        search.name.trim().toLowerCase().includes(userInput.toLowerCase())
      ),
    ],
  });
};
```

```jsx
<div className="Monsters">
  <h1>컴포넌트 재사용 연습!</h1>
  <SearchBox handleChange={this.handleChange} />
  <CardList monsters={this.state.monsters} />
</div>
```

## Conclusion

위의 코드는 검색창에 오타 행위에 대한 검색 결과를 실시간으로 반영하고 있지 않다. 모든 검색창의 입력된 글을 완전히 삭제해야 데이터를 `Fetch`하여 `state`에 업데이트하여 초기화시키는 사이클이다.

다음에 라이브 검색 기능을 구현할 때는 부모 컴포넌트를 검색창에 한번 더 감싸고 부모 컴포넌트에서 원본 데이터를 저장하고 그 원본 데이터를 글 입력, 삭제할때마다 실시간으로 업데이트해보는 방법으로 접근해보자.

## Resource

- [Wecode](www.wecode.co.kr)
