$(document).ready(function() {
    $("#moreAboutBtn").click(function() {
        var filename = "extra_info.json"; // JSON dosyanızın adı
        consumeJSON(filename);
    });
});

function consumeJSON(jsonFileURL) {
    $.ajax({
        url: jsonFileURL,
        dataType: "json",
        success: function(data) {
            console.log("deneme");
            // JSON dosyasından alınan bilgileri sayfada güncelle
            $(".intro-text").html(data.extraInfo);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error loading JSON:', textStatus, errorThrown); // Hata mesajını konsola yazdır
            alert('Error loading data from ' + jsonFileURL);
        }
    });
}
