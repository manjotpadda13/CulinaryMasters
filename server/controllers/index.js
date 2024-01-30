const express = require("express");
const router = express.Router();
const pageRoutes = require("./pageRoutes");
const authRoutes = require("./authRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/", pageRoutes);
router.use("/auth", authRoutes);
router.use("/api/post", postRoutes);
router.use("/api/comments", commentRoutes);

module.exports = router;

