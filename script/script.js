// script
$(function () {

    // swiper
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        resistanceRatio: 0,
        loop: false,
        speed: 600,
        mousewheel: true,
        keyboard: true,

        // navigation-button
        on: {
            slideChangeTransitionStart: function () {
                var n = this.activeIndex;
                changeButton(n);
            }
        },
        on: {
            activeIndexChange: function(){
                // main-title-animation
                if(this.realIndex === 0){
                    $('.section__main_tit_ani, .section__sub_tit').addClass('section__main_tit_ani-on, section__sub_tit-on');
                    $('.section__main_tit_ani, .section__sub_tit').removeClass('hidden');
                }else{
                    $('.section__main_tit_ani, .section__sub_tit').removeClass('section__main_tit_ani-on, section__sub_tit-on');
                    $('.section__main_tit_ani, .section__sub_tit').addClass('hidden');
                }
                // navigation-background
                if(this.realIndex === 1){
                    $('.navi_bg').slideDown(200);
                }else{
                    $('.navi_bg').slideUp(200);
                }
            }
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });

    // navigation-button
    var buttonItem = $('.navi_menu-pc__btn, .navi_menu-mobile__btn');
    buttonItem.click(function () {
        var ind = $(this).index();
        changeButton(ind);
        swiper.slideTo(ind);
    });

    function changeButton(index) {
        buttonItem.removeClass('active').eq(index).addClass('active');
    };

    // navigation-mobile
    $('.navi_menu__btn').on('click', function () {
        $('.navi_menu-mobile__btn').toggleClass('hidden');
        $('.navi_bg__btn').toggleClass('navi_bg__btn-on')
        $('.navi_bg__btn').removeClass('navi_bg__btn-disabled')
    });
    $('.navi_menu__btn').on('click', function () {
        $('.navi_menu__btn_active').toggleClass('hidden');
    });
    $('.section').on('click', function () {
        if (!$('.navi_menu-mobile__btn').hasClass('hidden')) {
            $('.navi_menu-mobile__btn').addClass('hidden')
            $('.navi_menu__btn_active').addClass('hidden')
            $('.navi_bg__btn').toggleClass('navi_bg__btn-on')
            $('.navi_bg__btn').removeClass('navi_bg__btn-disabled')
        }
    });

    // logo
    $('.navi_logo').click(function () {
        location.reload();
    });

    // loading
    $(document).ready(function(){
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
});