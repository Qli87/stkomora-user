(function($) {
	'use strict';	
        $('.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 9000,
        });
        $('.flexslider-thumbnails').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
        });
        $('.flexslider-photo').flexslider({
            animation: "fade",
			controlNav: false,
            slideshowSpeed: 15000,
        });
})(jQuery);

