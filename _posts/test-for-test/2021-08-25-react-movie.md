---
layout: post-base
title: React / Project / 간단한 영화 웹 만들기
meta: Evergreen (Updated 210820)
source: https://nomadcoders.co/react-fundamentals/lobby
category: test-for-test
---
2021.08.25 ~ 28

react기반으로 간단한 영화 데스크탑 버전 웹페이지를 만드는 프로젝트. 주기능은

* API를 통해 필요한 영화 정보들 수집(axios)
* 수집한 정보들을 썸네일 형태로 Home화면에 보여주기
* 네비게이션 및 영화별 상세 페이지 구현 (React-Router)  

## React

자바스크립트 기반 가장 많이 사용되고 있는 브릿지. 특이하다.

## [React-Router](https://reactrouter.com/)

네비게이션, 상세페이지 구현을 위해 사용했다. Jerkyll의 layout 개념과 비슷하게 정보들을 끼워 맞추게 만드는 틀을 만들어주는 모듈.

```js
//App.js
<HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
</HashRouter>
```

위의 HashRouter 부분에서 Nav.js를 받아내고 url을 생성한다. `<Route path="/movie/:id" component={Detail} />`여기의 :id는 영화 API에서 제공하는 영화마다 가지고 있는 고유번호이다. Detail.js에서 가져온다.

```js
//Nav.js
<div className="nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
</div>
```

네비게이션은 간단하게 Home과 About으로 연결시킨다.

![Movie.js]({{site.baseurl}}/img/21-09-05-react-3.png)
Movie.js는 Home.js에서 API를 가져와 영화 정보들을 Home의 thumbnail과 간단한 설명으로 이루어진 카드들을 생성한다. 이때 받은 영화의 정보는 Detail.js로 보낸다. 이때 링크들은 App.js에서 생성된 url을 사용한다.

```js
//Detail.js
componentDidMount(){
        // console.log(this.props);
        const { location, history } = this.props;
        // console.log(location.state);
        if(location.state === undefined){
            history.push("/");
        }
}
Detail.js는 Movie.js에서 받은 정보들로 영화 상세 페이지를 만든다.

render(){
    const { location } = this.props;
    if(location.state){
        return (
            <span>{location.state.title}</span>
        );
    } else {
        return null
    }
}
```

Home.js에서 정보를 읽으면 필요한 데이터를 Movie.js로 보내 썸네일로 보여준다. 이후 데이터는 detail.js로 보내는데 이때 링크에 필요한 url은 App.js에서 제공한다.

## Conclusion

다음엔 앱 프로젝트 한번 해보자.

## Resource

* [nomadcoders](https://nomadcoders.co/)
