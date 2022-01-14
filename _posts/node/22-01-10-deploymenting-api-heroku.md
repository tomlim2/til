---
layout: post-base
title: Deploy Job API to Heroku
meta: Job API 배포하기
category: NodeJs
source: https://job-api-06ys.herokuapp.com/
tags:
  [NodeJs, Express, mongoose, MongoDB, Heroku, Postman, Swagger UI, APIMATIC]
---

전체 플로우

- 보안 패키지 설치
- 배포용 카피 폴더 만들기
- heroku로 배포
- API 명세서 작성
- 작성된 명세서 배포용, 작업용 워크스페이스으로 가져오기

## 배포 전 보안에 필요한 패키지들

- helmet
- cors
- xss-clean
- express-rate-limit

```js
// app.js
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use(helmet());
app.use(cors());
app.use(xss());
```

## [Heroku](https://www.heroku.com/)

우리나라의 네이버 같은 이미지인 세일즈 포스에서 제공하는 클라우드 서비스. aws 이외의 클라우드 서비스를 사용하는 것은 큰 이득인것 같다. 쥐도새도 모르게 주머니에서 돈을 뺏어가는 aws과 다르게 Heroku는 그냥 지불 전과 후의 성능에 제한을 거는 듯하다.

[공식문서](https://devcenter.heroku.com/articles/getting-started-with-nodejs)에 정확한 사용방법이 나와있다. 전체적인 사용법은 github와 유사하여 진입장벽이 낮다.

## 배포하기

package.json에서 몇가지 설정과 .env의 정보들을 heroku config에 기입하기만 하면 된다.

### 최신폴더 복사하기

여러가지 이유로 배포용 파일을 위한 폴더는 따로 관리하는 것이 좋다고 한다.

### package.json

```text
...
"script":{
    "start": "node app.js"
},
...
"engines": {
    "node": "14.x"
}
```

### Procfile

```text
web: node app.js
```

### heroku에 폴더 업로드

```text
rm -rf .git
git init
git add .
git commit -m "First commit"
heroku login
heroku create jobs-api
git remote -v
git push heroku master
```

### heroku 콘솔 Config Vars

Config Vars에는 .env에 있던 값들을 입력한다.

### 완료

## 명세서 작성

Postman 콜렉션에서 json으로 추출하여 APIMATIC으로 가져온다.

가져온 API json은 APIMATIC에서 API Endpoint를 Auth와 Jobs 폴더로 저장한다. 그리고 authentication이 필요하지 않는 auth/register와 auth/login의 authentication toggle을 끈다. 모든 셋팅이 끝났다면 .yml로 내보내기를 한다.

Swagger UI Editor로 가져오고 불필요한 misc 태그를 삭제한다. path parameter가 설정된 url을 전부 삭제하고 제일 위에 아래의 코드를 붙여넣기 한다.

```yml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```

### Swagger UI express로 가져오기

```js
// app.js

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.get("/", (req, res) => {
  res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
```

```yml
# swagger.json

openapi: 3.0.0
info:
  title: Jobs API
  contact: {}
  version: "1.0"
servers:
```

## conclusion

이 프로젝트는 특히 배포 및 명세서 작성 등등 정말 의미 있었다. 아직 갈길은 멀지만 내가 올바른 방향으로 가고 있다는 것을 알 수 있었다.

여기까지 도움을 준 nodejs 스터디 방 백엔드 분들에게 감사를 드립니다.

cors와 helmet 등 security 셋팅에 필요한 작업들에 의문이 많이 생긴다. 기회가 되면 알아보도록 하자. 또한 aws를 통한 배포방법도 한번 알아보자.
