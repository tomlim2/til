---
layout: post-base
title: MongoDB - SQL vs noSQL
meta: 몽고디비 이해
category: NodeJs
tags: [NodeJs, MongoDB]
---

![Hello MongoDB](https://user-images.githubusercontent.com/22067260/147842711-3bfb8581-bb9c-4f74-8a49-6a27239ec052.png)

_출처 - [Coding Addict](https://www.youtube.com/watch?v=jIsj0upCBAM&list=PLnHJACx3NwAdl4yeJF6LzjDiLyW1yF9Ds&index=1)_

몽고디비 강의 듣다 생긴 의문:

> noSQL랑 SQL이 뭘까?

## SQL(Structured Query Language)

예시 - mySQL, PostgreSQL, SQLite

SQL은 데이터의 구조가 엄격하다. 어떤 데이터를 얻을 것인지 고민하지 않는다. 대신 데이터의 구조를 신경써야한다. 데이터를 뽑아서 어떻게 할지에 대한 고민이 없다. 대부분의 경우가 커버된다.

## noSQL (Not SQL)

거대한 데이터 베이스의 그룹, 크게 Document, Graph, Key-Value DB로 나뉜다.

비관계형 데이터베이스의 통합.
장점: 수정이 쉽다.
단점: 중복 데이터 수정이 힘들다.

### Document

예시 - MongoDB

데이터를 json document 형태로 저장한다. 보통의 SQL처럼 행과 열이 존재하는 것이 아니라 document db에는 내가 원하는 어떤 종류의 어떤 모양의 데이터든지 저장할 수 있고 같은 모양일 필요가 없다. 데이터를 저장하기 전에 DB에 무엇을 얻을것인지 미리 생각해놔야한다.

![MongoDB](https://user-images.githubusercontent.com/22067260/147868671-c9dbe376-aaad-4281-af6c-2c75a9c198ce.png)

### Key-Value

예시 - CassandraDB, DynamicDB

엄청 빠르고 많이 쓰고 읽어야할 때 사용된다.

#### CassandraDB

Column wide database. 많은 양의 데이터를 읽고 쓰는 것이 엄청 빠르다.애플이 이 데이터 베이스로 10페타바이트의 데이터를 저장하여 쓰고 있다. 넷플렉스, 우버 등등

#### DynamicDB

아마존이 만든 Serverless 데이터베이스. 데이터를 저장하기 전에 미러 어떻게 쓸건지 고민해야 한다. 쿼리가 없다!?

### Graph

예시 - TAO, neo4j

column이나 document가 필요없다. 각각의 엔티티를 저장하고 이를 관계망으로 연결한다. 예를 들어 유저1이 사진1을 좋아요를 누르고 유저1은 유저2의 친구이고 유저1이 사진1을 공유하고 등등 이러한 정보는 graph DB에서 더 잘 저장될 수 있다.

## Resource

- [Coding Addict](https://www.youtube.com/watch?v=jIsj0upCBAM&list=PLnHJACx3NwAdl4yeJF6LzjDiLyW1yF9Ds&index=1)
- [SQL vs NoSQL](https://www.youtube.com/watch?v=Q_9cFgzZr8Q)
