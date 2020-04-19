$(document).ready(function(){
    
// GNB-For
    $(".for li").click(function(event){
        event.preventDefault(); 
        $(".for li").children("a").removeClass("on");
        $(this).children("a").addClass("on");
    });

// container1 pop-up

    $('.meet .btn-box').click(function(){
        var modal = $(this).parents('li').index();

        $(".modal-inner").fadeIn();
        $(".pop-up li").eq(modal).fadeIn();

        $(".btn-close").click(function(){
            $(".modal-inner, .pop-up li").fadeOut();
        });
    });

    $('.meet li').click(function(){
        var Mmodal = $(this).index();

        $(".modal-inner").fadeIn();
        $(".pop-up li").eq(Mmodal).fadeIn();

        $(".btn-close").click(function(){
            $(".modal-inner, .pop-up li").fadeOut();
        });
    });

    $('.btn-meet div').click(function(){

        $(".btn-meet div").removeClass("on");
        $(this).addClass("on");

        var wid2=$(".meet-wrap").width();

        list2=$(this).index();
        $(".meet").animate({"margin-left":-list2*wid2});

    });

// container 1 carousel
    var mySwiper = new Swiper('.carousel-center', {
        speed: 400,
        spaceBetween: 20,
        slidesPerView: 6,
        breakpoints: {
            // when window width is <= 375px
            375: {
              slidesPerView: 3,
              spaceBetween: 7,
            }
        },
        navigation: {
            prevEl: '.btn-prev',
            nextEl: '.btn-next' 
        },
    });
    var mySwiper2 = new Swiper('.video', {
        speed: 400,
        spaceBetween: 0,
    });

    $('.carousel-center li').click(function(e){
        e.preventDefault();

        $('.carousel-center li a').removeClass('on');
        $(this).find('a').addClass('on');

// Carousel X Thumbnail
        var idx = $(this).index();
        mySwiper2.slideTo(idx, 400);
    });

//TAB
        $(".tab-menu li").click(function(event){
            event.preventDefault(); 

            $(".tab-menu li").removeClass("on");
            $(this).addClass("on");

            var wid=$(".tab-container-wrap").width();

            list1=$(this).index();
            $(".tab-container").animate({"margin-left":-list1*wid});

            $(".tab-btn li").removeClass("on");
            $(".tab-btn li").eq(list1).addClass("on");
        });

//TAB BTN0
        $(".tab-btn li").click(function(event){
            event.preventDefault(); 

            $(".tab-btn li").removeClass("on");
            $(this).addClass("on");
            
            var wid=$(".tab-container-wrap").width();

            list1=$(this).index();
            $(".tab-container").animate({"margin-left":-list1*wid});

        });

//FOLLOW CAROUSEL
        option = {
            width: 56,
            spaceBetween: 90,
            speed: 400,
            slidesPerView: 4,
            simulateTouch: false,
            // untouchable
            // loop: true,
            navigation: {
                nextEl: '.follow-next',
                prevEl: '.follow-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
            autoplay: {
                delay: 1000,
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 90
                },
            }
        }
        var mySwiper3 = new Swiper('.sns-center', option);
            // $(window).resize(function(){
            //     var width = $(window).width();
            //     if(width <= 767){
            //         mySwiper3.update();
            //     }else{
            //         mySwiper3.destroy(true, true);
            //     }
            // });

        $(".btn auto li:last-child").click(function(e){
            e.preventDefault();

            mySwiper3.autoplay.stop();
                    
        });
});
