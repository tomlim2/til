---
layout: post-base
title: setTimeout when use  onBlur and onClick to make close button
meta: 닫기 버튼 만들기 위한 소소한 발견
category: React
tags: [react]
---
```jsx
...
<input
    onFocus={activateSearch}
    onBlur={() => setTimeout(deactivateSearch, 100)}
    ref={inputRef}
    onChange={handleUserInput}
    className="user-input"
    type="text"
    placeholder="Search Artist or Collections"
    value={userInput}
/>
...
<button
    onClick={!isSearch ? toggleSearch : null}
    className="close"
>
...
```
