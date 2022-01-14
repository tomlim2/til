---
layout: post-base
title: Authentication basic MVC with JWT
meta: 인증인가 기본 프로세스
category: NodeJs
tags: [NodeJs, Express, mongoose]
---

{% raw %}

```js
//app.js
const mainRouter = require("./routes/main");
app.use("/api/v1", mainRouter);

//routes/main.js
const router = express.Router();
const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);
module.exports = router;

//controller/main.js
const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};
const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hi ${req.user.username}`,
    secret: `here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
module.exports = {
  login,
  dashboard,
};

//middleware/auth.js
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");
const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authrized to access this route");
  }
};
module.exports = authenticationMiddleware;
```

{% endraw %}

## resource

- [Code Addict](https://www.youtube.com/watch?v=rltfdjcXjmk&list=PLnHJACx3NwAdl4yeJF6LzjDiLyW1yF9Ds&index=3)
- [JWT](https://www.jwt.io)
