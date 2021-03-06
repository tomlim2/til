---
layout: post-base
title: Expo-cli, Github 연동하기
meta: 리엑트 네이티브 작업환경 구축하기
category: react
tags: [React Native, Expo-cli, Github]
---

## Setup

React 프로젝트의 터미널에서 다음과 입력하기

```jsx
git init
```

Github 홈피에서 새로운 Repository를 생성하고 url을 복사하고 터미널에 붙여넣기

```jsx
git remote add origin "yourURL"

git commit -m "Description"

git push origin master
```

## Deploy

Deploy설정에 앞서 Repository의 main braunch를 gh-pages로 바꿔야한다.

```jsx
git remote -v
```

위의 명령어로 push하는 경로 확인하기

```jsx
npm i gh-pages
```

그리고 package.json 아래의 위치에서 `"homepage":"yourGithubURL"`를 입력한다.

![입력위치]({{site.baseurl}}/img/21-08-29-react-1.png)

package.json의 `script`에 아래의 아래의 코드를 추가한다.

```jsx
"deploy": "gh-pages -d build",
"predeploy": "npm run build"
```

![입력위치]({{site.baseurl}}/img/21-08-29-react-2.png)

터미널에 deploy를 실행시키면 predeploy가 실행된 다음 deploy 안의 명령어가 실행된다. `"gh-pages -d build"`는 Github에 업로드할 폴더를 build로 설정하고 `"npm run build"`는 현재 쓴 코드를 최적화시키고 build라는 폴더에 넣는 명령어이다.

```jsx
npm run deploy
```

이후 react프로젝트를 업데이트할때마다 위의 명령어를 입력한다.
