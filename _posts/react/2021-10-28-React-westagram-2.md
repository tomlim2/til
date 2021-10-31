---
layout: post-base
title: Westagram / Code Review 2 - Refactoring Checklist
meta: 웨스타그램 프로젝트 리펙토링
category: React
source: https://github.com/wecode-bootcamp-korea/26-React-Westagram-3/pull/1
tags: [React, Project]
---

## 1. className의 동적 사용

```jsx
<button
  className={`button Login ${isFormValid ? 'activated' : ''}`}
  disabled={!isFormValid}
  type="submit"
  onClick={this.submitForm}
>
  로그인
</button>
```

```css
.activated {
  color: #0095f6;
}
```

## 2. Destructuring

```jsx
  addComment = (feedId, comment) => {
    const { comments } = this.state;
    const newComment = {
      id: Math.floor(Math.random() * 2000),
      feedId: feedId,
      userName: 'mincraft_bangbang',
      content: comment,
      isLiked: false,
    };
    this.setState({ comments: [...comments, newComment] });
  };
```

```jsx
render() {
    const { comments, feeds } = this.state;
    return (
      <main className="main-page-ysLim">
        <article>
          {feeds.map(feed => (
            <Feed
              key={feed.id}
              id={feed.id}
              comments={comments}
              addComment={this.addComment}
            />
          ))}
        </article>
        ...
      </main>
    );
  }
```

## 3. Boolean 데이터 타입의 활용

```jsx
const { userID, userPassword } = this.state;
const isIdValid = userID.includes('@');
const isPwValid = userPassword.length > 4;
const isFormValid = isIdValid && isPwValid;

...
<button
  className={`button Login ${isFormValid ? 'activate' : ''}`}
  disabled={!isFormValid}
  type="submit"
  onClick={this.submitForm}
>
  로그인
</button>
...            
```

```scss
.button {
    background: rgb(156, 156, 255);
    &.activate {
      background: blue;
    }
  }
```

### 4. .map()

```jsx
// footerData.js
// named export (vs. default export)
export const INFO = [
  {id: 1, content: "도움말"},
  {id: 2, content: "홍보 센터"},
  {id: 3, content: "API"},
  {id: 4, content: "채용정보"},
  {id: 5, content: "개인정보처리방침"},
  {id: 6, content: "약관"},
  {id: 7, content: "위치"},
  {id: 8, content: "인기 계정"},
]


// Footer.js (Footer 컴포넌트)
import { INFO } from './footerData.js'

INFO.map(el => {
  return (
    <li key={el.id}>
      <a href="">{el.content}</a>
    </li>
  )
})
```

## 5. [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)

```jsx
this.state = {
  userID: '',
  userPassword: '',
};
...
handleInput = e => {
  const { value, name } = e.target;
  this.setState({
    [name]: value,
  });
};
...
<input
  name="userID"
  type="text"
  onChange={this.handleInput}
  placeholder="이메일"
/>
<input
  name="userPassword"
  type="password"
  onChange={this.handleInput}
  placeholder="비밀번호"
/>
...
```

## Resource

- [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)

---
