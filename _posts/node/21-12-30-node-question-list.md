---
layout: post-base
title: Question List - MVC, Middleware, CRUD vs API, URI
meta: 진행하면서 헷갈리거나 애매한 개념들
category: nodejs
tags: [NodeJs]
---

## MVC(Model View Control)?

![download-1](https://user-images.githubusercontent.com/22067260/148096211-d4c29c4c-85f7-4cc5-a9b4-9a31100cc40c.png)
![download-2](https://user-images.githubusercontent.com/22067260/148096218-ca1c1324-0fa5-4886-afa4-706efbfc4682.png)

## Middleware?

## CRUD vs API?

![CRUD vs API](https://user-images.githubusercontent.com/22067260/147917791-8c19a4a5-db78-4f45-8911-bf272f130433.png)

실질적인 기능은 어디서 실행되는지가 가장 큰 차이이다. CRUD operation은 데이터베이스 레벨에서만 실행되고 REST 그 적용되는 범위가 넓다.
개발자들은 그 어플리케이션의 기능들을 지원하기 위한 웹 API를 설계하기 위해 REST를 사용한다.

### CRUD

CRUD는 데이터베이스의 CREATE, READ, UPDATE, DELETE 데이터처리 기능을 의미한다.

### REST (Representational State Transfer)

REST refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems.

The basic idea of REST is that a resource, e.g. a document, is transferred via well-recognized, language-agnostic, and reliably standardized client/server interactions. Services are deemed RESTful when they adhere to these constraints.

REST는 다른 어플리케이션에 소비되는 웹 api를 개발하기 위한 가장 인기 있는 설계 방식이다. REST가 웹에 존재하는 리소스들에 URI를 부여하는 방법론. REST api 라고하면 HTTP 프로토콜을 전제로하고 REST를 기반으로 시스템을 분산 설계하는 방식

## URI(Uniform Resource Identifiers)

A Uniform Resource Identifier (URI) is a unique sequence of characters that identifies a logical or physical resource used by web technologies.

## API(Application Programming Interface)

An API is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third party software or hardware.

In Web development, an API is generally a set of code features (e.g. methods, properties, events, and URLs) that a developer can use in their apps for interacting with components of a user's web browser, or other software/hardware on the user's computer, or third party websites and services.

## JWT(Json Web Token)?

## Srouce

- 위코드 26기 노드 스터디
- [API](https://developer.mozilla.org/en-US/docs/Glossary/API)
