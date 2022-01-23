---
layout: post-base
title: Get authentication with middleware
meta: express 미들웨어를 통한 인증인가
category: nodejs
source: https://job-api-06ys.herokuapp.com/
tags: [NodeJs, Express, mongoose, MongoDB]
---

복잡했다. 최대한 정리해 본다.

목적은 Job API를 사이트에 로그인 한 사용자들만이 사용할 수 있도록 만들기이다.

## 유저 스키마에 다음과 같은 매서드들을 추가한다

- bcrypt를 활용하여 데이터 베이스에 입력되는 패스워드들에 salt를 추가하여 hashed시키기는 [`.pre`](https://mongoosejs.com/docs/middleware.html#pre)
- 유저정보 토큰화를 위한 `.createJWT()`
- 로그인에 사용할 비밀번호 비교를 위한 `.comparePassword(candidatePassword)`

## controllers/auth.js

`register`와 `login` controllers로 이루어져 있다.

- `register`는 단순히 추가된 유저정보를 데이터 베이스에 저장하고 토큰생성하여 res에 넘긴다.
- `login`은 세 가지 단계가 있다.
  - `req`의 이메일 정보가 데이터베이스에 존재하는 이메일과 일치한가 체크
  - `req`의 비밀번호가 유저 스키마의 `.comparePassword(candidatePassword)`로 데이터베이스에 존재하는 비밀번호와 일치한가 체크
  - 위의 두 확인이 끝나면 유저 스키마의 `.createJWT()`로 토큰 발급

## middleware/authentication.js

이 미들웨어는 `app.js`에 `app.use('/api/v1/jobs', authenticateUser, jobsRouter)`에서 사용된다. `/api/v1/jobs`를 사용하기 위해서는 authenticateUser를 먼저 실행하고 jobsRouter에 접근한다.

`authenticateUser`에서는 로그인한 사용자의 토큰으로부터 사용자 정보를 받아 `req.user`에 그 정보를 저장하고 `jobs controller`에는 해당 `req.user`에서 `userId`을 가져와서 그 사용자가 자신의 직업 지원 리스트들을 가져오고, 만들고, 삭제하고, 업데이트하는 기능을 제공한다.

## conclusion

redux하면서도 심심치 않게 등장한 개념이 미들웨어였다. 개념을 알고 있어도 정확히 어떤때에 써야했는지 의문을 가지고 있었는데 이 로직을 구현하면서 조금더 이해할 수 있게 되었다.
