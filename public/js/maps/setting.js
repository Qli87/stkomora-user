(function($) {
	'use strict';
    var initMap = function(){            
        if( $("#map").length ){
            var center = {lat: -6.921167, lng: 107.610467};
            var locations = [];

           


            $(".item-map").each(function(){
                var getLat = $(this).data("lat"),
                    getLng = $(this).data("lng"),
                    getAddress = $(this).data("address"),
                    setArray = [getAddress, getLat, getLng];
                locations.push(setArray);
            });
            
            var getColor2 = $(".maps").css("backgroundColor"); 
            var rgb2hex2 = function(rgb){
             rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
             return (rgb && rgb.length === 4) ? "#" +
              ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
            }
            var setHue = rgb2hex2( getColor2 );
            
            var styles = [
                {
                  stylers: [
                    { hue: setHue }, // Custom Color
                    //{ saturation: -100 }, //For Gray
                    //{ lightness: 10 }, // Basic Color
                    { saturation: -20 }
                  ]
                },{
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                    { lightness: 50 },
                    { visibility: "simplified" }
                  ]
                },{
                  featureType: "road",
                  elementType: "labels",
                  stylers: [
                    { visibility: "off" }
                  ]
                }
            ];
            var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: center,
                scrollwheel: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
            });
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            var infowindow = new google.maps.InfoWindow();

            var marker, i;
            for (i = 0; i < locations.length; i++) {  
              marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: 'js/maps/map-icon.png'
              });

              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                  infowindow.setContent(locations[i][0]);
                  infowindow.open(map, marker);
                }
              })(marker, i));
            }
        }
    }

    $(window).on("load", initMap);
    $(window).on("resize", initMap);
})(jQuery);