$(document).ready(function() {
    $("#btnSearch").click(function() {
        var searchTerm = $("#search").val();
        if (searchTerm === "") {
            alert("You must enter one or more tags!");
        } else {
            var url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";
            $.getJSON(url, function(data) {
                var html = "";
                $.each(data.items, function(i, item) {
                    html += "<div class='photo-item'>";
                    html += "<h2>" + item.title + "</h2>";
                    html += "<img src='" + item.media.m + "' alt='" + item.title + "'>";
                    html += "<p><b>Tags: </b>" + item.tags + "</p>";
                    html += "</div>";
                });
                $("#news-content").html(html); // Değiştirildi
            });
        }
    });
});




