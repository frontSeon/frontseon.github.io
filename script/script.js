// script

// dom-ready
$(document).ready(function () {

    //disabled
    setTimeout(function () {
        $('.disabled').addClass('hidden')
    }, 4300);

    // swiper
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        resistanceRatio: 0,
        loop: false,
        speed: 600,
        mousewheel: true,
        keyboard: false,

        // navigation-button
        on: {
            slideChangeTransitionStart: function () {
                var n = this.activeIndex;
                changeButton(n);
            }
        },
        on: {
            activeIndexChange: function () {

                // main-title-animation
                if (this.realIndex === 0) {
                    // $('.section__main_tit_ani').addClass('section__main_tit_ani-on');
                    // $('.section__sub_tit').addClass('section__sub_tit-on');
                    // $('.section__sub_tit').addClass('section__tit-on');
                    // $('.section__scroll').addClass('section__scroll-on');
                    // $('.section__main_tit_ani, .section__sub_tit, .section__tit, .section__scroll').removeClass('hidden');
                } else {
                    // $('.section__main_tit_ani').removeClass('section__main_tit_ani-on');
                    // $('.section__sub_tit').removeClass('section__sub_tit-on');
                    // $('.section__sub_tit').removeClass('section__tit-on');
                    // $('.section__scroll').removeClass('section__scroll-on');
                    // $('.section__main_tit_ani, .section__sub_tit, .section__tit, .section__scroll').addClass('hidden');
                }

                if (this.realIndex === 1) {

                    // navigation-background
                    $('.navi__bg').slideDown(200);
                    $('.swiper-pagination-bullet').addClass('swiper-pagination-bullet-2');
                    $('.swiper-pagination-bullet').eq(1).addClass('swiper-pagination-bullet-active-2');

                    //disabled
                    if (!$('.disabled').hasClass('disabled-1')) {
                        setTimeout(function () {
                            $('.disabled').removeClass('hidden')
                        }, 0);
                    }
                    setTimeout(function () {
                        $('.disabled').addClass('hidden')
                    }, 4300);
                    $('.disabled').addClass('disabled-1')
                } else {

                    // navigation-background
                    $('.navi__bg').slideUp(200);
                    $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-2');
                    $('.swiper-pagination-bullet').eq(1).removeClass('swiper-pagination-bullet-active-2');
                }
                if (this.realIndex === 2) {

                    // bg-animation
                    $('.section__deep').addClass('section__deep-on');

                    //disabled
                    if (!$('.disabled').hasClass('disabled-2')) {
                        setTimeout(function () {
                            $('.disabled').removeClass('hidden')
                        }, 0);
                    }
                    setTimeout(function () {
                        $('.disabled').addClass('hidden')
                    }, 4300);
                    $('.disabled').addClass('disabled-2')
                } else{
                    $('.section__deep').removeClass('section__deep-on');
                }
            }
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });

    // navigation-button
    var buttonItem = $('.navi__menu-pc_btn, .navi__menu-mobile_btn');
    buttonItem.click(function () {
        var ind = $(this).index();
        changeButton(ind);
        swiper.slideTo(ind);
    });

    function changeButton(index) {
        buttonItem.removeClass('active').eq(index).addClass('active');
    };

    // navigation-mobile
    $('.navi__menu_btn').on('click', function () {
        $('.navi__menu-mobile_btn').toggleClass('hidden');
        $('.navi__bg_btn').toggleClass('navi__bg_btn-on');
        $('.navi__bg_btn').removeClass('navi__bg_btn-disabled');
    });
    $('.navi__menu_btn').on('click', function () {
        $('.navi__menu_btn_bg').toggleClass('hidden');
    });
    $('.section').on('click', function () {
        if (!$('.navi__menu-mobile_btn').hasClass('hidden')) {
            $('.navi__menu-mobile_btn').addClass('hidden');
            $('.navi__menu_btn_bg').addClass('hidden');
            $('.navi__bg_btn').toggleClass('navi__bg_btn-on');
            $('.navi__bg_btn').removeClass('navi__bg_btn-disabled');
        }
    });

    // logo
    $('.navi__logo').click(function () {
        location.reload();
    });

    // loading
    $(document).ready(function () {
        $('.loading').addClass('hidden');
    });

    let loadingAni = document.getElementsByClassName("loading__lottie");

    function loadBMAnimation(loader) {
        var animation = lottie.loadAnimation({
            container: loader,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/lottie/loading.json"
        });
    }
    for (let i = 0; i < loadingAni.length; i++) {
        loadBMAnimation(loadingAni[i]);
    }

    let scrollAni = document.getElementsByClassName("section__scroll_lottie");

    function loadBMAnimation(loader) {
        var animation = lottie.loadAnimation({
            container: loader,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/lottie/scroll.json"
        });
    }
    for (let i = 0; i < scrollAni.length; i++) {
        loadBMAnimation(scrollAni[i]);
    }

});

// swiper2
const swiper = new Swiper('.swiper2', {
    wrapperClass: 'section__swiper_wrap',
    slideClass: 'section__swiper_slide',
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: false,
    speed: 600,
    mousewheel: true,
    keyboard: true,
    pagination: {
        el: '.section__swiper_pagination',
    }
});