$(document).ready(function() {
	'use strict';
    var myScrollTop = function(){
       $(".scrolltop").jCarouselLite({
            vertical: true,
            hoverPause:true,
            visible: 1,
            auto:6500,
            speed:1000
        });
    }
	$(window).on("load", myScrollTop);
	$(window).on("resize", function(){
        setTimeout(function(){
            myScrollTop();
        }, 1000);
    });
});