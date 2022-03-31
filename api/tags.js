const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params

  try {
    const tagName = await getPostsByTagName();
    // use our method to get posts by tag name from the db
    // send out an object to the client { posts: // the posts }

    const tags = tagName.filter((tag) => {
      if (post.active) {
        return true;
      }
      if (req.user && post.author.id === req.user.id) {
        return true;
      }

      return false;
    });

    res.send({
      posts: tagName,
    });
  } catch ({ name, message }) {
    next({ name, message });
    // forward the name and message to the error handler
  }
});

module.exports = tagsRouter;
