---
layout: post-base
title: Query Sort
meta: 데이터 분류하기
category: node
tags: [NodeJs, Express, mongoose]
---

{% raw %}

```text
//Postman

{{URL}}/products?sort=name,price
```

```js
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
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

  // console.log(queryObject);
  let result = Product.find(queryObject);
  // sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
    console.log(result);
  } else {
    result = result.sort("createAt");
  }
  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
};
```

{% endraw %}

## resource

- [Mongoose Query](https://mongoosejs.com/docs/queries.html)
- [MongoDB Query](https://docs.mongodb.com/manual/reference/operator/query/)
