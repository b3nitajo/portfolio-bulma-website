var db = require("./app/models");
var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer"); 

var app = express();
var PORT = process.env.PORT || 8080;
var env = require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/send', (req, res) => {
  //const message = req.body;
  

    let mailOptions = {
      from: 'benitajones@cultivating-craft.com',
      to: 'benitajones@cultivating-craft.com',
      cc: req.body.sender_email,
      subject: 'RE: ' + req.body.reason,
      text: '',
      html: '<p>Thank you for reaching out! Your message is below:</p><p>' + req.body.message + '</p>',
    };

  
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: 'benitajones@cultivating-craft.com',
      pass: process.env.EMAIL_PASS
    }, tls:{
      rejectUnauthorized: false
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      return console.log(error);
    }
    console.log('Message sent:', info.response);
  })
  //console.log(req.body);
  //console.log(mailOptions);
  //console.log(transporter);
});

require("./app/routing/htmlRoutes")(app);
require("./app/routing/api-routes.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});