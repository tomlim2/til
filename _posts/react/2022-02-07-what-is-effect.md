---
layout: post-base
title: What is an Effect (or Side effect)?
meta: 리엑트 이펙트에 대한 이해
category: react
tags: [React, Javascript, Modal]
---

## Main job

UI를 렌더링하고 사용자 입력한 값에 대한 반응을 한다.

- JSX를 계산하고 렌더한다.
- State와 Props를 관리한다.
- 사용자 이벤트와 입력에 반응한다.
- State와 Props의 변화에 대한 컴포넌트를 재계산한다.

이 모든 것은 "툴"들과 "useState() Hook, Props"등의 기능들을 통해 React에 내장되어 있다.

## Side Effect

그 이외에 모든것

- 브라우저 저장소에 데이터를 저장한다.
- 백 엔드 서버에 Http 요청을 보낸다.
- 타이머를 관리하고 셋업한다.
- etc

이것들은 보통의 컴포넌트 계산과 렌더링 사이클 밖에서 일어나야한다.
