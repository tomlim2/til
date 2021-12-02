---
layout: post-base
title: CRA Setting - React Hook, Styled-component, VScode, ESLint, Prettier
meta: 리엑트 세팅 가이드라인 - 21년 11월 위코드 2차 프로젝트 버전
category: setting
tags: [Setting, React, VScode, ESLint, Prettier]
---
이 세팅은 21년 11월 위코드 2차 프로젝트 기준입니다. 1차 프로젝트에 비해 react-router-dom v6와 styled-components이 추가되었다.

## Step 1: CRA 설치

```bush
npx create-react-app westagram-project
```

## Step 2: React Router 설치

```bush
npm install react-router-dom
```

## Step 3: styled-components, styled-reset 설치

```bush
npm install --save styled-components styled-reset
```

## Step 4: `.eslintcache` 파일 `.gitignore`에 추가

```bush
// .gitignore
.eslintcache
```

## Step 5: CRA 폴더 및 파일 구성

![웨스타그램 프로젝트 파일 구성도]({{site.baseurl}}/img/21-10-21-cra-setting.jpg)
_출처 - 웨스타그램_

### src 폴더

### :::: pages 폴더

- Login, Main 폴더를 생성합니다.
  - Login 폴더 >>> Login.js
  - Main 폴더 >>> Main.js

> **Note**: 로컬에서 폴더만 생성하고 빈 폴더로 두고 PR을 올릴 경우 폴더가 GitHub에 올라가지 않기에 빈 폴더에 임의의 파일을 생성한다. 예) `temp.js`, `temp.md`

### :::: components 폴더

> **Note**: `Main.js` 에서 사용되는 컴포넌트는 Main 폴더 하위에서 해당 컴포넌트 폴더를 생성해서 관리한다. ex) Main폴더 - Article 폴더 - Article.js, Article.scss

- components 폴더에서는 모든 페이지에서 사용되는 컴포넌트(ex. Header, Footer)를 관리한다.
- 이번 프로젝트에서는 Main 페이지에서 사용할 공통의 Nav Component를 하나 만들어서 import해서 사용한다.
- `components/Nav/Nav.js`

### :::: styles 폴더

- `GlobalStyle.js` - 전역 css 초기화 및 모든 페이지에 공통적으로 적용될 css 속성들

```jsx
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
```

<br />

- `theme.js` - 함께 쓰는 공통 css 속성(ex. theme color)

```jsx
const theme = {
  background: '#FFFEFC',
  white: '#FFFFFF',
  black: '#000000',
  vermilion: '#ff7425',
  orange: '#FF9900',
  opacityOrange: 'rgba(242,153,74,0.5)',
  yellow: '#FFD66C',
  grey: 'rgba(196,196,196,0.3)',
  middleGrey: 'rgba(65,65,65,0.4)',
  deepGrey: '#828282',
  lightOrange: 'rgba(255,195,170,0.3)',
  fontColor: '#2D2B2B',
  fontTitle: "'Noto Sans KR', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
};

export default theme;
```

<br />

- `index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Routers from './Routers';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

```

### :::: `Routers.js`

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Upload from './pages/Upload/Upload';

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
```

### :::: Config.js

- `index.js`와 같은 위치에 두면 된다.

```jsx
const BASE_URL = 'http://15.164.170.124:8000';

export const API = {
  signUp: `${BASE_URL}/users/signup`,
  baseUrl: `${BASE_URL}`,
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.jugJgM3JP9XFInnwQJbQt02wCRW_aUnWnv5HWNC0X_g',
};

export const MockUp = {
  categories: '/data/nav/categories.json',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.jugJgM3JP9XFInnwQJbQt02wCRW_aUnWnv5HWNC0X_g',
};
```

### :::: assets/images 폴더

- css에서 background-image 속성을 사용해서 이미지를 삽입하는 경우가 있다. 이와 같은 경우엔 이미지 파일들을 src/assets/images 디렉토리에서 관리한다.

```jsx
.feedImage {
  background-image: url('../../assets/images/feedImage.jpg');
}
```

### public 폴더

### :::: data 폴더

- data 폴더는 추후에 mock data를 만들어서 불러올 때 사용한다.

### :::: images 폴더

- 필요한 이미지들은 그 폴더 하위에서 관리한다.
- 폴더 안에서도 Main 폴더, Login 폴더를 만들어서 페이지 별로 깔끔하게 관리 해야한다.

## Step 6: [ESLint](https://eslint.org/docs/user-guide/getting-started) + [Prettier](https://prettier.io/) 세팅

ESLint과 Prettier는 코드를 정리해주는 확장 프로그램이다.

ESLint는 코드 스타일 가이드이며 작성된 코드의 구문을 분석하여 버그가 발생할 여지가 있거나, 불필요한 코드, 혹은 보안상 위험한 코드 등에 대한 경고를 띄워준다.

Prettier는 ESLint와 비슷한 기능을 가지고 있지만 자동으로 코드의 스타일을 맞춰주는 것에 강력한 기능을 지원하고 있기 때문에 빈번히 ESLint와 함께 사용되고 있다.

### 설치

확장 프로그램을 설치하고 VScode에서 `cmd` + `p`를 눌러서 `> settings.json`를 실행시킨다.

![setting json]({{site.baseurl}}/img/21-10-21-settingsJson.jpg)

위의 경로에 `setting.json`이 보인다면 설치가 성공한 것이다.

확장 프로그램만 설치하면 밑의 프로그램을 설치할 필요가 없다고 하지만 팀 작업 때 밑의 코드를 실행했었다. 나중에 초기세팅 한다면  밑의 코드 설치를 생략해보자.

```bush
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

### 추천 설정

### :::: `.vscode/settings.json`

```bush
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
 "editor.tabSize": 2,
  "editor.formatOnSave": true,
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
 "javascript.format.enable": false,
 "eslint.alwaysShowStatus": true,
 "files.autoSave": "onFocusChange"
}
```

### :::: `.eslintrc`에서

- 팀원이 모두 맥 유저일 경우

```bush
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-nested-ternary": "warn", // 중첩 삼항 연산자 금지
    "no-console": "warn", // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}
```

- 팀원 중 윈도우 유저가 있을 경우

```bush
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-nested-ternary": "warn", // 중첩 삼항 연산자 금지
    "no-console": "warn", // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}
```

### :::: `.prettierrc`

```bush
{
  "tabWidth": 2, 
  "endOfLine": "lf", 
  "arrowParens": "avoid", 
  "singleQuote": true,
}
```

## ::the error (prettier/prettier)

![setting json]({{site.baseurl}}/img/21-10-21-prettier-error.png)

해당 에러가 생긴 파일에 가서 저장(`cmd` + `s`)를 하면 해결된다.

이 에러는 두 확장프로그램이 성공적으로 설치가 완료되고 npm start를 하면 위와 같이 발생할 수 있다. 원인은 prettier와 eslint에 저장된 syntax 스타일과 작성한 코드의 syntax 스타일이 맞지 않아서 생기는 에러이다. 저장을 하면 자동으로 스타일을 수정해준다(magic).

## Step 8: `README.md` 작성

팀명, 팀원 및 간단한 인사 작성.

## Step 9: github repo 연동 및 push

초기 세팅이 완료되면 github에 올려 줍니다.

```bush
// 초기세팅 작업 완료 후

// add > commit
git add .
git commit -m "Add: first commit. 초기 세팅 완료."

// 설치한 CRA 프로젝트와 github repo를 연동시켜줍니다.
git remote add origin "해당 repo 주소 입력"

// 연동된 repository로 push 해주세요.
git push origin master

```

## Step 10: github clone and create new feature branch

다른 팀원들은 해당 repo를 clone 받고, `npm install` 후에 feature branch를 새로 생성한다.

```bush
// remote master에 초기세팅 코드가 merge 되면 다른 팀원들도 clone 받고, branch 생성한다.

git clone "해당 repo 주소 입력"

npm install

git branch feature/joonsikyang
```

## Step 11: merge main

마스터에서 수정사항이 생겼다면 아래와 같은 flow로 최신화 시킨다.

```bush
git checkout main
git pull origin main
git merge main
git checkout feature/branch
```

## Resource

- [위코드](https://wecode.co.kr/?gclid=EAIaIQobChMIgL7Qivja8wIVErqWCh1_8waJEAAYASAAEgJZjfD_BwE)
