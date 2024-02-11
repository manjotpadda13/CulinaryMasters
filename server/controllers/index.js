const express = require("express");
const router = express.Router();
const pageRoutes = require("./pageRoutes");
const authRoutes = require("./authRoutes");
const recipeRoutes = require("./recipeRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/", pageRoutes);
router.use("/auth", authRoutes);
router.use("/api/recipe", recipeRoutes);
router.use("/api/comments", commentRoutes);

module.exports = router;
