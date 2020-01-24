var portfolio = require("../data/portfolio");

module.exports = function(app) {
  app.get("/api/portfolio", function(req, res) {  
    return res.json(portfolio);
  });

};
