---
layout: post-base
title: React / Firebase 1 basic setting
meta: 파이어 베이스 시작하기
source: https://firebase.google.com/docs
category: firebase
tags: [react, firebase]
---

## Console setting

1. [파이어 베이스 공홈](https://firebase.google.com/)으로 가서 오른쪽 위에 go to console로 가기
2. Add project로 새로운 프로젝트를 생성

## React setting

```text
// .env.local

REACT_APP_RECAPTCHA_SITEKEY=6Lfy...
REACT_APP_FIREBASE_API_KEY=AIza...REACT_APP_FIREBASE_AUTH_DOMAIN=auth-dev...REACT_APP_FIREBASE_PROJECT_ID=auth-dev...
REACT_APP_FIREBASE_STORAGE_BUCKET=auth-dev...REACT_APP_FIREBASE_MESSAGING_SENDER_ID=76...
REACT_APP_FIREBASE_MESSAGING_APP_ID=1:7635...
```

```js
// src/firebase-config.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
});

export const auth = getAuth(app);
export default app;
```

## Conclusion

이메일, 구글, 페이스북, 트위터 등의 로그인 인증인가 서비스를 제공하는 콘솔. 이메일 인증, 핸드폰 인증 등 다국적 목적으로 사용하기에 최적화 되어 있는 서비스이다.

다양한 매체를 이용하여 구현했지만 대부분의 답은 공식문서에 있다는 걸 뼈저리게 느꼈다.

## Resource

- [Firebase doc](https://firebase.google.com/docs)