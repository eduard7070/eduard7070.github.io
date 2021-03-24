    //   скрипт для переноса элементов 
//  подробности смотреть в папке на комп динамический адаптив



class DynamicAdapt {
    constructor(type) {
      this.type = type;
    }
  
    init() {
      // массив объектов
      this.оbjects = [];
      this.daClassname = '_dynamic_adapt_';
      // массив DOM-элементов
      this.nodes = [...document.querySelectorAll('[data-da]')];
  
      // наполнение оbjects объктами
      this.nodes.forEach((node) => {
        const data = node.dataset.da.trim();
        const dataArray = data.split(',');
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
        оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
      });
  
      this.arraySort(this.оbjects);
  
      // массив уникальных медиа-запросов
      this.mediaQueries = this.оbjects
        .map(({
          breakpoint
        }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
        .filter((item, index, self) => self.indexOf(item) === index);
  
      // навешивание слушателя на медиа-запрос
      // и вызов обработчика при первом запуске
      this.mediaQueries.forEach((media) => {
        const mediaSplit = media.split(',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];
  
        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = this.оbjects.filter(
          ({
            breakpoint
          }) => breakpoint === mediaBreakpoint
        );
        matchMedia.addEventListener('change', () => {
          this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
    }
  
    // Основная функция
    mediaHandler(matchMedia, оbjects) {
      if (matchMedia.matches) {
        оbjects.forEach((оbject) => {
          оbject.index = this.indexInParent(оbject.parent, оbject.element);
          this.moveTo(оbject.place, оbject.element, оbject.destination);
        });
      } else {
        оbjects.forEach(
          ({ parent, element, index }) => {
            if (element.classList.contains(this.daClassname)) {
              this.moveBack(parent, element, index);
            }
          }
        );
      }
    }
  
    // Функция перемещения
    moveTo(place, element, destination) {
      element.classList.add(this.daClassname);
      if (place === 'last' || place >= destination.children.length) {
        destination.append(element);
        return;
      }
      if (place === 'first') {
        destination.prepend(element);
        return;
      }
      destination.children[place].before(element);
    }
  
    // Функция возврата
    moveBack(parent, element, index) {
      element.classList.remove(this.daClassname);
      if (parent.children[index] !== undefined) {
        parent.children[index].before(element);
      } else {
        parent.append(element);
      }
    }
  
    // Функция получения индекса внутри родителя
    indexInParent(parent, element) {
      return [...parent.children].indexOf(element);
    }
  
    // Функция сортировки массива по breakpoint и place 
    // по возрастанию для this.type = min
    // по убыванию для this.type = max
    arraySort(arr) {
      if (this.type === 'min') {
        arr.sort((a, b) => {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }
            if (a.place === 'first' || b.place === 'last') {
              return -1;
            }
            if (a.place === 'last' || b.place === 'first') {
              return 1;
            }
            return a.place - b.place;
          }
          return a.breakpoint - b.breakpoint;
        });
      } else {
        arr.sort((a, b) => {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }
            if (a.place === 'first' || b.place === 'last') {
              return 1;
            }
            if (a.place === 'last' || b.place === 'first') {
              return -1;
            }
            return b.place - a.place;
          }
          return b.breakpoint - a.breakpoint;
        });
        return;
      }
    }
  }
  
  const da = new DynamicAdapt("max");
  da.init();


    $('.menu-header__mob-btn').on('click', () => {
    $('.menu-header__mob-btn').toggleClass('active');
    $('.menu-header').toggleClass('open');
    $('.menu-header__items').toggleClass('show');
});
for (let a = 1; a <= $(".menu-header__item").length; a++){ 
    $(".menu-header__item:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}


const bannerSlider = new Swiper('.banner__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  

  // If we need pagination
  pagination: {
    el: '.banner__swiper-pagination',
  },

});


     



  
  let tab = document.querySelectorAll('.item-about__link-wrapper'),
      info = document.querySelector('.item-about'),
      itemAbout = document.querySelectorAll('.item-about__logo-img'),
      itemAbout2 = document.querySelectorAll('.item-about__logo-img-hover');
      


      for (let i = 0; i < tab.length; i++) {
        tab[i].onmousemove = function(){
          itemAbout[i].classList.add('show') ;
          itemAbout2[i].style.display = 'block';
         }
         tab[i].onmouseout = function(){
          itemAbout[i].classList.remove('show') ;
          itemAbout2[i].style.display = 'none';
         }
        
      }

    let itemServise = document.querySelectorAll('.item-servise'),
        itemServiseFooter = document.querySelectorAll('.item-servise__footer');
     
   itemServise[0].addEventListener('mouseover', function(){
        itemServiseFooter[0].style.display = 'block' ;
   }) ;
   itemServise[0].addEventListener('mouseout', function(){
    itemServiseFooter[0].style.display = 'none' ;
   }) ;
    
   
    //  слайдер сектора gallery     
   const gallerySwiperWrapper = new Swiper('.gallery__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween:200,
    
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },
   

    
  });
 
    //  hover на кнопки слайдера gallery
    let gallerySwiperButtonPrev = document.getElementsByClassName('gallery__swiper-button-prev'),
        gallerySwiperButtonNext = document.getElementsByClassName('gallery__swiper-button-next');
      
        gallerySwiperButtonPrev[0].addEventListener('mouseover', function(){
          gallerySwiperButtonPrev[0].style.backgroundColor = '#ef5050' ;
     }) ;
     gallerySwiperButtonPrev[0].addEventListener('mouseout', function(){
      gallerySwiperButtonPrev[0].style.background = 'none'  ;
     }) ;

       gallerySwiperButtonNext[0].addEventListener('mouseover', function(){
        gallerySwiperButtonNext[0].style.backgroundColor = '#ef5050' ;
    }) ;
      gallerySwiperButtonNext[0].addEventListener('mouseout', function(){
      gallerySwiperButtonNext[0].style.background = 'none'  ;
    }) ;


     
    
    const revievsSwiperContainer = new Swiper('.revievs__swiper-container',
options = {
    direction: 'horizontal',
    // init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides : true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows : true,
    },
    grabCursor: true,
    parallax: true,
     
      navigation: {
        nextEl: '.revievs__swiper-button-next',
        prevEl: '.revievs__swiper-button-prev',
    
    } , 
   
    
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 2,
            spaceBetween: -80
           }
            
        }
});
// var revievsSwiperContainer = new Swiper(sliderSelector, options);
// mySwiper.init();