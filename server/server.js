const express = require('express');
// const allRoutes = require('./controllers');
const cors = require("cors");

const sequelize = require('./config/connection');

// Sets up the Express App
// =============================================================
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;
// Requiring our models for syncing
// const { User,Recipes} = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/',allRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World');
})

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});