$(function(){

//#tab_1
    $("#tab_1 .tab_item").not(":first").hide();
    $("#tab_1 .tab").click(function() {
        $("#tab_1 .tab").removeClass("active").eq($(this).index()).addClass("active");
        $("#tab_1 .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

//#tab_slider
    $("#tab_slider .tab_item").not(":first").hide();
    $("#tab_slider .tab").click(function() {
        $("#tab_slider .tab").removeClass("active").eq($(this).index()).addClass("active");
        $("#tab_slider .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

// page scrolling
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });

});


