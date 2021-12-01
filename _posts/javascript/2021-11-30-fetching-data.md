---
layout: post-base
title: Using Fetch
meta: Learn how to use the Fetch API
category: Javascript
tags: [Javascript]
source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
---

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Resource

- [Cooperative asynchronous JavaScript: Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Third-Party APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Code Academy](codecademy.com)
