
// $(document).ready(function(){
//     $('.carusel__inner').slick({
//         speed: 1200 ,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png" alt="left"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png" alt="right"></button>',
//         draggable: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 921,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               arrows:false,
//               dots:true
             
//             }
//           },
//         ]
        
//     })    
//     });
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    // items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    center: true,
    items:1,
    loop:true,
    dots:true,
    margin:10,
    nav:true,});

        
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
        .eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

 
//  скрипт jquery где при помощи id или классов кнопок мы при нажатии команды 
//  'click' во первых открываем 'fadeIn' модалюное окно где [data-class это дата класс модалюное
// окна].  fadeIn это команда эфектного открывания a 'fadeout' закрывания,  
 
  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow') ;
  }) ;
    
  // этот скрипт переберат 'each' по номерам элементы а потом при клике
  // выбирает по id #  и по классу . текст который должен поменять

  // во второй части скрипта он выбирает элемент и сответствующий ему текст и 
  // меняет его на модальном окне

  $('.button_mini').each(function(i){
     $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
     })
   });
     
     

    //  этот скрипт  подключает плагин jqyeri валидатор
   
    function valideForms(form){
      $(form).validate({
        rules : {
          name:  'required',
          phone: 'required',
          email: {
            required: true,
            email: true 
          }
        },
        messages: {
          name: 'пожалуйста, введите ваше имя',
          phone: 'пожалуйста, введите номер телефона ',
          email:{
            required: 'пожалуйста, введите адресс почты',
            email: 'неправилбно введен адрес  почты'
          }
        }
      });
    };
     valideForms('#consultation-form ');
     valideForms('#consultation form');
     valideForms('#order form');

    //   //  для отправки формы запроса на сервер
     $('form').submit(function(e){
      e.preventDefault();
      let $form = $(this);
      if(! $form.valid()) return false;
      $.ajax({
        type: 'POST',
        url: 'mailer/index.php',
       data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
        
        $('#consultation, #order, .overlay').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
       
        $('form').trigger('reset');
     });
        return false;
     });

      //  этот script для кнопки появляющей с боку и планогоскрола
        
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function(){
     const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().stop+"px"});
      return false;
});
  

    // скрипт для анимации каторый работает с animed
new WOW().init();

});

