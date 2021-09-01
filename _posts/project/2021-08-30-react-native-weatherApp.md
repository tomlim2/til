---
layout: post-til
title: React Native - Weather App
meta: Evergreen (Updated 210820)
source: https://nomadcoders.co/react-fundamentals/lobby
category: project
---

진행중

### Installing expo-cli
expo인스톨 도중 아래와 같은 에러로 설치할 수 없었다.

```js
errno -13
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
```
해결:

```js
    & sudo npm install --global expo-cli
```

### Github와 연동하기
일단 Github 홈피에서 새로운 Repository를 생성하기
```js
$ git init

$ git remote add origin "yourURL"

$ git pull origin main --allow-unrelated-histories

$ git commit -m "Description"

$ git push origin main
```

### Expo-Xcode
expo cli Xcode needs to be installed (don't worry, you won't have to use it), would you like to continue to the App Store?
1. Open Xcode

2. go to preferences

3. go to locations tab

4. select an Xcode version in the select labeled "Command Line Tools"

### 느낀점
다음엔 앱 프로젝트 한번 해보자. 

### [The Component Lifecycle](https://reactjs.org/docs/react-component.html)
Mounting
Updating
Unmounting
-
### References
Link: [Jekyll](https://jekyllrb.com/docs/)
Link: [Markdown Syntax Guidance](https://guides.github.com/features/mastering-markdown/)

