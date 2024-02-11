const Session = require("./session");
const User = require("./user");
const Recipe = require("./Recipe");
const Comment = require("./comment");

User.hasMany(Session, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Comment, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Recipe, { foreignKey: "userId", onDelete: "CASCADE" });

Session.belongsTo(User, { foreignKey: "userId" });

Comment.belongsTo(User, { foreignKey: "userId", as: "user" });
Comment.belongsTo(Recipe, { foreignKey: "recipeId", as: "recipe" });

Recipe.belongsTo(User, { foreignKey: "userId" });
Recipe.hasMany(Comment, { foreignKey: "recipeId", onDelete: "CASCADE" });

module.exports = {
  Comment,
  Session,
  User,
  Recipe,
};
