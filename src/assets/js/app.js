(function ($) {

    var wow = new WOW({
        mobile: false
    }).init();

    jQuery(window).on('load', function() {
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
