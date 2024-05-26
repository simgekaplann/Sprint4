$(document).ready(function() {
    // Add fancybox functionality to the img elements inside the .event class
    $('.event a').fancybox({
        // Use the alt text as the caption for the image
        caption: function(instance, item) {
            return $(this.element).next('p').text();
        },
        
        afterShow: function(instance, current) {
            // Add a close button below the image
            var closeButton = '<button class="fancybox-close-btn" onclick="closeFancybox()">Close</button>';
            $(current.$content).append(closeButton); // Append it below the image
        }
        

    });
    function closeFancybox() {
        $.fancybox.close(); // Close the fancybox
    }
       
 
});
