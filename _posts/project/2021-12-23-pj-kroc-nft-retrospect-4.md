---
layout: post-base
title: NFT 갤러리 phase 1 / Cork NFT
meta: NFT Cork 회고
category: projects
source: https://www.corknft.com/
tags: [React, Recoil, SASS, Javascript, Firebase, HTML5]
---

- **프로젝트 명**: NFT KROC phase n / nft 갤러리 홈페이지 구축 프로젝트
- **기업 명**: 머치 스퀘어
- **기간**: 2021년 11월 29일 – 12월 23일

NFT KROC phase n은 nft 갤러리를 구축하기 위한 프로젝트였다. Phase n에서는 개발 초기 세팅부터 파이어 베이스를 기본으로 한 회원가입, email verification, 로그인, 비밀번호 찾기 등 기본적인 회원관리 시스템과 검색, 위시리스트, 갤러리, 디테일 페이지, 갤러리 웹사이트의 기본 기능을 가진 데스크탑 버전을 구축했다. nft 사용자들을 타겟으로 한 만큼 영어 베이스로 작업되었다.

## Tech stack

- **Front-End** : HTML5, Javascript, React Hook, Styled component, Redux AWS S3
- **Back-End** : Node.js
- **Common** : Trello, Github, Postman, Figma

## Firebase

구글에서 제공하는 유저 관리 시스템으로 프론트 엔드 단에서 이메일/페스워드, 이메일 로그인, phone verification, email verification, 더 나아가 지메일, 페이스북, 트위터 로그인 등을 구축하는데에 용이 했다.

## Figma

개발자로서 사용한 피그마는 또 느낌이 많이 달랐다. 모든 개발은 디자이너가 피그마로 보내준 파일을 골자로 작업을 진행하였다. 아무래도 디자이너가 중소기업과 협업한 경력이 적은게 티가 나는게 .ai를 개발자들한테 최종파일로서 공유하고 이 디자인 자체도 고해상도의 데스크탑 버전을 디자인했기에 작은 화면에 들어가게 되면 화면 자체가 깨지며 반응형 앱 기반으로 만든다고 했지만 디자인은 반응형에 최적화되어 있지 않았다.

## 구현된 레이아웃과 기능들

### 회원가입, Email verification, 프로필 사진 업데이트, 로그인, 비밀번호 변경, 비밀번호 찾기, 회원정보 변경

백 엔드 회원 관리 데이터가 구축되어 있지 않았기에 파이어 베이스를 기반으로 한 회원관리 시스템을 구현하였다. 회원가입 중에 이메일 확인을 하지 않은 이메일이 파이어 베이스와 백 엔드 데이터 베이스로 들어가게 되면 후에 정크 데이터들을 관리를 두번 해야하기 때문에 다음 페이스에서 백 엔드 부분에서 이메일 확인을 하고 확인된 데이터를 파이어 베이스로 저장하는 방식으로 전환하기로 했다.

로그인하였을 때의 사용자 정보는 네비게이션에서 받아서 리코일을 이용하여 전역화하여 사용하였다.

회원정보 변경하는 파트에서의 로직에서 회원 데이터를 받는 부분을 부모(GET)에 위치시켰고 사용자가 입력 완료 후 데이터를 디비에 보내는 부분을 자식(POST)에 위치시켰다.

`Email verification` 파트는 메일로 이메일 확인을 하게되면

비밀번호 찾기는 사용자가 이메일을 연결시 파이어 베이스에서 제공하는 이메일 로그인 링크를 비밀번호 찾기를 사용할 시엔 파이어 베이스상의 비밀번호만을 업데이트하게 된다.

### 관심 있는 작품 저장 기능

작품의 작품 상세 페이지에서 관심 있는 작품을 저장하고 내 페이지에서 보여주는 기능 구현했다.

### 검색 기능

네비게이션과 장터 페이지에 있는 검색 기능 구현했다.

### 상호작용 효과

네비게이션의 메뉴 이름, 버튼, 검색바와 컴포넌트 호버 시에 발생하는 통일성 있는 인터렉션을 구축했다.

### 주요 / 장터 / 예술가 / 새소식 페이지

이 페이지에서 슬라이드와 통계 애니메이션을 만들었다. 만들어진 슬라이드는 다른 개발자에 의해 컴포넌트화 되어서 다른 페이지에서도 사용되었다.

### 작품 / 예술가 상세 페이지

상세 페이지 레이아웃과 이 작품 혹은 예술가와 관련된 다른 작품들을 보여주는 리스트를 다른 개발자가 만든 공용 컴포넌트를 이용하여 보여줬다.

## 블로커

파이어베이스와 사용자 관리시스템의 이해가 주 블로커였다.

## 소감

이번 css의 컨벤션은 bootstrap의 css와 비슷했다. 예를 들면 `width: 200px; height:200px;`의 css를 jsx의 클라스 네임에 `className="width-200 height-200"`으로 누적되는 방식으로 사용되었다. 셋업해야할 css 양은 많았지만 원하는 파트에 빠르고 짧은 css로 적용시킬 수 있었기에 괜찮은 컨벤션이었다.

익숙한 리엑트 파트의 다양한 페이지를 많이 구축했지만 파이어 베이스를 기본으로 사용자 관리 시스템을 구현하면서 그야말로 레빗홀로 빠졌다. 하지만 구축하면서 그것에 따른 정책이나 방향성에 대한 생각을 많이 하게 되었다.
