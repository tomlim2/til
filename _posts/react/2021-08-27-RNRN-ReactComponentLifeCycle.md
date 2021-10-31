---
layout: post-base
title: Component Life Cycle
meta: 리엑트 컴포넌트 라이브 사이클란 무엇인가?
category: React
tags: [React]
---
## 기본적인 life cycle

`constructor` → `render` → `componentDidMount` → `( setState )` → `render`

## Commonly Used Lifecycle Methods

![lifecycle diagram]({{site.baseurl}}/img/21-08-28-react-1.png)
React version >= 16.4 (출처:[React lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))

## componentDidMount()

출처는 [reactjs.org](https://reactjs.org/docs/react-component.html#componentdidupdate). 매우 자주 사용된다. 처음 페이지 로딩중에 만일 로딩이 된다면 홈화면으로 가게 만드는 일을 주로한다.

```jsx
componentDidUpdate(prevProps, prevState, snapshot)
```

```jsx
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

## 예시1 - [React 영화 웹](https://tomlim2.github.io/movie_2019v/)([개인 프로젝트](https://tomlim2.github.io/til/project/2021/08/25/react-movie.html))

{% raw %}

```jsx
state = {
    isLoading: true,
    movies: []
  };
getMovies = async () => {
  const {data: {data: {movies}}} = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
  this.setState({
     movies, isLoading: false 
     });
  }//es6
componentDidMount(){
  this.getMovies();
  }

render(){
    const { isLoading, movies } = this.state; //es6?
    return (
    <section className="container">
      {isLoading ? (<Loading />) : (
        <div className="movies">
          {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
            genres={movie.genres} 
          />
          ))}
        </div>
        )}
    </section>
    )
  }
```

{% endraw %}

## 예시2 - React Native 날씨 앱 ([개인 프로젝트](https://tomlim2.github.io/til/project/2021/08/30/react-native-weatherApp.html))

```jsx
state = {
      isLoading: true
    };
getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      }  
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );//es6
    this.setState({ 
      isLoading:false, 
      condition: weather[0].main,
      temp,
     });
  }

getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      // send to APT and get weather;
      this.getWeather(latitude, longitude)
    } catch(error) {
      Alert.alert("Cannot find you");
    }

  }
componentDidMount(){
  this.getLocation()
  }
render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather 
    temp={Math.round(temp)} 
    condition={condition}
    />
  }
```
