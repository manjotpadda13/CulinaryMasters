const express = require("express");
// const allRoutes = require('./controllers');
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/connection");

// Sets up the Express App
// =============================================================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
// Requiring our models for syncing
// const { User,Recipes} = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/',allRoutes);

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

app.get("/", (req, res) => {
  res.send("Hello World");
});

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
