---
layout: post-base
title: My first server
meta: 처음으로 만들어 본 서버
category: node
tags: [NodeJs]
---

```js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We cannot seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
```

and go to `local:5000` in browser.

## Resource

- [NodeJs youtube freeCodeComp.org](https://www.youtube.com/watch?v=Oe421EPjeBE)
