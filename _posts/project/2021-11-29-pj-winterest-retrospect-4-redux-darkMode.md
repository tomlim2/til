---
layout: post-base
title: Winterest / Retrospect 4 - Dark mode with redux and react hook
meta: Implementing dark mode
category: Projects
tags: [React, ReactHook, Project, HTML5, CSS, Styled-component, Javascript]
source: https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing
---
I recorded my code how I implemented dark mode in Winterest.

```text
npm install styled-components styled-theming redux react-redux
```

- styled-components
- styled-theming
- redux and react-redux

What I built

![Dark mode]({{site.baseurl}}/img/2021-11-27-Winterest/winterest_darkmode.gif)

## ./theme.js

I seperated light mode and dark mode of the color values.

```jsx
//./theme.js
const theme = {
  light: {
    background: '#FFFEFC',
    fontColor: '#2D2B2B',
    red: '#e60023',
    darkRed: '#ad081b',
    ...
  },
  dark: {
    background: '#2D2B2B',
    fontColor: '#fafafa',
    red: '#e60023',
    darkRed: '#ad081b',
    ...
  },
};

export default theme;
```

## ./styles/DarkThemeProvider.js

```jsx
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(state => state.darkMode.isDarkMode);
  return (
    <ThemeProvider theme={darkThemeEnabled ? theme.dark : theme.light}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
```

## ./styles/GlobalStyle.js

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
```

## ./redux/index.js

```jsx
import { combineReducers } from 'redux';
import darkMode from './darkmode';

const rootReducer = combineReducers({
  darkMode,
});

export default rootReducer;
```

## ./redux/darkmode.js

```jsx
const initialState = { isDarkMode: false };

//actions
const DARK_MODE = 'toggle/DARKTHEME';

export const toggleDarkTheme = () => ({ type: DARK_MODE });

export default function darkModeReducer(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE:
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}
```

## ./index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';
import Routers from './Routers';
import DarkThemeProvider from './styles/DarkThemeProvider';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <DarkThemeProvider>
      <GlobalStyle />
      <Routers />
    </DarkThemeProvider>
  </Provider>,
  document.getElementById('root')
);
```

## ./store.js

Here is magic that save your state of the darkmode in your local storage.

```jsx
import { createStore } from 'redux';
import rootReducer from './redux/index';

const localStorageKey = 'theme';
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
  darkMode: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const preferences = store.getState().darkMode;
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export default store;
```

## ./components/Nav.js Button for the dark mode

The dark mode button placed on the navigation.

```jsx
import { useSelector, useDispatch } from 'react-redux';

...

const isDarkTheme = useSelector(state => state.darkMode.isDarkMode);
const dispatch = useDispatch();

const toggleDarkMode = () => {
    dispatch(toggleDarkTheme());
  };

...

<Icon onClick={toggleDarkMode}>
    {isDarkTheme ? (
      <MdWbSunny style={buttonStyle} />
    ) : (
      <MdStarOutline style={buttonStyle} />
    )}
</Icon>
...
```

## Resource

- Mainly inspired by blog, [Implementing a dark theme toggle with react-redux and styled-components](https://levelup.gitconnected.com/implementing-a-dark-theme-toggle-with-react-redux-and-styled-components-e637c4d41e2f)
- [Wecode](www.wecode.co.kr)
- This code is for my Winterest project, the Pinterest cloning project
  - [Winterest website](http://wecode26winterestproject.s3-website.ap-northeast-2.amazonaws.com/) published using [AWS S3](https://aws.amazon.com/?nc2=h_lg)
  - [Demo video](https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing)
  - [Showcase](https://drive.google.com/file/d/1wh3uxFrbqOR_65DGYM8RUOlCP-cuKJhI/view?usp=sharing) recorded on the final presentation of the project on 26th Nov 2021
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-2nd-Weterest-frontend)
  - [Trello](https://trello.com/b/Q966JjyT/weterest)
