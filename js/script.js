(function($){
    $('.menu-bar').on('click', function() {
        $('.mobile-menu').toggleClass('triggered');
    }); 
    $('.has-children > a').after('<span></span>');  
    $('.has-children span').on('click', function() {
        $(this).toggleClass('subtriggered');
    });
})(jQuery);


window.addEventListener("load", () => {
  var carousels = document.querySelectorAll(".carousel-3d");
  for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
  }
});
function carousel(root) {
  var figure = root.querySelector("figure"),
  nav = root.querySelector("nav"),
  images = figure.children,
  n = images.length,
  gap = root.dataset.gap || 0,
  bfc = "bfc" in root.dataset,
  theta = 2 * Math.PI / n,
  currImage = 0;
  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  });
  setupNavigation();
  function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
      for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
      for (i = 0; i < n; i++) {
          images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
          images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
      for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
      rotateCarousel(currImage);
  }
  function setupNavigation() {
      nav.addEventListener("click", onClick, true);
      function onClick(e) {
          e.stopPropagation();
          var t = e.target;
          if (t.tagName.toUpperCase() != "BUTTON") return;
          if (t.classList.contains("next")) {
              currImage++;
              } else {
              currImage--;
          }
          rotateCarousel(currImage);
      }
  }
  function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  }
}
       
    function valideForms(form){
      $('#info-contacts__form').validate({
        rules : {
          name:  'required',
          phone: 'required',
          checkbox:'required',
          text:'required',
          email: {
            required: true,
            email: true 
          }
        },
        messages: {
          name: 'пожалуйста, введите ваше имя',
          phone: 'пожалуйста, введите номер телефона ',
          checkbox:'пожалуйста, ознокомтесь с документом ',
          text:  'пожалуйста, введите сообшение ',
          email:{
            required: 'пожалуйста, введите адресс почты',
            email: 'неправилбно введен адрес  почты'
          }
        }
      });
     };
     valideForms('#info-contacts__form');

  $('form').submit(function(e){
      e.preventDefault();
      var $form = $(this);
      if(! $form.valid()) return false;
      $.ajax({
        type: 'POST',
        url: '../mailer/index.php',
       data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
        
   
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