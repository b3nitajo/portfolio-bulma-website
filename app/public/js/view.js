
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

$(document).ready(function () {
  $(document).on("submit", "#contact-form", insertContactform); 
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

  function insertContactform(event) {
    event.preventDefault();
    var contactform = {
      name: $("#name").val().trim(),
      sender_email: $("#sender_email").val().trim(),
      reason: $("#reason option:selected").text(),
      message: $("#message").val().trim(),
      complete: false
    };   
    $.post("/api/contactforms", contactform, closeForm(contactform.name))
    $.post("/send", contactform)      
  }
  
});