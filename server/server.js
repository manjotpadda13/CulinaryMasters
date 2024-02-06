const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const allRoutes = require("./controllers");
const path = require("path");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

require("dotenv").config();

const sequelize = require("./config/connection");

const app = express();

const frontendPath = path.join(__dirname, "../client/dist");

app.use(express.static(frontendPath));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const authMiddleware = (req, res, next) => {
  res.locals.isAuthenticated = req.session.userId ? true : false;
  next();
};

const sessionExpiredMiddleware = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ sessionExpired: true });
  }
  next();
};

app.use(
  session({
    secret: "secret",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

app.use(authMiddleware);
app.use("/auth/expired", sessionExpiredMiddleware);
app.use(allRoutes);

// Catch-all route for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
