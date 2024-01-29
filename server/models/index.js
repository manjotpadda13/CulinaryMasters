const Session = require("./session");
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

User.hasMany(Session, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Comment, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Post, { foreignKey: "userId", onDelete: "CASCADE" });

Session.belongsTo(User, { foreignKey: "userId" });

Comment.belongsTo(User, { foreignKey: "userId", as: "user" });
Comment.belongsTo(Post, { foreignKey: "postId", as: "post" });

Post.belongsTo(User, { foreignKey: "userId" });
Post.hasMany(Comment, { foreignKey: "postId", onDelete: "CASCADE" });

module.exports = {
  Comment,
  Session,
  User,
  Post,
};
