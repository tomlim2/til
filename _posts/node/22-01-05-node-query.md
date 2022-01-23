---
layout: post-base
title: Query for String, Array, Boolean
meta: 쿼리 사용 예시
category: nodejs
tags: [NodeJs, Express, mongoose]
---

```js
//app
const productsRouter = require('./routes/products')
app.use('/api/v1/products', productsRouter)

//router
const router = express.Router();
const {
  getAllProducts,
  getAllProductsStatic,
} = require('../controllers/products');
router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);
module.exports = router;

//model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
    // enum: ['ikea', 'libby', 'caressa', 'marcos'],
  },
});

//controller
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

  //Search by name with every character
    queryObject.name = { name: { $regex: name, $option: "i" } };
  }

  //Mongoose method for MongoDB's CRUD operator
  const products = await Product.find(queryObject);

  res.status(200).json({ products, nbHits: products.length });
};
```

## resource

- [Mongoose Query](https://mongoosejs.com/docs/queries.html)
- [MongoDB Query](https://docs.mongodb.com/manual/reference/operator/query/)
