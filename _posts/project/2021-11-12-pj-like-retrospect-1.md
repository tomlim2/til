---
layout: post-base
title: Like / Retrospect 1 - Overview
meta: 나이키 클론 프로젝트 회고 개요
category: projects
tags: [React, Project, HTML5, SASS, Javascript, AWS S3]
source: https://drive.google.com/file/d/1TyeGsUcogieXJmMcxchkl2-tk5qylNw8/view?usp=sharing
---

- **프로젝트 명**: Like / 라이키, 나이키 클론 프로젝트
- **기간**: 2021년 11월 01일 – 12일
- **프로젝트 매니저**: 이지은
- **프런트 엔드**: 신유진, 임연수, 전지완
- **백 엔드**: 김봉철, 이지은

개발 초기 세팅부터 전부 직접 구현했으며, 실제 사용할 수 있는 서비스 수준으로 개발하는 것을 목표로 라이키 팀원들과 즐겁게 작업한 1차 프로젝트입니다.

## Tech stack

- **Front-End** : HTML5, SASS, React, AWS S3
- **Back-End** : Python, Django, MySQL, jwt, bcypt, AWS EC2, Redis
- **Common** : Git, Github, Slack, Trello, Postman

## 구현된 화면과 기능들

#### 네비게이션

- 카테고리 데이터를 이용하여 네비게이션의 메뉴명과 서브메뉴명 업데이트

#### 상세페이지 / 리뷰 아코디언

- 사이즈별 선택시 해당 사이즈의 최대 수량 업데이트
- 리뷰 별점 표기 가능

#### 미니장바구니 / 장바구니페이지 / 주문내역페이지

- `GET`, `POST`, `DELETE`로 실제 장바구니 목록 추가, 삭제, 구매 플로우 백엔드와 통신 구현

### 신유진

#### 로그인 & 회원가입

- 로그인 모달 구현
- 로그인과 회원기입 유효성 검사 로직구현

### 전지완

#### 메인 페이지

- 쿼리를 이용한 카테고리 필터 기능 구현

## 4. 결과물

### 회원가입

![signUp]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_1_signUp.gif)

### 로그인

![logIn]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_2.gif)

### 네비게이션

![nav]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_3.gif)

### 메인 페이지

![main]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_3_Main.gif)

### 상세 페이지

![detail]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_4.gif)

### 미니 리뷰 in 상세 페이지

![detail]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_5.gif)

### 미니 장바구니 및 주문조회

![detail]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_6.gif)

### 장바구니

![cart]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_7.gif)

### 주문조회

![cart]({{site.baseurl}}/img/2021-11-14-Like/wecode_likeProject_withCopyright_8.gif)

## 소감

프론트 엔드와 백 엔드가 연계되어 하나의 웹사이트를 구현하는 과정을 경험한 첫번째 프로젝트였다. 제일 기억에 남는 코드는 상세페이지에 사이즈 주문 수량 체크하는 부분이었다. 이 기능을 구현하면 리엑트가 선언형이라는 대한 전반적인 이해를 할 수 있었다.

>_봉철, 유진, 지완, 지은님 최고의 행운이 함께하길 진심으로 빌어요:) Best team ever_

## Resource

- Like / 라이키, 나이키 클론 프로젝트
  - [홈 페이지](http://wecode26likeproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - [시연 영상](https://drive.google.com/file/d/1QfJUuwgZz7eYWqR9iYJ71wAxjD2XTrBy/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend.git)
  - [Back-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-backend.git)
  - [백엔드 API 설계](https://www.notion.so/LIKE-34de3722ecbe46eabcd5669789a499b1)
  - [Trello](https://trello.com/b/b9cKMX5x/like-%ED%8C%80)