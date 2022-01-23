---
layout: post-base
title: Method to build basic structure for API
meta: express를 통한 기본적인 API 만들기 플로우
category: nodejs
source: https://job-api-06ys.herokuapp.com/
tags: [NodeJs, Express, mongoose, MongoDB]
---

파일 업로드 프로젝트 예시로 API의 기본적인 구조를 짜는 방식을 적어 놓을려고 한다. 이번이 일곱 번째로 만드는 API인 만큼 이제 패턴이 보이기 시작했다. 데이터 베이스에서 실제로 넘어온 데이터를 다루는건 모델 쪽이고 기본적으로 데이터베이스의 `CRUD`를 다루는 `Schema`를 설정한다. 만들어진 스키마들은 라우터를 통해 사용자와 상호작용하는 컨트롤러들에 의해 용도별로 나눠지게 된다.

기본적인 작성할때는 `모델` > `컨트롤러` > `라우터` 순이다.

## 모델 설정

몽고디비에 어떤 스키마로 데이터를 주고 받을지 짠다. `mongoose`를 통해 스키마를 짠다.

## 컨트롤러 설정

앞서 짠 스키마에 사용자가 어떤 형태로 상호작용할까를 결정한다. 스키마를 통해 데이터베이스의 `CRUD operator` (create, get, update, delete)를 기본 상호작용으로 사용된다.

## 라우터 설정

사용자가 컨트롤러에 접근하는 통로이다. `express`를 통해 주로 `get`, `post`, `patch`, `delete`의 형태로 짜준다.

## app.js에 라우터 가져오기

`express`를 통해 라우터를 가져와 실제 사용자가 쓸수 있도록 한다.
