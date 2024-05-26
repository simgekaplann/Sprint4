$(document).ready(function() {
   
    // Enable the datepicker widget for the 'date' input field
    $("#date").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: 0, // Disable dates before today
        onSelect: function(selectedDate) {
            // Place the selected date into the input field
            $("#date").val(selectedDate);
        }
    });

    // Enable the timepicker plugin for the 'time' input field
    $("#time").timepicker({
        timeFormat: "h", 
        interval: 15,
        minTime: "9:00am",
        maxTime: "6:00pm",
        startTime: "9:00am",
        dynamic: false,
        dropdown: true,
        scrollbar: true,
        showOn: 'focus'
    });

    // Add click event listener to the form submission button
    $("#reservationForm").on("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form inputs
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var date = $("#date").val().trim();
        var time = $("#time").val().trim();
        var participants = $("#participants").val().trim();

        // Check if any field is empty
        if (name === "" || email === "" || phone === "" || date === "" || time === "" || participants === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Check phone format
        var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number (e.g., 123-456-7890).");
            return;
        }
         // Check if name contains only letters
         var nameRegex = /^[A-Za-z\s]+$/;
         if (!nameRegex.test(name)) {
             alert("Name can only contain letters.");
             return;
         }
 
         // Check if time contains only numbers
         var timeRegex = /^\d+$/;
         if (!timeRegex.test(time)) {
             alert("Please enter a valid time.");
             return;
         }

        // Submit the form if all validations pass
        $("#dialog-message").html("<p>Your reservation has been successfully created!</p>").dialog("open"); // Open the dialog
    });

    // Enable the dialog widget
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function() {
                $("#reservationForm")[0].reset();
                $(this).dialog("close");
            }
        }
    });

    // Apply mask to the 'phone' input field for phone number formatting
    $('#phone').mask('000-000-0000', { placeholder: '___-___-____' });
});




