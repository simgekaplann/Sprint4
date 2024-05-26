$(document).ready(function() {
    // Initialize viewbox plugin for elements with the 'image-link' class
    $(function(){
        $('.image-link').viewbox();
    });

    // Initialize viewbox plugin with custom options
    $(function(){
        $('.image-link').viewbox({
            setTitle: true,             
            margin: 20,                 
            resizeDuration: 300,       
            openDuration: 200,          
            closeDuration: 200,        
            closeButton: true,          
            navButtons: true,          
            closeOnSideClick: true,    
            nextOnContentClick: true    
        });
    });
});
