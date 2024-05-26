$(document).ready(function() {
    // Form submission validation
    $('#myForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form inputs
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();

        // Check if any field is empty
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        var nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            alert("Name can only contain letters.");
            return;
        }
       

        // Submit the form if all validations pass
        $("#dialog-message").html("<p>Your message has been sent successfully!</p>").dialog("open"); // Open the dialog
    });

    // Enable the dialog widget
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function() {
                $("#myForm")[0].reset();
                $(this).dialog("close");
            }
        }
    });
    
    // Redirect to 'calendar.html' when the View Calendar button is clicked
 $('.calendar-button').on('click', function() {
    window.location.href = 'calendar.html'; 
});
});
