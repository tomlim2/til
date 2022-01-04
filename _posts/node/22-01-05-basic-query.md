---
layout: post-base
title: Query for string, array, boolean
meta: 포트 변수 설정하기
category: node
tags: [NodeJs, Express, mongoose]
---

```js
const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { name: { $regex: name, $option: "i" } };
  }
  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};
```

## resource

- [Mongoose Query](https://mongoosejs.com/docs/queries.html)
- [MongoDB Query](https://docs.mongodb.com/manual/reference/operator/query/)
