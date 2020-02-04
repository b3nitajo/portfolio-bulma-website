var db = require("./app/models");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var env = require("dotenv").config();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/api-routes.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});