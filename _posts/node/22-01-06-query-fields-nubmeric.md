---
layout: post-base
title: Query fields, pagination, numericFilters
meta: 데이터 분류하기
category: NodeJs
tags: [NodeJs, Express, mongoose]
---

{% raw %}

```text
//Postman

{{URL}}/products?price>40,rating>=4
{{URL}}/products?fields=company,rating
{{URL}}/products?limit=5&page=2
```

```js
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { name: { $regex: name, $option: 'i' } };
  }

  //I need research around this:)
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      match => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach(item => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
    console.log(result);
  } else {
    result = result.sort('createAt');
  }

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
};
```

{% endraw %}

## resource

- [Mongoose Query](https://mongoosejs.com/docs/queries.html)
- [MongoDB Query](https://docs.mongodb.com/manual/reference/operator/query/)
- [Code Addict](https://www.youtube.com/watch?v=rltfdjcXjmk&list=PLnHJACx3NwAdl4yeJF6LzjDiLyW1yF9Ds&index=3)
