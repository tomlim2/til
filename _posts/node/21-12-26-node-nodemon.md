---
layout: post-base
title: Command for setting; nodemon
meta: 설정하기 위한 가이드
category: node
tags: [NodeJs]
---

## nodemon

```text
npm run nodemon app.js
```

코드가 바뀔때마다 자동적으로 서버를 다시 시작하게 해주는 명령어이다.

실제 프로덕션에는 필요하지 않지만 개발할 때 필요하다.

```text
npm i nodemon -D
```

## package 설정

```text
//package.json

...
script {
  start: "node app.js",
  dev: "nodemon app.js"
}
...
```

이렇게 설정하면 아래와 같은 명령어로 노드를 실행할 수 있다.

```text
npm start
npm run dev
```

## Resource

- [NodeJs youtube freeCodeComp.org](https://www.youtube.com/watch?v=Oe421EPjeBE)
