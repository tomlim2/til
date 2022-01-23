---
layout: post-base
title: MongoDB - mongoose queries
meta: Static helper functions for CRUD operations
category: nodejs
source: https://mongoosejs.com/docs/queries.html
tags: [NodeJs, MongoDB, Express, mongoose]
---

```js
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    // error for same format but cannot find the item
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    // error for general monogoose error if the database got id with different format
    res.status(500).json({ msg: error });
  }
};
```

## Queries

These are static helper functions for CRUD operations that Mongogoose models provide.

## Two errors

## Resource

- [Mongogoose Doc](https://mongoosejs.com/docs/queries.html)
- Node Projects - [Task Manager API by Coding Addict](https://www.youtube.com/watch?v=jIsj0upCBAM&list=PLnHJACx3NwAdl4yeJF6LzjDiLyW1yF9Ds&index=1)
