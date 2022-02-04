---
layout: post-base
title: 여러 서브디렉토리로 mocha 테스트 정리하기
meta: 테스트를 위한 모카 테스터 스크립트
source: http://dev.rdybarra.com/2015/07/24/Organizing-mocha-tests-in-subdirectories/
category: javascript
tags: [Javascript]
---

```text
// 폴더 위계

test/
    test1.js
    test2.js
    test_group/
        test_group_test1.js

```

```text
// 스크립트 react ver
...
"scripts": {
  "test": "mocha $(find test -name '*.js')"
}
...
```

```text
// 스크립트 typscript ver
...
"scripts": {
  "test": "env TS_NODE_COMPILER_OPTIONS='{\"module\": \"commonjs\" }' mocha -r ts-node/register $(find test -name '*.ts')",
}
...
```
