---
layout: post-base
title: Snack - Unable to resolve module 'formik.js'
meta: test
source: https://flaviocopes.com/npm-fix-missing-write-access-error/
category: troubleShoot
---
add `"formik": "1.3.0"` commend line in `package.json`

```js
{
  "dependencies": {
    "react-native-paper": "3.6.0",
    "expo-constants": "~11.0.2",
    "formik": "1.3.0"
  }
}
```