$(function(){

    // ==========NAV SCR0LL START==========

    $(Window).scroll(function(){
        if( $(window).scrollTop() > 500){
          $(".menu").addClass('nav-scroll')
        }
        else{
          $(".menu").removeClass('nav-scroll')
        }
      });
  
      // ==========NAV SCR0LL END==========
  
    


// =========COMPLIMENTS SECTION=========

    $('.compliments-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        dots: true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                infinite: true,
                dots: true
              }
            },
          ]
      });

// =========COMPLIMENTS SECTION=========


  // ==========GO TO TOP PART START==========

  $('.go-to-top').on("click", function(){
    $("html,body").animate({scrollTop: 0}, 100)
  })

  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if(scroll>300){
      $('.go-to-top').fadeIn(500)
    }else{
      $('.go-to-top').fadeOut(500)
    }
  })


  // ==========GO TO TOP PART END==========


})

$('.togglebar').click(function(){
    $('.sidebar').css('right', '0')
    $('.sidebar').css('width', '100%')
    $('.sidebar').css('transition', '0.4s')
    $('.cross-bar').css('opacity', '1')
    $('.cross-bar').css('visibility', 'visible')
})
$('.cross-bar').click(function(){
    $('.sidebar').css('right', '-100%')
    $('.sidebar').css('transition', '0.4s')
})







