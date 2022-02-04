---
layout: post-base
title: URI, URL 그리고 API 용어 정리
meta: 용어정리!
category: common
tags: [Common]
---

## URI와 URL

- URI(Uniform Resource Identifier)
  - 통합 지원 식별자
  - 자원을 나타내는 유일한 주소, 자원을 식별할 수 있는 문자열
  - 고유하게 정보 리소스를 식별하고 위치를 지정
  - 하위개념으로 URL,URN
  - 어떤 자원의 위치를 의미하고, HTTP는 주어진 URI로 객체를 찾아오고, Method가 그 위치에 대한 행위를 뜻함
  - URI 설계에 정답은 없지만 항상 일관된 규칙으로 작성해야 혼동되지 않음.(네이밍이 직관적이어야 하고, 형용사보다는 명사가 이해하기 좋다.)
- URL(Uniform Resource Loctor)
  - 통합 지원 지시자
  - 특정 서버의 한 리소스에 대한 구체적인 위치를 서술
  - 네트워크 상 해당 자원이 어디 있는지 알려주는 규약
  - 어떤 특점 지점의 위치 또는 파일 리소스에 접근하기 위한 주소
  - `https://dict.naver.com/` → 해당 주소의 서버를 나타내기 때문에 URL이면서 URI
  - `https://github.com/meme2367/blob/master/routes/..../category.js→ github.com` 호스트 주소 하위에 meme2367/..../이라는 디렉토리 아래 category.js라는 자원의 위치를 가리키고 있으므로 URL 이면서 URI
  - `https://www.youtube.com/results?search_query=iu` → query string인 search_query의 값에 따라 여러가지 결과값을 가져올 수 있기 때문에 원하는 정보를 얻으려면 식별자가 필요하므로 URI지만 URL은 아님

## API

- Application Programming Interface
- 서버 어플리케이션의 기능을 사용하기 위한 방법 / 수단
- 구현 방식을 알지 못해도 서비스가 서로 통신 가능
- 리소스에 대한 액세스 권한을 제공하고 보안과 제어를 유지할 수 있게 해주며 액세스 권한을 어떻게, 누구에게 제공할지 여부만 결정하면 됨.

## REST

- Representational State Transfer
- 웹의 창시자(HTTP) 중의 한 사람인 Roy Fielding의 2000년 논문에 의해서 소개
- 현재의 아키텍쳐가 웹의 본래 설계의 우수성을 많이 사용하지 못하고 있다고 판단하여 웹의 장점을 최대한 활용할 수 있는 네트워크 기반의 아키텍쳐
- REST 원리를 따르는 시스템은 종종 RESTful이란 용어로 지칭
- Resource-URI , Method, Message
  - Method : POST(한번수행했을때와 여러번 수행했을 때 결과가 다르다), GET, PUT, DELETE
- 웹(HTTP)의 장점을 활용한 리소스 지향 아키텍쳐(모든 것을 리소스 즉 명사로 표현함)
- 모든 형태의 명령이 명사형으로 정의가 가능한 것은 아니지만, 되도록이면 리소스 기반의 명사 형태로 정의를 하는 게 REST형태의 디자인이 됨

## REST 특징

- Resource 지향 아키텍쳐( ROA : Resource Oriented Architecture)
  - Resource 기반의 복수형 명사 형태의 정의를 권장
- Uniform Interface(유니폼 인터페이스) : HTTP 표준에만 따른다면, 어떠한 기술이라던지 사용이 가능한 인터페이스 스타일
  - REST API 정의를 HTTP + JSON로 하였다면, C, Java, Python, IOS 플랫폼 등 특정 언어나 기술에 종속 받지 않고, 모든 플랫폼에 사용이 가능한 Loosely Coupling 구조
- Stateless(무상태성)
  - HTTP Session과 같은 컨텍스트 저장소에 상태 정보를 저장하지 않음.
  - API 서버는 들어오는 요청만을 들어오는 메시지(Request, Message)로만 처리하면 되며, 세션과 같은 정보를 신경 쓸 필요 없어 구현이 단순해짐
  - REST API 실행 중 실패가 발생한 경우, Transaction 복구를 위해 기존의 상태를 저장할 필요가 있다.(POST method 제외)
- Layered System(계층형 구조) : 대상 서버에 직접 연결되었는지,또는 중간 서버를 통해 연결되었는지를 알 수 없음, 중간 서버는 로드 밸런싱 기능이나 공유 캐시 기능을 제공함
- Self-descriptiveness(자체 표현 구조) :
  - API 메시지만 보고, API를 이해할 수 있는 구조 (Resource,Method를 이용해 무슨 행위를 하는지 직관적으로 이해할 수 있다.)
  - REST API 자체가 매우 쉬워서 API 메시지 자체만 보고도 API를 이해할 수 있음
  - 리소스와 메서드를 이용해서 어떤 메서드에 무슨 행위를 하는지를 알 수 있으며 또한 메시지 포맷 역시 JSON을 이용해서 직관적으로 이해가 가능한 구조
