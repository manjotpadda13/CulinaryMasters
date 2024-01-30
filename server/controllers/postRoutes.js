const express = require("express");
const router = express.Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.session.userId;

    const newPost = await Post.create({
      title,
      content,
      userId,
    });

    res.redirect("/posts");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/update", async (req, res) => {
  const { id } = req.body;
  console.log("Enters update", id);
  const { title, content } = req.body;
  try {
    const post = await Post.findByPk(id);
    if (post) {
      post.title = title;
      post.content = content;
      await post.save();
      res.redirect("/posts");
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  console.log("hello?");
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (post) {
      await post.destroy();
      // res.json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
    res.redirect("/posts");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
