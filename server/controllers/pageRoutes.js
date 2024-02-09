const express = require("express");
const router = express.Router();
const { Recipe, User, Comment } = require("../models");

router.get("/recipe/:id", async (req, res) => {
  try {
    const recipeId = req.params.id;

    const recipe = await Recipe.findByPk(recipeId, {
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
              model: Recipe,
              attributes: [], // You can specify attributes for the Recipe model if needed
              as: "recipe", // Use the correct alias for the recipe association
            },
          ],
        },
      ],
    });

    if (!recipe) {
      // Handle case where the recipe is not found
      return res.status(404).send("Recipe not found");
    }

    // Convert the recipe to a plain object
    const plainRecipe = recipe.get({ plain: true });

    // Check if the current user is the creator of the recipe
    const isCreator = req.session.userId === plainRecipe.userId;

    // Render the view with recipe details, comments, and isCreator flag
    // res.render("card", { recipe: plainRecipe, isCreator });
  } catch (error) {
    // Handle server errors
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/recipe/edit/:id", async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findByPk(recipeId, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!recipe) {
      return res.status(404).send("recipe not found");
    }
    const plainRecipe = recipe.get({ plain: true });
    // res.render("recipe", { recipe: plainRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const recipeInstances = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const recipes = recipeInstances.map((recipe) =>
      recipe.get({ plain: true })
    );
    // res.render("recipes", { recipes: recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
