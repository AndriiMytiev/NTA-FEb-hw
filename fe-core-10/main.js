$(document).ready(function() {
    $('body').on('click', '.tab-nav a', function(){
        $('.tab-nav a').removeClass('active');
        $(this).addClass('active');

        let href = $(this).attr("href");
        
        $(".tab-pane").removeClass("active").removeClass("in");
        let id = $(href).addClass("active");

        setTimeout(function(){
            $(href).addClass('in');
        }, 200);

        return false;
    });

    $('.reviews-slider').bxSlider({
        auto: true,
        controls: true,
        responsive: true,
        speed: 1000,
        pager: false,
        mimSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 366
    });
});
