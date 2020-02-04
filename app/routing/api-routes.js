var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/contactforms", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbContactform) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbContactform);
    });
  });

  // POST route for saving a new todo
  app.post("/api/contactforms", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Contactform.create({
      name: req.body.name,
      sender_email: req.body.sender_email,
      reason: req.body.reason,
      message: req.body.message,
      complete: req.body.complete
    }).then(function(dbContactform) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbContactform);
    });
  });

  // // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // // req.params.id
  // app.delete("/api/contactforms/:id", function(req, res) {

  // });

  // // PUT route for updating todos. We can get the updated todo from req.body
  // app.put("/api/contactforms", function(req, res) {

  // });
};
