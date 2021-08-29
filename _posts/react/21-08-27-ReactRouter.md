---
layout: post-til
title: Component Life Cycle
meta: Useful tool
source: https://material.io/design/
category: react
---
이해는 잘 하지못한 상태이다. react가 화면에 출력되는(render) 사이클이다.

### Commonly Used Lifecycle Methods 
![lifecycle diagram]({{site.baseurl}}/img/21-08-28-react-1.png)
React version >= 16.4 (출처:[React lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))

### 예시- [React 영화 웹 프로젝트](https://tomlim2.github.io/movie_2019v/)([개인 프로젝트](http://localhost:4000/project/2021/08/25/react-movie.html))

```js
class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
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


### componentDidMount()
출처는 [reactjs.org](https://reactjs.org/docs/react-component.html#componentdidupdate). **매우 자주 사용되는** method.

```js
componentDidUpdate(prevProps, prevState, snapshot)
```

```js
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```