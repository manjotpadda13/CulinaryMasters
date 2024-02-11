const express = require("express");
const router = express.Router();
const { Recipe, User } = require("../models");

router.get("/user", async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userRecipes = await Recipe.findAll({
      where: { userId },
      include: {
        model: User,
        attributes: ["username"],
      },
    });

    const userData = {
      user: {
        username:
          userRecipes.length > 0
            ? userRecipes[0].User.username
            : "Unknown User",
      },
      recipes: userRecipes,
    };

    res.send(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const recipes = await Recipe.findAll({
      include: User,
    });

    const responseData = {
      user: user,
      recipes: recipes,
    };

    res.send(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findByPk(id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ error: "recipe not found" });
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

    const newRecipe = await Recipe.create({
      title,
      content,
      userId,
    });

    res.status(200).send(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/update", async (req, res) => {
  const { id } = req.body;
  const { title, content } = req.body;
  try {
    const recipe = await Recipe.findByPk(id);
    if (recipe) {
      recipe.title = title;
      recipe.content = content;
      await recipe.save();
      res.status(200).send();
    } else {
      res.status(404).json({ error: "recipe not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(1);
  try {
    const recipe = await Recipe.findByPk(id);
    console.log(2);

    if (recipe) {
      console.log(3);

      await recipe.destroy();
      console.log(4);

      res.json({ message: "recipe deleted successfully" });
    } else {
      res.status(404).json({ error: "recipe not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
