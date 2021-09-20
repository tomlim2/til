---
layout: post-base
title: RNRN - Axios를 사용한 API 연동 
meta: React-Router
source: https://www.npmjs.com/package/axios
category: ReactAndReactNative
---
API에 활용하는 툴 중 하나인 axios를 사용한 예시를 적어놓았다. 

## Install axios
Documentation: [npmjs.com](https://www.npmjs.com/package/axios) 
```jsx
$ npm install axios
```

## React 영화 웹 
API from [YTS Proxy](https://github.com/serranoarevalo/yts-proxy). [API endpoint list](https://yts.mx/api)

For the endpoint [`/list_movies.json`](https://yts.mx/api#list_movies) use `https://yts-proxy.now.sh/list_movies.json`

```jsx
import axios from 'axios';

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        )
    this.setState({ movies, isLoading: false });
  }//es6
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state; //es6?
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">로딩중</span>  
        </div>
      ) : (
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
};
```

## Weather app
API from [openweather](https://openweathermap.org/api)
```jsx
import * as Location from 'expo-location';

export default class extends React.Component {
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
    console.log(weather);
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
}
```
expo-cli에서 latitude와 longitude를 얻어서 openweather API에 입력함으로써 현재 내 위치의 날씨 정보를 가져온다.
