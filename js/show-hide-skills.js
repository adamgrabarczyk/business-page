$(document).ready(function() {
    $('#toggle').click(function() {
        $('.content').slideToggle("slow");
        if(".content".style.display === "none") {
            "#toggle".innerHtml = "zwiń";
        }

    });
});

