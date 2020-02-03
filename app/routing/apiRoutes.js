var connection = require("../config/connection.js");

module.exports = function(app) {
  // Get all contactform entries
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM contactform";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a contact form entry
  app.post("/api/new", function(req, res) {
    console.log("Form Data:");
    console.log(req.body);
    var dbQuery = "INSERT INTO contactform (name, sender_email, reason, message) VALUES (?,?,?,?)";

    connection.query(dbQuery, [req.body.name, req.body.sender_email, req.body.reason, req.body.message], function(err, result) {
      if (err) throw err;
      console.log("entry Successfully Saved!");
      res.end();
    });
  });
};
