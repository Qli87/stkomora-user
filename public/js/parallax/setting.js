(function($) {
  'use strict';
    var myParallax = function(){
        $(".parallax").each(function(){
            var getBg = $(this).data("background"),
                getSpeed = $(this).data("speed"),
                getPosition = $(this).data("size");

            $(this).css("background-image","url(" + getBg +")");
            $(this).parallax(getPosition, getSpeed);
        });
    }
    $(window).on("load", myParallax);
    $(window).on("resize", function(){
        setTimeout(function(){
            myParallax();
        }, 500);
    });
    
})(jQuery);