$('.menu-header__mob-btn').on('click', () => {
    $('.menu-header__mob-btn').toggleClass('active');
    $('.menu-header').toggleClass('open');
    $('.menu-header__items').toggleClass('show');
});
for (let a = 1; a <= $(".menu-header__item").length; a++){ 
    $(".menu-header__item:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$('[data-modal=consultation]').on('click', function(){
  $('.overlay,  #consultation').fadeIn('slow');
  });
  $('[data-modal=order]').on('click', function(){
    $('.overlay,  #order').fadeIn('slow');
    });
  

  

function valideForms(form){
    $('#form1').validate({
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
          required: 'пожалуйста, введите адрес почты',
          email: 'неправильно введен адрес  почты'
        }
      }
    });
    
      $('#form2').validate({
        rules : {
          name:  'required',
          phone: 'required',
          textarea:'required',
          email: {
            required: true,
            email: true 
          }
        },
        messages: {
          name: 'пожалуйста, введите ваше имя',
          phone: 'пожалуйста, введите номер телефона ',
          checkbox:'пожалуйста, ознакомьтесь с документом ',
          textarea:  'пожалуйста, введите сообщение ',
          email:{
            required: 'пожалуйста, введите адрес почты',
            email: 'неправильно введен адрес  почты'
          }
        }
      });
     
        $('#form3').validate({
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
              required: 'пожалуйста, введите адрес почты',
              email: 'неправильно введен адрес  почты'
            }
          }
        });
       
          $('#form4').validate({
            rules : {
              name:  'required',
              email: {
                required: true,
                email: true 
              }
            },
            messages: {
              name: 'пожалуйста, введите ваше имя',
              email:{
                required: 'пожалуйста, введите адрес почты',
                email: 'неправильно введен адрес  почты'
              }
            }
          });
  };
  valideForms('form');
  
   
$('form').submit(function(e){
  var formID = $(this).attr('id'); // Получение ID формы
  var formNm = $('#' + formID);
    e.preventDefault();
    let $form = $(this);
    if(! $form.valid()) return false;
    $.ajax({
      type: 'POST',
      url: '../mailer/index.php',
     data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      
      $('#consultation, #order').fadeOut('slow');
      $('.overlay, #thanks').fadeIn('slow');
     
      $('form').trigger('reset');
   });
      return false;
   });
   $('.modal__close').on('click', function(){
    $('.overlay,  #thanks').fadeOut('slow') ;
}) ;


//  появление элемента на экране дл нажатия и скролинга верх (1600 это растояние
// с верху) когда появляется элемент         
$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});
// скролинг в нутри сайта--- назначить a data-jump="id блока куда нужно скролить"
$(function(){
$("a[data-jump^='#']").click(function(){
var _href = $(this).attr("data-jump");
$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
return false;
});
});