$(function(){
    //햄버거 메뉴 버튼 누르면 .nav 나옴
    $('.menu-btn').click(function(){
        $('.nav').animate({'right':0},600);
    });
    //close버튼 누르면 .nav 들어감
    $('.close').click(function(){
        $('.nav').animate({'right':'-100vw'},600);
    });
    //아코디언 메뉴
    $('.nav nav > ul > li > a').click(function(e){
        e.preventDefault();
        //만약 클릭한 주메뉴에 active가 설정되어 있지 않으면
        if($(this).attr('class') !='active') {
            $('.nav nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('.sub').stop().slideUp();
            $(this).next().stop().slideToggle();
        }else{
            $(this).removeClass('active');
            $(this).next().stop().slideUp();
        }
    });
// header 영역 숨기거나 나타나게 하기


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();
$('.section').css('padding-top',navbarHeight);
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

//hasScrolled 함수선언
function hasScrolled() {
    // st변수에 body문서의 맨 위쪽 위치값을 저장
    var st = $(this).scrollTop();
    
    //화면스크롤방향이 같은 방향이면 header는 움직임 없음
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // 화면 스크롤 방향이 달라지는지 감지하는 조건문
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('header-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

    //메인 슬라이드
    var swiper1 = new Swiper(".slide1", {
        cssMode: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          
        },
        mousewheel:{
            invert:false
        }
    });
    //세트 구성 슬라이드
    var swiper2 = new Swiper(".slide2", {
        loop: true,
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
    });
    
    //탭메뉴

    $('.tab-content > div').hide();
    $('.con1').show();
    $('.t1').click(function(){
        $('.con1').fadeIn();
        $('.con2').hide();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
    });
    $('.t2').click(function(){
        $('.con1').hide();
        $('.con2').fadeIn();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
    });

    //이미지 갤러리
    var
    // ACTIVITY INDICATOR

    activityIndicatorOn = function()
    {
       $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
    },
    activityIndicatorOff = function()
    {
       $( '#imagelightbox-loading' ).remove();
    },


    // OVERLAY

    overlayOn = function()
    {
       $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
    },
    overlayOff = function()
    {
       $( '#imagelightbox-overlay' ).remove();
    },


    // CLOSE BUTTON

    closeButtonOn = function( instance )
    {
       $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
    },
    closeButtonOff = function()
    {
       $( '#imagelightbox-close' ).remove();
    }

 arrowsOn = function( instance, selector )
    {
       var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

       $arrows.appendTo( 'body' );

       $arrows.on( 'click touchend', function( e )
       {
          e.preventDefault();

          var $this   = $( this ),
             $target   = $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
             index   = $target.index( selector );

          if( $this.hasClass( 'imagelightbox-arrow-left' ) )
          {
             index = index - 1;
             if( !$( selector ).eq( index ).length )
                index = $( selector ).length;
          }
          else
          {
             index = index + 1;
             if( !$( selector ).eq( index ).length )
                index = 0;
          }

          instance.switchImageLightbox( index );
          return false;
       });
    },
    arrowsOff = function()
    {
       $( '.imagelightbox-arrow' ).remove();
    };
 
 var selectorF = 'a[data-imagelightbox="f"]';
   var instanceF = $( selectorF ).imageLightbox(
    {
       onStart:      function() { overlayOn(); closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); },
       onEnd:         function() { overlayOff();  closeButtonOff(); arrowsOff(); activityIndicatorOff(); },
       onLoadEnd:       function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });

    //서브페이지 1번째 슬라이드
    $('.sub1').on('pageshow',function(){
        var swiper3 = new Swiper(".slide3", {
            cssMode: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            
            },
            mousewheel:{
                invert:false
            }
        });
    });
    //서브페이지 1번째 슬라이드
    $('.sub2').on('pageshow',function(){
        var swiper3 = new Swiper(".slide4", {
            cssMode: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            
            },
            mousewheel:{
                invert:false
            }
        });
    });
    //서브페이지 1번째 슬라이드
    $('.sub3').on('pageshow',function(){
        var swiper3 = new Swiper(".slide5", {
            cssMode: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            
            },
            mousewheel:{
                invert:false
            }
        });
    });
        
});