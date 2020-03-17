
var refs = {
  contactModal: {
    open: function open() {
      $(".modal").toggleClass("is-active");
    },
    close: function close() {
      $("#contactModal").toggleClass("is-active");
      $(".modal-card-title").text("");
    }
  }
};

function validateEmail (contactData) {
  var email = contactData.emailField;
  var emailChar = /[@.]/,gi;
  var results = emailChar.test(email);
  try{
    if(results === false) throw "Invalid Email Address"
  }
  catch(err){
    console.log(err);
  }
  finally{
    sendEmail(contactData);
  };
}

function sendEmail (contactForm){
  $.post("/api/contactforms", contactForm, closeForm(contactForm.name))
  $.post("/send", contactForm)
}

function closeForm(senderName) {
  $("#contact-form").hide();
  $("#name").val("");
  $("#sender_email").val("");
  $("#reason option:selected").text("");
  $("#message").val("");
  $(".modal-card-title").text('Your message has been sent!');
  $("#contactmodalbody").text('Thank you ' + senderName + ". I'll be in touch!");
  refs.contactModal.open();
}

$(document).ready(function () {
  $(document).on("submit", "#contact-form", captureContactform); 
  function captureContactform(event) {
    event.preventDefault();
    var contactform = {
      name: $("#name").val().trim(),
      sender_email: $("#sender_email").val().trim(),
      reason: $("#reason option:selected").text(),
      message: $("#message").val().trim(),
      complete: false
    }; 
    validateEmail(contactform);      
  }
  
});