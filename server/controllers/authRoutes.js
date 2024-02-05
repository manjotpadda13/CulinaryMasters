const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if the email is already in use
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log("This user already exists", existingUser);
      return res.status(400).json({ error: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  console.log("Will login", user);
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user.id;
    res.status(200).json({ user: user });
  } else {
    res.redirect("/login");
  }
});

// Logout route
router.post("/logout", (req, res) => {
  console.log("enters logout flow");
  req.session.destroy((err) => {
    if (err) {
      console.error("Session destruction error:", err);
      return res.redirect("/some-error-page");
    }
    res.status(200).send();
  });
});

router.get("/expired", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Session destruction error:", err);
    }
    res.redirect("/");
  });
});

module.exports = router;
