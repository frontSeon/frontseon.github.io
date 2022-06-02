// script
$(function () {

    // swiper
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        resistanceRatio: 0,
        loop: false,
        mousewheel: true,
        keyboard: true,

        // navigation-button
        on: {
            slideChangeTransitionStart: function () {
                var n = this.activeIndex;
                changeButton(n);
            }
        },
        
        // main-title-animation
        on: {
            activeIndexChange: function(){
                if(this.realIndex === 0){
                    $('.section__main_tit_ani').addClass('section__main_tit_ani-on');
                    $('.section__main_tit_ani').removeClass('hidden');
                }else{
                    $('.section__main_tit_ani').removeClass('section__main_tit_ani-on');
                    $('.section__main_tit_ani').addClass('hidden');
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
    });
    $('.navi_menu__btn').on('click', function () {
        $('.navi_menu__btn_active').toggleClass('hidden');
    });
    $('.section').on('click', function () {
        if (!$('.navi_menu-mobile__btn').hasClass('hidden')) {
            $('.navi_menu-mobile__btn').addClass('hidden')
            $('.navi_menu__btn_active').addClass('hidden')
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