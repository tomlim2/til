---
layout: post-base
title: 컴포넌트 데이터 주고 받기 1
meta: 리엑트 데이터 주고 받는 패턴 - 해야할 일 추가하기
category: React
tags: [React]
---
Todos는 [React JS Crash Course (2019)](https://www.youtube.com/watch?v=sBws8MSXN7A)을 진행하면서 만든 리엑트 웹이다. 큰 기능들은 해야할 일들을 작성하고, 삭제하고, 체크하는 기능이 있다.

## Data from [json placeholder](https://jsonplaceholder.typicode.com/todos)

위의 사이트에서 아래와 같은 코드와 post 등 간단한 기능들을 제공해준다.

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
  ...
]
```

## App.js

```jsx
state = {
    todos:[
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
    ]
}
    /* SET state in client-side */

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    /* LINK data from the web */
        .then(res => this.setState({ todos: res.data })) 
    /* THEN get data from the web */
}

addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    /* POST data to the web */
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    /* THEN update data to state and the web */
}
```

- `componentDidMount`에 `axios`를 사용하여 데이터를 받는다.
- 받은 데이터는 `state` object 안에 있는 `todos` array에 입력된다.
- func인 `addTodo`는 해당 데이터를 제공해주는 웹 사이트의 post기능을 이용한다.
- `axios`를 통해 해당 사이트에 들어갈 포멧은 object이고 `<AddTodo />`에서 받은 `title`을 `completed: false`와 함께 준비를 시킨다.
- `then`에서 `state`와 `res.data`에 새로 추가된 todos를 업데이트한다.

```jsx
<Router>
    <Route exact path="/" render={props => (
        <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            {/* COMMUNICATE data using attribute */}
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
        )} 
    />
    <Route path="/about" component={About} />
</Router>
```

- `<AddTodo />` component 안에 `addTodo`에 설정되어 있는 값과 연결한다.

## AddTodo.js (`<AddTodo />` component)

{% raw %}

```jsx
state = {
    title: ''
}
//INPUT the values in this state

onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
}
//PREVENT deafult event

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
//TRIGGER event when the target.value changed
//SET state in object format
}

render() {
    return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input 
                type = "text"
                name = "title"
                style = { {flex: '10', padding: '5px'} }
                placeholder = "Add Todo..." 
                value = {this.state.title}
                onChange = {this.onChange}
            />
            <input 
                type = "submit"
                value = "Submit" 
                className = "btn"
                style = {{flex: '1'}}
            />
        </form>
    )
}
```

{% endraw %}

- 사용자들이 `<input>`에 입력한 값을 state 안에 저장한다.
- Function `onSubmit`의 `this.props.addTodo(this.state.title)`을 통해 `App.js`의 `addTodo()`를 `this.state.title`를 넣어 실행시킨다.
