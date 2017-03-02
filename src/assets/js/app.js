(function ($) {

    var wow = new WOW({
        mobile: false
    }).init();

    jQuery(window).load(function() {
        jQuery("#preloader").delay(50).fadeOut("slow");
        jQuery("#load").delay(50).fadeOut("slow");
    });


    //jQuery to collapse the navbar on scroll
    // $(window).scroll(function() {
    //     if ($(".navbar").offset().top > 50) {
    //         $(".navbar-fixed-top").addClass("top-nav-collapse");
    //         $("#main").removeClass("nav-padding-collapsed");
    //     } else {
    //         $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //         $("#main").addClass("nav-padding-collapsed");
    //     }
    // });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            console.log('test');
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    //Modal code for image gallery
    $('#gallery .container ul li img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive" />';
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });
    });

    //Alternate background color between sections on load
    // var sectionCounter = 0;
    // $('.home-section').each(function(){
    //     if(sectionCounter === 0){
    //     } else if(sectionCounter === 1){
    //         $(this).addClass('bg-gray');
    //     } else if(sectionCounter % 2 !== 0){
    //         $(this).addClass('bg-gray');
    //     }
    //     sectionCounter++;
    // });

    // jQuery methods go here...
    //Mobile click nav bar hides the menu after click
    $('.nav a').on('click', function(){
        console.log('nav link click');
        $(".navbar-toggle").click(); //bootstrap 3.x by Richard
    });


})(jQuery);

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(30.0268759, -97.8789529), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: false,
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    // var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(30.02696, -97.878899);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
