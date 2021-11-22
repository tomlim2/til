---
layout: post-base
title: Scroll to Top When Navigating (React router dom v6)
meta: 네비게이트하면 라우터를 활용한 화면 최상단으로 가게 하는 로직
category: React
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
