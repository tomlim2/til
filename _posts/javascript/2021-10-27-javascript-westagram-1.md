---
layout: post-base
title: React / Project / Westagram / Code Review 1 - Fetch 통신
meta:  로그인, 회원가입을 이용한 벡엔드와의 통신 실습
category: ReactAndReactNative
source: https://github.com/wecode-bootcamp-korea/26-React-Westagram-3/pull/1
tags: [Javascript, React, Fetch]
---

## Code Review

```jsx
submitForm = e => {
   const { userID, userPassword, username, contact } = this.state;
   fetch('http://10.58.1.234:8000/user/signup', {
     method: 'POST',
     body: JSON.stringify({
       email: userID,
       password: userPassword,
       name: username,
       phone_num: contact,
     }),
   })
     .then(res => res.json())
     .then(result => {
       if (result.message === 'DUPLICATION_ERROR')
         alert('중복된 이메일입니다.');
       if (result.access_token) {
         this.goToMain();
         localStorage.setItem('token', result.access_token);
      }
    });
};
```

벡엔드와 통신하기 위해 url과 key를 맞추는 것이 가장 중요했다.

```jsx
submitForm = e => {
   const { userID, userPassword } = this.state;
   fetch('http://10.58.1.234:8000/user/login', {
     method: 'POST',
     body: JSON.stringify({
       email: userID,
       password: userPassword,
     }),
   })
     .then(res => res.json())
     .then(result => {
       if (result.message === 'INVALID_USER')
         alert('아이디와 비밀번호를 다시 입력해주세요');
       if (result.access_token) {
         this.goToMain();
         localStorage.setItem('token', result.access_token);
      }
    });
};
```

회원가입과 로그인의 fetch를 구현할 때 바꿔야 할 부분은 `url`, `key`, 그리고 `에러메세지`가 있었다.

## 벡엔드와 통신 중 생겼던 트러블

- **벡엔드와 APT 통신은 벡엔드에서 발행한 URL을 통해 요청 및 응답이 가능하다.** URL의 형태는 `'http://10.58.1.234:8000/user/login'`, `'http://10.58.1.234:8000/user/signup'`

- **벡엔드 측에 로그인 실패 메세지는 없었지만 최초 로그인 성공 후에 토큰을 발급 받지 못했던 케이스** 로그인 서버에 불필요 키 값을 삭제하고 통신 후 정상적으로 발급 받았다.

- **중복된 이메일로 회원가입 시도시 400(Bad Request)로만 응답이 왔던 케이스** 백엔드쪽에서 온 Response 안에 메세지가 있었으며 클라이언트 측에서 그 메세지를 사용자를 위한 alert을 설정하면 된다.

![what is modules?]({{site.baseurl}}/img/2021-10-29-westagramCR1.png)

***오른쪽 Response 탭에 `DUPLICATION_ERROR`가 있는것을 확인 할 수 있었다.***

## Resource

- [Wecode](www.wecode.co.kr)

---
