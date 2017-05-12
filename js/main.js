$(function () {
    $("nav a,#scrollTopBtn").click(function () {
        $('#nav-list').removeClass('in');
    });

    $('nav a').bind('click', function (event) {
        var $anchor = $(this);
        //宣告navbarHeight = 50
        var navbarHeight = 50;
        //宣告動畫的秒數為1250
        var animationDuration = 1250;
        //宣告timingFunction = 'easeInOutCubic'
        var timingFunction = 'easeInOutCubic';


        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - navbarHeight)
        }, animationDuration, timingFunction);
        event.preventDefault();
    });
});

$(window).scroll(function () {
    var $scrollPosition = $(window).scrollTop();
    console.log($scrollPosition);

    if ($scrollPosition > 500) {
        //#scrollTopBtn加上class scroll
        //第一種方法：$('#scrollTopBtn').addClass('scroll');
        $('#scrollTopBtn').fadeIn();
    } else {
        //#scrollTopBtn去除class scroll
        //沒有了scroll的#scrollTopBtn display為none
        //$('#scrollTopBtn').removeClass('scroll');
        $('#scrollTopBtn').fadeOut();
    }
});
