$(document).ready(function() {
    // Selecting input fields
    var nameInput = $('#name');
    var emailInput = $('#email');
    var messageInput = $('#message');
    var subjectInput = $('#subject');

    // Form submission validation
    $('#mycontact').on('submit', function(event) {
        event.preventDefault(); 

        // Trim whitespace from input values using the trim() function
        var nameValue = nameInput.val().trim();
        var emailValue = emailInput.val().trim();
        var messageValue = messageInput.val().trim();
        var subjectValue = subjectInput.val().trim();

        // Validate each input field value
        if (nameValue === '') {
            nameInput.css('border', '2px solid #ff0000'); // Add red border
            event.preventDefault(); // Prevent form submission
        } else {
            nameInput.css('border', '1px solid #ccc'); // Reset border to default
        }

        if (emailValue === '') {
            emailInput.css('border', '2px solid #ff0000'); // Add red border
            event.preventDefault(); // Prevent form submission
        } else {
            emailInput.css('border', '1px solid #ccc'); // Reset border to default
        }

        if (messageValue === '') {
            messageInput.css('border', '2px solid #ff0000'); // Add red border
            event.preventDefault(); // Prevent form submission
        } else {
            messageInput.css('border', '1px solid #ccc'); // Reset border to default
        }
        
        if (subjectValue === '') {
            subjectInput.css('border', '2px solid #ff0000'); // Add red border
            event.preventDefault(); // Prevent form submission
        } else {
            subjectInput.css('border', '1px solid #ccc'); // Reset border to default
        }
    });

    // Enable the Dialog widget
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function() {
                $(this).dialog("close");
                // Clear form fields
                nameInput.val('');
                emailInput.val('');
                messageInput.val('');
                subjectInput.val('');
                // Reset borders to default
                nameInput.css('border', '1px solid #ccc');
                emailInput.css('border', '1px solid #ccc');
                messageInput.css('border', '1px solid #ccc');
                subjectInput.css('border', '1px solid #ccc');
            }
        }
    });

    // Open the Dialog when the form is submitted
    $("#mycontact").on("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        $("#dialog-message").dialog("open"); // Open the Dialog
    });
});

$(document).ready(function() {
   // Suggested Options
    var about = [
        "About Tesla",
        "Tesla Vehicles",
        "Tesla Energy Products",
        "Tesla Charging Stations",
        "Tesla Autopilot Technology",
        "Tesla Solar Roof",
        "Tesla Events",
        "Tesla Careers",
        "Tesla News",
        "Tesla Stock Information",
        "Tesla Roadster",
        "Tesla Powerwall",
        "Tesla Powerpack",
        "Tesla Superchargers",
        "Full Self-Driving",
        "Tesla Gigafactories",
        "Battery Day",
        "AI Day",
        "Tesla Investor Relations",
        "Event",
        "WebSite Problem"
    ];

    // Enable Autocomplete feature
    $("#subject").autocomplete({
        source: about // List of recommended data
    });
});
