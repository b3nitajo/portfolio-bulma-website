

$(document).ready(function () {
    $(document).on("submit", "#contact-form", insertContactform);
    
    // var contactforms = [];
    getContactforms();
   

    function getContactforms() {
        $.get("/api/contactforms", function(data) {
        contactforms = data;
        });
    }

    function insertContactform(event) {
        event.preventDefault();
        var contactform = {
        name: $("#name").val().trim(),
        sender_email: $("#sender_email").val().trim(),
        reason: $("#reason").val().trim(),
        message: $("#message").val().trim(),
        // created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        complete: false

        };
        
        $.post("/api/contactforms", contactform, getContactforms);
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