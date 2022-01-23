---
layout: post-base
title: Winterest / Retrospect 1 - Overview
meta: 핀터레스트 클론 프로젝트 회고 개요
category: projects
tags: [React, ReactHook, Redux, Project, HTML5, Styled-component, Javascript, AWS S3]
source: https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing
---

- **프로젝트 명**: Winterest / 윈터레스트, 핀터레스트 클론 프로젝트
- **기간**: 2021년 11월 15일 – 26일
- **프런트 엔드**: 김유신, 임연수, 전창민
- **백 엔드**: 권상현, 장재원

개발 초기 세팅부터 전부 직접 구현했으며, 실제 사용할 수 있는 서비스 수준으로 개발하는 것을 목표로 프론트 엔드, 백 엔드 개발자들과 담백하게 작업한 프로젝트입니다.

주의: aws 올릴 때 `OAuth.js` 확인해서 올리기!

## Tech stack

- **Front-End** : HTML5, Javascript, React, React Hook, Styled component, Redux AWS S3
- **Back-End** :  Django, Python, MySQL, jwt, bcrypt, AWS EC2, AWS RDS, AWS S3, Docker
- **Common** : Trello, Slack, Notion, Github, dbdiagram, postman

## 구현된 화면과 기능들

#### 매직 그리드 for 메인, 상세, 검색, 마이 페이지

- 사진들의 다양한 높이를 적용시키는 로직을 만들어서 무한 스크롤을 적용시켜 사용하였다. 그리드를 컴포넌트화시켜 그안에 커스텀 훅을 사용함으로써 재활용성을 높였다.

#### 상세페이지

- 사진의 상세 정보 및 댓글 기능
- 유사한 핀에는 매직그리드에 쿼리를 추가하여 같은 태그값을 가진 사진들을 매직 그리드로 보여줌.

#### 마이페이지

- 내가 올린 사진, 저장한 핀을 위한 그리드 제작
- 프로필 정보 전역화

#### 다크모드

- Redux와 Theme Provider를 활용한 다크모드 구현
- 로컬 스트로티지에 다크모드 여부 저장

### 김유신

#### 네비게이션

- 네비게이션 레이아웃 및 기능 구현

#### 사진 업로드 페이지

- 업로드 페이지 레이아웃 및 업로드한 그림 미리보기 구현

#### 검색 페이지 구현

- 검색 페이지 레이아웃 및 검색 기능 구현

### 전창민

#### 로그인 페이지 구현

- Hook 기능을 활용한 로그인 페이지 구현

#### 카카오 로그인 구현

- RestApi를 활용한 카카오 소셜로그인 서비스 구현

## 4. 결과물

### 로그인 페이지

![login page]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_loginPage.gif)

### 카카오 로그인

![kakao login]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_login.gif)

### 메인 페이지

![kakao login]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_main.gif)

### 상세 페이지

![kakao login]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_detail.gif)

### 검색 페이지

![kakao login]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_search.gif)

### 업로드 미리보기

![kakao login]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_upload_preview.gif)

### 마이 페이지 1 업로드한 이미지 확인

![kakao login]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_upload_complete.gif)

### 마이 페이지 2 저장한 핀 확인

![kakao login]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_pinning.gif)

### 전체 페이지 다크모드

![Dark mode]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_darkmode.gif)

## 소감

> *[이전 프로젝트]({% post_url 2021-11-12-pj-like-retrospect-1 %})가 달달했다면 이번 프로젝트는 담백했다.*

백 엔드에서 이미지 크롤링과 이미지 데이터 입력 로직상 다양한 높이 값을 가진 이미지를 처리하는 것에 어려움이 있었기에 고정된 넓이 높이 사이즈의 이미지만이 있었고 핀 저장기능도 메인 데이터에서 분리되어 있기에 업로드한 이미지와 같이 표시 되지 않았기에 저장된 핀과 업로드한 이미지가 마이페이지에 하나의 뷰 안에 들어가 있지 않았다. 이에 따른 고정된 높이 값에 랜덤한 높이값을 반영하고 마이페이지에 들어올 두가지 뷰를 위한 레이아웃 수정 및 하는 등 프론트 엔드 측에서 해결해야할 사항들이 있었다. 팀원 전부 이부분들에 대해 유기적이고 적극적으로 타협 했기에 인상적인 완성도를 가진 결과물을 얻게 되었다.

## Resource

- Winterest / 윈터레스트, 핀터레스트 클론 프로젝트
  - [홈 페이지](http://wecode26winterestproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - 스크린 레코드한 [시연 영상](https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing)
  - 2021년 11월 26일 위코드에서 프로젝트 발표 때 녹화한 [시연 영상](https://drive.google.com/file/d/1wh3uxFrbqOR_65DGYM8RUOlCP-cuKJhI/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-2nd-Weterest-frontend)
  - [Trello](https://trello.com/b/Q966JjyT/weterest)
