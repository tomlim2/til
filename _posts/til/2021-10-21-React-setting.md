---
layout: post-base
title: 21-10-21 Git & Github / React / VScode / [Frontend] React CRA Setting Guidelines
meta: 협업용 React CRA Setting Guidelines
category: til
---
이 세팅은 21년 10월 위코드 Westagram 프로젝트 기준입니다. CRA는 Create React App의 약자이다.

## Step 1: CRA 설치
```
$ npx create-react-app westagram-project
```
## Step 2: React Router 설치
```
$ npm install react-router-dom
```
## Step 3: Sass 설치
```
$ npm install node-sass
```
- `CRA ver "4.0.3"` 과 `node-sass ver 6.0` 이랑 호환이 안되는 이슈가 있다고 한다. 
- 4.14버전으로 지정해야 하고 명령어는 `npm install node-sass@4.14.1`이다.

## Step 4: .eslintcache 파일 .gitignore에 추가
```
// .gitignore

.eslintcache
```

## Step 5: CRA 폴더 및 파일 구성
![웨스타그램 프로젝트 파일 구성도]({{site.baseurl}}/img/21-10-21-cra-setting.jpg)
_출처 - 웨스타그램_

__:: src 폴더__

:::: pages 폴더

- 각자의 이름으로 된 폴더를 생성합니다.
- 그 안에 Login, Main 폴더를 생성합니다.
    - Login 폴더 >>> Login.js, Login.scss
    - Main 폴더 >>> Main.js, Main.scss

```
- 로컬에서 폴더만 생성하고 빈 폴더로 두고 PR을 올릴 경우 폴더가 GitHub에 올라가지 않기에 빈 폴더에 임의의 파일을 생성한다. 예) `temp.js`, `temp.md`
```

:::: components 폴더
```
- Main.js 에서 사용되는 컴포넌트는 Main 폴더 하위에서 해당 컴포넌트 폴더를 생성해서 관리한다.
  ex) Main폴더 - Article 폴더 - Article.js, Article.scss 
- components 폴더에서는 모든 페이지에서 사용되는 컴포넌트(ex. Header, Footer)를 관리한다.
- 이번 프로젝트에서는 Main 페이지에서 사용할 공통의 Nav Component를 하나 만들어서 import해서 사용한다.
```
- components/Nav/Nav.js, Nav.scss

:::: styles 폴더

- reset.scss - default css 속성 초기화
- common.scss - 모든 페이지에 공통적으로 적용될 css 속성들
- variables.scss - 함께 쓰는 공통 css 속성(ex. theme color)

```scss
@mixin flexCenter {
	display: flex;
	align-items: center;
	justify-content: center;
}

// sass 파일에서
@import '../variables.scss'

.logo {
	@include flexCenter;
}
```

:::: Routes.js

- 팀원 당 컴포넌트 두 개(Login, Main)에 대한 경로를 설정해 준다.

```jsx
// 준식's 컴포넌트
import LoginJoon from './pages/joonsikyang/Login/Login';
import MainJoon from './pages/joonsikyang/Main/Main';

// 종택's 컴포넌트
import LoginJongTaek from './pages/jongtaekoh/Login/Login';
import MainJongTaek from './pages/jongtaekoh/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
<Route exact path='/login-joonsik' component={LoginJoon} />
<Route exact path='/main-joonsik' component={MainJoon} />
<Route exact path='/login-jongtaek' component={LoginJongTaek} />
<Route exact path='/main-jongtaek' component={MainJongTaek} />
```

:::: assets/images 폴더
- css에서 background-image 속성을 사용해서 이미지를 삽입하는 경우가 있다. 이와 같은 경우엔 이미지 파일들을 src/assets/images 디렉토리에서 관리한다.

```jsx
.feedImage {
  background-image: url('../../assets/images/feedImage.jpg');
}
```

__:: public 폴더__

:::: data 폴더
- data 폴더는 추후에 mock data를 만들어서 불러올 때 사용한다.

:::: images 폴더
- images 폴더 하위에 팀원 이름으로 폴더를 생성한다.
- 필요한 이미지들은 그 폴더 하위에서 관리한다.
- 폴더 안에서도 Main 폴더, Login 폴더를 만들어서 페이지 별로 깔끔하게 관리 해야한다.

## Step 6: [ESLint](https://eslint.org/docs/user-guide/getting-started) + [Prettier](https://prettier.io/) 세팅
ESLint과 Prettier는 코드를 정리해주는 확장 프로그램이다. 

ESLint는 코드 스타일 가이드이며 작성된 코드의 구문을 분석하여 버그가 발생할 여지가 있거나, 불필요한 코드, 혹은 보안상 위험한 코드 등에 대한 경고를 띄워준다.

Prettier는 ESLint와 비슷한 기능을 가지고 있지만 자동으로 코드의 스타일을 맞춰주는 것에 강력한 기능을 지원하고 있기 때문에 빈번히 ESLint와 함께 사용되고 있다.

__:: 설치__

확장 프로그램을 설치하고 VScode에서 `cmd` + `p`를 눌러서 `.vscode/settings.json`를 실행시킨다.

![setting json]({{site.baseurl}}/img/21-10-21-settingsJson.jpg)

위의 경로에 `setting.json`이 보인다면 설치가 성공한 것이다.

확장 프로그램만 설치하면 밑의 프로그램을 설치할 필요가 없다고 하지만 팀 작업 때 밑의 코드를 실행했었다. 나중에 초기세팅 한다면  밑의 코드 설치를 생략해보자.

```
$ npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```
__:: 추천 설정__

:::: `.vscode/settings.json`

```
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

:::: `.eslintrc`에서
- 팀원이 모두 맥 유저일 경우

```
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

```
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

:::: `.prettierrc`

```
{
  "tabWidth": 2, 
  "endOfLine": "lf", 
	"arrowParens": "avoid", 
	"singleQuote": true,
}
```

::the error (prettier/prettier)
![setting json]({{site.baseurl}}/img/21-10-21-prettier-error.png)

해당 에러가 생긴 파일에 가서 저장(`cmd` + `s`)를 하면 해결된다.

이 에러는 두 확장프로그램이 성공적으로 설치가 완료되고 npm start를 하면 위와 같이 발생할 수 있다. 원인은 prettier와 eslint에 저장된 syntax 스타일과 작성한 코드의 syntax 스타일이 맞지 않아서 생기는 에러이다. 저장을 하면 자동으로 스타일을 수정해준다(magic).

## Step 7: github repo 연동 및 push
초기 세팅이 완료되면 github에 올려 줍니다. 

```
// 초기세팅 작업 완료 후

// add > commit
git add .
git commit -m "Add: first commit. 초기 세팅 완료."

// 설치한 CRA 프로젝트와 github repo를 연동시켜줍니다.
git remote add origin "해당 repo 주소 입력"

// 연동된 repository로 push 해주세요.
git push origin master

```
## Step 8: github clone and create new feature branch
다른 팀원들은 해당 repo를 clone 받고, `npm install` 후에 feature branch를 새로 생성한다.
```
// remote master에 초기세팅 코드가 merge 되면 다른 팀원들도 clone 받고, branch 생성한다.

git clone "해당 repo 주소 입력"

npm install

git branch feature/joonsikyang
```


## Resource
- [위코드](https://wecode.co.kr/?gclid=EAIaIQobChMIgL7Qivja8wIVErqWCh1_8waJEAAYASAAEgJZjfD_BwE)