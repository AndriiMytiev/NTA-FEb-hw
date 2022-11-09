window.onload = function () {
    $('#preloader').addClass('hide');
};

$(document).ready(function() {
    $('.new-navbar-nav a').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 350,   
            easing: "linear" 
        });
    
        return false;
    });
    
    $('.tab-nav a').on('click', function(){
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

    $('.teacher-slider').bxSlider({
        auto: true,
        controls: false,
        speed: 1000,
        pager: false,
        slideWidth: 330
    });
});

window.addEventListener('scroll', () => {
    if(window.scrollY > document.documentElement.offsetHeight*0.9) {
        $('.button-scroll-wrapper').removeClass('hide');
    } else $('.button-scroll-wrapper').addClass('hide');
});

$('.button-scroll').on('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})


