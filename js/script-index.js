$('.switcher button').hide();

$(document).ready(function() {

    $('.switcher').hover(function() {
        // over
        $(this).css("background-color", "#74F363")
    }, function() {
        // out
        $(this).css("background-color", "#ddd");
    });

    $('.switcher').click(function(e) {
        $('.switcher button').show(500);

        $(this).dblclick(function(e) {

            $('.switcher button').hide();
            e.preventDefault();

        });
        e.preventDefault();
    });

    $('button[data-style=default]').click(function(e) {
        $('main').css({
            "width": "",
            "float": "",
            "font-size": ""
        });
        console.log("Default");
        e.preventDefault();
    });

    $('button[data-style=narrow]').click(function(e) {
        $('main').css({
            "width": "30%",
            "float": "left",
            "font-size": ""
        });
        console.log("narrow");
        e.preventDefault();
    });

    $('button[data-style=large]').click(function(e) {
        $('main').css({
            "width": "",
            "float": "",
            "font-size": "large"
        });
        console.log("large");
        e.preventDefault();
    });
});