(function ($) {
	"use strict";
    var core = {
        initialize: function() {
            this.event();
            this.imageStyle();
        },
        event : function(){
			// ------------------------------------------------------------------------------ //
			// Change navbar class
			// ------------------------------------------------------------------------------ //
			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if(scrollTop != 0){
					$(".navbar-centered").addClass("navbar-centered-clear");
					$(".navbar-fixed.white").addClass("fixsticky");
					return false;
				} else {
					$(".navbar-centered").removeClass("navbar-centered-clear");
					$(".navbar-fixed.white").removeClass("fixsticky");
					return false;
				}
			});
			
			// ------------------------------------------------------------------------------ //
			// Accordions
			// ------------------------------------------------------------------------------ //
            $(".panel-collapse").each(function(){
                if( $(this).hasClass("in") ){
                    $(this).closest(".panel").addClass("on");
                }
                
                var getId = $(this).attr("id");
                $("#" + getId).on('shown.bs.collapse', function () {
                    $(this).closest(".panel").addClass("on");
                });	
                
                $("#" + getId).on('hidden.bs.collapse', function () {
                    $(this).closest(".panel").removeClass("on");
                });	
            });
            
            // ------------------------------------------------------------------------------ //
			// Modal
			// ------------------------------------------------------------------------------ //
            $('.modal').on('show.bs.modal', function() {
                $(this).show();
                core.setModalMaxHeight(this);
            });
            
            // ------------------------------------------------------------------------------ //
			// Tabs
			// ------------------------------------------------------------------------------ //
            $(".custom-tabs, .tabbable").each(function(){
                var getEffect = $(this).data("effect-in");
                $(".tab-content > .tab-pane", this).addClass("animated");
                
                $('a[data-toggle="tab"]', this).on('show.bs.tab', function (e) {
                    var target = $(e.target).attr("href"),
                        relatedTarget = $(e.relatedTarget).attr("href");
                    $(relatedTarget).removeClass(getEffect);
                    $(target).addClass(getEffect);
                    setTimeout(function(){
                    }, 500);
                });
                
                $('.fixed-nav-tabs a', this).on('show.bs.tab', function (e) {
                    setTimeout(function(){
                        core.masonryGrid();
                        core.imageStyle();
                    }, 500);
                });
            });
			
			// ------------------------------------------------------------------------------ //
			//Team hover
			// ------------------------------------------------------------------------------ //
			$(".team-frame, .team-detail").css({'opacity':'0','filter':'alpha(opacity=0)'});
			$(".team-row").each(function(){
				$(this).on("mouseenter", function() {
					$(this).find('.team-frame').stop().fadeTo(900, 0.5);
					$(this).find('.team-detail').stop().fadeTo(900, 1);
					return false;
				});
				$(this).on("mouseleave", function() {
					$(this).find('.team-frame').stop().fadeTo(900, 0);
					$(this).find('.team-detail').stop().fadeTo(900, 0);
					return false;
				});
			});

			// ------------------------------------------------------------------------------ //
			//Product hover
			// ------------------------------------------------------------------------------ //
			$(".product-caption, .facebook, .twitter, .instagram").css({'opacity':'0','filter':'alpha(opacity=0)'});
			$(".product-wrapper").each(function(){
				$(this).on("mouseenter", function() {
					$(this).find('.product-caption').stop().fadeTo(900, 1);
					$('.add-cart', this).stop().animate({bottom:'120px'},{queue:false,duration:500});
					$('.view-detail', this).stop().animate({bottom:'70px'},{queue:false,duration:300});
					$('.share', this).stop().animate({bottom:'20px'},{queue:false,duration:50});
					return false;
				});
				$(this).on("mouseleave", function() {
					$(this).find('.product-caption').stop().fadeTo(900, 0);
					$('.add-cart', this).stop().animate({bottom:'100%'},{queue:false,duration:500});
					$('.view-detail', this).stop().animate({bottom:'100%'},{queue:false,duration:500});
					$('.share', this).stop().animate({bottom:'100%'},{queue:false,duration:500});
					return false;
				});
			});

			$(".share, .social-share").each(function(){
				$(this).on("mouseenter", function() {
					$('.facebook').stop().fadeTo(50, 1);
					$('.twitter').stop().fadeTo(300, 1);
					$('.instagram').stop().fadeTo(500, 1);
					return false;
				});
				$(this).on("mouseleave", function() {
					$('.facebook').stop().fadeTo(50, 0);
					$('.twitter').stop().fadeTo(300, 0);
					$('.instagram').stop().fadeTo(500, 0);
					return false;
				});
			});
 
			// ------------------------------------------------------------------------------ //
			//Clients hover
			// ------------------------------------------------------------------------------ //
			$(".client-hover").css({'opacity':'0','filter':'alpha(opacity=0)'});
			$(".client-logo").each(function(){
				$(this).on("mouseenter", function() {
					$(this).find('.client-default').stop().fadeTo(900, 0);
					$(this).find('.client-hover').stop().fadeTo(900, 1);
					return false;
				});
				$(this).on("mouseleave", function() {
					$(this).find('.client-default').stop().fadeTo(900, 1);
					$(this).find('.client-hover').stop().fadeTo(900, 0);
					return false;
				});
			});
			
			// ------------------------------------------------------------------------------ //
			//Upload photo
			// ------------------------------------------------------------------------------ //
			$(".photo-caption").css({'opacity':'0','filter':'alpha(opacity=0)'});
			$(".photo-profile").each(function(){
				$(this).on("mouseenter", function() {
					$(this).find('.photo-caption').stop().fadeTo(400, 1);
					return false;
				});
				$(this).on("mouseleave", function() {
					$(this).find('.photo-caption').stop().fadeTo(400, 0);
					return false;
				});
			});

			// ------------------------------------------------------------------------------ //
			//Process column
			// ------------------------------------------------------------------------------ //
			$(".precess-column").each(function(){
				$(this).on("mouseenter", function() {
					$(".precess-icons", this).stop().animate({
						'width' : '35px', 'height' : '35px', 'top' : '100%', 'left' : '50%','padding-top' : '0', 'margin-top' : '-45px', 'margin-left' : '25px', 'font-size' : '12px', 'line-height' : '24px',
					},{queue:false});
					$(".count", this).stop().animate({
						'width' : '90px', 'height' : '90px', 'top' : '50%', 'left' : '50%', 'margin-top' : '-45px', 'margin-left' : '-45px', 'font-size' : '62px', 'line-height' : '74px',
					},{queue:false});
					$(".icons-primary .fa", this).stop().animate({
						'font-size' : '56px','line-height' : '56px',
					},{queue:false});
					$(".icons-primary h6", this).stop().animate({
						'opacity' : '0',
					},{queue:false});
					$(this).addClass('hover');
					return false;
				});
				$(this).on("mouseleave", function() {
					$(".count", this).stop().animate({
						'width' : '35px', 'height' : '35px', 'top' : '100%', 'left' : '50%', 'margin-top' : '-45px', 'margin-left' : '25px', 'font-size' : '14px', 'line-height' : '23px',
					},{queue:false});
					$(".precess-icons", this).stop().animate({
						'width' : '90px', 'height' : '90px', 'top' : '50%', 'left' : '50%', 'padding-top' : '20px', 'margin-top' : '-45px', 'margin-left' : '-45px', 'font-size' : '52px', 'line-height' : '45px',
					},{queue:false});
					$(".icons-primary .fa", this).stop().animate({
						'font-size' : '32px','line-height' : '34px',
					},{queue:false});
					$(".icons-primary h6", this).stop().animate({
						'opacity' : '1',
					},{queue:false});
					$(this).removeClass('hover');
					return false;
				});
			});
			
            // ------------------------------------------------------------------------------ //
			// Box icon
			// ------------------------------------------------------------------------------ //
            $(".box-icon").each(function(){
                $(".fa", this).addClass("animated");
                $(this).on("mouseenter", function(){
                    $(".fa", this).addClass("swing");
                });
                $(this).on("mouseleave", function(){
                    $(".fa", this).removeClass("swing");
                });
                
                if( $(this).hasClass("bg") ){
                    var getBg = $(this).data("background");
                    $(this).css("background-image","url(" + getBg + ")");
                }
            });
            
            $(".box-icon-border").each(function(){
                $(".fa", this).addClass("animated");
                $(this).on("mouseenter", function(){
                    $(".fa", this).addClass("pulse");
                });
                $(this).on("mouseleave", function(){
                    $(".fa", this).removeClass("pulse");
                });
                
                if( $(this).hasClass("bg") ){
                    var getBg = $(this).data("background");
                    $(this).css("background-image","url(" + getBg + ")");
                }
            });  

            // ------------------------------------------------------------------------------ //
			// Alert
			// ------------------------------------------------------------------------------ //
            $(".alert").each(function(){
				$(this).prepend("<span class='close-alert'><i class='fa fa-times-circle'></i></span>");
                var getOut = $(this).data("out");

                $(".close-alert", this).on("click", function(){
                    $(this).closest(".alert").addClass("animated");
                    $(this).closest(".alert").addClass(getOut).delay(1000).slideUp("slow");
                });
            });
			
			// ------------------------------------------------------------------------------ //
			// to top
			// ------------------------------------------------------------------------------ //
            $(window).scroll(function(){
                var scrollTop2 = $(window).scrollTop();
                if(scrollTop2 >= 34){
                    $(".toTop").stop().fadeIn();
                } else {
                    $(".toTop").stop().fadeOut();
                }
            });
            $(".toTop").on("click", function(e){
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });
            
            // ------------------------------------------------------------------------------ //
            // Wrap Team
            // ------------------------------------------------------------------------------ //
            $(".wrap-team").each(function(){
                $(".share", this).find("ul.icon").addClass("animated");
                $(this).on("mouseenter", function(){
                    $(".share", this).find("ul.icon").addClass("pulse");
                });
                $(this).on("mouseleave", function(){
                    $(".share", this).find("ul.icon").removeClass("pulse");
                });
            }); 
							
            // ------------------------------------------------------------------------------ //
			// Counter
			// ------------------------------------------------------------------------------ //			
			if ( $( ".count" ).length ) {
				$(window).on("scroll.myCount", function(){	
					var h_window_1 = $(window).height() * 0.70,
						p_scroll = $('.count').offset().top,
						get_scroll = p_scroll - h_window_1;

					if( $(document).scrollTop() > get_scroll ){
						$(window).off("scroll.myCount");
						$('.count-value').each(function () {
							$(".start-count", this).text('0');
							var data_count = $(this).data("count");
							$(this).prop('Counter1',0).animate({
								Counter1: data_count
							}, {
								duration: 5000,
								easing: 'swing',
								step: function (now1) {
									$(".start-count", this).text(Math.ceil(now1));
								}
							});
						});
					}
				});
			}
            
            // ------------------------------------------------------------------------------ //
			// Progress Bar
			// ------------------------------------------------------------------------------ //
			$(".progress.type3").wrap("<div class='wrap-progress3'></div>");
			$(".progress.type3").append("<span class='circle'></span>");
            if( $("#wrap-progress").length ){
                $(window).on("scroll.myProgress", function(){
                    // Get position scroll
                    var p_progress = $( "#wrap-progress" ).offset().top, 
                        h_window = $(window).height() * 0.9, 
                        get_scroll_progress = p_progress - h_window;

                    if( $(document).scrollTop() > get_scroll_progress ){
                        $(window).off("scroll.myProgress");
                        $("div.progress").each(function(){

                            // Animation progress
                            var progress_bar = $(this).find(".progress-bar");
                            var val_progress = progress_bar.data("value-progress");
                            progress_bar.animate({
                                "width"  : val_progress + '%'
                            });
							
							// Set type2
							if($(this).hasClass("type2")){
								$(".value-progress",this).animate({
									"left"  : val_progress + '%'
								}, {
									duration: 1000
								});
							}
							
							// Set type3
							if($(this).hasClass("type3")){
								$(".circle",this).animate({
									"left"  : val_progress + '%'
								}, {
									duration: 1500
								});
							}

                            // Counter progress					
                            $(this).find(".value-progress").each(function () {
                                $(this).text('0');
                                $(this).prop("Counter",0).animate({
                                    Counter: val_progress
                                }, {
                                    duration: 3000,
                                    step: function (now) {
                                        $(this).text(Math.ceil(now));
                                    }
                                });
                            });

                        });
                    }	
                });
            }	
            // ------------------------------------------------------------------------------ //
            // Toggle Mobile One Columns
            // ------------------------------------------------------------------------------ //
            $(".toggle-mobile").on("click", function(){
                $(".wrap-menu-page .container").slideToggle();
            });
        },
        
        // ------------------------------------------------------------------------------ //
		// Masonry
		// ------------------------------------------------------------------------------ //
        masonryGrid : function(){
            var self = $("#gallery");
            if( self.length ){
                self.masonry({
                    isAnimated: true,
                    columnWidth:".grid-sizer",
                    itemSelector: ".grid-item"
                });

                $(".filter-items li a").on("click",function(e){
                    e.preventDefault();

                    var filter = $(this).attr("data-filter");

                    $(".filter-items  li a").removeClass('active');
                    $(this).addClass('active');

                    self.masonryFilter({
                        filter: function () {
                            if (!filter) return true;
                            return $(this).attr("data-filter") == filter;
                        }
                    });
                });
            }
        },
        
		// ------------------------------------------------------------------------------ //
		// image hover
		// ------------------------------------------------------------------------------ //
		imageStyle : function(){
            $(".img-wrapper").each(function(){
                var getHeight = $("img", this).height(),
                    getIn = $(this).data("in"),
                    getOut = $(this).data("out");
					
			   $(".img-caption").addClass("animated");
               $(".bottomSlide", this).css("height", 80 + "px");
               $(".capzoomIn", this).css("height", getHeight + "px");
			   $(".capzoomIn", this).addClass("zoomOut");
				
                $(this).on("mouseenter", function(){
					$(".bottomSlide", this).css("height", getHeight + "px");
                    $(".bottomSlide", this).removeClass(getOut);
                    $(".bottomSlide", this).addClass(getIn);
					$(".capzoomIn", this).addClass("zoomIn");
					$(".capzoomIn", this).removeClass("zoomOut");
                });
                $(this).on("mouseleave", function(){
					$(".bottomSlide", this).css("height", 80 + "px");
                    $(".bottomSlide", this).removeClass(getIn);
                    $(".bottomSlide", this).addClass(getOut);
					$(".capzoomIn", this).addClass("zoomOut");
					$(".capzoomIn", this).removeClass("zoomIn");
                });
            });
		},

        // ------------------------------------------------------------------------------ //
        // Modal Bootstrap
        // ------------------------------------------------------------------------------ //
        setModalMaxHeight : function(element){
            this.$element     = $(element);  
            this.$content     = this.$element.find('.modal-content');
            var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
            var dialogMargin  = $(window).width() < 768 ? 20 : 60;
            var contentHeight = $(window).height() - (dialogMargin + borderWidth);
            var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
            var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
            var maxHeight     = contentHeight - (headerHeight + footerHeight);

            this.$content.css({
                'overflow': 'hidden'
            });

            this.$element.find('.modal-body').css({
                'max-height': maxHeight,
                'overflow-y': 'auto'
            });
        }
    };
    
    $(window).on("load", function(){
        core.initialize();
		setTimeout(function(){
			$(".wrap-loading").addClass("slideOutUp").fadeOut();
		},500);
        
        //Form
        jcf.replaceAll();
        // Pretty Print shortcode
        window.prettyPrint && prettyPrint();
    });

    $(window).on("resize", function(){
        setTimeout(function(){
            core.imageStyle();
        }, 500);  
        
        // Modals Bootstrap
        if ($('.modal.in').length != 0) {
            core.setModalMaxHeight($('.modal.in'));
        }
    });

}(jQuery));

