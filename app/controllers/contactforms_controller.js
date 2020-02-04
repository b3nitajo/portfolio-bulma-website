
var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/contactforms");
});

// get route, edited to match sequelize
router.get("/contactforms", function(req, res) {
  // replace old function with sequelize function
  db.Contactform.findAll({
    include: [db.Contactform],
    // Here we specify we want to return our burgers in ordered by ascending burger_name
    order: [
      ["name", "ASC"]
    ]
  })
  // use promise method to pass the burgers...
    .then(function(dbContactform) {
    // into the main index, updating the page
      var hbsObject = {
        contactform: dbContactform
      };
      return res.render("contact", hbsObject);
    });
});

// post route to create burgers
router.post("/contactforms/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Contactform.create({
    name: req.body.name,
    sender_email: req.body.sender_email,
    reason: req.body.reason,
    message: req.body.message
  })
  // pass the result of our call
    .then(function(dbContactform) {
    // log the result to our terminal/bash window
      console.log(dbContactform);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
// router.put("/contactforms/update", function(req, res) {
//   // If we are given a customer, create the customer and give them this devoured burger
//   if (req.body.name) {
//     db.Customer.create({
//       customer: req.body.customer,
//       BurgerId: req.body.burger_id
//     })
//       .then(function(dbCustomer) {
//         return db.Burger.update({
//           devoured: true
//         }, {
//           where: {
//             id: req.body.burger_id
//           }
//         });
//       })
//       .then(function(dbBurger) {
//         res.json("/");
//       });
//   }
//   // If we aren't given a customer, just update the burger to be devoured
//   else {
//     db.Burger.update({
//       devoured: true
//     }, {
//       where: {
//         id: req.body.burger_id
//       }
//     })
//       .then(function(dbBurger) {
//         res.json("/");
//       });
//   }
// });

module.exports = router;
