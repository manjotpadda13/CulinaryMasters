const express = require("express");
const router = express.Router();
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  res.render("main");
});

router.get("/post", (req, res) => {
  res.render("post");
});

router.get("/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["content"],
          include: [
            {
              model: User,
              attributes: ["username"],
              as: "user", // Use the correct alias for the User association
            },
            {
              model: Post,
              attributes: [], // You can specify attributes for the Post model if needed
              as: "post", // Use the correct alias for the Post association
            },
          ],
        },
      ],
    });

    if (!post) {
      // Handle case where the post is not found
      return res.status(404).send("Post not found");
    }

    // Convert the post to a plain object
    const plainPost = post.get({ plain: true });

    // Check if the current user is the creator of the post
    const isCreator = req.session.userId === plainPost.userId;

    // Render the view with post details, comments, and isCreator flag
    res.render("card", { post: plainPost, isCreator });
  } catch (error) {
    // Handle server errors
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/post/edit/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!post) {
      return res.status(404).send("Post not found");
    }
    const plainPost = post.get({ plain: true });
    res.render("post", { post: plainPost });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/posts", async (req, res) => {
  try {
    const postInstances = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postInstances.map((post) => post.get({ plain: true }));
    res.render("posts", { posts: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/signup", (req, res) => {
  res.render("signup"); 
});

module.exports = router;
