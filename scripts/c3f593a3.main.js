if($(".logo-intro").removeClass("hidden").addClass("animated flipInY"),$(".dot-london-sub").removeClass("hidden").addClass("animated fadeIn"),$(".dot-london").removeClass("hidden").addClass("animated fadeIn"),$(".jumbo-text").removeClass("hidden").addClass("animated fadeInDown"),$(window).scroll(function(){"use strict";$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),function(a,b,c,d,e,f){"use strict";a.GoogleAnalyticsObject=d,a[d]||(a[d]=function(){(a[d].q=a[d].q||[]).push(arguments)}),a[d].l=+new Date,e=b.createElement(c),f=b.getElementsByTagName(c)[0],e.src="//www.google-analytics.com/analytics.js",f.parentNode.insertBefore(e,f)}(window,document,"script","ga"),ga("create","UA-33525349-3","techhub.london"),ga("send","pageview"),$(".map").length>0){var mapOptions={zoom:16,disableDefaultUI:!0,center:new google.maps.LatLng(51.52467,-.087562),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"water",stylers:[{color:"#021019"}]},{featureType:"landscape",stylers:[{color:"#08304b"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#0c4152"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#0b434f"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#0b3d51"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]}]};if($("#map-supermarket").length>0){var map01=new google.maps.Map(document.getElementById("map-supermarket"),mapOptions),iconSainsbury=new google.maps.MarkerImage("images/6f22efd7.sainsbury-logo.png",null,null,null,new google.maps.Size(100,38)),iconCooperative=new google.maps.MarkerImage("images/faf50b4d.cooperative-logo.png",null,null,null,new google.maps.Size(150,25)),iconTesco=new google.maps.MarkerImage("images/7989b869.tesco-logo.png",null,null,null,new google.maps.Size(100,67)),iconWaitrose=new google.maps.MarkerImage("images/c036f5b3.waitrose-logo.png",null,null,null,new google.maps.Size(100,28));new google.maps.Marker({position:new google.maps.LatLng(51.52475,-.087369),map:map01,icon:iconSainsbury}),new google.maps.Marker({position:new google.maps.LatLng(51.525656,-.090517),map:map01,icon:iconCooperative}),new google.maps.Marker({position:new google.maps.LatLng(51.522691,-.086807),map:map01,icon:iconTesco}),new google.maps.Marker({position:new google.maps.LatLng(51.521846,-.092363),map:map01,icon:iconWaitrose})}if($("#map-workout").length>0){var map01=new google.maps.Map(document.getElementById("map-workout"),mapOptions),iconMarketSports=new google.maps.MarkerImage("images/e0e5ed93.marketsports-marker.jpg",null,null,null,new google.maps.Size(80,42)),iconVirginActive=new google.maps.MarkerImage("images/09a81f68.virgin-marker.jpg",null,null,null,new google.maps.Size(90,70)),iconFitnessfirst=new google.maps.MarkerImage("images/47dea64c.fitnessfirst-marker.gif",null,null,null,new google.maps.Size(100,28)),iconTechHub=new google.maps.MarkerImage("images/2cd1ebd7.techhub-marker.png",null,null,null,new google.maps.Size(90,47));new google.maps.Marker({position:new google.maps.LatLng(51.525831,-.089141),map:map01,icon:iconTechHub}),new google.maps.Marker({position:new google.maps.LatLng(51.522685,-.085222),map:map01,icon:iconTechHub}),new google.maps.Marker({position:new google.maps.LatLng(51.525529,-.079451),map:map01,icon:iconMarketSports}),new google.maps.Marker({position:new google.maps.LatLng(51.522593,-.089665),map:map01,icon:iconVirginActive}),new google.maps.Marker({position:new google.maps.LatLng(51.524011,-.090601),map:map01,icon:iconFitnessfirst})}if($("#map-home").length>0){var map01=new google.maps.Map(document.getElementById("map-home"),mapOptions),iconTechHub=new google.maps.MarkerImage("images/2cd1ebd7.techhub-marker.png",null,null,null,new google.maps.Size(90,47));new google.maps.Marker({position:new google.maps.LatLng(51.525831,-.089141),map:map01,icon:iconTechHub}),new google.maps.Marker({position:new google.maps.LatLng(51.522685,-.085222),map:map01,icon:iconTechHub})}}