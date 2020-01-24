
var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/craft", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/craft.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
