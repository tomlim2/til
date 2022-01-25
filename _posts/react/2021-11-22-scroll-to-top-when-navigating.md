---
layout: post-base
title: Scroll to top when navigating (React Router v6)
meta: 네비게이트하면 화면을 최상단으로 가게 하는 로직
category: react
tags: [React]
---

```jsx
import { useLocation } from 'react-router-dom';

...

const location = useLocation();

useEffect(() => {
window.scrollTo(0, 0);
}, [location]);

...
```

## Resource

- [React Router v6](https://reactrouter.com/)
- [kindacode](https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/)
