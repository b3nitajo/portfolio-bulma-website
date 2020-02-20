
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
    
    // var contactforms = [];
    getContactforms();
   
    
    function closeForm(senderName) {
        $("#contact-form").hide();
        $("#name").val("");
        $("#sender_email").val("");
        $("#reason option:selected").text("");
        $("#message").val("");
        $(".modal-card-title").text('Thank you ' + senderName + ". I'll be in touch!");
        refs.contactModal.open();
    }

    function insertContactform(event) {
        event.preventDefault();
        var contactform = {
        name: $("#name").val().trim(),
        sender_email: $("#sender_email").val().trim(),
        reason: $("#reason option:selected").text(),
        message: $("#message").val().trim(),
        // created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        complete: false

        };
        
        $.post("/api/contactforms", contactform, closeForm(contactform.name));
        // $.ajax({
        //   method: "POST",
        //   url: "/contactform/create",
        //   data: newMessage
        // }).then(function(data) {
        //   console.log(data);
        //   // reload page to display devoured burger in proper column
        //   location.reload();
        // });
    }
});