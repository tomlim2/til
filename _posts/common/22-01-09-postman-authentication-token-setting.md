---
layout: post-base
title: Postman access token setting
meta: 포스트맨 토큰 설정
category: Common
tags: [common, postman]
---

header, authentication 설정

## /auth/login, /auth/register에 포스트맨 데이터 전역화시키기

```text
const jsonData = pm.response.json()
pm.globals.set("accessToken", jsonData.token);
```

![hi](https://user-images.githubusercontent.com/22067260/148673081-6534c5e2-c1f9-4255-b3f9-4315c45f7c8e.png)

## Environment에서 전역화 된 토큰 값 확인하기

![hi](https://user-images.githubusercontent.com/22067260/148673083-01a41007-a892-42a0-acb5-20dfc767a070.png)

## Authentication이 필요한 API에 Authorization 설정하기

Authorization > Type > Bearer token

![hi](https://user-images.githubusercontent.com/22067260/148673085-fc9be730-c9a9-4f55-a17a-98ab4d3be584.png)
