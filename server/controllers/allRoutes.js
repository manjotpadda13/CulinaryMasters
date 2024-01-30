const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (error) {}
});

router.get("/login", async (req, res) => {
  try {
    res.render("pages/login");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

router.get("pages/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {}
});

module.exports = router;
