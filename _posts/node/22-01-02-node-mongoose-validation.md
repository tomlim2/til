---
layout: post-base
title: MongoDB - mongoose validation
meta: 스키마의 필요한 기본적인 유효성 검사
category: node
source: https://mongoosejs.com/docs/validation.html
tags: [NodeJs, MongoDB, Express, mongoose]
---

```js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);
```

Task Manager 구현 중 사용했던 이름과 완료여부를 데이터 베이스에 저장할 때 이름은 필수 키값이며, 이름 앞 뒤에 비어 있고 20자 이상일 때에는 이름을 데이터 베이스에 반영시키지 않는다. 완료여부는 기본적으로 false로 설정했다.
