(function ($) {
    'use strict';
    /*=============================================
	=              Preloader       =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    }
    /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
    function offcanvasMenu() {
        $('.menu-tigger').on('click', function () {
            $('.offCanvas__info, .offCanvas__overly').addClass('active');
            return false;
        });
        $('.menu-close, .offCanvas__overly').on('click', function () {
            $('.offCanvas__info, .offCanvas__overly').removeClass('active');
        });
    }
    /*=============================================
	=          Data Background      =
    =============================================*/
    function dataBackground() {
        $('[data-background]').each(function () {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        });
    }
    /*=============================================
	=           Go to top       =
    =============================================*/
    function progressPageLoad() {
        var progressWrap = document.querySelector('.btn-scroll-top');
        if (progressWrap != null) {
            var progressPath = document.querySelector('.btn-scroll-top path');
            var pathLength = progressPath.getTotalLength();
            var offset = 50;
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            window.addEventListener('scroll', function (event) {
                var scroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
                var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollElementPos >= offset) {
                    progressWrap.classList.add('active-progress');
                } else {
                    progressWrap.classList.remove('active-progress');
                }
            });
            progressWrap.addEventListener('click', function (e) {
                e.preventDefault();
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            });
        }
    }
    /*=============================================
	=           Aos Active       =
    =============================================*/
    function aosAnimation() {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
            disable: 'mobile',
        });
    }
    /*=============================================
	=           counterState       =
    =============================================*/
    function counterState() {
        var counters = document.querySelectorAll('.counter');
        counters.forEach(function (counter) {
            var countTo = counter.getAttribute('data-count');
            var countNum = parseInt(counter.textContent);
            var duration = 4000;
            var stepDuration = duration / Math.abs(countTo - countNum);
            var increment = countTo > countNum ? 1 : -1;
            var timer = setInterval(function () {
                countNum += increment;
                counter.textContent = countNum;
                if (countNum == countTo) {
                    clearInterval(timer);
                    //alert('finished');
                }
            }, stepDuration);
        });
    }
    /*=============================================
	=    		Magnific Popup		      =
    =============================================*/
    function magnificPopup() {
        $('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });
        /* magnificPopup video view */
        $('.popup-video').magnificPopup({
            type: 'iframe',
        });
    }
    /*=============================================
    =    		Carousel Ticker		      =
    =============================================*/
    function carauselScroll() {
        $('.carouselTicker-left').each(function () {
            $(this).carouselTicker({
                direction: 'prev',
                speed: 1,
                delay: 30,
            });
        });
        $('.carouselTicker-right').each(function () {
            $(this).carouselTicker({
                direction: 'next',
                speed: 1,
                delay: 30,
            });
        });
    }
    /*=============================================
	=           Masonary Active       =
    =============================================*/
    function masonryFillter() {
        $('.masonary-active').imagesLoaded(function () {
            var $filter = '.masonary-active',
                $filterItem = '.filter-item',
                $filterMenu = '.filter-menu-active';
            if ($($filter).length > 0) {
                var $grid = $($filter).isotope({
                    itemSelector: $filterItem,
                    filter: '*',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        // columnWidth: 1,
                        columnWidth: '.grid-sizer',
                    },
                });
                // filter items on button click
                $($filterMenu).on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue,
                    });
                });
                // Menu Active Class
                $($filterMenu).on('click', 'button', function (event) {
                    event.preventDefault();
                    $(this).addClass('active');
                    $(this).siblings('.active').removeClass('active');
                });
            }
        });
    }
    /*=============================================
	=    		 Wow Active  	         =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }
    function accordion() {
        window.setTimeout(function () {
            $('.accordion').css('opacity', '1');
        }, 2000);
        $('.accordion-item').addClass('default');
        $('.accordion-item').on('click', function () {
            var e = $('.accordion > .accordion-item');
            if (e.hasClass('expand')) {
                e.removeClass('expand');
                $(this).addClass('expand');
            } else {
                $(this).addClass('expand');
            }
        });
    }
    /*=============================================
    =    		 Swiper Active  	         =
    =============================================*/
    function customSwiper() {
        const slider1Thumb = new Swiper('.slider-1-thumb', {
            spaceBetween: 16,
            slidesPerView: 2,
            freeMode: true,
            loop: true,
            centeredSlides: false,
            watchSlidesProgress: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                576: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 3,
                },
            },
        });
        const slider = new Swiper('.slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            thumbs: {
                swiper: slider1Thumb,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        const slider1 = new Swiper('.slider-1', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        const slider2 = new Swiper('.slider-2', {
            slidesPerView: 2,
            spaceBetween: 90,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                afterInit: function () {
                    // set padding left slide
                    var leftPadding = 0;
                    var swipperRoot = $('.swipper-root');
                    if (swipperRoot.length > 0) {
                        leftPadding = swipperRoot.offset().left;
                    }
                    if ($('.box-swiper-padding').length > 0) {
                        $('.box-swiper-padding').css('padding-left', leftPadding + 'px');
                    }
                },
            },
        });
        const slider3 = new Swiper('.slider-3', {
            slidesPerView: 3,
            spaceBetween: 45,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
        const slider4 = new Swiper('.slider-4', {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
        const slider5 = new Swiper('.slider-5', {
            // slidesPerView: 4,
            spaceBetween: 5,
            slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                1200: {
                    slidesPerView: 5,
                },
                992: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 4,
                },
                576: {
                    slidesPerView: 4,
                },
                0: {
                    slidesPerView: 3,
                },
            },
        });
        const slider6 = new Swiper('.slider-6', {
            // slidesPerView: 4,
            spaceBetween: 15,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 8,
                },
                992: {
                    slidesPerView: 6,
                },
                768: {
                    slidesPerView: 5,
                },
                576: {
                    slidesPerView: 5,
                },
                0: {
                    slidesPerView: 3,
                },
            },
        });
    }
    function mobileHeaderActive() {
        var navbarTrigger = $('.burger-icon'),
            navCanvas = $('.burger-icon-2'),
            closeCanvas = $('.close-canvas'),
            endTrigger = $('.mobile-menu-close'),
            container = $('.mobile-header-active'),
            containerCanvas = $('.sidebar-canvas-wrapper'),
            wrapper4 = $('body');
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        navbarTrigger.on('click', function (e) {
            navbarTrigger.toggleClass('burger-close');
            e.preventDefault();
            container.toggleClass('sidebar-visible');
            wrapper4.toggleClass('mobile-menu-active');
        });
        endTrigger.on('click', function () {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('mobile-menu-active');
        });
        var $offCanvasNav = $('.mobile-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');
        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="arrow-small-down"></i></span>');
        /*Close Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.slideUp();
        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = $(this);
            if (
                $this
                    .parent()
                    .attr('class')
                    .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
                ($this.attr('href') === '#' || $this.hasClass('menu-expand'))
            ) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    function collapseCustom() {
        const accordionLinks = document.querySelectorAll('.card-header a');
        accordionLinks.forEach((link) => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const accordionItem = this.closest('.collapse-custom');
                const isActive = accordionItem.classList.contains('active');
                if (!isActive) {
                    // Remove the "active" class from all other accordion items
                    const otherAccordionItems = document.querySelectorAll('.collapse-custom.active');
                    otherAccordionItems.forEach((item) => {
                        item.classList.remove('active');
                    });
                    // Add the "active" class to the clicked accordion item
                    accordionItem.classList.add('active');
                }
            });
        });
    }
    $('.change-price-plan a').on('click', function (e) {
        e.preventDefault();
        $('.change-price-plan a').removeClass('active');
        $(this).addClass('active');
        var type = $(this).attr('data-type');
        if (type == 'monthly') {
            $('.text-price-basic').html('$49.99');
            $('.text-price-advanced').html('$99.99');
        } else {
            $('.text-price-basic').html('$39.99');
            $('.text-price-advanced').html('$69.99');
        }
    });
    function cardScroll() {
        const cardsContainer = document.querySelector('.cards');
        if (!cardsContainer) {
            return;
        }
        const { ScrollObserver, valueAtPercentage } = aat;
        const cards = document.querySelectorAll('.card-custom');
        cardsContainer.style.setProperty('--cards-count', cards.length);
        cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
        Array.from(cards).forEach((card, index) => {
            const offsetTop = 20 + index * 20;
            card.style.paddingTop = `${offsetTop}px`;
            if (index === cards.length - 1) {
                return;
            }
            const toScale = 1 - (cards.length - 1 - index) * 0.1;
            const nextCard = cards[index + 1];
            const cardInner = card.querySelector('.card__inner');
            ScrollObserver.Element(nextCard, {
                offsetTop,
                offsetBottom: window.innerHeight - card.clientHeight,
            }).onScroll(({ percentageY }) => {
                cardInner.style.scale = valueAtPercentage({
                    from: 1,
                    to: toScale,
                    percentage: percentageY,
                });
                cardInner.style.filter = `brightness(${valueAtPercentage({
                    from: 1,
                    to: 0.6,
                    percentage: percentageY,
                })})`;
            });
        });
    }
    function odometerCounter() {
        if ($('.odometer').length > 0) {
            $('.odometer').appear(function (e) {
                var odo = $('.odometer');
                odo.each(function () {
                    var countNumber = $(this).attr('data-count');
                    $(this).html(countNumber);
                });
            });
        }
    }
    /*=============================================
	=           Service Hover Change       =
=============================================*/
    function hoverChange() {
        $('.news2-tab-wrap li:first-child').addClass('active');
        $('.news2-tab-content').hide();
        $('.news2-tab-content:first').show();
        // Click function
        $('.news2-tab-wrap li').mouseenter(function () {
            $('.news2-tab-wrap li').removeClass('active');
            $(this).addClass('active');
            $('.news2-tab-content').hide();
            var activeTab = $(this).find('.news2-tab-item').attr('data-bs-target');
            $(activeTab).fadeIn();
            return false;
        });
    }

    function circleText() {
        const texts = document.querySelectorAll(".circle-text");
        texts.forEach(text => {
            if (text) {
                text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
                const elements = text.querySelectorAll("span");
                elements.forEach((element, i) => {
                    element.style.transform = "rotate(" + i * 16 + "deg)";
                });
            }
        });
    }
    /*=============================================
	=           Page Load       =
    =============================================*/
    $(window).on('load', function () {
        preloader();
        progressPageLoad();
        offcanvasMenu();
        dataBackground();
        aosAnimation();
        counterState();
        customSwiper();
        magnificPopup();
        wowAnimation();
        odometerCounter();
        carauselScroll();
        accordion();
        hoverChange();
        collapseCustom();
        masonryFillter();
        mobileHeaderActive();
        cardScroll();
        circleText();
    });
})(jQuery);
