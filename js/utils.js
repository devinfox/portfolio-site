$(document).ready(function(){

    // Send email.
    $("#send-email").click(function(){
        // Get values.
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#textarea').val();

        $.post("./mail/mail.php",
        {
          name: name,
          email: email,
          body: message
        },
        function(data) {
          if(data.success) {
            // Toast message of success.
            Materialize.toast('Email sent', 4000)
            // Clear input fields.
            $('#name').val("");
            $('#email').val("");
            $('#textarea').val("");
          } else {
            // Toast message of error.
            Materialize.toast('Something went wrong', 4000)
          }
        });
    });
});